// src/transformer/transformer.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToMany } from 'typeorm';
import { FeederEntity } from 'src/feeder/feeder.entity';
import { PowerMeterEntity } from 'src/powermeter/power-meter.entity';

@Entity('Transformer')
export class TransformerEntity {
  @PrimaryGeneratedColumn()
  transformerId: number;

  @Column()
  name: string;

  @Column()
  type: string;

  @Column()
  capacity: number;

  @Column()
  voltageLevel: number;

  @ManyToOne(() => FeederEntity, feeder => feeder.transformer)
 @JoinColumn({ name: 'feederId' })
  feeder1: FeederEntity;

    @OneToMany(() => PowerMeterEntity, meter => meter.transformer1)
    @JoinColumn({ name: 'meterId' })
    meter: PowerMeterEntity;
  
   
}
