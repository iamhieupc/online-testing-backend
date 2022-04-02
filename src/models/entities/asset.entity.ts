import { Expose } from 'class-transformer';
import { AssetType } from 'src/enums/asset-type';
import { Column, Entity, ManyToOne } from 'typeorm';
import { User, Question } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'assets',
})
export class Asset extends BaseEntity {
  @ManyToOne(() => User)
  user: User;

  @ManyToOne(() => Question)
  question: Question;

  @Column({
    enum: AssetType,
  })
  @Expose()
  type: string;

  @Column()
  @Expose()
  path: string;
}
