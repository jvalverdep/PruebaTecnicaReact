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
  import { Category } from './category.entity';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import { ApiBearerAuth, ApiTags, ApiResponse } from '@nestjs/swagger';
  import { tags } from '../shared/utils';
  
 // @UseGuards(JwtAuthGuard)
  @Controller('Category')
  export class CategoryController {
    constructor(private readonly sharedService: SharedService) {}
  
    @ApiBearerAuth()
    @ApiTags(tags.Category)
    @ApiResponse({status: 200, type: Category, isArray: true, description: 'Returns Category searched'})
    @Get()
    async findAll(@Query() query, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.findAll('Category', query));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Category)
    @ApiResponse({status: 201, type: Category, isArray: false, description: 'Returns Category created'})
    @Post()
    async create(@Body() value: Category, @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.save('Category', value));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Category)
    @ApiResponse({status: 201, type: Category, isArray: true, description: 'Returns Category created' })
    @Post('clearAndUpdate')
    async createMany(@Body() value: Category[], @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.clearAndUpdate('Category', value));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Category)
    @ApiResponse({status: 200, type: Category, isArray: false, description: 'Returns Category deleted'})
    @Delete(':id')
    async delete(@Param('id') id: number, @Res() res: Response) {
      res.status(HttpStatus.OK).json([await this.sharedService.remove('Category',id)]);
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Category)
    @ApiResponse({status: 200, type: Category, isArray: false, description: 'Returns Category updated'})
    @Put()
    async update(@Body() value: Category, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.save('Category', value));
    }
  }
  
