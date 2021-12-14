import { inject, injectable } from 'tsyringe'
import { CarRepository } from '../repositories/car-repository'
import { FindSpecificationRepository } from '../repositories/specification-repository'

export interface CreateCarSpecificationDTO {
  carId: string
  specificationIds: string[]
}

@injectable()
export class CreateCarSpecification {
  constructor(
    @inject('CarRepository')
    private readonly carRepository: CarRepository.Save & CarRepository.Find,

    @inject('PgSpecificationRepository')
    private readonly specRepository: FindSpecificationRepository
  ) {}

  public async execute(data: CreateCarSpecificationDTO): Promise<void> {
    const existingCar = await this.carRepository.findById(data.carId)
    if (!existingCar) throw new Error('nonexistent car')

    const specs = await this.specRepository.findByIds(data.specificationIds)

    existingCar.specifications = specs
    await this.carRepository.save(existingCar)
  }
}
