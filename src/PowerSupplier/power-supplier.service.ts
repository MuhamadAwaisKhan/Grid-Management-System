// src/power-supplier/power-supplier.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PowerSupplierEntity } from './power-supplier.entity';
import { CreatePowerSupplierDto } from './dto/power-supplier.dto';

@Injectable()
export class PowerSupplierService {
  constructor(
    @InjectRepository(PowerSupplierEntity)
    private readonly powerSupplierRepository: Repository<PowerSupplierEntity>,
  ) {}

  async create(createPowerSupplierDto: CreatePowerSupplierDto): Promise<PowerSupplierEntity> {
    const powerSupplier = this.powerSupplierRepository.create(createPowerSupplierDto);
    return await this.powerSupplierRepository.save(powerSupplier);
  }

  async findAll(): Promise<PowerSupplierEntity[]> {
    return await this.powerSupplierRepository.find( { relations: ['gridstation']
  });
  }

  async findOne(id: number): Promise<PowerSupplierEntity> {
    return await this.powerSupplierRepository.findOne({where:{supplierId:id}});
  }s

  async update(id: number, updatePowerSupplierDto: CreatePowerSupplierDto): Promise<PowerSupplierEntity> {
    const powerSupplier = await this.powerSupplierRepository.findOne({where:{supplierId:id}});
    if (!powerSupplier) {
      throw new Error('Power Supplier not found');
    }

    this.powerSupplierRepository.merge(powerSupplier, updatePowerSupplierDto);
    return await this.powerSupplierRepository.save(powerSupplier);
  }

  async remove(id: number): Promise<void> {
    await this.powerSupplierRepository.delete(id);
  }
}
