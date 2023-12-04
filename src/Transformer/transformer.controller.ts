// src/transformer/transformer.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { TransformerService } from './transformer.service';
import { CreateTransformerDto } from './dto/transformer.dto';
import { TransformerEntity } from './transformer.entity';
@UsePipes(ValidationPipe)
@Controller('transformer')
export class TransformerController {
  constructor(private readonly transformerService: TransformerService) {}

  @Post()
  async create(@Body() createTransformerDto: CreateTransformerDto): Promise<TransformerEntity> {
    return this.transformerService.create(createTransformerDto);
  }

  @Get()
  async findAll(): Promise<TransformerEntity[]> {
    return this.transformerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<TransformerEntity> {
    return this.transformerService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateTransformerDto: CreateTransformerDto,
  ): Promise<TransformerEntity> {
    return this.transformerService.update(+id, updateTransformerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.transformerService.remove(+id);
  }
}
