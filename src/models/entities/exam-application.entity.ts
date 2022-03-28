import { Expose } from 'class-transformer';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity({
  name: 'exam-applications',
})
export class ExamApplicationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Expose()
  exam_id: number;

  @Column()
  @Expose()
  user_id: number;

  @Column()
  @Expose()
  type: number;

  @Column()
  @Expose()
  status: number;
}
