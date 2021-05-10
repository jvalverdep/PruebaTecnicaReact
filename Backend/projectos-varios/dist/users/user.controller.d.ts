import { Response } from 'express';
import { SharedService } from '../shared/shared.service';
import { User } from './user.entity';
export declare class UserController {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    findAll(query: any, res: Response): Promise<void>;
    create(value: User, res: Response): Promise<void>;
    createMany(value: User[], res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
    update(value: User, res: Response): Promise<void>;
}
