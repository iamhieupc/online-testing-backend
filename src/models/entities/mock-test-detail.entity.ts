import { Expose } from 'class-transformer';
import { Column, Entity, ManyToMany, ManyToOne } from 'typeorm';
import { MockTest, Question } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'mock-test-details',
})
export class MockTestDetail extends BaseEntity {
  @ManyToOne(() => MockTest)
  mockTest: MockTest;

  @ManyToMany(() => Question)
  question: Question;

  @Column()
  @Expose()
  order: number;
}
