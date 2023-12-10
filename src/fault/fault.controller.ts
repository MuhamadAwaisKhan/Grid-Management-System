// src/fault/fault.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { FaultService } from './fault.service';
import { CreateFaultDto } from './dto/fault.dto';
import { FaultEntity } from './fault.entity';
@UsePipes(ValidationPipe)
@Controller('fault')
export class FaultController {
  constructor(private readonly faultService: FaultService) {}
  @Post(':substationId')
  async create(
    @Body() createFaultDto: CreateFaultDto,
    @Param('substationId') substationId: number,
  ) {
    return this.faultService.create(createFaultDto, substationId);
  }

  @Get()
  async findAll(): Promise<FaultEntity[]> {
    return this.faultService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<FaultEntity> {
    return this.faultService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updateFaultDto: CreateFaultDto){
    return this.faultService.update(+id, updateFaultDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.faultService.remove(+id);
  }
}
