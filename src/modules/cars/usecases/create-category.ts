import { inject, injectable } from 'tsyringe'
import { SaveCategoryRepository, FindCategoryRepository } from '../repositories/category-repository'

export interface CreateCategoryDTO {
  name: string
  description: string
}

@injectable()
export class CreateCategory {
  constructor(
    @inject('PgCategoryRepository')
    private readonly repository: SaveCategoryRepository & FindCategoryRepository
  ) {}

  public async execute(params: CreateCategoryDTO) {
    const existingCategory = await this.repository.findByName(params.name)
    if (existingCategory) return new Error('existing category')

    const uuid = 'uuid'
    await this.repository.save({
      ...params,
      id: uuid,
      createdAt: new Date(),
      updatedAt: new Date()
    })
  }
}
