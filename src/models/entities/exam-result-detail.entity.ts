import { Entity, ManyToOne } from 'typeorm';
import { Answer, ExamResult, Question } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'exam_result_details',
})
export class ExamResultDetail extends BaseEntity {
  @ManyToOne(() => ExamResult)
  exam_result: number;

  @ManyToOne(() => Question)
  question: number;

  @ManyToOne(() => Answer)
  selected_answer: number;
}
