import { Account } from '@/modules/accounts/entities/account'
import { FindAccountRepository } from '@/modules/accounts/repositories/find-account-repository'
import { SaveAccountRepository } from '@/modules/accounts/repositories/save-account-repository'
import { getRepository, Repository } from 'typeorm'
import { AccountModel } from '../models/account'

export class PgAccountRepository implements SaveAccountRepository, FindAccountRepository {
  private readonly repository: Repository<AccountModel> = null

  constructor() {
    this.repository = getRepository(AccountModel)
  }

  public async save(data: Account): Promise<void> {
    const model = this.repository.create({ ...data })
    await this.repository.save(model)
  }

  public async findById(id: string): Promise<Account> {
    return await this.repository.findOne(id)
  }

  public async findByEmail(email: string): Promise<Account> {
    return await this.repository.findOne({ where: { email } })
  }
}
