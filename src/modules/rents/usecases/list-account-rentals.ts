import { Car } from '@/modules/cars/entities/car/car'
import { inject, injectable } from 'tsyringe'
import { Rental } from '../entities/rental'
import { FindRentalRepository } from '../repositories/rental-repository'

export interface ListAccountRentalsDTO {
  accountId: string
}

export interface ListAccountRentalsResult extends Rental {
  car: Car
}

@injectable()
export class ListAccountRentals {
  constructor(
    @inject('RentalRepository')
    private readonly repository: FindRentalRepository
  ) {}

  public async execute(params: ListAccountRentalsDTO): Promise<ListAccountRentalsResult[]> {
    return await this.repository.findAllJoinCar({ accountId: params.accountId })
  }
}
