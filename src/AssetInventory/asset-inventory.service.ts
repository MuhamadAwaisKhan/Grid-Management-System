// src/asset-inventory/asset-inventory.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AssetInventoryEntity } from './asset-inventory.entity';
import { CreateAssetInventoryDto } from './dto/asset-inventory.dto';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';


@Injectable()
export class AssetInventoryService {
  constructor(
    @InjectRepository(NewSubStationEntity)
    private readonly substationRepository: Repository<NewSubStationEntity>,

    @InjectRepository(AssetInventoryEntity)
    private readonly assetInventoryRepository: Repository<AssetInventoryEntity>,
  ) {}

  async create(
    createAssetInventoryDto: CreateAssetInventoryDto,
    substationId: number, // Accept substationId as an argument

  ): Promise<AssetInventoryEntity |object> {
    const createdAssetInventory =this.assetInventoryRepository.create(createAssetInventoryDto);
    if (substationId) {
      const substation = await this.substationRepository.findOneBy({
        id: substationId,
      });
      if (!substation) {
        throw new Error('Substation not found');
      }

       createdAssetInventory.substation = substation;
    }
    console.log('createdAssetInventory -> ', createdAssetInventory);
    // return {message: "In Development"}
    return await this.assetInventoryRepository
      .save(createdAssetInventory)
      .then((res) => {
        return {
          message: 'Asset Inventory Created Successfully',
          data: res,
        };
      })
      .catch((err) => {
        return {
          message: 'Asset Inventory Created Successfully',
          data: null,
          error: err,
        };
      });
  }

  async findAll(): Promise<AssetInventoryEntity[]> {
    return await this.assetInventoryRepository.find({
      relations: ['substation'],
    });
  }

  async findOne(id: number): Promise<AssetInventoryEntity> {
    return await this.assetInventoryRepository.findOne({
      where: { assetId: id },
    });
  }

  async update(
    id: number,
    updateAssetInventoryDto: CreateAssetInventoryDto,
  ): Promise<AssetInventoryEntity> {
    const assetInventory = await this.assetInventoryRepository.findOne({
      where: { assetId: id },
    });
    if (!assetInventory) {
      throw new Error('Asset Inventory not found');
    }

    this.assetInventoryRepository.merge(
      assetInventory,
      updateAssetInventoryDto,
    );
    return await this.assetInventoryRepository.save(assetInventory);
  }

  async remove(id: number): Promise<void> {
    await this.assetInventoryRepository.delete(id);
  }
}
