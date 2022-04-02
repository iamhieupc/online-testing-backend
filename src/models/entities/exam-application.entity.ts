import { Expose } from 'class-transformer';
import { ExamApplicationStatus, ExamApplicationType } from 'src/enums';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Exam, User } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'exam_applications',
})
export class ExamApplication extends BaseEntity {
  @ManyToOne(() => Exam)
  exam: Exam;

  @ManyToOne(() => User)
  user: User;

  @Column({
    enum: ExamApplicationType,
  })
  @Expose()
  type: ExamApplicationType;

  @Column({
    enum: ExamApplicationStatus,
  })
  @Expose()
  status: ExamApplicationStatus;
}
