import { hash } from 'bcrypt'
import { verify } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'
import { FindAccountRepository } from '../repositories/find-account-repository'
import { SaveAccountRepository } from '../repositories/save-account-repository'

export interface RecoverPasswordDTO {
  token: string
  newPassword: string
}

@injectable()
export class RecoverPassword {
  constructor(
    @inject('AccountRepository')
    private readonly repository: SaveAccountRepository & FindAccountRepository
  ) {}

  public async execute(params: RecoverPasswordDTO): Promise<void> {
    const payload = verify(params.token, 'asd8fd8f8df8d88d8d8d8d8ddf') as { account_id: string }

    const account = await this.repository.findById(payload.account_id)
    if (!account) throw new Error('nonexistent id')

    account.password = await hash(params.newPassword, 12)
    await this.repository.save(account)
  }
}
