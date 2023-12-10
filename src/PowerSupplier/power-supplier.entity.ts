// src/power-supplier/power-supplier.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn, OneToOne, ManyToMany, JoinTable, OneToMany } from 'typeorm';
import { GridStationEntity } from 'src/GridStation/grid-station.entity';

@Entity('PowerSupplier')
export class PowerSupplierEntity {
  @PrimaryGeneratedColumn()
  supplierId: number;

  @Column()
  name: string;

  @Column()
  contactDetail: string;
 
  @OneToMany(() => GridStationEntity, gridStation => gridStation.supplier, { nullable: true, cascade: true } )
  @JoinColumn({ name: 'supplierId' })
  gridstation: GridStationEntity;
}
