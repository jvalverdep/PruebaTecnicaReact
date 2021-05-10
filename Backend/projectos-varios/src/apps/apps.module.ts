import { Module } from '@nestjs/common';
import { AppsService } from './apps.service';
import { AppsController } from './apps.controller';
import { Application } from './apps.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Application])],
  providers: [AppsService],
  controllers: [AppsController],
  exports: [TypeOrmModule, AppsService],
})
export class AppsModule {}
