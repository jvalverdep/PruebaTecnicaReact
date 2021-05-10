import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Trademark } from './trademark.entity';
import { TrademarkController } from './trademark.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Trademark])],
  controllers: [TrademarkController],
  exports: [TypeOrmModule],
})
export class TrademarkModule {}
