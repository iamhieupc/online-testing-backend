import { Expose } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity({
  name: 'announcements',
})
export class Announcement {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  user_id: number;

  @Column()
  @Expose()
  content: string;

  @Column()
  @Expose()
  @CreateDateColumn()
  createdAt: Date;

  @Column()
  @Expose()
  @UpdateDateColumn()
  updatedAt: Date;
}
