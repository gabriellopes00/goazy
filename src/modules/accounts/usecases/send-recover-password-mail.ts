import { inject, injectable } from 'tsyringe'
import { FindAccountRepository } from '../repositories/find-account-repository'

import { sign } from 'jsonwebtoken'
import { MailProvider } from '@/core/infra/mail-provider'

export interface SendRecoverPasswordMailDTO {
  accountEmail: string
}

@injectable()
export class SendRecoverPasswordMail {
  constructor(
    @inject('AccountRepository')
    private readonly repository: FindAccountRepository,
    private readonly mailProvider: MailProvider
  ) {}

  public async execute(params: SendRecoverPasswordMailDTO): Promise<void> {
    const account = await this.repository.findByEmail(params.accountEmail)
    if (!account) throw new Error('nonexistent email')

    const token = sign(
      { account_id: account.id, account_email: account.email },
      'asd8fd8f8df8d88d8d8d8d8ddf',
      { expiresIn: '3h' }
    )

    await this.mailProvider.sendMail(
      account.email,
      'Recover Password Mail',
      `http://localhost:7765/accounts/password/recover/${token}`
    )
  }
}
