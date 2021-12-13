import { Account } from '@/modules/accounts/entities/account'
import { FindAccountRepository } from '@/modules/accounts/repositories/find-account-repository'
import { SaveAccountRepository } from '@/modules/accounts/repositories/save-account-repository'

export class InMemoryAccountRepository implements SaveAccountRepository, FindAccountRepository {
  private readonly rows: Account[] = []

  public async findByEmail(email: string): Promise<Account> {
    return this.rows.find(a => a.email === email)
  }

  public async findById(id: string): Promise<Account> {
    return this.rows.find(a => a.id === id)
  }

  public async save(data: Account): Promise<void> {
    this.rows.push(data)
  }

  public truncate(): void {
    this.rows.length = 0
  }
}
