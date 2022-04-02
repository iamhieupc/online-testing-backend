import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createMockTestsTable1648780062191 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mock_tests',
        columns: [
          primaryKey(),
          {
            name: 'topic_id',
            type: 'int',
          },
          {
            name: 'name',
            type: 'varchar',
          },
          { name: 'duration_in_minutes', type: 'int', unsigned: true },
          ...timeStamp(),
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'mock_tests',
      new TableForeignKey({
        columnNames: ['topic_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'topics',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('mock_tests', true, true);
  }
}
