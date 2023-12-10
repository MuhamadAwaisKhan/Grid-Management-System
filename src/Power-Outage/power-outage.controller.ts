// src/power-outage/power-outage.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PowerOutageService } from './power-outage.service';
import { CreatePowerOutageDto } from './dto/power-outage.dto';
import { PowerOutageEntity } from './power-outage.entity';
@UsePipes(ValidationPipe)
@Controller('power-outage')
export class PowerOutageController {
  constructor(private readonly powerOutageService: PowerOutageService) {}

  @Post(':feederId')
  async create(
    @Body() createPowerOutageDto: CreatePowerOutageDto,
      @Param('feederId') feederId: number,
      ) {
    return this.powerOutageService.create(createPowerOutageDto,feederId);
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
  ) {
    return this.powerOutageService.update(+id, updatePowerOutageDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.powerOutageService.remove(+id);
  }
}
