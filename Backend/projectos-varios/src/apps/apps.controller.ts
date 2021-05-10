import {
  HttpStatus,
  Controller,
  UseGuards,
  Post,
  Request,
  Body,
  Get,
  Query,
  Res,
  Delete,
  Put,
  Param,
} from '@nestjs/common';
import { AppsService } from './apps.service';
import { Response } from 'express';
import { Application } from './apps.entity';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';

@UseGuards(JwtAuthGuard)
@Controller('apps')
export class AppsController {
  constructor(private readonly applicationService: AppsService) {}

  @ApiBearerAuth()
  @ApiTags('Applications')
  @Get()
  async findAll(@Query() query, @Res() res: Response) {
    console.log(query);
    res
      .status(HttpStatus.OK)
      .json(await this.applicationService.findAll(query));
  }

  @ApiBearerAuth()
  @ApiTags('Applications')
  @Post()
  async create(@Body() application: Application, @Res() res: Response) {
    res
      .status(HttpStatus.CREATED)
      .json(await this.applicationService.createOne(application));
  }

  @ApiBearerAuth()
  @ApiTags('Applications')
  @Delete(':id')
  async delete(@Param('id') id: number, @Res() res: Response) {
    res.status(HttpStatus.OK).json([await this.applicationService.remove(id)]);
  }

  @ApiBearerAuth()
  @ApiTags('Applications')
  @Put()
  async update(@Body() application: Application, @Res() res: Response) {
    res
      .status(HttpStatus.OK)
      .json(await this.applicationService.update(application));
  }
}
