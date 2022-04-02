import { Expose } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'announcements',
})
export class Announcement extends BaseEntity {
  @ManyToOne(() => User)
  user: User;

  @Column({ length: 500 })
  @Expose()
  content: string;
}
