import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './product.entity';
import { ProductController } from './product.controller';
import { SharedModule } from 'src/shared/shared.module';

@Module({
  imports: [SharedModule, TypeOrmModule.forFeature([Product])],
  controllers: [ProductController],
  exports: [TypeOrmModule],
})
export class ProductModule {}
