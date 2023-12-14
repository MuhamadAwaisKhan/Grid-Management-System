// src/customer/customer.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { CreateCustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  ) {}

  async create(createCustomerDto: CreateCustomerDto): Promise<CustomerEntity> {
    const customer = this.customerRepository.create(createCustomerDto);
    return await this.customerRepository.save(customer);
  }

  async findAll(): Promise<CustomerEntity[]> {
    return await this.customerRepository.find({relations:['powermeter','billing']});
  }

  async findOne(id: number): Promise<CustomerEntity> {
    return await this.customerRepository.findOne({where:{customerId:id}});
  }

  async update(id: number, updateCustomerDto: CreateCustomerDto): Promise<CustomerEntity | object> {
    const customer = await this.customerRepository.findOne({where:{customerId:id}});
    if (!customer) {
      throw new Error('Customer not found');
    }

    this.customerRepository.merge(customer, updateCustomerDto);
    const updatedcustomer= await this.customerRepository.save(customer);
    return{message: "Customer Updated Successfully" ,data:updatedcustomer};
  }

  async remove(id: number): Promise<object> {
    await this.customerRepository.delete(id);
    return { meassage:"Customer Deleted Successfully"};
  }
}
