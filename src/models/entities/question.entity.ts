import { Expose } from 'class-transformer';
import { QuestionType, Difficulty } from 'src/enums';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { Answer, Asset, Topic } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'questions',
})
export class Question extends BaseEntity {
  @Column({
    enum: QuestionType,
  })
  @Expose()
  type: QuestionType;

  @Column({ length: 500 })
  @Expose()
  questionText: string;

  @Column({
    enum: Difficulty,
  })
  @Expose()
  difficulty: string;

  @Column({ length: 500 })
  explanation: string;

  @OneToMany(() => Answer, (answer) => answer.question)
  answers: Answer[];

  @ManyToMany(() => Topic)
  @JoinTable()
  topics: Topic[];

  @OneToMany(() => Asset, (asset) => asset.question)
  assets: Asset[];
}
