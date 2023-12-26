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
  ): Promise<object> {
    const createdGridStation =
      this.gridStationRepository.create(createGridStationDto);

    if (powerSupplierId) {
      const powerSupplier = await this.powerSupplierRepository.findOneBy({
        supplierId: powerSupplierId,
      });
      if (!powerSupplier) {
        throw new Error('GridStation not found');
      }

      createdGridStation.supplier = powerSupplier;
    }

    console.log('createdGridStation -> ', createdGridStation);

    // return {message: "In Development"}

    return await this.gridStationRepository
      .save(createdGridStation)
      .then((res) => {
        return {
          message: 'Grid Station Created Successfully',
          data: res,
        };
      })
      .catch((err) => {
        return {
          message: 'Grid Station Created Successfully',
          data: null,
          error: err,
        };
      });
  }

  async findAll(): Promise<GridStationEntity[]> {
    return await this.gridStationRepository.find({
      relations: ['supplier'],
    });
  }

  async findOne(id: number) {
    return this.gridStationRepository.findOne({ where: { gridId: id } ,relations: ['supplier'] });
  }

  async update(
    id: number,
    updateGridStationDto: CreateGridStationDto,
  ): Promise<GridStationEntity | object> {
    const gridStation = await this.gridStationRepository.findOne({
      where: { gridId: id },
    });
    if (!gridStation) {
      throw new Error('GridStation not found');
    }

    this.gridStationRepository.merge(gridStation, updateGridStationDto);
    const updatedgridstation= await this.gridStationRepository.save(gridStation);
    return {
      message: 'Grid Station Updated Successfully',
      data: updatedgridstation,
    };
  }

  async remove(id: number): Promise<object> {
    await this.gridStationRepository.delete(id);
    return {
      message: 'Grid Station Deleted Successfully',
    };
  }
}
