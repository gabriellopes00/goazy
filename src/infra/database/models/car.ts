import { Category } from '@/modules/cars/entities/category/category'
import { Column, CreateDateColumn, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm'
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
}
