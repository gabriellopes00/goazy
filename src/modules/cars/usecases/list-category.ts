import { Category } from '../entities/category/category'
import { FindCategoryRepository } from '../repositories/category-repository'

export class ListCategory {
  constructor(private readonly repository: FindCategoryRepository) {}

  public async execute(): Promise<Category[]> {
    return await this.repository.findAll()
  }
}
