import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserApp } from './users-app.entity';
import { UserAppController } from './users-app.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([UserApp])],
  controllers: [UserAppController],
  exports: [TypeOrmModule],
})
export class UserAppModule {}
