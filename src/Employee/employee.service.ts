// src/employee/employee.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { CreateEmployeeDto } from './dto/employee.dto';

@Injectable()
export class EmployeeService {
  constructor(
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity> {
    const employee = this.employeeRepository.create(createEmployeeDto);
    return await this.employeeRepository.save(employee);
  }

  async findAll(): Promise<EmployeeEntity[]> {
    return await this.employeeRepository.find();
  }

  async findOne(id: number): Promise<EmployeeEntity> {
    return await this.employeeRepository.findOne({where:{employeeId:id}});
  }

  async update(id: number, updateEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity> {
    const employee = await this.employeeRepository.findOne({where:{employeeId:id}});
    if (!employee) {
      throw new Error('Employee not found');
    }

    this.employeeRepository.merge(employee, updateEmployeeDto);
    return await this.employeeRepository.save(employee);
  }

  async remove(id: number): Promise<void> {
    await this.employeeRepository.delete(id);
  }
}
