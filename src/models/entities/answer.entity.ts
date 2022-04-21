import { Expose } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Question } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'answers',
})
export class Answer extends BaseEntity {
  @Column()
  @Expose()
  content?: string;

  @Column()
  @Expose()
  is_correct: boolean;

  @Column()
  @Expose()
  order: number;

  @ManyToOne(() => Question, (question) => question.answers)
  question: Question;
}
