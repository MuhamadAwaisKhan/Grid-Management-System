// src/billing/billing.controller.ts

import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes, ValidationPipe } from '@nestjs/common';
import { BillingService } from './billing.service';
import { CreateBillingDto } from './dto/billing.dto';
import { BillingEntity } from './billing.entity';
@UsePipes(ValidationPipe)
@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Post()
  async create(@Body() createBillingDto: CreateBillingDto): Promise<BillingEntity> {
    return this.billingService.create(createBillingDto);
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
  ): Promise<BillingEntity> {
    return this.billingService.update(+id, updateBillingDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.billingService.remove(+id);
  }
}
