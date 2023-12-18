// src/power-outage/power-outage.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { FeederEntity } from '../feeder/feeder.entity';


@Entity('PowerOutage')
export class PowerOutageEntity {
  @PrimaryGeneratedColumn()
  outageId: number;

  @Column()
  outageStartTime: string;

  @Column()
  outageEndTime: string;

  @Column()
  cause: string;

  // @ManyToOne(() => SubstationEntity, substation => substation.powerOutages)
  // @JoinColumn({ name: 'substationId' })
  // substation: SubstationEntity;

  @ManyToOne(() => FeederEntity, feeder => feeder.powerOutages,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'feederId' })
  feeder: FeederEntity;

  // @ManyToOne(() => TransformerEntity, transformer => transformer.powerOutages)
  // @JoinColumn({ name: 'transformerId' })
  // transformer: TransformerEntity;
}
