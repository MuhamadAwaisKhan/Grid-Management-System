// src/substation/substation.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { SubstationService } from './substation.service';
import CreateSubstationDto from './dto/create_substation.dto';
import { NewSubStationEntity } from './newsubstation.entity';
import { ApiTags } from '@nestjs/swagger';

@UsePipes(ValidationPipe)
@Controller('substation')
@ApiTags('substation')
export class SubstationController {
  constructor(private readonly substationService: SubstationService) {}

  @Post(':gridStationId')
  async create(
    @Body() createSubstationDto: CreateSubstationDto,
    @Param('gridStationId') gridStationId: number,
  ) {
    return this.substationService.create(createSubstationDto, gridStationId);
  }

  @Get()
  async findAll(): Promise<NewSubStationEntity[]> {
    return this.substationService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<NewSubStationEntity> {
    return this.substationService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateSubstationDto: CreateSubstationDto,
  ) {
    return this.substationService.update(+id, updateSubstationDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.substationService.remove(+id);
  }
}
