// src/GridStation/grid-station.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { GridStationEntity } from './grid-station.entity';
import { CreateGridStationDto } from './dto/grid-station.dto';
import { PowerSupplierEntity } from 'src/PowerSupplier/power-supplier.entity';

@Injectable()
export class GridStationService {
  constructor(
    @InjectRepository(GridStationEntity)
    private readonly gridStationRepository: Repository<GridStationEntity>,
    @InjectRepository(PowerSupplierEntity)
    private readonly powerSupplierRepository: Repository<PowerSupplierEntity>,
  ) {}

  async create(
    createGridStationDto: CreateGridStationDto,
    powerSupplierId: number, // Accept gridStationId as an argument
  ): Promise<PowerSupplierEntity> {
    const createdGridStation = this.gridStationRepository.create(
      createGridStationDto,
    );

    if (powerSupplierId) {
      const powerSupplier = await this.powerSupplierRepository.findOneBy({supplierId: powerSupplierId});
      if (!powerSupplier) {
        throw new Error('GridStation not found');
      }

      createdGridStation.supplier = powerSupplier;
    }

    return await this.powerSupplierRepository.save(createdGridStation);
  }

  async findAll(): Promise<GridStationEntity[]> {
    return await this.gridStationRepository.find({
      relations: ['supplier'],
    });
  }

  async findOne(id: number) {
    return this.gridStationRepository.findOne({ where: { gridId: id } });
  }

  async update(id: number, updateGridStationDto: CreateGridStationDto): Promise<GridStationEntity> {
    const gridStation = await this.gridStationRepository.findOne({where: {gridId: id}});
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