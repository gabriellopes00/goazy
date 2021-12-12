import { Account } from '@/modules/accounts/entities/account'
import { SaveAccountRepository } from '@/modules/accounts/repositories/save-account-repository'
import { getRepository, Repository } from 'typeorm'
import { AccountModel } from '../models/account'

export class PgAccountRepository implements SaveAccountRepository {
  private readonly repository: Repository<AccountModel> = null

  constructor() {
    this.repository = getRepository(AccountModel)
  }

  public async save(data: Account): Promise<void> {
    const model = this.repository.create({ ...data })
    await this.repository.save(model)
  }
}
