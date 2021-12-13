import { Response, Request } from 'express'
import { container } from 'tsyringe'
import { CreateAccount } from '../usecases/create-account'

export class CreateAccountController {
  public async handle(req: Request, res: Response): Promise<Response> {
    try {
      const { name, email, password, driver_license: driverLicense } = req.body
      const createAccountUsecase = container.resolve(CreateAccount)
      const account = await createAccountUsecase.execute({ name, email, password, driverLicense })
      return res.status(201).json({ account })
    } catch (error) {
      console.error(error)
      return res.sendStatus(500)
    }
  }
}
