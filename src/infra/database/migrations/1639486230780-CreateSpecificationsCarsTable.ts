import { query } from 'express'
import { MigrationInterface, QueryRunner, Table, TableForeignKey } from 'typeorm'

export class CreateSpecificationsCarsTable1639486230780 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'specification_cars',
        columns: [
          { name: 'specification_id', type: 'uuid', isNullable: false },
          { name: 'car_id', type: 'uuid', isNullable: false },
          { name: 'created_at', type: 'timestampz', default: 'now()' }
        ]
      }),
      true
    )

    await queryRunner.createForeignKeys('specification_car', [
      new TableForeignKey({
        name: 'specification_car_fk',
        referencedTableName: 'specifications',
        referencedColumnNames: ['id'],
        columnNames: ['specification_id'],
        onDelete: 'SET_NULL'
      }),
      new TableForeignKey({
        name: 'car_specification_fk',
        referencedTableName: 'cars',
        referencedColumnNames: ['id'],
        columnNames: ['car_id'],
        onDelete: 'SET_NULL'
      })
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropForeignKey('specification_car', 'specification_car_fk')
    await queryRunner.dropForeignKey('specification_car', 'car_specification_fk')
    await queryRunner.dropTable('specification_car', true)
  }
}
