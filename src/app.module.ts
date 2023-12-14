import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GridStationEntity } from './GridStation/grid-station.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GridStationModule } from './GridStation/grid-station.module';
import { submodule } from './Substation/substation.module';
import { AlarmLogEntity } from './AlarmLog/alarm-log.entity';
import { AssetInventoryEntity } from './AssetInventory/asset-inventory.entity';
import { authorize } from './Authorize/authorize.entity';
import { BillingEntity } from './billing/billing.entity';
import { CircuitBreakerEntity } from './circuit-breaker/circuit-breaker.entity';
import { CustomerEntity } from './customer/customer.entity';
import { EmployeeEntity } from './employee/employee.entity';
import { EventLogEntity } from './Eventlog/event-log.entity';
import { FaultEntity } from './fault/fault.entity';
import { FeederEntity } from './feeder/feeder.entity';
import { MaintenanceLogEntity } from './Maintenance-Log/maintenance-log.entity';
import { PowerOutageEntity } from './Power-Outage/power-outage.entity';
import { PowerMeterEntity } from './powermeter/power-meter.entity';
import { PowerSupplierEntity } from './PowerSupplier/power-supplier.entity';
import { ScheduleMaintenanceEntity } from './Schedule-Maintenance/schedule-maintenance.entity';
import { TransformerEntity } from './transformer/transformer.entity';
import { alarmmodule } from './AlarmLog/alarm-log.module';
import { AssetModule } from './AssetInventory/asset.module';
import { AuthorizeModule } from './Authorize/authorize.module';
import { billingmodule } from './billing/billing.module';
import { CircuitModule } from './circuit-breaker/circuit.module';
import { customermodule } from './customer/customer.module';
import { employeemodule } from './Employee/employee.module';
import { eventmodule } from './Eventlog/eventlog.module';
import { faultmodule } from './fault/fault.module';
import { feedermodule } from './feeder/feeder.module';
import { maintenancemodule } from './Maintenance-Log/maintenance.module';
import { poweroutagemodule } from './Power-Outage/powerout.module';
import { metermodule } from './powermeter/powermeter.module';
import { suppliermodule } from './PowerSupplier/powersupplier.module';
import { schedulemodule } from './Schedule-Maintenance/scmaintenance..module';
import { transformermodule } from './Transformer/transformer.module';
import { NewSubStationEntity } from './Substation/newsubstation.entity';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '123',
      database: 'grid',
      entities: [
        GridStationEntity,
      NewSubStationEntity,
        AlarmLogEntity,
        AssetInventoryEntity,
        authorize,
        BillingEntity,
        CircuitBreakerEntity,
        CustomerEntity,
        EmployeeEntity,
        EventLogEntity,
        FaultEntity,
        FeederEntity,
        MaintenanceLogEntity,
        PowerOutageEntity,
        PowerMeterEntity,
        PowerSupplierEntity,
        ScheduleMaintenanceEntity,
        TransformerEntity,
      ],
      synchronize: true,
      
    }),
    GridStationModule,
    submodule,
    alarmmodule,
    AssetModule,
    AuthorizeModule,
    billingmodule,
    CircuitModule,
    customermodule,
    employeemodule,
    eventmodule,
    faultmodule,
    feedermodule,
    maintenancemodule,
    poweroutagemodule,
    metermodule,
    suppliermodule,
    schedulemodule,
    transformermodule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
