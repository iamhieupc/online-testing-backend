import { Expose } from 'class-transformer';
import { Column, Entity, JoinTable, ManyToMany, OneToMany } from 'typeorm';
import { Announcement, Exam, MockTest } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'users',
})
export class User extends BaseEntity {
  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  email: string;

  @Column()
  @Expose()
  password: string;

  @Column()
  @Expose()
  avatar?: string;

  @Column()
  @Expose()
  is_admin: boolean;

  @Column()
  @Expose()
  status: number;

  @Column()
  @Expose()
  refresh_token: string;

  @Column()
  @Expose()
  refresh_token_expires: number;

  @OneToMany(() => Announcement, (announcement) => announcement.user)
  announcements: Announcement[];

  @ManyToMany(() => Exam)
  @JoinTable({ name: 'exam_applications' })
  exams: Exam[];

  @ManyToMany(() => MockTest)
  @JoinTable({ name: 'mock_test_results' })
  mock_tests: MockTest[];
}
