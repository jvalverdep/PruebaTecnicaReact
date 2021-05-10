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
  import { Product } from './product.entity';
  import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
  import { ApiBearerAuth, ApiTags, ApiResponse } from '@nestjs/swagger';
  import { tags } from '../shared/utils';
  
 // @UseGuards(JwtAuthGuard)
  @Controller('Product')
  export class ProductController {
    constructor(private readonly sharedService: SharedService) {}
  
    @ApiBearerAuth()
    @ApiTags(tags.Product)
    @ApiResponse({status: 200, type: Product, isArray: true, description: 'Returns Product searched'})
    @Get()
    async findAll(@Query() query, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.findAll('Product', query));
    }
    @ApiBearerAuth()
    @ApiTags(tags.Product)
    @ApiResponse({status: 201, type: Product, isArray: false, description: 'Returns Product created'})
    @Post()
    async create(@Body() value: Product, @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.save('Product', value));
    }
    @ApiBearerAuth()
    @ApiTags(tags.Product)
    @ApiResponse({status: 201, type: Product, isArray: true, description: 'Returns Product created' })
    @Post('clearAndUpdate')
    async createMany(@Body() value: Product[], @Res() res: Response) {
      res.status(HttpStatus.CREATED).json(await this.sharedService.clearAndUpdate('Product', value));
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Product)
    @ApiResponse({status: 200, type: Product, isArray: false, description: 'Returns Product deleted'})
    @Delete(':id')
    async delete(@Param('id') id: number, @Res() res: Response) {
      res.status(HttpStatus.OK).json([await this.sharedService.remove('Product',id)]);
    }
  
    @ApiBearerAuth()
    @ApiTags(tags.Product)
    @ApiResponse({status: 200, type: Product, isArray: false, description: 'Returns Product updated'})
    @Put()
    async update(@Body() value: Product, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.save('Product', value));
    }
    @ApiBearerAuth()
    @ApiTags(tags.Product)
    @ApiResponse({status: 200, type: Product, isArray: false, description: 'Returns Product Count'})
    @Get('procedure')
    async procedure(@Body() value: Product, @Res() res: Response) {
      res.status(HttpStatus.OK).json(await this.sharedService.procedure( value));
    }
  }
  
