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
  exam_application: ExamApplication;

  @Column()
  @Expose()
  num_correct_answers: number;

  @Column()
  @Expose()
  time_taken: number;
}
