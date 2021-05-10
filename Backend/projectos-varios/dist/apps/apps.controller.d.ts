import { AppsService } from './apps.service';
import { Response } from 'express';
import { Application } from './apps.entity';
export declare class AppsController {
    private readonly applicationService;
    constructor(applicationService: AppsService);
    findAll(query: any, res: Response): Promise<void>;
    create(application: Application, res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
    update(application: Application, res: Response): Promise<void>;
}
