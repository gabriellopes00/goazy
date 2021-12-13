import { hash } from 'bcrypt'
import { inject, injectable } from 'tsyringe'
import { v4 as uuid } from 'uuid'
import { Account } from '../entities/account'
import { FindAccountRepository } from '../repositories/find-account-repository'
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
    private readonly repository: SaveAccountRepository & FindAccountRepository
  ) {}

  public async execute(data: CreateAccountDTO): Promise<Account> {
    const existingAccount = await this.repository.findByEmail(data.email)
    if (!existingAccount) throw new Error('Email already in use')

    const hashPassword = await hash(data.password, 12)
    const account: Account = {
      id: uuid(),
      ...data,
      isAdmin: false,
      createdAt: new Date(),
      password: hashPassword
    }
    await this.repository.save(account)
    return account
  }
}
