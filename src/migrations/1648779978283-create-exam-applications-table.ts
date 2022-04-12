import { ExamApplicationStatus, ExamApplicationType } from 'src/enums';
import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createExamApplicationsTable1648779978283
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exam_applications',
        columns: [
          primaryKey(),
          {
            name: 'user_id',
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'exam_id',
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          {
            name: 'type',
            type: 'enum',
            enum: Object.values(ExamApplicationType),
          },
          {
            name: 'status',
            type: 'enum',
            enum: Object.values(ExamApplicationStatus),
          },
          ...timeStamp(),
        ],
      }),
      true,
    );
    await queryRunner.createForeignKeys('exam_applications', [
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
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
    await queryRunner.dropTable('exam_applications', true, true);
  }
}
