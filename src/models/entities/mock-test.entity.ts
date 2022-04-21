import { Expose } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Topic } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'mock_tests',
})
export class MockTest extends BaseEntity {
  @ManyToOne(() => Topic)
  topic: Topic;

  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  duration_in_minutes: number;
}
