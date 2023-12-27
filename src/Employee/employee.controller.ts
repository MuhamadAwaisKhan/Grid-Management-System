// src/employee/employee.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { EmployeeService } from './employee.service';
import { CreateEmployeeDto } from './dto/employee.dto';
import { NewEmployeeEntity } from './newemployee.entity';
import { ApiTags } from '@nestjs/swagger';

@UsePipes(ValidationPipe)
@Controller('employee')
@ApiTags('employee')
export class EmployeeController {
  constructor(private readonly employeeService: EmployeeService) {}

  @Post(':substationId')
  async create(
    @Body() createEmployeeDto: CreateEmployeeDto,
    @Param('substationId') substationId: number,
  ) {
    return this.employeeService.create(createEmployeeDto, substationId);
  }

  @Get()
  async findAll(): Promise<NewEmployeeEntity[]> {
    return this.employeeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<NewEmployeeEntity> {
    return this.employeeService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateEmployeeDto: CreateEmployeeDto,
  ) {
    return this.employeeService.update(+id, updateEmployeeDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.employeeService.remove(+id);
  }
}
