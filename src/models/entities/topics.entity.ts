import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'topics',
})
export class TopicEntity {
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
  subject_id: number;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
