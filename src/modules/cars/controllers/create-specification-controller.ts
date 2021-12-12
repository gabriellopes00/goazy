import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateSpecification, CreateSpecificationDTO } from '../usecases/create-specification'

export interface CreateSpecificationControllerParams extends CreateSpecificationDTO {}

export class CreateSpecificationController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const createSpecification = container.resolve(CreateSpecification)
    const params = req.body as CreateSpecificationControllerParams
    const specification = await createSpecification.execute({
      name: params.name,
      description: params.description
    })
    return res.status(201).json({ specification })
  }
}
