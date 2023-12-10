// src/substation/substation.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { SubstationEntity } from './substation.entity';
import { CreateSubstationDto } from './dto/substation.dto';
import { GridStationEntity } from 'src/GridStation/grid-station.entity';
import { CreateGridStationDto } from 'src/GridStation/dto/grid-station.dto';

@Injectable()
export class SubstationService {
  constructor(
    @InjectRepository(SubstationEntity)
    private readonly substationRepository: Repository<SubstationEntity>,
    @InjectRepository(GridStationEntity)
    private readonly gridStationRepository: Repository<GridStationEntity>,
  ) {}

  async create(
    createSubstationDto: CreateSubstationDto,
    gridStationId: number, // Accept gridStationId as an argument
  ): Promise<SubstationEntity | object> {
    const createdSubstation =
      this.substationRepository.create(createSubstationDto);

    if (gridStationId) {
      const gridStation = await this.gridStationRepository.findOneBy({
        gridId: gridStationId,
      });
      if (!gridStation) {
        throw new Error('GridStation not found');
      }

      createdSubstation.gridStation = gridStation;
    }

    console.log('createdSubstation -> ', createdSubstation);

    // return {message: "In Development"}

    return await this.substationRepository
      .save(createdSubstation)
      .then((res) => {
        return {
          message: 'Substation Created Successfully',
          data: res,
        };
      })
      .catch((err) => {
        return {
          message: 'Substation Created Successfully',
          data: null,
          error: err,
        };
      });
  }

  async findAll(): Promise<SubstationEntity[]> {
    return await this.substationRepository.find({
      relations: ['gridStation', 'transformer', 'faults', 'feeder','scheduledMaintenances','assetInventories','employees','eventLogs'],
    });
  }

  async findOne(id: number): Promise<SubstationEntity> {
    return await this.substationRepository.findOne({
      where: { substationId: id },
    });
  }

  async update(
    id: number,
    updateSubstationDto: CreateSubstationDto,
  ): Promise<SubstationEntity | object> {
    const substation = await this.substationRepository.findOne({
      where: { substationId: id },
    });
    if (!substation) {
      throw new Error('Substation not found');
    }

    this.substationRepository.merge(substation, updateSubstationDto);
    const updatedsubstation = await this.substationRepository.save(substation);
    return {
      message: 'Substation Updated Successfully',
      data: updatedsubstation,
    };
  }

  async remove(id: number): Promise<object> {
    await this.substationRepository.delete(id);
    return { message: 'Substation Deleted Successfully' };
  }
}
