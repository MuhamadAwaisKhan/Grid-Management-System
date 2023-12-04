// src/substation/substation.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { SubstationService } from './substation.service';
import { CreateSubstationDto } from './dto/substation.dto';
import { SubstationEntity } from './substation.entity';
@UsePipes(ValidationPipe)
@Controller('substation')
export class SubstationController {
  constructor(private readonly substationService: SubstationService) {}

  @Post()
  async create(@Body() createSubstationDto: CreateSubstationDto): Promise<SubstationEntity> {
    return this.substationService.create(createSubstationDto);
  }

  @Get()
  async findAll(): Promise<SubstationEntity[]> {
    return this.substationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<SubstationEntity> {
    return this.substationService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSubstationDto: CreateSubstationDto,
  ): Promise<SubstationEntity> {
    return this.substationService.update(+id, updateSubstationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.substationService.remove(+id);
  }
}
