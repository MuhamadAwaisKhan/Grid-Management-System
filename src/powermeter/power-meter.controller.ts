// src/power-meter/power-meter.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PowerMeterService } from './power-meter.service';
import { CreatePowerMeterDto } from './dto/power-meter.dto';
import { PowerMeterEntity } from './power-meter.entity';
import { CreateCustomerDto } from 'src/customer/dto/customer.dto';
@UsePipes(ValidationPipe)
@Controller('power-meter')
export class PowerMeterController {
  constructor(private readonly powerMeterService: PowerMeterService) {}

  @Post(':transformerId')
  async create(
    @Body() createPowerMeterDto: CreatePowerMeterDto,
      @Param('transformerId') transformerId: number,
      ) {
    return this.powerMeterService.create(createPowerMeterDto,transformerId);
  }
  // @Post(':customerId')
  // async create(
  //   @Body() createPowerMeterDto: CreatePowerMeterDto,
  //     @Param('customerId') customerId: number,
  //     ) {
  //   return this.powerMeterService.create(createPowerMeterDto,customerId);
  // }

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
  ) {
    return this.powerMeterService.update(+id, updatePowerMeterDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.powerMeterService.remove(+id);
  }
}
