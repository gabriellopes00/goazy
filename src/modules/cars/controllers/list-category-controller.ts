import { Request, Response } from 'express'
import { ListCategory } from '../usecases/list-category'

export class ListCategoryController {
  constructor(private readonly listCategory: ListCategory) {}

  public async handle(req: Request, res: Response): Promise<Response> {
    const categories = await this.listCategory.execute()
    if (categories.length === 0) return res.sendStatus(204)

    return res.status(200).json({ categories })
  }
}
