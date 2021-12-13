import { Car } from '../entities/car/car'

export namespace CarRepository {
  export interface Save {
    save(data: Car): Promise<void>
  }

  export interface Find {
    findByLicensePlate(licensePlate: string): Promise<Car>
  }
}
