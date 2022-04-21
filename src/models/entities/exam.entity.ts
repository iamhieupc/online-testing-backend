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
  register_start_at: Date;

  @Column()
  @Expose()
  register_end_at: Date;

  @Column()
  @Expose()
  time_start: Date;

  @Column()
  @Expose()
  duration_in_minutes: number;

  @Column({
    enum: ExamStatus,
  })
  @Expose()
  status: string;
}
