import { Specification } from '../specification/specification'

export class Car {
  id: string
  name: string
  description: string
  daily_rate: number
  license_plate: string
  isAvailable: boolean
  fine_amount: number
  brand: string
  category_id: string
  createdAt: Date
  specifications: Specification[]
}
