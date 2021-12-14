import { randomUUID } from 'crypto'
import { inject, injectable } from 'tsyringe'
import { Car } from '../entities/car/car'
import { CarRepository } from '../repositories/car-repository'

export interface CreateCarDTO {
  name: string
  description: string
  daily_rate: number
  license_plate: string
  fine_amount: number
  brand: string
  category_id: string
}

@injectable()
export class CreateCar {
  constructor(
    @inject('CarRepository')
    private readonly repository: CarRepository.Save & CarRepository.Find
  ) {}

  public async execute(data: CreateCarDTO): Promise<Car> {
    const existingPlate = await this.repository.findByLicensePlate(data.license_plate)
    if (existingPlate) throw new Error('existing license plate')

    const car: Car = { id: randomUUID(), ...data, isAvailable: true, createdAt: new Date() }
    await this.repository.save(car)

    return car
  }
}
