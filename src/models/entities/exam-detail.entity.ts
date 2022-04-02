import { Expose } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Exam, Question } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'exam_details',
})
export class ExamDetail extends BaseEntity {
  @ManyToOne(() => Question)
  question: Question;

  @ManyToOne(() => Exam)
  exam: Exam;

  @Column({ unsigned: true })
  @Expose()
  order: number;
}
