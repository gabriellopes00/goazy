import { Car } from '../entities/car/car'

export namespace CarRepository {
  export interface Save {
    save(data: Car): Promise<void>
    setAvailable(id: string, available: boolean): Promise<void>
  }

  export interface Find {
    findByLicensePlate(licensePlate: string): Promise<Car>
    findById(id: string): Promise<Car>
    findAvailable(params: { name?: string; brand?: string; category_id?: string }): Promise<Car[]>
  }
}
