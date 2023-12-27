// src/transformer/transformer.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TransformerService } from './transformer.service';
import { CreateTransformerDto } from './dto/transformer.dto';
import { NewTransformerEntity } from './newtransformer.entity';
import { ApiTags } from '@nestjs/swagger';

@UsePipes(ValidationPipe)
@Controller('transformer')
@ApiTags('transformer')
export class TransformerController {
  constructor(private readonly transformerService: TransformerService) {}

  @Post(':feederId')
  async create(
    @Body() createTransformerDto: CreateTransformerDto,
      @Param('feederId') feederId: number,
      ) {
    return this.transformerService.create(createTransformerDto,feederId);
  }

  @Get()
  async findAll(): Promise<NewTransformerEntity[]> {
    return this.transformerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<NewTransformerEntity> {
    return this.transformerService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTransformerDto: CreateTransformerDto,
  ) {
    return this.transformerService.update(+id, updateTransformerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.transformerService.remove(+id);
  }
}
