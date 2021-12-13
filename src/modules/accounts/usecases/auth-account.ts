import { compare } from 'bcrypt'
import { sign } from 'jsonwebtoken'
import { inject, injectable } from 'tsyringe'
import { FindAccountRepository } from '../repositories/find-account-repository'

export interface AuthAccountDTO {
  email: string
  password: string
}

@injectable()
export class AuthAccount {
  constructor(private readonly repository: FindAccountRepository) {}

  public async execute({ email, password }: AuthAccountDTO): Promise<string> {
    const existingAccount = await this.repository.findByEmail(email)
    if (!existingAccount) throw new Error('Email or password incorrect')

    const validPasswd = await compare(password, existingAccount.password)
    if (!validPasswd) throw new Error('Email or password incorrect')

    const { name, isAdmin } = existingAccount

    const token = sign({ name, email, isAdmin }, '3EEa09sdf05a7iB7sIGdf90i', {
      subject: existingAccount.id,
      expiresIn: '15m'
    })
    return token
  }
}
