import { MailProvider } from '@/core/infra/mail-provider'
import { createTestAccount, createTransport, Transporter } from 'nodemailer'

export class EtherealMailProvider implements MailProvider {
  private transporter: Transporter = null

  constructor() {
    createTestAccount()
      .then(account => {
        this.transporter = createTransport({
          host: account.smtp.host,
          port: account.smtp.port,
          secure: account.smtp.secure,
          auth: { user: account.user, pass: account.pass }
        })
      })
      .catch(err => console.error(err))
  }

  public async sendMail(to: string, subject: string, body: string): Promise<void> {
    await this.transporter.sendMail({
      to,
      subject,
      from: 'Goazy <no-reply@goazy.com.br>',
      text: body,
      html: body
    })
  }
}
