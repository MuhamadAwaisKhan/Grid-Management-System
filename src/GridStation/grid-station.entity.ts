// src/grid-station/grid-station.entity.ts

import { PowerSupplierEntity } from 'src/PowerSupplier/power-supplier.entity';
import { SubstationEntity } from 'src/substation/substation.entity';
import { TransformerEntity } from 'src/transformer/transformer.entity';
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, JoinColumn } from 'typeorm';

@Entity('GridStation')
export class GridStationEntity {
  @PrimaryGeneratedColumn()
  gridId: number;

  @Column()
  name: string;

  @Column()
  location: string;

  @Column()
  capacity: number;

  @Column()
  voltageLevel: number;
  @OneToMany(() => SubstationEntity, substation => substation.gridStation)
  @JoinColumn({ name: 'substationId' })
  substations: SubstationEntity;
 
  @ManyToOne(() => PowerSupplierEntity, supplier => supplier.gridstation,{ nullable: true })
  @JoinColumn({ name: 'supplierId' })
  supplier: PowerSupplierEntity;
}
