import { Request, Response } from 'express'
import { CreateSpecification, CreateSpecificationDTO } from '../usecases/create-specification'

export interface CreateSpecificationControllerParams extends CreateSpecificationDTO {}

export class CreateSpecificationController {
  constructor(private readonly createSpecification: CreateSpecification) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const params = req.body as CreateSpecificationControllerParams
    const specification = await this.createSpecification.execute({
      name: params.name,
      description: params.description
    })
    return res.status(201).json({ specification })
  }
}
