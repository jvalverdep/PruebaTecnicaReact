import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './category.entity';
import { CategoryController } from './categorycontroller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Category])],
  controllers: [CategoryController],
  exports: [TypeOrmModule],
})
export class CategoryModule {}
