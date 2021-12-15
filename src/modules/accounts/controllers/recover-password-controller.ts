import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { RecoverPassword } from '../usecases/recover-password'

export class RecoverPasswordController {
  public async execute(req: Request, res: Response): Promise<Response> {
    const { token } = req.params as { token: string }
    const { new_password: newPassword } = req.body

    const recoverPassword = container.resolve(RecoverPassword)
    await recoverPassword.execute({ token: String(token), newPassword })
    return res.sendStatus(204)
  }
}
