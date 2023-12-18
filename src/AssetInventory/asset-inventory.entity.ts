// src/asset-inventory/asset-inventory.entity.ts

import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';


@Entity('AssetInventory')
export class AssetInventoryEntity {
  @PrimaryGeneratedColumn()
  assetId: number;

  @Column()
  assetType: string;

  @Column()
  srNumber: string;

  @Column()
  installationDate: string;

  @Column()
  status: string;

  @ManyToOne(() => NewSubStationEntity, substation => substation.assetInventories,{onDelete: 'CASCADE'})
  @JoinColumn({ name: 'substationId' })
  substation: NewSubStationEntity;
}
