import { inject, injectable } from 'tsyringe'
import { Rental } from '../entities/rental'
import { FindRentalRepository, SaveRentalRepository } from '../repositories/rental-repository'

export interface CreateRentalDTO {
  carId: string
  accountId: string
  expectedReturnDate: Date
}

@injectable()
export class CreateRental {
  constructor(
    @inject('RentalRepository')
    private readonly repository: SaveRentalRepository & FindRentalRepository
  ) {}

  public async execute(data: CreateRentalDTO): Promise<Rental> {
    const carUnavailable = await this.repository.findOpenByCar(data.carId)
    if (carUnavailable) throw new Error('car unavailable')

    const rentalOpenToAccount = await this.repository.findOpenByAccount(data.accountId)
    if (rentalOpenToAccount) throw new Error('account already has a rental in progress')

    const rental: Rental = {
      id: 'uuid',
      ...data,
      createdAt: new Date(),
      updatedAt: new Date(),
      startDate: new Date(),
      endDate: null,
      total: null
    }

    await this.repository.save(rental)
    return rental
  }
}
