import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCars, ListCarsDTO } from '../usecases/list-car'

export interface ListCarsControllerDTO extends ListCarsDTO {}

export class ListCarsController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listCars = container.resolve(ListCars)

    const { name, brand, category_id } = req.query as ListCarsControllerDTO
    const cars = await listCars.execute({ name, brand, category_id })
    if (cars.length === 0) return res.sendStatus(204)

    return res.status(200).json({ cars })
  }
}
