import { DateHandler } from '@/core/infra/date-handler'
import { CarRepository } from '@/modules/cars/repositories/car-repository'
import { inject, injectable } from 'tsyringe'
import { Rental } from '../entities/rental'
import { FindRentalRepository, SaveRentalRepository } from '../repositories/rental-repository'

export interface DevolutionRentalDTO {
  rentalId: string
  accountId: string
}

@injectable()
export class DevolutionRental {
  constructor(
    @inject('RentalRepository')
    private readonly repository: FindRentalRepository & SaveRentalRepository,
    @inject('CarRepository')
    private readonly carRepository: CarRepository.Find & CarRepository.Save,
    @inject('DateHandler')
    private readonly dateHandler: DateHandler
  ) {}

  public async execute(data: DevolutionRentalDTO): Promise<Rental> {
    const rental = await this.repository.findById(data.rentalId)
    if (!rental) throw new Error('rental not found')

    const car = await this.carRepository.findById(rental.carId)

    const now = new Date()

    const hours = this.dateHandler.compareHours(rental.startDate, now)
    const daily = hours / 24 < 1 ? 1 : hours / 24

    const delay = this.dateHandler.compareHours(now, rental.expectedReturnDate) / 24

    let totalPrice = 0
    if (delay > 0) totalPrice = delay * car.fine_amount

    totalPrice += daily * car.daily_rate

    rental.endDate = now
    rental.updatedAt = now
    rental.total = totalPrice

    await this.repository.save(rental)
    await this.carRepository.setAvailable(car.id, true)

    return rental
  }
}
