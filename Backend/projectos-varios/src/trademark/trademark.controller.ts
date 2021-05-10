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
  import { Trademark } from './trademark.entity';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import { ApiBearerAuth, ApiTags, ApiResponse } from '@nestjs/swagger';
  import { tags } from '../shared/utils';
  
 @UseGuards(JwtAuthGuard)
  @Controller('Trademark')
  export class TrademarkController {
    constructor(private readonly sharedService: SharedService) {}
  
    @ApiBearerAuth()
    @ApiTags(tags.Trademark)
    @ApiResponse({status: 200, type: Trademark, isArray: true, description: 'Returns Trademark searched'})
    @Get()
    async findAll(@Query() query, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.findAll('Trademark', query));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Trademark)
    @ApiResponse({status: 201, type: Trademark, isArray: false, description: 'Returns Trademark created'})
    @Post()
    async create(@Body() value: Trademark, @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.save('Trademark', value));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Trademark)
    @ApiResponse({status: 201, type: Trademark, isArray: true, description: 'Returns Trademark created' })
    @Post('clearAndUpdate')
    async createMany(@Body() value: Trademark[], @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.clearAndUpdate('Trademark', value));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Trademark)
    @ApiResponse({status: 200, type: Trademark, isArray: false, description: 'Returns Trademark deleted'})
    @Delete(':id')
    async delete(@Param('id') id: number, @Res() res: Response) {
      console.log(this.sharedService);
      res.status(HttpStatus.OK).json([await this.sharedService.remove('Trademark',id)]);
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Trademark)
    @ApiResponse({status: 200, type: Trademark, isArray: false, description: 'Returns Trademark updated'})
    @Put()
    async update(@Body() value: Trademark, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.save('Trademark', value));
    }
  }
  
