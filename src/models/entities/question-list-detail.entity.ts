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
  questionListId: number;

  @ManyToOne(() => Question)
  question: number;

  @Column()
  @Expose()
  order: number;
}
