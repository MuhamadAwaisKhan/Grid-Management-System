import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { CircuitBreakerEntity } from "./circuit-breaker.entity";
import { CircuitBreakerController } from "./circuit-breaker.controller";
import { CircuitBreakerService } from "./circuit-breaker.service";
import { FeederEntity } from "src/feeder/feeder.entity";

@ Module({
    imports: [TypeOrmModule.forFeature([CircuitBreakerEntity,FeederEntity])],
    controllers: [CircuitBreakerController],
    providers: [CircuitBreakerService],
  })
  export class CircuitModule {}
  