import { Category } from '@/modules/cars/entities/category/category'
import { Specification } from '@/modules/cars/entities/specification/specification'
import {
  FindSpecificationRepository,
  SaveSpecificationRepository
} from '@/modules/cars/repositories/specification-repository'
import { getRepository } from 'typeorm'
import { SpecificationModel } from '../models/specification'

export class PgSpecificationRepository
  implements SaveSpecificationRepository, FindSpecificationRepository
{
  public async save(data: Specification): Promise<void> {
    const repo = getRepository(SpecificationModel)
    await repo.save(repo.create(data))
  }

  public async findAll(): Promise<Specification[]> {
    const repo = getRepository(SpecificationModel)
    return (await repo.find()).map(c => (c['updatedAt'] = null))
  }

  public async findByName(name: string): Promise<Specification> {
    const repo = getRepository(SpecificationModel)
    const category = await repo.findOne({ where: { name } })
    category['updatedAt'] = null
    return category as Category
  }
}
