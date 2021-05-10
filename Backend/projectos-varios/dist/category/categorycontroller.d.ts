import { Response } from 'express';
import { SharedService } from '../shared/shared.service';
import { Category } from './category.entity';
export declare class CategoryController {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    findAll(query: any, res: Response): Promise<void>;
    create(value: Category, res: Response): Promise<void>;
    createMany(value: Category[], res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
    update(value: Category, res: Response): Promise<void>;
}
