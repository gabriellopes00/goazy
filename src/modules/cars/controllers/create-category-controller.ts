import { Request, Response } from 'express'
import { CreateCategory, CreateCategoryDTO } from '../usecases/create-category'

export interface CreateCategoryControllerParams extends CreateCategoryDTO {}

export class CreateCategoryController {
  constructor(private readonly createCategory: CreateCategory) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const params = req.body as CreateCategoryControllerParams
    const category = await this.createCategory.execute({
      name: params.name,
      description: params.description
    })
    return res.status(201).json({ category })
  }
}
