import { primaryKey, timeStamp } from 'src/models/utils/generate';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createLevelsTable1648774962860 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'levels',
        columns: [
          primaryKey(),
          {
            name: 'code',
            type: 'varchar',
            isUnique: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          ...timeStamp(),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('levels', true, true);
  }
}
