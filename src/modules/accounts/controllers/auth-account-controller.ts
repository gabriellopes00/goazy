import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { AuthAccount } from '../usecases/auth-account'

export class AuthAccountController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { email, password } = req.body
      const authAccountUsecase = container.resolve(AuthAccount)
      const token = await authAccountUsecase.execute({ email, password })
      return res.status(201).json({ token })
    } catch (error) {
      console.error(error)
      return res.sendStatus(500)
    }
  }
}
