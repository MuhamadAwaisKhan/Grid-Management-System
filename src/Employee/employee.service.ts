// src/employee/employee.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { CreateEmployeeDto } from './dto/employee.dto';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';
import { Console } from 'console';
import { NewEmployeeEntity } from './newemployee.entity';


@Injectable()
export class EmployeeService {
  constructor(
   
    @InjectRepository(NewSubStationEntity)
    private readonly substationRepository: Repository<NewSubStationEntity>,
    @InjectRepository(NewEmployeeEntity)
    private readonly employeeRepository: Repository<NewEmployeeEntity>,
  ) {}

  async create(
    createEmployeeDto: CreateEmployeeDto,
    substationId: number, // Accept substationId as an argument
    ): Promise<NewEmployeeEntity| object> {
      console.log('CreateEmployeeDto ->',CreateEmployeeDto);
      
    let createdEmployee =
      this.employeeRepository.create(createEmployeeDto);
      console.log("createdEmployee ->",createdEmployee)
    
    if (substationId) {
      const substation = await this.substationRepository.findOneBy({id:substationId});
      
    
      if (!substation) {
        throw new Error('Substation not found');
      }

       createdEmployee.substation = substation;
    }

   // console.log('createdEmployee -> ', createdEmployee);
    // return {message: "In Development"}

    return await this.employeeRepository
      .save(createdEmployee)
      .then((res) => {
        return {
          message: 'Employee Created Successfully',
          data: res,
        };
      })
      .catch((err) => {
        return {
          message: 'Employee Created Successfully',
          data: null,
          error: err,
        };
      });
  }

  async findAll(): Promise<NewEmployeeEntity[]> {
    return await this.employeeRepository.find({ relations: ['substation','maintenanceLog']});
  }

  async findOne(id: number): Promise<NewEmployeeEntity> {
    return await this.employeeRepository.findOne({where:{employeeId:id}, relations: ['substation','maintenanceLog']});
  }

  async update(id: number, updateEmployeeDto: CreateEmployeeDto): Promise<NewEmployeeEntity|object> {
    const employee = await this.employeeRepository.findOne({where:{employeeId:id}});
    if (!employee) {
      throw new Error('Employee not found');
    }

    this.employeeRepository.merge(employee, updateEmployeeDto);
    const updatedemployee= await this.employeeRepository.save(employee);
    return {message: "Employee Updated Successfully", data: updatedemployee
    }
  }

  async remove(id: number): Promise<object> {
    await this.employeeRepository.delete(id);
    return {message: "Employee Deleted Successfully"}
  }
}
