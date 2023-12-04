// src/asset-inventory/asset-inventory.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssetInventoryEntity } from './asset-inventory.entity';
import { CreateAssetInventoryDto } from './dto/asset-inventory.dto';

@Injectable()
export class AssetInventoryService {
  constructor(
    @InjectRepository(AssetInventoryEntity)
    private readonly assetInventoryRepository: Repository<AssetInventoryEntity>,
  ) {}

  async create(createAssetInventoryDto: CreateAssetInventoryDto): Promise<AssetInventoryEntity> {
    const assetInventory = this.assetInventoryRepository.create(createAssetInventoryDto);
    return await this.assetInventoryRepository.save(assetInventory);
  }

  async findAll(): Promise<AssetInventoryEntity[]> {
    return await this.assetInventoryRepository.find();
  }

  async findOne(id: number): Promise<AssetInventoryEntity> {
    return await this.assetInventoryRepository.findOne({where:{assetId:id}});
  }

  async update(id: number, updateAssetInventoryDto: CreateAssetInventoryDto): Promise<AssetInventoryEntity> {
    const assetInventory = await this.assetInventoryRepository.findOne({where:{assetId:id}});
    if (!assetInventory) {
      throw new Error('Asset Inventory not found');
    }

    this.assetInventoryRepository.merge(assetInventory, updateAssetInventoryDto);
    return await this.assetInventoryRepository.save(assetInventory);
  }

  async remove(id: number): Promise<void> {
    await this.assetInventoryRepository.delete(id);
  }
}
