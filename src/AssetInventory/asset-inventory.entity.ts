// src/asset-inventory/asset-inventory.entity.ts

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from 'typeorm';
import { SubstationEntity } from '../substation/substation.entity';

@Entity('AssetInventory')
export class AssetInventoryEntity {
  @PrimaryGeneratedColumn()
  assetId: number;

  @Column()
  assetType: string;

  @Column()
  srNumber: string;

  @Column()
  installationDate: Date;

  @Column()
  status: string;

  @ManyToOne(() => SubstationEntity, substation => substation.assetInventories)
  @JoinColumn({ name: 'substationId' })
  substation: SubstationEntity;
}
