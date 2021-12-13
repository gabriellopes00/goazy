import { Account } from '../entities/account'

export interface FindAccountRepository {
  findByEmail(email: string): Promise<Account>
}
