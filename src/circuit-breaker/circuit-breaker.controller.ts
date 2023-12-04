// src/circuit-breaker/circuit-breaker.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CircuitBreakerService } from './circuit-breaker.service';
import { CreateCircuitBreakerDto } from './dto/circuit-breaker.dto';
import { CircuitBreakerEntity } from './circuit-breaker.entity';
@UsePipes(ValidationPipe)
@Controller('circuit-breaker')
export class CircuitBreakerController {
  constructor(private readonly circuitBreakerService: CircuitBreakerService) {}

  @Post()
  async create(@Body() createCircuitBreakerDto: CreateCircuitBreakerDto): Promise<CircuitBreakerEntity> {
    return this.circuitBreakerService.create(createCircuitBreakerDto);
  }

  @Get()
  async findAll(): Promise<CircuitBreakerEntity[]> {
    return this.circuitBreakerService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CircuitBreakerEntity> {
    return this.circuitBreakerService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateCircuitBreakerDto: CreateCircuitBreakerDto,
  ): Promise<CircuitBreakerEntity> {
    return this.circuitBreakerService.update(+id, updateCircuitBreakerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.circuitBreakerService.remove(+id);
  }
}
