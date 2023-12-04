// src/feeder/feeder.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { FeederService } from './feeder.service';
import { CreateFeederDto } from './dto/feeder.dto';
import { FeederEntity } from './feeder.entity';
@UsePipes(ValidationPipe)
@Controller('feeder')
export class FeederController {
  constructor(private readonly feederService: FeederService) {}

  @Post()
  async create(@Body() createFeederDto: CreateFeederDto): Promise<FeederEntity> {
    return this.feederService.create(createFeederDto);
  }

  @Get()
  async findAll(): Promise<FeederEntity[]> {
    return this.feederService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FeederEntity> {
    return this.feederService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateFeederDto: CreateFeederDto,
  ): Promise<FeederEntity> {
    return this.feederService.update(+id, updateFeederDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.feederService.remove(+id);
  }
}
