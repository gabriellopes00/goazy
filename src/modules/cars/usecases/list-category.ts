import { inject, injectable } from 'tsyringe'
import { Category } from '../entities/category/category'
import { FindCategoryRepository } from '../repositories/category-repository'

@injectable()
export class ListCategory {
  constructor(
    @inject('PgCategoryRepository')
    private readonly repository: FindCategoryRepository
  ) {}

  public async execute(): Promise<Category[]> {
    return await this.repository.findAll()
  }
}
