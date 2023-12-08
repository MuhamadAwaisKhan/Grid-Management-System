// src/grid-station/grid-station.controller.ts

import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Param,
  Delete,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { GridStationService } from './grid-station.service';
import {
  CreateGridStationDto,
  UpdateGridStationDto,
} from './dto/grid-station.dto';
@UsePipes(ValidationPipe)
@Controller('grid-station')
export class GridStationController {
  constructor(private readonly gridStationService: GridStationService) {}

  @Post(':powerSupplierId')
  create(
    @Body() createGridStationDto: CreateGridStationDto,
    @Param('powerSupplierId') powerSupplierId: number,
  ) {
    return this.gridStationService.create(
      createGridStationDto,
      powerSupplierId,
    );
  }

  @Get()
  findAll() {
    return this.gridStationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.gridStationService.findOne(+id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateGridStationDto: UpdateGridStationDto,
  ) {
    return this.gridStationService.update(+id, updateGridStationDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.gridStationService.remove(+id);
  }
}
