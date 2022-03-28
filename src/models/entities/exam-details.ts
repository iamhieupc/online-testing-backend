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
  question_id: number;

  @Column()
  @Expose()
  exam_id: number;

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
