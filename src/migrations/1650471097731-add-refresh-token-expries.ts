import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addRefreshExpiresColumnToUserTable1650471097731
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({
        name: 'refresh_token_expires',
        type: 'bigint',
        isNullable: true,
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'refresh_token_expires_at');
  }
}
