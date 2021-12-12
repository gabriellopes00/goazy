import { inject, injectable } from 'tsyringe'
import { Account } from '../entities/account'
import { SaveAccountRepository } from '../repositories/save-account-repository'

export interface CreateAccountDTO {
  name: string
  email: string
  password: string
  driverLicense: string
}

@injectable()
export class CreateAccount {
  constructor(
    @inject('PgAccountRepository')
    private readonly repository: SaveAccountRepository
  ) {}

  public async execute(data: CreateAccountDTO): Promise<Account> {
    const account: Account = { id: 'uuid', ...data, isAdmin: false, createdAt: new Date() }
    await this.repository.save(account)
    return account
  }
}
