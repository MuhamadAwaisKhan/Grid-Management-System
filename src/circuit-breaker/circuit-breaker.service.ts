// src/circuit-breaker/circuit-breaker.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CircuitBreakerEntity } from './circuit-breaker.entity';
import { CreateCircuitBreakerDto } from './dto/circuit-breaker.dto';
import { FeederEntity } from 'src/feeder/feeder.entity';
import { MaintenanceLogEntity } from 'src/Maintenance-Log/maintenance-log.entity';

@Injectable()
export class CircuitBreakerService {
  constructor(
    @InjectRepository(MaintenanceLogEntity)
    private readonly maintenanceLogRepository: Repository<MaintenanceLogEntity>,

    @InjectRepository(FeederEntity)
    private readonly feederRepository: Repository<FeederEntity>,
 
    @InjectRepository(CircuitBreakerEntity)
    private readonly circuitBreakerRepository: Repository<CircuitBreakerEntity>,
  ) {}

  async create(
    createCircuitBreakerDto: CreateCircuitBreakerDto,
    feederId: number, 
    mainId: number,
    ): Promise<CircuitBreakerEntity |object> {
    const 
      createdCircuitBreaker = this.circuitBreakerRepository.create(createCircuitBreakerDto);
    if (feederId) {
      const feeder = await this.feederRepository.findOneBy({feederId: feederId
      });
      if (!feeder) {
        throw new Error('Feeder not found');
      }

      createdCircuitBreaker.feeder = feeder; }
      
    
      if (mainId) {
        const main = await this.maintenanceLogRepository.findOneBy({ mainId: mainId });
        if (!main) {
          throw new Error('Maintenance Log not found');
        }
        createdCircuitBreaker.maintenanceLog = main;
      }
      console.log('createdCircuitBreaker -> ', createdCircuitBreaker);
      // return {message: "In Development"}
      return await this.circuitBreakerRepository
        .save(createdCircuitBreaker)
        .then((res) => {
          return {
            message: 'CircuitBreaker Created Successfully',
            data: res,
          };
        })
        .catch((err) => {
          return {
            message: 'CircuitBreaker Created Successfully',
            data: null,
            error: err,
          };
        });

  }

  async findAll(): Promise<CircuitBreakerEntity[]> {
    return await this.circuitBreakerRepository.find({ relations: ['feeder','maintenancelog']});
  }

  async findOne(id: number): Promise<CircuitBreakerEntity> {
    return await this.circuitBreakerRepository.findOne({where:{breakerId:id}, relations: ['feeder','maintenancelog']});
  }

  async update(id: number, updateCircuitBreakerDto: CreateCircuitBreakerDto): Promise<CircuitBreakerEntity |object> {
    const circuitBreaker = await this.circuitBreakerRepository.findOne({where:{breakerId:id}});
    if (!circuitBreaker) {
      throw new Error('CircuitBreaker not found');
    }

    this.circuitBreakerRepository.merge(circuitBreaker,updateCircuitBreakerDto );
    const updatedbreaker=await this.circuitBreakerRepository.save(circuitBreaker);
    return {message: "CircuitBreaker Updated Successfully", data: updatedbreaker}
  }

  async remove(id: number): Promise<object> {
    await this.circuitBreakerRepository.delete(id);
    return {message: "CircuitBreaker Deleted Successfully"}
  }
}
