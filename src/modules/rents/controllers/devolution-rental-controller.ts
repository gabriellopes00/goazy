import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { DevolutionRental } from '../usecases/devolution-rental'

export class DevolutionRentalController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const devolutionRental = container.resolve(DevolutionRental)

    const { id } = req.account
    const { id: rentalId } = req.params

    const rental = await devolutionRental.execute({ accountId: id, rentalId })
    return res.status(200).json({ rental })
  }
}
