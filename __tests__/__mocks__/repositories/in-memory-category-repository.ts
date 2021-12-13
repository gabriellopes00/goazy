import { Category } from '@/modules/cars/entities/category/category'
import {
  FindCategoryRepository,
  SaveCategoryRepository
} from '@/modules/cars/repositories/category-repository'

export class InMemoryCategoryRepository implements SaveCategoryRepository, FindCategoryRepository {
  private readonly rows: Category[] = []

  public async save(data: Category): Promise<void> {
    this.rows.push(data)
  }

  public async findByName(name: string): Promise<Category> {
    return this.rows.find(c => c.name === name)
  }

  public async findAll(): Promise<Category[]> {
    return this.rows
  }

  public truncate(): void {
    this.rows.length = 0
  }
}
