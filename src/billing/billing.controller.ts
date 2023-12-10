// src/billing/billing.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/billing.dto';
import { BillingEntity } from './billing.entity';
import { CreateCustomerDto } from 'src/customer/dto/customer.dto';
@UsePipes(ValidationPipe)
@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post(':customerId')
  async create(
    @Body() createBillingDto: CreateBillingDto,
    @Param('customerId') customerId: number,
  ) {
    return this.billingService.create(createBillingDto, customerId);
  }
  
  @Get()
  async findAll(): Promise<BillingEntity[]> {
    return this.billingService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<BillingEntity> {
    return this.billingService.findOne(+id);
  }

  @Put(':id')
  async update(
    @Param('id') id: string,
    @Body() updateBillingDto: CreateBillingDto,
  ) {
    return this.billingService.update(+id, updateBillingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    return this.billingService.remove(+id);
  }
}
