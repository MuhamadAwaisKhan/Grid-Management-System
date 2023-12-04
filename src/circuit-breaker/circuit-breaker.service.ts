// src/circuit-breaker/circuit-breaker.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CircuitBreakerEntity } from './circuit-breaker.entity';
import { CreateCircuitBreakerDto } from './dto/circuit-breaker.dto';

@Injectable()
export class CircuitBreakerService {
  constructor(
    @InjectRepository(CircuitBreakerEntity)
    private readonly circuitBreakerRepository: Repository<CircuitBreakerEntity>,
  ) {}

  async create(createCircuitBreakerDto: CreateCircuitBreakerDto): Promise<CircuitBreakerEntity> {
    const circuitBreaker = this.circuitBreakerRepository.create(createCircuitBreakerDto);
    return await this.circuitBreakerRepository.save(circuitBreaker);
  }

  async findAll(): Promise<CircuitBreakerEntity[]> {
    return await this.circuitBreakerRepository.find();
  }

  async findOne(id: number): Promise<CircuitBreakerEntity> {
    return await this.circuitBreakerRepository.findOne({where:{breakerId:id}});
  }

  async update(id: number, updateCircuitBreakerDto: CreateCircuitBreakerDto): Promise<CircuitBreakerEntity> {
    const circuitBreaker = await this.circuitBreakerRepository.findOne({where:{breakerId:id}});
    if (!circuitBreaker) {
      throw new Error('CircuitBreaker not found');
    }

    this.circuitBreakerRepository.merge(circuitBreaker, updateCircuitBreakerDto);
    return await this.circuitBreakerRepository.save(circuitBreaker);
  }

  async remove(id: number): Promise<void> {
    await this.circuitBreakerRepository.delete(id);
  }
}
