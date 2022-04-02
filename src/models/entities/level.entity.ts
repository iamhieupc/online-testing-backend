import { Expose } from 'class-transformer';
import { Column, Entity, OneToMany } from 'typeorm';
import { Exam } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'levels',
})
export class Level extends BaseEntity {
  @Column()
  @Expose()
  code: string;

  @Column()
  @Expose()
  name: string;

  @OneToMany(() => Exam, (exam) => exam.level)
  exams: Exam[];
}
