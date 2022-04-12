import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createQuestionListDetailsTable1648780245171
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'question_list_details',
        columns: [
          primaryKey(),
          {
            name: 'question_list_id',
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
            name: 'order',
            type: 'int',
            unsigned: true,
          },
          ...timeStamp(),
        ],
      }),
      true,
    );
    await queryRunner.createForeignKeys('question_list_details', [
      new TableForeignKey({
        columnNames: ['question_list_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'question_lists',
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
    await queryRunner.dropTable('question_list_details', true, true);
  }
}
