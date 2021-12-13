import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm'

export class AlterAccountTableAddAvatarUrl1639403123432 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'accounts',
      new TableColumn({
        name: 'avatar_url',
        type: 'varchar',
        isNullable: true
      })
    )
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('accounts', 'avatar_url')
  }
}
