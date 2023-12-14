// src/employee/employee.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { EmployeeEntity } from './employee.entity';
import { CreateEmployeeDto } from './dto/employee.dto';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';
import { Console } from 'console';


@Injectable()
export class EmployeeService {
  constructor(
   
    @InjectRepository(NewSubStationEntity)
    private readonly substationRepository: Repository<NewSubStationEntity>,
    @InjectRepository(EmployeeEntity)
    private readonly employeeRepository: Repository<EmployeeEntity>,
  ) {}

  async create(
    createEmployeeDto: CreateEmployeeDto,
    substationId: number, // Accept substationId as an argument
    ): Promise<EmployeeEntity| object> {
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

  async findAll(): Promise<EmployeeEntity[]> {
    return await this.employeeRepository.find({ relations: ['substation','maintenanceLog']});
  }

  async findOne(id: number): Promise<EmployeeEntity> {
    return await this.employeeRepository.findOne({where:{employeeId:id}});
  }

  async update(id: number, updateEmployeeDto: CreateEmployeeDto): Promise<EmployeeEntity|object> {
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
