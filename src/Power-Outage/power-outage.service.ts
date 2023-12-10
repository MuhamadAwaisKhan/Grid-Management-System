// src/power-outage/power-outage.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PowerOutageEntity } from './power-outage.entity';
import { CreatePowerOutageDto } from './dto/power-outage.dto';
import { FeederEntity } from 'src/feeder/feeder.entity';

@Injectable()
export class PowerOutageService {
  constructor(
    @InjectRepository(FeederEntity)
    private readonly feederRepository: Repository<FeederEntity>,

    @InjectRepository(PowerOutageEntity)
    private readonly powerOutageRepository: Repository<PowerOutageEntity>,
  ) {}

  async create(createPowerOutageDto: CreatePowerOutageDto,
    feederId: number, 
    ): Promise<PowerOutageEntity | object> {
    const createdPowerOutage = this.powerOutageRepository.create(createPowerOutageDto);
  if (feederId) {
    const feeder = await this.feederRepository.findOneBy({feederId: feederId});
    if (!feeder) {
      throw new Error('Feeder not found');
    }
    createdPowerOutage.feeder = feeder;
  }
  console.log('createdPowerOutage -> ', createdPowerOutage);
//   return {message: "In Development"}
  return await this.powerOutageRepository
    .save(createdPowerOutage)
    .then((res) => {
      return {
        message: 'PowerOutage Created Successfully',
        data: res,
      };
    })
    .catch((err) => {
      return {
        message: 'PowerOutage Created Successfully',
        data: null,
        error: err,
      };
    });
  }

  async findAll(): Promise<PowerOutageEntity[]> {
    return await this.powerOutageRepository.find({
      relations: ['feeder'],
    });
  }

  async findOne(id: number): Promise<PowerOutageEntity> {
    return await this.powerOutageRepository.findOne({where:{outageId:id}});
  }

  async update(id: number, updatePowerOutageDto: CreatePowerOutageDto): Promise<PowerOutageEntity> {
    const powerOutage = await this.powerOutageRepository.findOne({where:{outageId:id}});
    if (!powerOutage) {
      throw new Error('Power Outage not found');
    }

    this.powerOutageRepository.merge(powerOutage, updatePowerOutageDto);
    return await this.powerOutageRepository.save(powerOutage);
  }

  async remove(id: number): Promise<void> {
    await this.powerOutageRepository.delete(id);
  }
}
