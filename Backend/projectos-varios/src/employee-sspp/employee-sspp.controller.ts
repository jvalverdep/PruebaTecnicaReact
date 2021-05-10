import {
    Controller,
    Get,
    Post,
    Body,
    Res,
    HttpStatus,
    Param,
    UseGuards,
    Delete,
    Put,
    Query,
  } from '@nestjs/common';
  import { Response } from 'express';
  import { SharedService } from '../shared/shared.service';
  import { EmployeeSSPP } from './employee-sspp.entity';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import { ApiBearerAuth, ApiTags, ApiResponse } from '@nestjs/swagger';
  import { tags } from '../shared/utils';
  
  @UseGuards(JwtAuthGuard)
  @Controller('employeeSSPP')
  export class EmployeeSsppController {
    constructor(private readonly sharedService: SharedService) {}
  
    @ApiBearerAuth()
    @ApiTags(tags.EMPLEADOSSSPP)
    @ApiResponse({status: 200, type: EmployeeSSPP, isArray: true, description: 'Returns EmployeeSSPP searched'})
    @Get()
    async findAll(@Query() query, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.findAll('EmployeeSSPP', query));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.EMPLEADOSSSPP)
    @ApiResponse({status: 201, type: EmployeeSSPP, isArray: false, description: 'Returns EmployeeSSPP created'})
    @Post()
    async create(@Body() value: EmployeeSSPP, @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.save('EmployeeSSPP', value));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.EMPLEADOSSSPP)
    @ApiResponse({status: 201, type: EmployeeSSPP, isArray: true, description: 'Returns EmployeeSSPP created' })
    @Post('clearAndUpdate')
    async createMany(@Body() value: EmployeeSSPP[], @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.clearAndUpdate('EmployeeSSPP', value));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.EMPLEADOSSSPP)
    @ApiResponse({status: 200, type: EmployeeSSPP, isArray: false, description: 'Returns EmployeeSSPP deleted'})
    @Delete(':id')
    async delete(@Param('id') id: number, @Res() res: Response) {
      res.status(HttpStatus.OK).json([await this.sharedService.remove('EmployeeSSPP',id)]);
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.EMPLEADOSSSPP)
    @ApiResponse({status: 200, type: EmployeeSSPP, isArray: false, description: 'Returns EmployeeSSPP updated'})
    @Put()
    async update(@Body() value: EmployeeSSPP, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.save('EmployeeSSPP', value));
    }
  }
  
