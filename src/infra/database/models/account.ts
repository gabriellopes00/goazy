import { Column, Entity, PrimaryColumn } from 'typeorm'

@Entity('accounts')
export class AccountModel {
  @PrimaryColumn()
  id: string

  @Column()
  name: string

  @Column()
  email: string

  @Column()
  password: string

  @Column({ name: 'driver_license' })
  driverLicense: string

  @Column({ name: 'is_admin' })
  isAdmin: boolean

  @Column({ name: 'created_at' })
  createdAt: Date
}
