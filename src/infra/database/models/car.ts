import { Category } from '@/modules/cars/entities/category/category'
import { Specification } from '@/modules/cars/entities/specification/specification'
import {
  Column,
  CreateDateColumn,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  PrimaryColumn
} from 'typeorm'
import { CategoryModel } from './category'

export class CarModel {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @Column()
  daily_rate: number

  @Column()
  license_plate: string

  @Column()
  isAvailable: boolean

  @Column()
  fine_amount: number

  @Column()
  brand: string

  @Column()
  category_id: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date

  @ManyToOne(() => CategoryModel)
  @JoinColumn({ name: 'category_id' })
  category: Category

  @ManyToMany(() => Specification)
  @JoinTable({
    name: 'specification_cars',
    joinColumns: [{ name: 'car_id' }],
    inverseJoinColumns: [{ name: 'specification_id' }]
  })
  specifications: Specification[]
}
