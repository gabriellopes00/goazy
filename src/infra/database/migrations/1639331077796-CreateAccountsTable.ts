import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateAccountsTable1639331077796 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'accounts',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'email', type: 'varchar', isUnique: true },
          { name: 'password', type: 'varchar', isNullable: false },
          { name: 'driver_license', type: 'varchar', isUnique: true },
          { name: 'is_admin', type: 'boolean', default: false },
          { name: 'created_at', type: 'timestampz', default: 'now()' }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('accounts', true)
  }
}
