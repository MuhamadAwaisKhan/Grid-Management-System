// src/feeder/feeder.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeederEntity } from './feeder.entity';
import { CreateFeederDto } from './dto/feeder.dto';

@Injectable()
export class FeederService {
  constructor(
    @InjectRepository(FeederEntity)
    private readonly feederRepository: Repository<FeederEntity>,
  ) {}

  async create(createFeederDto: CreateFeederDto): Promise<FeederEntity> {
    const feeder = this.feederRepository.create(createFeederDto);
    return await this.feederRepository.save(feeder);
  }

  async findAll(): Promise<FeederEntity[]> {
    return await this.feederRepository.find();
  }

  async findOne(id: number): Promise<FeederEntity> {
    return await this.feederRepository.findOne({where:{feederId:id}});
  }

  async update(id: number, updateFeederDto: CreateFeederDto): Promise<FeederEntity> {
    const feeder = await this.feederRepository.findOne({where:{feederId:id}});
    if (!feeder) {
      throw new Error('Feeder not found');
    }

    this.feederRepository.merge(feeder, updateFeederDto);
    return await this.feederRepository.save(feeder);
  }

  async remove(id: number): Promise<void> {
    await this.feederRepository.delete(id);
  }
}
