// src/fault/fault.entity.ts

import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity('Fault')
export class FaultEntity {
  @PrimaryGeneratedColumn()
  faultId: number;

  @Column()
  faulted: boolean;

  @Column()
  description: string;

  @Column()
  date: string;

  @Column()
  status: string;

  @Column()
  type: string;

  @ManyToOne(() => NewSubStationEntity, substation => substation.faults)
  @JoinColumn({ name: 'substationId' })
  substation: NewSubStationEntity;
}
