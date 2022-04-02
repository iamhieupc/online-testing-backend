import { Expose } from 'class-transformer';
import { ExamStatus } from 'src/enums';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Level } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'exams',
})
export class Exam extends BaseEntity {
  @ManyToOne(() => Level)
  level: Level;

  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  registerStartAt: Date;

  @Column()
  @Expose()
  registerEndAt: Date;

  @Column()
  @Expose()
  timeStart: Date;

  @Column()
  @Expose()
  durationInMinutes: number;

  @Column({
    enum: ExamStatus,
  })
  @Expose()
  status: string;
}
