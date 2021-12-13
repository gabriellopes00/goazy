import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCarsTable1639419587164 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cars',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'description', type: 'varchar', isNullable: false },
          { name: 'daily_rate', type: 'numeric', isNullable: false },
          { name: 'is_available', type: 'boolean', isNullable: false },
          { name: 'license_plate', type: 'varchar', isNullable: false },
          { name: 'fine_amount', type: 'numeric', isNullable: false },
          { name: 'brand', type: 'varchar', isNullable: false },
          { name: 'category_id', type: 'uuid', isNullable: true },
          { name: 'created_at', type: 'timestampz', isNullable: false }
        ],
        foreignKeys: [
          {
            name: 'category_car_fk',
            referencedTableName: 'categories',
            referencedColumnNames: ['id'],
            columnNames: ['category_id'],
            onDelete: 'SET_NULL'
          }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('cars', true)
  }
}
