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
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
