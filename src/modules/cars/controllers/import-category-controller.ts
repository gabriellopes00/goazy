import { Request, Response } from 'express'

export class ImportCategoryController {
  public async handle(req: Request, res: Response): Promise<Response> {
    const { file } = req
    console.log(file)

    return res.sendStatus(200)
  }
}
