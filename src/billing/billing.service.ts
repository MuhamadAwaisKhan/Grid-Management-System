// src/billing/billing.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { BillingEntity } from './billing.entity';
import { CreateBillingDto } from './dto/billing.dto';

@Injectable()
export class BillingService {
  constructor(
    @InjectRepository(BillingEntity)
    private readonly billingRepository: Repository<BillingEntity>,
  ) {}

  async create(createBillingDto: CreateBillingDto): Promise<BillingEntity> {
    const billing = this.billingRepository.create(createBillingDto);
    return await this.billingRepository.save(billing);
  }

  async findAll(): Promise<BillingEntity[]> {
    return await this.billingRepository.find();
  }

  async findOne(id: number): Promise<BillingEntity> {
    return await this.billingRepository.findOne({where:{billingId:id}});
  }

  async update(id: number, updateBillingDto: CreateBillingDto): Promise<BillingEntity> {
    const billing = await this.billingRepository.findOne({where:{billingId:id}});
    if (!billing) {
      throw new Error('Billing not found');
    }

    this.billingRepository.merge(billing, updateBillingDto);
    return await this.billingRepository.save(billing);
  }

  async remove(id: number): Promise<void> {
    await this.billingRepository.delete(id);
  }
}
