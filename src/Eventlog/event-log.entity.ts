// src/event-log/event-log.entity.ts

import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';




@Entity('EventLog')
export class EventLogEntity {
  @PrimaryGeneratedColumn()
  eventId: number;

  @Column()
  description: string;

  @Column()
  date: string;

  @ManyToOne(() => NewSubStationEntity, substation => substation.eventLogs,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'substationId' })
  substation: NewSubStationEntity;

  // @ManyToOne(() => TransformerEntity, transformer => transformer.eventLogs)
  // @JoinColumn({ name: 'transformerId' })
  // transformer: TransformerEntity;
  // @ManyToOne(() => CircuitBreakerEntity, circuitBreaker => circuitBreaker.eventLogs)
  // @JoinColumn({ name: 'breakerId' })
  // circuitBreaker: CircuitBreakerEntity;


  // @ManyToOne(() => FeederEntity, feeder => feeder.eventLogs)
  // @JoinColumn({ name: 'feederId' })
  // feeder: FeederEntity;
}
