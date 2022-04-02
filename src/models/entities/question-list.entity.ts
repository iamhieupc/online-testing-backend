import { Expose } from 'class-transformer';
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from 'typeorm';
import { Question, Topic } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'question_lists',
})
export class QuestionList extends BaseEntity {
  @Column()
  @Expose()
  code: string;

  @Column()
  @Expose()
  name: string;

  @ManyToOne(() => Topic)
  topic: Topic;

  @ManyToMany(() => Question)
  @JoinTable({ name: 'question_list_details' })
  questions: Question[];
}
