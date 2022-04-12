import { primaryKey, timeStamp } from 'src/models/utils/generate';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createUsersTable1648774697276 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          primaryKey({
            isGenerated: true,
            generationStrategy: 'increment',
            unsigned: true,
          }),
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'email',
            type: 'varchar',
          },
          {
            name: 'password',
            type: 'varchar',
          },
          {
            name: 'is_admin',
            type: 'tinyint',
            default: 0,
          },
          {
            name: 'avatar',
            type: 'varchar',
            isNullable: true,
          },
          ...timeStamp(),
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users', true);
  }
}
