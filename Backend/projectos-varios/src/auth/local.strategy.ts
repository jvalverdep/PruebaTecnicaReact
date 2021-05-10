import { Strategy } from 'passport-local';
import { PassportStrategy } from '@nestjs/passport';
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy) {
  constructor(private readonly authService: AuthService) {
    super();
  }

  async validate(username: string, password: string): Promise<any> {
    console.log('localStrategy: ' + username + ' ' + password);
    const app = await this.authService.validateApp(username, password);
    if (!app) {
      throw new UnauthorizedException();
    }
    return app;
  }
}
