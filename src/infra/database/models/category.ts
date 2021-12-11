import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'categories' })
export class CategoryModel {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}
