import { deleteFile } from '@/utils/file'
import { inject, injectable } from 'tsyringe'
import { FindAccountRepository } from '../repositories/find-account-repository'
import { SaveAccountRepository } from '../repositories/save-account-repository'

export interface UpdateAccountAvatarDTO {
  accountId: string
  avatarUrl: string
}

@injectable()
export class UpdateAccountAvatar {
  constructor(
    @inject('PgAccountRepository')
    private readonly repository: SaveAccountRepository & FindAccountRepository
  ) {}

  public async execute({ accountId, avatarUrl }: UpdateAccountAvatarDTO): Promise<void> {
    const account = await this.repository.findById(accountId)
    if (account.avatarUrl) await deleteFile(`./tmp/avatar/${account.avatarUrl}`)
    account.avatarUrl = avatarUrl
    await this.repository.save(account)
  }
}
