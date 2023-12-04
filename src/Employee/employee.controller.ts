// src/employee/employee.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/employee.dto';
import { EmployeeEntity } from './employee.entity';
@UsePipes(ValidationPipe)
@Controller('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post()
  async create(@Body() createEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity> {
    return this.employeeService.create(createEmployeeDto);
  }

  @Get()
  async findAll(): Promise<EmployeeEntity[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<EmployeeEntity> {
    return this.employeeService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: CreateEmployeeDto,
  ): Promise<EmployeeEntity> {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.employeeService.remove(+id);
  }
}
