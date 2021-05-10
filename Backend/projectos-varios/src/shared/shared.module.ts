import { Module } from '@nestjs/common';
import { SharedService } from './shared.service';
import { TypeOrmModule } from '@nestjs/typeorm';


import { UserApp } from 'src/users-app/users-app.entity';
import {Trademark} from 'src/trademark/trademark.entity'
import {Category } from 'src/category/category.entity'
import {Product } from 'src/product/product.entity'
//import {Brands}  from 'src/employees-udf/brands.entity'
@Module({
    imports: [TypeOrmModule.forFeature([ UserApp,Trademark,Category,Product])],
    providers: [SharedService],
    exports: [TypeOrmModule, SharedService],
})
export class SharedModule {}
