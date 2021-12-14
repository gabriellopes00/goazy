import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateRentalsTable1639490049477 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'rentals',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'car_id', type: 'uuid', isNullable: false },
          { name: 'account_id', type: 'uuid', isNullable: false },
          { name: 'start_date', type: 'timestampz', isNullable: false },
          { name: 'end_date', type: 'timestampz', isNullable: false },
          { name: 'expected_return_date', type: 'timestampz', isNullable: false },
          { name: 'total', type: 'numeric', isNullable: false },
          { name: 'created_at', type: 'timestampz', isNullable: false },
          { name: 'updated_at', type: 'timestampz', isNullable: false }
        ],
        foreignKeys: [
          {
            name: 'car_rent_fk',
            referencedTableName: 'cars',
            referencedColumnNames: ['id'],
            columnNames: ['car_id'],
            onDelete: 'SET NULL'
          },
          {
            name: 'account_rent_fk',
            referencedTableName: 'accounts',
            referencedColumnNames: ['id'],
            columnNames: ['account_id'],
            onDelete: 'SET NULL'
          }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('rents', true)
  }
}
