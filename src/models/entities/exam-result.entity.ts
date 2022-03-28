import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'exam-details',
})
export class ExamDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  exam_application_id: number;

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
