import { primaryKey, timeStamp } from 'src/models/utils/generate';
import {
  MigrationInterface,
  QueryRunner,
  Table,
  TableForeignKey,
} from 'typeorm';

export class createAnnouncementsTable1648774982419
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'announcements',
        columns: [
          primaryKey(),
          {
            name: 'user_id',
            type: 'int',
          },
          {
            name: 'content',
            type: 'varchar',
            length: '500',
          },
          ...timeStamp(),
        ],
      }),
    );
    await queryRunner.createForeignKey(
      'announcements',
      new TableForeignKey({
        columnNames: ['user_id'],
        referencedColumnNames: ['id'],
        referencedTableName: 'users',
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('announcements', true, true);
  }
}
