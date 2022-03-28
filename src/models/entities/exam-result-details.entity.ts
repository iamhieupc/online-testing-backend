import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'exam-result-detail',
})
export class ExamResultDetailsEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  exam_result_id: number;

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
