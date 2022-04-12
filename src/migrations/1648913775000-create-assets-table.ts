import { AssetType } from 'src/enums';
import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createAssetsTable1648913775000 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'assets',
        columns: [
          primaryKey(),
          {
            name: 'type',
            type: 'enum',
            enum: Object.values(AssetType),
          },
          {
            name: 'path',
            type: 'varchar',
          },
          {
            name: 'question_id',
            type: 'int',
            unsigned: true,
            isNullable: true,
          },
          {
            name: 'context_id',
            type: 'int',
            unsigned: true,
            isNullable: true,
          },
          ...timeStamp(),
        ],
      }),
    );

    await queryRunner.createForeignKeys('assets', [
      new TableForeignKey({
        columnNames: ['question_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'questions',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
      new TableForeignKey({
        columnNames: ['context_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'contexts',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    ]);
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('assets', true, true);
  }
}
