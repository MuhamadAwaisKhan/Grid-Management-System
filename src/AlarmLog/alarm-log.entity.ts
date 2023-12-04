// src/alarm-log/alarm-log.entity.ts


import { SubstationEntity } from '../substation/substation.entity';
import { FeederEntity } from 'src/feeder/feeder.entity';
import { TransformerEntity } from '../transformer/transformer.entity';
import { Entity, ManyToOne, Column, JoinColumn, PrimaryGeneratedColumn } from 'typeorm';



@Entity('AlarmLog')
export class AlarmLogEntity {
@PrimaryGeneratedColumn()
  alarmId: number;

  @Column()
  description: string;

  @Column()
  timestamp: Date;

  @Column()
  severityLevel: string;

  @ManyToOne(() => SubstationEntity, substation => substation.alarmLogs)
  @JoinColumn({ name: 'substationId' })
  substation: SubstationEntity;

  @ManyToOne(() => FeederEntity, feeder => feeder.alarmLogs)
  @JoinColumn({ name: 'feederId' })
  feeder: FeederEntity;

  @ManyToOne(() => TransformerEntity, transformer => transformer.alarmLogs)
  @JoinColumn({ name: 'transformerId' })
  transformer: TransformerEntity;
}

