import { Expose } from 'class-transformer';
import { Column, Entity, ManyToMany, OneToMany } from 'typeorm';
import { Question, QuestionList } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'topics',
})
export class Topic extends BaseEntity {
  @Column()
  @Expose()
  code: string;

  @Column()
  @Expose()
  name: string;

  @ManyToMany(() => Question)
  questions: Question[];

  @OneToMany(() => QuestionList, (questionList) => questionList.topic)
  questionLists: QuestionList[];
}
