import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'subjects',
})
export class SubjectEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  code: string;

  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
