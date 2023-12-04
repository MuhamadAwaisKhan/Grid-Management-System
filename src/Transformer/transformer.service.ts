// src/transformer/transformer.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransformerEntity } from './transformer.entity';
import { CreateTransformerDto } from './dto/transformer.dto';

@Injectable()
export class TransformerService {
  constructor(
    @InjectRepository(TransformerEntity)
    private readonly transformerRepository: Repository<TransformerEntity>,
  ) {}

  async create(createTransformerDto: CreateTransformerDto): Promise<TransformerEntity> {
    const transformer = this.transformerRepository.create(createTransformerDto);
    return await this.transformerRepository.save(transformer);
  }

  async findAll(): Promise<TransformerEntity[]> {
    return await this.transformerRepository.find();
  }

  async findOne(id: number): Promise<TransformerEntity> {
    return await this.transformerRepository.findOne({ where:{transformerId:id}});
  }

  async update(id: number, updateTransformerDto: CreateTransformerDto): Promise<TransformerEntity> {
    const transformer = await this.transformerRepository.findOne({ where:{transformerId:id}});
    if (!transformer) {
      throw new Error('Transformer not found');
    }

    this.transformerRepository.merge(transformer, updateTransformerDto);
    return await this.transformerRepository.save(transformer);
  }

  async remove(id: number): Promise<void> {
    await this.transformerRepository.delete(id);
  }
}
