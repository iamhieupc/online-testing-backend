import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export default abstract class BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  @CreateDateColumn()
  created_at: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updated_at: Date;
}
