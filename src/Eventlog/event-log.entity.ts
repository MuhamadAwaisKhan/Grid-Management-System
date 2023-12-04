// src/event-log/event-log.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';
import { TransformerEntity } from '../transformer/transformer.entity';
import { CircuitBreakerEntity} from '../circuit-breaker/circuit-breaker.entity';
import { FeederEntity} from '../feeder/feeder.entity';

@Entity('EventLog')
export class EventLogEntity {
  @PrimaryGeneratedColumn()
  eventId: number;

  @Column()
  description: string;

  @Column()
  date: Date;

  @ManyToOne(() => SubstationEntity, substation => substation.eventLogs)
  @JoinColumn({ name: 'substationId' })
  substation: SubstationEntity;

  @ManyToOne(() => TransformerEntity, transformer => transformer.eventLogs)
  @JoinColumn({ name: 'transformerId' })
  transformer: TransformerEntity;
  @ManyToOne(() => CircuitBreakerEntity, circuitBreaker => circuitBreaker.eventLogs)
  @JoinColumn({ name: 'breakerId' })
  circuitBreaker: CircuitBreakerEntity;


  @ManyToOne(() => FeederEntity, feeder => feeder.eventLogs)
  @JoinColumn({ name: 'feederId' })
  feeder: FeederEntity;
}
