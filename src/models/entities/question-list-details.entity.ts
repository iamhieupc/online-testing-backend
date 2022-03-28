import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'question-list-details',
})
export class QuestionListDetailEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  question_list_id: number;

  @Column()
  @Expose()
  question_id: number;

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
