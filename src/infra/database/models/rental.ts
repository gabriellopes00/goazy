import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
  UpdateDateColumn
} from 'typeorm'
import { CarModel } from './car'

@Entity('rentals')
export class RentalModel {
  @PrimaryColumn()
  id: string

  carId: string

  @Column()
  accountId: string

  @Column()
  startDate: Date

  @Column()
  endDate: Date

  @Column()
  expectedReturnDate: Date

  @Column()
  total: number

  @CreateDateColumn()
  createdAt: Date

  @UpdateDateColumn()
  updatedAt: Date

  @ManyToOne(() => CarModel)
  @JoinColumn({ name: 'car_id' })
  car: CarModel
}
