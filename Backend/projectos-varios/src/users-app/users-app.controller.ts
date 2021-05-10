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
  import { UserApp } from './users-app.entity';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import { ApiBearerAuth, ApiTags, ApiResponse } from '@nestjs/swagger';
  import { tags } from '../shared/utils';
  
 // @UseGuards(JwtAuthGuard)
  @Controller('UserApp')
  export class UserAppController {
    constructor(private readonly sharedService: SharedService) {}
  
    @ApiBearerAuth()
    @ApiTags(tags.UserApp)
    @ApiResponse({status: 200, type: UserApp, isArray: true, description: 'Returns UserApp searched'})
    @Get()
    async findAll(@Query() query, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.findAll('UserApp', query));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.UserApp)
    @ApiResponse({status: 201, type: UserApp, isArray: false, description: 'Returns UserApp created'})
    @Post()
    async create(@Body() value: UserApp, @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.save('UserApp', value));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.UserApp)
    @ApiResponse({status: 201, type: UserApp, isArray: true, description: 'Returns UserApp created' })
    @Post('clearAndUpdate')
    async createMany(@Body() value: UserApp[], @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.clearAndUpdate('UserApp', value));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.UserApp)
    @ApiResponse({status: 200, type: UserApp, isArray: false, description: 'Returns UserApp deleted'})
    @Delete(':id')
    async delete(@Param('id') id: number, @Res() res: Response) {
      res.status(HttpStatus.OK).json([await this.sharedService.remove('UserApp',id)]);
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.UserApp)
    @ApiResponse({status: 200, type: UserApp, isArray: false, description: 'Returns UserApp updated'})
    @Put()
    async update(@Body() value: UserApp, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.save('UserApp', value));
    }
  }
  
