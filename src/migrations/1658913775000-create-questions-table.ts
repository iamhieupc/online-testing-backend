import { Difficulty, QuestionType } from 'src/enums';
import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createQuestionsTable1658913775000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'questions',
        columns: [
          primaryKey(),
          {
            name: 'type',
            type: 'enum',
            enum: Object.values(QuestionType),
          },
          {
            name: 'question_text',
            type: 'varchar',
            length: '500',
          },
          {
            name: 'difficulty',
            type: 'enum',
            enum: Object.values(Difficulty),
          },
          {
            name: 'explanation',
            type: 'varchar',
            length: '500',
          },
          {
            name: 'context_id',
            type: 'int',
            isNullable: true,
          },
          ...timeStamp(),
        ],
      }),
      true,
    );
    await queryRunner.createForeignKeys('questions', [
      new TableForeignKey({
        columnNames: ['context_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contexts',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('questions', true);
  }
}
