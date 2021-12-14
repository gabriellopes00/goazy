import { Car } from '@/modules/cars/entities/car/car'
import { CarRepository } from '@/modules/cars/repositories/car-repository'
import { getRepository, Repository } from 'typeorm'
import { CarModel } from '../models/car'

export class PgCarRepository implements CarRepository.Save, CarRepository.Find {
  private readonly repository: Repository<CarModel> = null

  constructor() {
    this.repository = getRepository(CarModel)
  }

  public async save(data: Car): Promise<void> {
    const model = this.repository.create({ ...data })
    await this.repository.save(model)
  }

  public async findByLicensePlate(licensePlate: string): Promise<Car> {
    return await this.repository.findOne({ where: { license_plate: licensePlate } })
  }

  public async findAvailable(params: {
    name: string
    brand: string
    category_id: string
  }): Promise<Car[]> {
    const query = this.repository.createQueryBuilder('c')
    query.where('is_available = :is_available', { is_available: true })

    if (params.name) query.andWhere('name = :name', { name: params.name })
    if (params.brand) query.andWhere('brand = :brand', { brand: params.brand })
    if (params.category_id) {
      query.andWhere('category_id = :category_id', { category_id: params.category_id })
    }

    return await query.getMany()
  }
}
