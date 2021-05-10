import { Response } from 'express';
import { SharedService } from '../shared/shared.service';
import { UserApp } from './users-app.entity';
export declare class UserAppController {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    findAll(query: any, res: Response): Promise<void>;
    create(value: UserApp, res: Response): Promise<void>;
    createMany(value: UserApp[], res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
    update(value: UserApp, res: Response): Promise<void>;
}
