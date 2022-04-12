import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createExamResultsTable1648779998283 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exam_results',
        columns: [
          primaryKey(),
          {
            name: 'exam_application_id',
            type: 'int',
            isNullable: false,
            unsigned: true,
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
    await queryRunner.createForeignKey(
      'exam_results',
      new TableForeignKey({
        columnNames: ['exam_application_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'exam_applications',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('exam_results', true, true);
  }
}
