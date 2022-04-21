import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class addFieldStatusInUsers1650532592904 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'users',
      new TableColumn({ name: 'status', type: 'int', isNullable: false }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('users', 'status');
  }
}
