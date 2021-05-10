import {
  Controller,
  Request,
  Post,
  UseGuards,
  Get,
  Body,
} from '@nestjs/common';
import { LocalAuthGuard } from './auth/local-auth.guard';
import { AuthService } from './auth/auth.service';
import { JwtAuthGuard } from './auth/jwt-auth.guard';
import { AppsService } from './apps/apps.service';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { User } from './shared/user';

@Controller()
export class AppController {
  constructor(
    private readonly authService: AuthService,
    private readonly appsService: AppsService,
  ) {}

  @ApiTags('Login')
  @UseGuards(LocalAuthGuard)
  @Post('auth/login')
  async login(@Body() body: User) {
    const app = await this.appsService.findAll({
      applicationName: body.username,
      key: body.password,
    });
    return this.authService.login(app[0]);
  }

  @ApiBearerAuth()
  @ApiTags('Applications')
  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
