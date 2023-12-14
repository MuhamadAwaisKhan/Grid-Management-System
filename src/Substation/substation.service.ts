// src/substation/substation.service.ts

import { Injectable } from '@nestjs/common';
import { InjectConnection, InjectRepository } from '@nestjs/typeorm';
import { Connection, Repository } from 'typeorm';
import { GridStationEntity } from 'src/GridStation/grid-station.entity';
import { CreateGridStationDto } from 'src/GridStation/dto/grid-station.dto';
import { connect } from 'http2';

import CreateSubstationDto from './dto/create_substation.dto';
import { NewSubStationEntity } from './newsubstation.entity';

@Injectable()
export class SubstationService {
  constructor(
    @InjectRepository(GridStationEntity)
    private gridStationRepository: Repository<GridStationEntity>,

    @InjectRepository(NewSubStationEntity)
    private newSubStationRepository: Repository<NewSubStationEntity>,
  ) {}

  async create(
    createSubstationDto: CreateSubstationDto,
    gridStationId: number, // Accept gridStationId as an argument
  ): Promise<NewSubStationEntity | object> {
    console.log('createSubstationDto -> ', createSubstationDto);


    let createdSubstation = this.newSubStationRepository.create(createSubstationDto);

    console.log("createdSubstation -> ", createdSubstation);
    
    // const connection = this.substationRepository.manager.connection;
    // const queryRunner = connection.createQueryRunner();

    // await queryRunner.connect();
    // await queryRunner.startTransaction();
    // // const createdSubstation =
    // //   this.substationRepository.create(createSubstationDto);

    // try {
    //   const result = await queryRunner.query(
    //     'INSERT INTO public."Substation"("substationId", name, capacity, "voltageLevel") VALUES ($1, $2, $3, $4);',
    //     [3, "test", "test", "test"],
    //   );

    //   console.log("result -> ", result);
      
    //  await queryRunner.commitTransaction();
    // } catch (err) {
    //   await queryRunner.rollbackTransaction();
    //   throw err;
    // } finally {
    //   await queryRunner.release();
    // }
    if (gridStationId) {
      const gridStation = await this.gridStationRepository.findOneBy({
        gridId: gridStationId,
      });
      if (!gridStation) {
        throw new Error('GridStation not found');
      }

      createdSubstation.gridStation = gridStation;
    }

    // console.log('createdSubstation -> ', createdSubstation);


    return await this.newSubStationRepository
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

  async findAll(): Promise<NewSubStationEntity[]> {
    return await this.newSubStationRepository.find({
      relations: [
        'gridStation',
        'transformer',
        'faults',
        'feeder',
        'scheduledMaintenances',
        'assetInventories',
        'employees',
        'eventLogs',
      ],
    });
  }

  async findOne(id: number): Promise<NewSubStationEntity> {
    return await this.newSubStationRepository.findOne({
      where: { id: id },
    });
  }

  async update(
    id: number,
    updateSubstationDto: CreateSubstationDto,
  ): Promise<NewSubStationEntity | object> {
    const substation = await this.newSubStationRepository.findOne({
      where: { id: id },
    });
    if (!substation) {
      throw new Error('Substation not found');
    }

    this.newSubStationRepository.merge(substation, updateSubstationDto);
    const updatedsubstation = await this.newSubStationRepository.save(substation);
    return {
      message: 'Substation Updated Successfully',
      data: updatedsubstation,
    };
  }

  async remove(id: number): Promise<object> {
    await this.newSubStationRepository.delete(id);
    return { message: 'Substation Deleted Successfully' };
  }
}
