// src/grid-station/grid-station.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GridStationEntity } from './grid-station.entity';
import { CreateGridStationDto } from './dto/grid-station.dto';

@Injectable()
export class GridStationService {
  constructor(
    @InjectRepository(GridStationEntity)
    private readonly gridStationRepository: Repository<GridStationEntity>,
  ) {}

  async create(createGridStationDto: CreateGridStationDto): Promise<GridStationEntity> {
    const gridStation = this.gridStationRepository.create(createGridStationDto);
    return await this.gridStationRepository.save(gridStation);
  }

  async findAll(): Promise<GridStationEntity[]> {
    return await this.gridStationRepository.find();
  }

  async findOne(id: number) {
    return this.gridStationRepository.findOne({ where: { gridId: id } });
  }

  async update(id: number, updateGridStationDto: CreateGridStationDto): Promise<GridStationEntity> {
    const gridStation = await this.gridStationRepository.findOne({ where: { gridId:id  } });
    if (!gridStation) {
      throw new Error('GridStation not found');
    }

    this.gridStationRepository.merge(gridStation, updateGridStationDto);
    return await this.gridStationRepository.save(gridStation);
  }

  async remove(id: number): Promise<void> {
    await this.gridStationRepository.delete(id);
  }
}
