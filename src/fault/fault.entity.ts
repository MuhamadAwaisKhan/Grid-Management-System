// src/fault/fault.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';

@Entity('Fault')
export class FaultEntity {
  @PrimaryGeneratedColumn()
  faultId: number;

  @Column()
  faulted: boolean;

  @Column()
  description: string;

  @Column()
  date: Date;

  @Column()
  status: string;

  @Column()
  type: string;

  @ManyToOne(() => SubstationEntity, substation => substation.faults)
  @JoinColumn({ name: 'maId' })
  substation: SubstationEntity;
}
