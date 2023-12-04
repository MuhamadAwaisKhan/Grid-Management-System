// src/power-meter/power-meter.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PowerMeterEntity } from './power-meter.entity';
import { CreatePowerMeterDto } from './dto/power-meter.dto';

@Injectable()
export class PowerMeterService {
  constructor(
    @InjectRepository(PowerMeterEntity)
    private readonly powerMeterRepository: Repository<PowerMeterEntity>,
  ) {}

  async create(createPowerMeterDto: CreatePowerMeterDto): Promise<PowerMeterEntity> {
    const powerMeter = this.powerMeterRepository.create(createPowerMeterDto);
    return await this.powerMeterRepository.save(powerMeter);
  }

  async findAll(): Promise<PowerMeterEntity[]> {
    return await this.powerMeterRepository.find();
  }

  async findOne(id: number): Promise<PowerMeterEntity> {
    return await this.powerMeterRepository.findOne({where:{meterid:id}});
  }

  async update(id: number, updatePowerMeterDto: CreatePowerMeterDto): Promise<PowerMeterEntity> {
    const powerMeter = await this.powerMeterRepository.findOne({where:{meterid:id}});
    if (!powerMeter) {
      throw new Error('PowerMeter not found');
    }

    this.powerMeterRepository.merge(powerMeter, updatePowerMeterDto);
    return await this.powerMeterRepository.save(powerMeter);
  }

  async remove(id: number): Promise<void> {
    await this.powerMeterRepository.delete(id);
  }
}
