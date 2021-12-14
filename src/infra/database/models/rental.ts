import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from 'typeorm'

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
}
