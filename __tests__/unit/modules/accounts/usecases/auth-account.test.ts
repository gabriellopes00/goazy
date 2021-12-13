import 'reflect-metadata'
import { Account } from '@/modules/accounts/entities/account'
import { AuthAccount } from '@/modules/accounts/usecases/auth-account'
import { InMemoryAccountRepository } from '@t/__mocks__/repositories/in-memory-accounts-repository'

jest.mock('bcrypt', () => ({
  async hash(): Promise<string> {
    return Promise.resolve('hash')
  },

  async compare(): Promise<boolean> {
    return Promise.resolve(true)
  }
}))

describe('Authenticate Account', () => {
  const repository = new InMemoryAccountRepository()
  const sut = new AuthAccount(repository)

  const account: Account = {
    id: '4f5851c7-30e4-4c94-8763-b74abb611777',
    name: 'John Doe',
    email: 'johndoe@mail.com',
    isAdmin: true,
    avatarUrl: 'http://johndoe.jpg',
    driverLicense: '56736268561',
    password: 'secret_pass',
    createdAt: new Date()
  }

  beforeEach(() => repository.truncate())

  it('Should be able to generate a token', async () => {
    await repository.save(account)
    const result = await sut.execute({ email: account.email, password: account.password })
    expect(result).toEqual(expect.any(String))
  })

  it('Should not be able to auth a nonexisting account', async () => {
    expect(
      async () => await sut.execute({ email: 'nonexisting@mail.com', password: '' })
    ).rejects.toThrow()
  })
})
