import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ListCategory } from '../usecases/list-category'

export class ListCategoryController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const listCategory = container.resolve(ListCategory)
    const categories = await listCategory.execute()
    if (categories.length === 0) return res.sendStatus(204)

    return res.status(200).json({ categories })
  }
}
