import { ExamStatus } from 'src/enums';
import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createExamsTable1648779955139 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'exams',
        columns: [
          primaryKey(),
          {
            name: 'level_id',
            type: 'int',
            isNullable: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'register_start_at',
            type: 'datetime',
          },
          {
            name: 'register_end_at',
            type: 'datetime',
          },

          { name: 'time_start', type: 'datetime' },
          { name: 'duration_in_minutes', type: 'int', unsigned: true },
          {
            name: 'status',
            type: 'enum',
            enum: Object.values(ExamStatus),
            default: ExamStatus[ExamStatus.REGISTERING],
          },
          ...timeStamp(),
        ],
      }),
      true,
    );
    await queryRunner.createForeignKeys('exams', [
      new TableForeignKey({
        columnNames: ['level_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'levels',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('exams', true, true);
  }
}
