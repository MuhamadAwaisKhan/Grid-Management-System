// src/power-meter/power-meter.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PowerMeterService } from './power-meter.service';
import { CreatePowerMeterDto } from './dto/power-meter.dto';
import { PowerMeterEntity } from './power-meter.entity';
@UsePipes(ValidationPipe)
@Controller('power-meter')
export class PowerMeterController {
  constructor(private readonly powerMeterService: PowerMeterService) {}

  @Post()
  async create(@Body() createPowerMeterDto: CreatePowerMeterDto): Promise<PowerMeterEntity> {
    return this.powerMeterService.create(createPowerMeterDto);
  }

  @Get()
  async findAll(): Promise<PowerMeterEntity[]> {
    return this.powerMeterService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<PowerMeterEntity> {
    return this.powerMeterService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePowerMeterDto: CreatePowerMeterDto,
  ): Promise<PowerMeterEntity> {
    return this.powerMeterService.update(+id, updatePowerMeterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.powerMeterService.remove(+id);
  }
}
