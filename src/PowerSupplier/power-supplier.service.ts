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

  async create(createPowerSupplierDto: CreatePowerSupplierDto): Promise<PowerSupplierEntity|object> {
    const newPowerSupplier = this.powerSupplierRepository.create(createPowerSupplierDto);
    const powerSupplier = await this.powerSupplierRepository.save(newPowerSupplier);
    return { message: "Power Supplier Created Successfully", data: powerSupplier }
  }

  async findAll(): Promise<PowerSupplierEntity[]> {
    return await this.powerSupplierRepository.find({ relations: ['gridstation'] });
  }

  async findOne(id: number): Promise<PowerSupplierEntity> {
    return await this.powerSupplierRepository.findOne({where:{supplierId:id}});
  }s

  async update(id: number, updatePowerSupplierDto: CreatePowerSupplierDto): Promise<PowerSupplierEntity | object> {
    const existingPowerSupplier = await this.powerSupplierRepository.findOne({ where: { supplierId: id } });
    if (!existingPowerSupplier) {
      throw new Error('Power Supplier not found');
    }

    this.powerSupplierRepository.merge(existingPowerSupplier, updatePowerSupplierDto);
    const updatedPowerSupplier = await this.powerSupplierRepository.save(existingPowerSupplier);
    return { message: "Power Supplier Updated Successfully", data: updatedPowerSupplier }
  }

  async remove(id: number): Promise<object> {
    await this.powerSupplierRepository.delete(id);
    return { message: "Power Supplier Deleted Successfully" }
  }
}
