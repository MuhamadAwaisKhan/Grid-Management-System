import { TypeOrmModule } from "@nestjs/typeorm";

import { Module } from "@nestjs/common";
import { TransformerEntity } from "./transformer.entity";
import { TransformerController } from "./transformer.controller";
import { TransformerService } from "./transformer.service";



@Module({
    imports: [TypeOrmModule.forFeature([TransformerEntity])],
    controllers: [TransformerController],
    providers: [TransformerService],
  })
  export class transformermodule {}
  