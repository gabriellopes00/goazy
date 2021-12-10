import { parse } from 'csv-parse'
import { createReadStream, promises } from 'fs'
import { SaveCategoryRepository } from '../repositories/category-repository'

export class ImportCategory {
  constructor(private readonly repository: SaveCategoryRepository) {}

  public async execute(file: Express.Multer.File): Promise<void> {
    return new Promise((res, _) => {
      const stream = createReadStream(file.path)
      const parseFile = parse()
      stream.pipe(parseFile)
      parseFile
        .on('data', async ([name, description]: string[]) => {
          await this.repository.save({
            id: 'uuid',
            name,
            description,
            createdAt: new Date(),
            updatedAt: new Date()
          })
        })
        .on('end', () => {
          promises.unlink(file.path)
          res()
        })
    })
  }
}
