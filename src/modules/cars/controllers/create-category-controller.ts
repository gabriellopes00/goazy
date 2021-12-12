import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { CreateCategory, CreateCategoryDTO } from '../usecases/create-category'

export interface CreateCategoryControllerParams extends CreateCategoryDTO {}

export class CreateCategoryController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const createCategory = container.resolve(CreateCategory)
    const params = req.body as CreateCategoryControllerParams
    const category = await createCategory.execute({
      name: params.name,
      description: params.description
    })
    return res.status(201).json({ category })
  }
}
