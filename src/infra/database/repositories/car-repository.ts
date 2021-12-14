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
}
