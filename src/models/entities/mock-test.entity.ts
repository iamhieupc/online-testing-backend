import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'mock-test',
})
export class TestEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  topic_id: number;

  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  duration_in_time: number;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
