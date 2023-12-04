import { TypeOrmModule } from "@nestjs/typeorm";
import { Module } from "@nestjs/common";
import { CircuitBreakerEntity } from "./circuit-breaker.entity";
import { CircuitBreakerController } from "./circuit-breaker.controller";
import { CircuitBreakerService } from "./circuit-breaker.service";

@ Module({
    imports: [TypeOrmModule.forFeature([CircuitBreakerEntity])],
    controllers: [CircuitBreakerController],
    providers: [CircuitBreakerService],
  })
  export class CircuitModule {}
  