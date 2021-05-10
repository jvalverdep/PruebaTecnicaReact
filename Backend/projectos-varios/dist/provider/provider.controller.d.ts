import { Response } from 'express';
import { SharedService } from '../shared/shared.service';
import { Provider } from './provider.entity';
export declare class ProviderController {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    findAll(query: any, res: Response): Promise<void>;
    create(value: Provider, res: Response): Promise<void>;
    createMany(value: Provider[], res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
    update(value: Provider, res: Response): Promise<void>;
}
