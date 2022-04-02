import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createMockTestDetailsTable1648780082257
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mock_test_details',
        columns: [
          primaryKey(),
          {
            name: 'mock_test_id',
            type: 'int',
          },
          {
            name: 'question_id',
            type: 'int',
          },
          ...timeStamp(),
        ],
      }),
    );
    await queryRunner.createForeignKeys('mock_test_details', [
      new TableForeignKey({
        columnNames: ['mock_test_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'mock_tests',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['question_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('mock_test_details', true, true);
  }
}
