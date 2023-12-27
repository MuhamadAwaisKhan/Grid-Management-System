// src/circuit-breaker/circuit-breaker.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { CircuitBreakerService } from './circuit-breaker.service';
import { CreateCircuitBreakerDto } from './dto/circuit-breaker.dto';
import { CircuitBreakerEntity } from './circuit-breaker.entity';
import { ApiTags } from '@nestjs/swagger';
@UsePipes(ValidationPipe)
@Controller('circuit-breaker')
@ApiTags('circuit-breaker')
export class CircuitBreakerController {
  constructor(private readonly circuitBreakerService: CircuitBreakerService) {}

  @Post(':feederId/:mainId')
  async create(
    @Body() createCircuitBreakerDto: CreateCircuitBreakerDto,
    @Param('mainId') mainId: number,
      @Param('feederId') feederId: number,
      ) {
    return this.circuitBreakerService.create(createCircuitBreakerDto,feederId,mainId);
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
  ) {
    return this.circuitBreakerService.update(+id, updateCircuitBreakerDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string){
    return this.circuitBreakerService.remove(+id);
  }
}
