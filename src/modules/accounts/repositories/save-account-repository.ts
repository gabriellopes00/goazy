import { Account } from '../entities/account'

export interface SaveAccountRepository {
  save(data: Account): Promise<void>
}
