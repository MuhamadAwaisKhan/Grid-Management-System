// src/fault/fault.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FaultEntity } from './fault.entity';
import { CreateFaultDto } from './dto/fault.dto';

@Injectable()
export class FaultService {
  constructor(
    @InjectRepository(FaultEntity)
    private readonly faultRepository: Repository<FaultEntity>,
  ) {}

  async create(createFaultDto: CreateFaultDto): Promise<FaultEntity> {
    const fault = this.faultRepository.create(createFaultDto);
    return await this.faultRepository.save(fault);
  }

  async findAll(): Promise<FaultEntity[]> {
    return await this.faultRepository.find();
  }

  async findOne(id: number): Promise<FaultEntity> {
    return await this.faultRepository.findOne({where:{faultId:id}});
  }

  async update(id: number, updateFaultDto: CreateFaultDto): Promise<FaultEntity> {
    const fault = await this.faultRepository.findOne({where:{faultId:id}});
    if (!fault) {
      throw new Error('Fault not found');
    }

    this.faultRepository.merge(fault, updateFaultDto);
    return await this.faultRepository.save(fault);
  }

  async remove(id: number): Promise<void> {
    await this.faultRepository.delete(id);
  }
}
