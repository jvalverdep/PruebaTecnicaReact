import { Response } from 'express';
import { SharedService } from '../shared/shared.service';
import { Trademark } from './trademark.entity';
export declare class TrademarkController {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    findAll(query: any, res: Response): Promise<void>;
    create(value: Trademark, res: Response): Promise<void>;
    createMany(value: Trademark[], res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
    update(value: Trademark, res: Response): Promise<void>;
}
