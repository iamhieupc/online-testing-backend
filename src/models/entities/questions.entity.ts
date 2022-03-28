import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'questions',
})
export class QuestionEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  topic_id: string;

  @Column()
  @Expose()
  type: number;

  @Column()
  @Expose()
  question_text: string;

  @Column()
  @Expose()
  difficulty: number;

  @Column()
  @Expose()
  explanation: string;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
