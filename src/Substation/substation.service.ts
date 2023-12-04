// src/substation/substation.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubstationEntity } from './substation.entity';
import { CreateSubstationDto } from './dto/substation.dto';

@Injectable()
export class SubstationService {
  constructor(
    @InjectRepository(SubstationEntity)
    private readonly substationRepository: Repository<SubstationEntity>,
  ) {}

  async create(createSubstationDto: CreateSubstationDto): Promise<SubstationEntity> {
    const substation = this.substationRepository.create(createSubstationDto);
    return await this.substationRepository.save(substation);
  }

  async findAll(): Promise<SubstationEntity[]> {
    return await this.substationRepository.find();
  }

  async findOne(id: number): Promise<SubstationEntity> {
    return await this.substationRepository.findOne({ where: { substationId: id }});
  }

  async update(id: number, updateSubstationDto: CreateSubstationDto): Promise<SubstationEntity> {
    const substation = await this.substationRepository.findOne({ where: { substationId: id }});
    if (!substation) {
      throw new Error('Substation not found');
    }

    this.substationRepository.merge(substation, updateSubstationDto);
    return await this.substationRepository.save(substation);
  }

  async remove(id: number): Promise<void> {
    await this.substationRepository.delete(id);
  }
}
