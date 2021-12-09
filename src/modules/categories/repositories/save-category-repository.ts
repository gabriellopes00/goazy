import { Category } from '../entities/category'

export interface SaveCategoryRepository {
  save(data: Category): Promise<void>
}
