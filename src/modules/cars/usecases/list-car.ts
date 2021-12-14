import { inject, injectable } from 'tsyringe'
import { Car } from '../entities/car/car'
import { CarRepository } from '../repositories/car-repository'

export interface ListCarsDTO {
  name?: string
  brand?: string
  category_id?: string
}

@injectable()
export class ListCars {
  constructor(
    @inject('CarRepository')
    private readonly repository: CarRepository.Find
  ) {}

  public async execute(params: ListCarsDTO): Promise<Car[]> {
    return await this.repository.findAvailable(params)
  }
}
