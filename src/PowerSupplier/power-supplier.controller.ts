// src/power-supplier/power-supplier.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { PowerSupplierService } from './power-supplier.service';
import { CreatePowerSupplierDto } from './dto/power-supplier.dto';
import { PowerSupplierEntity } from './power-supplier.entity';
@UsePipes(ValidationPipe)
@Controller('power-supplier')
export class PowerSupplierController {
  constructor(private readonly powerSupplierService: PowerSupplierService) {}

  @Post()
  async create(@Body() createPowerSupplierDto: CreatePowerSupplierDto) {
    return this.powerSupplierService.create(createPowerSupplierDto);
  }

  @Get()
  async findAll() {
    return this.powerSupplierService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.powerSupplierService.findOne(+id);
  }

  @Put(':id')
  async update(@Param('id') id: string, @Body() updatePowerSupplierDto: CreatePowerSupplierDto) {
    return this.powerSupplierService.update(+id, updatePowerSupplierDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.powerSupplierService.remove(+id);
  }
}
