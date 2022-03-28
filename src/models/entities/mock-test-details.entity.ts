import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'mock-test-details',
})
export class TestDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  mock_test_id: number;

  @Column()
  @Expose()
  question_id: number;

  @Column()
  @Expose()
  order: number;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
