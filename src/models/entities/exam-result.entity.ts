import { Expose } from 'class-transformer';
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { ExamApplication } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'exam_results',
})
export class ExamResult extends BaseEntity {
  @OneToOne(() => ExamApplication)
  @JoinColumn()
  examApplication: ExamApplication;

  @Column()
  @Expose()
  numCorrectAnswers: number;

  @Column()
  @Expose()
  timeTaken: number;
}
