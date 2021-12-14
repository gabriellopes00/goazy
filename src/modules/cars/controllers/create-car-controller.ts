import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCar, CreateCarDTO } from '../usecases/create-car'

export interface CreateCarControllerParams extends CreateCarDTO {}

export class CreateCarController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const createCar = container.resolve(CreateCar)
    const { brand, name, category_id, description, license_plate, daily_rate, fine_amount } =
      req.body as CreateCarControllerParams
    const car = await createCar.execute({
      brand,
      name,
      category_id,
      description,
      license_plate,
      daily_rate,
      fine_amount
    })
    return res.status(201).json({ car })
  }
}
