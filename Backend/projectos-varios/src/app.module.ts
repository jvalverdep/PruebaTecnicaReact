import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { AppController } from './app.controller';
import { AuthModule } from './auth/auth.module';
import { AppsModule } from './apps/apps.module';
import { SharedService } from './shared/shared.service';
import { SharedModule } from './shared/shared.module';
//import { EmployeeSsppModule } from './employee-sspp/employee-sspp.module';
import { UserAppModule } from './users-app/users-app.module';
import {TrademarkModule} from './trademark/trademark.module';
import {ProductModule} from './product/product.module'
import {CategoryModule} from './category/category.module'


@Module({
  imports: [
    TypeOrmModule.forRoot(),
    AuthModule,
    AppsModule,
    SharedModule,
    //EmployeeSsppModule,
    UserAppModule,
    TrademarkModule,
    ProductModule,
    CategoryModule,
    

  
  ],
  controllers: [AppController],
  providers: [SharedService],
})
export class AppModule {
  constructor(private readonly connection: Connection) {}
}
