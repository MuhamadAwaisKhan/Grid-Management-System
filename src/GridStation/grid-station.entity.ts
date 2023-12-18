// src/grid-station/grid-station.entity.ts

import { PowerSupplierEntity } from 'src/PowerSupplier/power-supplier.entity';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';


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
  @OneToMany(() => NewSubStationEntity, substation => substation.gridStation)
  @JoinColumn({ name: 'substationId' })
  substations: NewSubStationEntity;
 
  @ManyToOne(() => PowerSupplierEntity, supplier => supplier.gridstation,{onDelete: 'CASCADE', nullable: true })
  @JoinColumn({ name: 'supplierId' })
  supplier: PowerSupplierEntity;
}
