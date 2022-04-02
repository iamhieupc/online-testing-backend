import { QuestionType } from 'src/enums/question-type';
import { primaryKey, timeStamp } from 'src/models/utils/generate';
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class createQuestionsTable1648774945676 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // console.log(Object.values(QuestionType));
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
            name: 'dificulty',
            type: 'varchar',
          },
          {
            name: 'explanation',
            type: 'varchar',
            length: '500',
          },
          ...timeStamp(),
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('questions', true);
  }
}
