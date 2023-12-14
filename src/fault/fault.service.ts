// src/fault/fault.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { FaultEntity } from './fault.entity';
import { CreateFaultDto } from './dto/fault.dto';
import { NewSubStationEntity } from 'src/Substation/newsubstation.entity';


@Injectable()
export class FaultService {
  constructor(
    @InjectRepository(NewSubStationEntity)
    private readonly substationRepository: Repository<NewSubStationEntity>,

    @InjectRepository(FaultEntity)
    private readonly faultRepository: Repository<FaultEntity>,
  ) {}

  async create(
    createFaultDto: CreateFaultDto,
    substationId: number, // Accept substationId as an argument
    ): Promise<FaultEntity |object> {
    const createdFault = this.faultRepository.create(createFaultDto);
  if (substationId) {
    const substation = await this.substationRepository.findOneBy(
      { id: substationId },
    );
    if (!substation) {
      throw new Error('Substation not found');
    }
     createdFault.substation = substation;
  }
  console.log('createdFault -> ', createdFault);
  // return {message: "In Development"}
  return await this.faultRepository
    .save(createdFault)
    .then((res) => {
      return {
        message: 'Fault Created Successfully',
        data: res,
      };
    })
    .catch((err) => {
      return {
        message: 'Fault Created Successfully',
        data: null,
        error: err,
      };
    });
  }

  async findAll(): Promise<FaultEntity[]> {
    return await this.faultRepository.find({ relations: ['substation']});
  }

  async findOne(id: number): Promise<FaultEntity> {
    return await this.faultRepository.findOne({ where: { faultId: id } });
  }

  async update(
    id: number,
    updateFaultDto: CreateFaultDto,
  ): Promise<FaultEntity | object> {
    const fault = await this.faultRepository.findOne({
      where: { faultId: id },
    });
    if (!fault) {
      throw new Error('Fault not found');
    }

    this.faultRepository.merge(fault, updateFaultDto);
    const updatedfault = await this.faultRepository.save(fault);
    return {
      message: 'Fault Updated Successfully',
      data: updatedfault,
    };
  }

  async remove(id: number): Promise<object> {
    await this.faultRepository.delete(id);
    return { message: 'Fault Deleted Successfully' };
  }
}
