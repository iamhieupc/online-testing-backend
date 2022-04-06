import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createExamResultDetailsTable1648780016953
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exam_result_details',
        columns: [
          primaryKey(),
          {
            name: 'exam_result_id',
            type: 'int',
          },
          {
            name: 'question_id',
            type: 'int',
          },
          { name: 'selected_answer_id', type: 'int' },
          ...timeStamp(),
        ],
      }),
      true,
    );
    await queryRunner.createForeignKeys('exam_result_details', [
      new TableForeignKey({
        columnNames: ['exam_result_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exam_results',
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
    await queryRunner.dropTable('exam_result_details', true, true);
  }
}
