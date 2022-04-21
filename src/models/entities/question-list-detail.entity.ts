import { Expose } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';
import { QuestionList, Question } from '.';
import BaseEntity from './base.entity';

// join table
@Entity({
  name: 'question_list_details',
})
export class QuestionListDetail extends BaseEntity {
  @ManyToOne(() => QuestionList)
  question_list: QuestionList;

  @ManyToOne(() => Question)
  question: Question;

  @Column()
  @Expose()
  order: number;
}
