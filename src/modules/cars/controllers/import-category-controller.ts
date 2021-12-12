import { Request, Response } from 'express'
import { container } from 'tsyringe'
import { ImportCategory } from '../usecases/import-category'

export class ImportCategoryController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const importCategory = container.resolve(ImportCategory)
    await importCategory.execute(req.file || null)
    return res.sendStatus(200)
  }
}
