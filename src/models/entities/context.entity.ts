import { ContextType } from 'src/enums';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Asset } from '.';
import BaseEntity from './base.entity';

@Entity({
  name: 'contexts',
})
export class Context extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true, type: 'longtext' })
  text_content: string;

  @Column({
    enum: ContextType,
  })
  type: ContextType;

  @OneToMany(() => Asset, (asset) => asset.context)
  assets: Asset[];
}
