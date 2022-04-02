import { Expose } from 'class-transformer';
import { QuestionType } from 'src/enums/question-type';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Asset, Answer, Topic } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'questions',
})
export class Question extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    enum: QuestionType,
  })
  @Expose()
  type: QuestionType;

  @Column({ length: 500 })
  @Expose()
  questionText: string;

  @Column()
  @Expose()
  difficulty: string;

  @Column({ length: 500 })
  @Expose()
  explanation: string;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

  @ManyToMany(() => Topic)
  @JoinTable()
  topics: Topic[];

  @OneToMany(() => Asset, (asset) => asset.question)
  assets?: Asset[];
}
