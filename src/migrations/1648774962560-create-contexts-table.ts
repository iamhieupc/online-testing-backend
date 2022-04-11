import { primaryKey, timeStamp } from 'src/models/utils/generate';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createContextsTable1648774962560 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'contexts',
        columns: [
          primaryKey(),
          {
            name: 'text_content',
            type: 'longtext',
            isNullable: true,
          },
          ...timeStamp(),
        ],
      }),
      true,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('contexts', true);
  }
}
