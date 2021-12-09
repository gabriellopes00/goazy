import { Category } from '../entities/category/category'

export interface SaveCategoryRepository {
  save(data: Category): Promise<void>
}

export interface FindCategoryRepository {
  findByName(name: string): Promise<Category>
  findAll(): Promise<Category[]>
}
