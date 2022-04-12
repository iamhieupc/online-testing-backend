import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createMockTestResultsTable1648780099000
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'mock_test_results',
        columns: [
          primaryKey(),
          {
            name: 'mock_test_id',
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'question_id',
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'num_correct_answers',
            type: 'int',
            unsigned: true,
          },
          { name: 'time_taken', type: 'int', unsigned: true },
          ...timeStamp(),
        ],
      }),
      true,
    );
    await queryRunner.createForeignKeys('mock_test_results', [
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
    await queryRunner.dropTable('mock_test_results', true, true);
  }
}
