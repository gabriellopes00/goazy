import { inject, injectable } from 'tsyringe'
import { Category } from '../entities/category/category'
import { SaveCategoryRepository, FindCategoryRepository } from '../repositories/category-repository'
import { v4 as uuid } from 'uuid'

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

  public async execute(params: CreateCategoryDTO): Promise<Category> {
    const existingCategory = await this.repository.findByName(params.name)
    if (existingCategory) throw new Error('existing category')

    const id = uuid()
    const category: Category = {
      id,
      ...params,
      createdAt: new Date(),
      updatedAt: new Date()
    }
    await this.repository.save(category)
    return category
  }
}
