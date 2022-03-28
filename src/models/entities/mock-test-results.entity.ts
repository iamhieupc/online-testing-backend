import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'mock-test-results',
})
export class TestResultsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  mock_test_id: number;

  @Column()
  @Expose()
  user_id: number;

  @Column()
  @Expose()
  num_correct_answers: number;

  @Column()
  @Expose()
  time_taken: number;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
