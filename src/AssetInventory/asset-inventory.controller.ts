// src/asset-inventory/asset-inventory.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { AssetInventoryService } from './asset-inventory.service';
import { CreateAssetInventoryDto } from './dto/asset-inventory.dto';
import { AssetInventoryEntity } from './asset-inventory.entity';
@UsePipes(ValidationPipe)
@Controller('asset-inventory')
export class AssetInventoryController {
  constructor(private readonly assetInventoryService: AssetInventoryService) {}
  @Post(':SubstationId')
  async create(
    @Body() createAssetInventoryDto: CreateAssetInventoryDto,
    @Param('SubstationId') SubstationId: number,
  ) {
    return this.assetInventoryService.create(createAssetInventoryDto, SubstationId);
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
  ){
    return this.assetInventoryService.update(+id, updateAssetInventoryDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.assetInventoryService.remove(+id);
  }
}
