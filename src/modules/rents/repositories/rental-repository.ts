import { Rental } from '../entities/rental'

export interface SaveRentalRepository {
  save(data: Rental): Promise<void>
}

export interface FindRentalRepository {
  findOpenByCar(carId: string): Promise<Rental>
  findOpenByAccount(accountId: string): Promise<Rental>
  findById(rentalId: string): Promise<Rental>
}
