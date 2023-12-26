// src/power-meter/power-meter.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PowerMeterEntity } from './power-meter.entity';
import { CreatePowerMeterDto } from './dto/power-meter.dto';

import { CustomerEntity } from 'src/customer/customer.entity';
import { NewTransformerEntity } from 'src/Transformer/newtransformer.entity';

@Injectable()
export class PowerMeterService {
  constructor(
    @InjectRepository(CustomerEntity)
    private readonly customerRepository: Repository<CustomerEntity>,
 
    @InjectRepository(NewTransformerEntity)
    private readonly transformerRepository: Repository<NewTransformerEntity>,
 
    @InjectRepository(PowerMeterEntity)
    private readonly powerMeterRepository: Repository<PowerMeterEntity>,
  ) {}

  async create(createPowerMeterDto: CreatePowerMeterDto,
    transformerId: number,
    customerId: number,

    ): Promise<PowerMeterEntity| object> {
    const createdPowerMeter = this.powerMeterRepository.create(createPowerMeterDto);
    if (transformerId) {
      const transformer = await this.transformerRepository.findOneBy({transformerId:transformerId});
      if (!transformer) {
        throw new Error('Transformer not found');
      }
      
      createdPowerMeter.transformer1 = transformer;
     }
      if(customerId){
        const customer = await this.customerRepository.findOneBy({customerId:customerId});
        if (!customer) {
          throw new Error('Customer not found');
        }
        
        createdPowerMeter.customer = customer; }
    console.log('createdPowerMeter -> ', createdPowerMeter);
    // return {message: "In Development"}
    return await this.powerMeterRepository
      .save(createdPowerMeter)
      .then((res) => {
        return {
          message: 'PowerMeter Created Successfully',
          data: res,
        };
      })
      .catch((err) => {
        return {
          message: 'PowerMeter Created Successfully',
          data: null,
          error: err,
        };
      }); }
  
  async findAll(): Promise<PowerMeterEntity[]> {
    return await this.powerMeterRepository.find({
      relations: ['transformer1','customer'],
    });
  }

  async findOne(id: number): Promise<PowerMeterEntity> {
    return await this.powerMeterRepository.findOne({where:{meterid:id}});
  }

  async update(id: number, updatePowerMeterDto: CreatePowerMeterDto): Promise<PowerMeterEntity | object > {
    const powerMeter = await this.powerMeterRepository.findOne({where:{meterid:id}, relations: ['transformer1','customer']});
    if (!powerMeter) {
      throw new Error('PowerMeter not found');
    }

    this.powerMeterRepository.merge(powerMeter, updatePowerMeterDto);
    const updatedmeter= await this.powerMeterRepository.save(powerMeter);
    return {
      message: 'PowerMeter updated successfully',
      data: updatedmeter
    }
  }

  async remove(id: number): Promise<object> {
    await this.powerMeterRepository.delete(id);
    return {
      message: 'PowerMeter deleted successfully'
    }
  }
}
