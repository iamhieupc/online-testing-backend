import { AssetType } from 'src/enums';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Question } from '.';
import BaseEntity from './base.entity';
import { Context } from './context.entity';

@Entity({
  name: 'assets',
})
export class Asset extends BaseEntity {
  @ManyToOne(() => Question)
  question?: Question;

  @ManyToOne(() => Context)
  context?: Context;

  @Column()
  path: string;

  @Column({
    enum: AssetType,
  })
  type: AssetType;
}
