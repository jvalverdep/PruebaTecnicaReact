import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EmployeeSSPP } from './employee-sspp.entity';
import { EmployeeSsppController } from './employee-sspp.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([EmployeeSSPP])],
  controllers: [EmployeeSsppController],
  exports: [TypeOrmModule],
})
export class EmployeeSsppModule {}
