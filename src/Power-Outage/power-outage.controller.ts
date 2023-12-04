// src/power-outage/power-outage.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PowerOutageService } from './power-outage.service';
import { CreatePowerOutageDto } from './dto/power-outage.dto';
import { PowerOutageEntity } from './power-outage.entity';
@UsePipes(ValidationPipe)
@Controller('power-outage')
export class PowerOutageController {
  constructor(private readonly powerOutageService: PowerOutageService) {}

  @Post()
  async create(@Body() createPowerOutageDto: CreatePowerOutageDto): Promise<PowerOutageEntity> {
    return this.powerOutageService.create(createPowerOutageDto);
  }

  @Get()
  async findAll(): Promise<PowerOutageEntity[]> {
    return this.powerOutageService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PowerOutageEntity> {
    return this.powerOutageService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePowerOutageDto: CreatePowerOutageDto,
  ): Promise<PowerOutageEntity> {
    return this.powerOutageService.update(+id, updatePowerOutageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.powerOutageService.remove(+id);
  }
}
