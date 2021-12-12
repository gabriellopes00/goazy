import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm'

@Entity({ name: 'specifications' })
export class SpecificationModel {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  description: string

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date
}
