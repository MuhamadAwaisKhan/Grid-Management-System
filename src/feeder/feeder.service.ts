// src/feeder/feeder.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FeederEntity } from './feeder.entity';
import { CreateFeederDto } from './dto/feeder.dto';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';


@Injectable()
export class FeederService {
  constructor(
    @InjectRepository(NewSubStationEntity)
    private readonly substationRepository: Repository<NewSubStationEntity>,
    @InjectRepository(FeederEntity)
    private readonly feederRepository: Repository<FeederEntity>,
  ) {}

  async create(
    createFeederDto: CreateFeederDto,
    substationId: number,
  ): Promise<FeederEntity | object> {
    const createdFeeder = this.feederRepository.create(createFeederDto);
    if (substationId) {
      const substation = await this.substationRepository.findOneBy({
        id: substationId,
      });
      if (!substation) {
        throw new Error('Substation not found');
      }

      createdFeeder.substation = substation;
    }
    console.log('createdFeeder -> ', createdFeeder);
    // return {message: "In Development"}
    return await this.feederRepository
      .save(createdFeeder)
      .then((res) => {
        return {
          message: 'Feeder Created Successfully',
          data: res,
        };
      })
      .catch((err) => {
        return {
          message: 'Feeder Created Successfully',
          data: null,
          error: err,
        };
      });
  }

  async findAll(): Promise<FeederEntity[]> {
    return await this.feederRepository.find({
      relations: [
        'substation',
        'maintenanceLogs',
        'alarmLogs',
        'powerOutages',
        'breaker',
        'transformer',
      ],
    });
  }

  async findOne(id: number): Promise<FeederEntity> {
    return await this.feederRepository.findOne({ where: { feederId: id }, relations: [      'substation',       'maintenanceLogs',        'alarmLogs',        'powerOutages',        'breaker',        'transformer',      ] });
  }

  async update(
    id: number,
    updateFeederDto: CreateFeederDto,
  ): Promise<FeederEntity | object> {
    const feeder = await this.feederRepository.findOne({
      where: { feederId: id },
    });
    if (!feeder) {
      throw new Error('Feeder not found');
    }

    this.feederRepository.merge(feeder, updateFeederDto);
    const Updatedfeeder = await this.feederRepository.save(feeder);
    return {
      message: 'Feeder Updated Successfully',
      data: Updatedfeeder,
    };
  }

  async remove(id: number): Promise<object> {
    await this.feederRepository.delete(id);
    return { message: 'Feeder Deleted Successfully' };
  }
}
