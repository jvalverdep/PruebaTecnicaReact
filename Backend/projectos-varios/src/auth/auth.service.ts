/* eslint-disable @typescript-eslint/camelcase */
import { Injectable } from '@nestjs/common';
import { AppsService } from '../apps/apps.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly appsService: AppsService,
    private readonly jwtService: JwtService,
  ) {}

  async validateApp(applicationName: string, key: string): Promise<any> {
    const app = await this.appsService.findAll({
      applicationName: applicationName,
      key: key,
    });
    
    if (app.length === 1) {
      const { key, ...result } = app[0];
      console.log(result);
      return result;
    }
    return null;
  }

  async login(app: any) {
    const payload = { applicationName: app.applicationName, id: app.id };
    console.dir(payload);
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
