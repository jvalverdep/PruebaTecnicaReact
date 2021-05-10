import { AuthService } from './auth/auth.service';
import { AppsService } from './apps/apps.service';
import { User } from './shared/user';
export declare class AppController {
    private readonly authService;
    private readonly appsService;
    constructor(authService: AuthService, appsService: AppsService);
    login(body: User): Promise<{
        access_token: string;
    }>;
    getProfile(req: any): any;
}
