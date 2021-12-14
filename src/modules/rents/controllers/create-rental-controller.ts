import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateRental } from '../usecases/create-rental'

export class CreateRentalController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const createRental = container.resolve(CreateRental)

    const { id } = req.account
    const { expected_return_date: expectedReturnDate, car_id: carId } = req.body

    const rental = await createRental.execute({ accountId: id, expectedReturnDate, carId })
    return res.status(201).json({ rental })
  }
}
