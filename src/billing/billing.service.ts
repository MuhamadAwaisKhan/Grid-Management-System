// src/billing/billing.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingEntity } from './billing.entity';
import { CreateBillingDto } from './dto/billing.dto';
import { CustomerEntity } from 'src/customer/customer.entity';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
  
    @InjectRepository(BillingEntity)
    private readonly billingRepository: Repository<BillingEntity>,
  ) {}

  async create(createBillingDto: CreateBillingDto,
    customerId: number,
    ): Promise<BillingEntity | object > {
    const createdBilling = this.billingRepository.create(createBillingDto);
    if(customerId){
      const customer = await this.customerRepository.findOneBy({customerId:customerId});
      if (!customer) {
        throw new Error('Customer not found');
      }
      
      createdBilling.customer = customer; }
    console.log('createdBilling -> ', createdBilling);
    // return {message: "In Development"}
    return await this.billingRepository
      .save(createdBilling)
      .then((res) => {
        return {
          message: 'Billing Created Successfully',
          data: res,
        };
      })
      .catch((err) => {
        return {
          message: 'Billing Created Successfully',
          data: null,
          error: err,
        };
      });

  }

  async findAll(): Promise<BillingEntity[]> {
    return await this.billingRepository.find({ relations: ['customer']});
  }

  async findOne(id: number): Promise<BillingEntity> {
    return await this.billingRepository.findOne({where:{billingId:id}});
  }

  async update(id: number, updateBillingDto: CreateBillingDto): Promise<BillingEntity| object > {
    const billing = await this.billingRepository.findOne({where:{billingId:id}});
    if (!billing) {
      throw new Error('Billing not found');
    }

    this.billingRepository.merge(billing, updateBillingDto);
    const updatedbilling= await this.billingRepository.save(billing);
  return{message:"Billing Updated Successfully",data:updatedbilling};
  }

  async remove(id: number): Promise<object> {
    await this.billingRepository.delete(id);
    return {message:"Billing Deleted Successfully"}
  }
}
