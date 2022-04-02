import { Expose } from 'class-transformer';
import { Column, Entity, ManyToOne } from 'typeorm';
import { MockTest, User } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'mock_test_results',
})
export class MockTestResult extends BaseEntity {
  @ManyToOne(() => MockTest)
  mockTest: MockTest;

  @ManyToOne(() => User)
  user: User;

  @Column()
  @Expose()
  num_correct_answers: number;

  @Column()
  @Expose()
  timeTaken: number;
}
