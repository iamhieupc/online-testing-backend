import { Expose } from 'class-transformer';
import { Column, Entity } from 'typeorm';
import BaseEntity from './base.entity';

@Entity({
  name: 'settings',
})
export class Setting extends BaseEntity {
  @Column()
  @Expose()
  name: string;

  @Column()
  @Expose()
  value: string;
}
