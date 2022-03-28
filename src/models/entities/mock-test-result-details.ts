import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'mock-test-result-detail',
})
export class TestResultDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  mock_test_result_id: number;

  @Column()
  @Expose()
  question_id: number;

  @Column()
  @Expose()
  selected_answer_id: number;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
