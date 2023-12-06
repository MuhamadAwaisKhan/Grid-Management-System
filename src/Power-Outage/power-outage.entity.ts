// src/power-outage/power-outage.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';
import { FeederEntity } from '../feeder/feeder.entity';
import { TransformerEntity } from '../transformer/transformer.entity';

@Entity('PowerOutage')
export class PowerOutageEntity {
  @PrimaryGeneratedColumn()
  outageId: number;

  @Column()
  outageStartTime: Date;

  @Column()
  outageEndTime: Date;

  @Column()
  cause: string;

  // @ManyToOne(() => SubstationEntity, substation => substation.powerOutages)
  // @JoinColumn({ name: 'substationId' })
  // substation: SubstationEntity;

  @ManyToOne(() => FeederEntity, feeder => feeder.powerOutages)
  @JoinColumn({ name: 'feederId' })
  feeder: FeederEntity;

  // @ManyToOne(() => TransformerEntity, transformer => transformer.powerOutages)
  // @JoinColumn({ name: 'transformerId' })
  // transformer: TransformerEntity;
}
