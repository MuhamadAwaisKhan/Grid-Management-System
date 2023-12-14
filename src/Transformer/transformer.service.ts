// src/transformer/transformer.service.ts

import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransformerEntity } from './transformer.entity';
import { CreateTransformerDto } from './dto/transformer.dto';
import { FeederEntity } from 'src/feeder/feeder.entity';

@Injectable()
export class TransformerService {
  constructor(
    @InjectRepository(FeederEntity)
    private readonly feederRepository: Repository<FeederEntity>,
 
    @InjectRepository(TransformerEntity)
    private readonly transformerRepository: Repository<TransformerEntity>,
  ) {}

  async create(createTransformerDto: CreateTransformerDto,
    feederId: number,
    ): Promise<TransformerEntity |object> {
      console.log('createTransformerDto -> ', createTransformerDto);
  
      let createdTransformer = this.transformerRepository.create(createTransformerDto);
      console.log('createdTransformer -> ', createdTransformer);
      if (feederId) {
      const feeder = await this.feederRepository.findOneBy({feederId:feederId});
      if (!feeder) {
        throw new Error('Feeder not found');
      }
      
      createdTransformer.feeder1 = feeder; }
    console.log('createdTransformer -> ', createdTransformer);
    // return {message: "In Development"}
    return await this.transformerRepository
      .save(createdTransformer)
      .then((res) => {
        return {
          message: 'Transformer Created Successfully',
          data: res,
        };
      })
      .catch((err) => {
        return {
          message: 'Transformer Created Successfully',
          data: null,
          error: err,
        };
      });
    }

  async findAll(): Promise<TransformerEntity[]> {
    return await this.transformerRepository.find({
      relations: ['feeder1','meter'],
    });
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
