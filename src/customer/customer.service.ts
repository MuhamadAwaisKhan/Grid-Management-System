// src/customer/customer.service.ts

import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Like, Repository } from 'typeorm';
import { CustomerEntity } from './customer.entity';
import { CreateCustomerDto } from './dto/customer.dto';

@Injectable()
export class CustomerService {
  logger: any;
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
    return await this.customerRepository.findOne({where:{customerId:id},relations:['powermeter','billing']});
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
  async findCustomersWithFilter(filter: any): Promise<CustomerEntity[]> {
    const conditions = [];

    if (filter.name) {
        conditions.push({ name: Like(`%${filter.name}%`) });
    }
    if (filter.contact) {
        conditions.push({ contact: Like(`%${filter.contact}%`) });
    }
    if (filter.address) {
        conditions.push({ address: Like(`%${filter.address}%`) });
    }
    if (filter.tariffPlan) {
        conditions.push({ tariffPlan: Like(`%${filter.tariffPlan}%`) });
    }

    try {
        const customers = await this.customerRepository.find({
            where: conditions,
        });

        return customers;
    } catch (error) {
        this.logger.error('Error fetching customers', error);
        throw new NotFoundException('Customers not found', error);
    }
}

}