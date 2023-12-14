// src/feeder/feeder.controller.ts

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
import { FeederService } from './feeder.service';
import { CreateFeederDto } from './dto/feeder.dto';
import { FeederEntity } from './feeder.entity';
@UsePipes(ValidationPipe)
@Controller('feeder')
export class FeederController {
  substationservice: any;
  constructor(private readonly feederService: FeederService) {}

  @Post(':SubstationId')
  async create(
    @Body() CreateFeederDto: CreateFeederDto,
      @Param('SubstationId') SubstationId: number,
      ) {
    return this.feederService.create(CreateFeederDto,SubstationId);
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
  ){
    return this.feederService.update(+id, updateFeederDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.feederService.remove(+id);
  }
}
