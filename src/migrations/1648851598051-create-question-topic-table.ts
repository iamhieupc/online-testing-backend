import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createQuestionTopicTable1648851598051
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'question_topic',
        columns: [
          primaryKey(),
          {
            name: 'question_id',
            type: 'int',
            unsigned: true,
            isNullable: false,
          },
          { name: 'topic_id', type: 'int', unsigned: true, isNullable: false },
          ...timeStamp(),
        ],
      }),
      true,
    );
    await queryRunner.createForeignKeys('question_topic', [
      new TableForeignKey({
        columnNames: ['question_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        onUpdate: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['topic_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'topics',
        onUpdate: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('question_topic', true, true);
  }
}
