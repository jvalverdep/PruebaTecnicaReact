import { AppsService } from '../apps/apps.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private readonly appsService;
    private readonly jwtService;
    constructor(appsService: AppsService, jwtService: JwtService);
    validateApp(applicationName: string, key: string): Promise<any>;
    login(app: any): Promise<{
        access_token: string;
    }>;
}
