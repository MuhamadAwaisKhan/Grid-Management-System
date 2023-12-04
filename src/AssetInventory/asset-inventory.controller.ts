// src/asset-inventory/asset-inventory.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AssetInventoryService } from './asset-inventory.service';
import { CreateAssetInventoryDto } from './dto/asset-inventory.dto';
import { AssetInventoryEntity } from './asset-inventory.entity';
@UsePipes(ValidationPipe)
@Controller('asset-inventory')
export class AssetInventoryController {
  constructor(private readonly assetInventoryService: AssetInventoryService) {}

  @Post()
  async create(@Body() createAssetInventoryDto: CreateAssetInventoryDto): Promise<AssetInventoryEntity> {
    return this.assetInventoryService.create(createAssetInventoryDto);
  }

  @Get()
  async findAll(): Promise<AssetInventoryEntity[]> {
    return this.assetInventoryService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<AssetInventoryEntity> {
    return this.assetInventoryService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateAssetInventoryDto: CreateAssetInventoryDto,
  ): Promise<AssetInventoryEntity> {
    return this.assetInventoryService.update(+id, updateAssetInventoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.assetInventoryService.remove(+id);
  }
}
