import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createMockTestResultDetailsTable1648780112996
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mock_test_result_details',
        columns: [
          primaryKey(),
          {
            name: 'mock_test_result_id',
            type: 'int',
          },
          {
            name: 'question_id',
            type: 'int',
          },
          {
            name: 'selected_answer_id',
            type: 'int',
          },
          ...timeStamp(),
        ],
      }),
    );
    await queryRunner.createForeignKeys('mock_test_result_details', [
      new TableForeignKey({
        columnNames: ['mock_test_result_id'],
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
      new TableForeignKey({
        columnNames: ['selected_answer_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'answers',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('mock_test_result_details', true, true);
  }
}
