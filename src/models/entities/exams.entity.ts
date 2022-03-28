import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'exams',
})
export class ExamEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  level_id: number;

  @Column()
  @Expose()
  subject_id: number;

  @Column()
  @Expose()
  name: number;

  @Column()
  @Expose()
  register_start_at: number;

  @Column()
  @Expose()
  register_end_at: number;

  @Column()
  @Expose()
  time_start: number;

  @Column()
  @Expose()
  duration_in_minutes: number;

  @Column()
  @Expose()
  status: number;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
