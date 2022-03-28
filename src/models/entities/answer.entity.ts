import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'answers',
})
export class AnswerEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  question_id: number;

  @Column()
  @Expose()
  content: string;

  @Column()
  @Expose()
  is_correct: boolean;

  @Column()
  @Expose()
  order: number;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
