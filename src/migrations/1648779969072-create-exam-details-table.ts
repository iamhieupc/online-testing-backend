import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createExamDetailsTable1648779969072 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exam_details',
        columns: [
          primaryKey(),
          {
            name: 'question_id',
            type: 'int',
          },
          {
            name: 'exam_id',
            type: 'int',
          },
          {
            name: 'order',
            type: 'int',
            unsigned: true,
          },
          ...timeStamp(),
        ],
      }),
    );
    await queryRunner.createForeignKeys('exam_details', [
      new TableForeignKey({
        columnNames: ['question_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['exam_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exams',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('exam_details', true, true);
  }
}
