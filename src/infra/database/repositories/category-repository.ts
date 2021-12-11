import { Category } from '@/modules/cars/entities/category/category'
import {
  FindCategoryRepository,
  SaveCategoryRepository
} from '@/modules/cars/repositories/category-repository'
import { getRepository } from 'typeorm'
import { CategoryModel } from '../models/category'

export class PgCategoryRepository implements SaveCategoryRepository, FindCategoryRepository {
  public async save(data: Category): Promise<void> {
    const repo = getRepository(CategoryModel)
    await repo.save(repo.create(data))
  }

  public async findAll(): Promise<Category[]> {
    const repo = getRepository(CategoryModel)
    return (await repo.find()).map(c => (c['updatedAt'] = null))
  }

  public async findByName(name: string): Promise<Category> {
    const repo = getRepository(CategoryModel)
    const category = await repo.findOne({ where: { name } })
    category['updatedAt'] = null
    return category as Category
  }
}
