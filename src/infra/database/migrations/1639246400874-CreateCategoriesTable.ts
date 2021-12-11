import { query } from 'express'
import { MigrationInterface, QueryRunner, Table } from 'typeorm'

export class CreateCategoriesTable1639246400874 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'categories',
        columns: [
          { name: 'id', type: 'uuid', isPrimary: true },
          { name: 'name', type: 'varchar', isNullable: false },
          { name: 'created_at', type: 'timestampz', default: 'now()' }
        ]
      }),
      true
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('categories', true)
  }
}
