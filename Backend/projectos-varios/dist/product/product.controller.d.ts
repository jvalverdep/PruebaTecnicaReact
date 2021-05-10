import { Response } from 'express';
import { SharedService } from '../shared/shared.service';
import { Product } from './product.entity';
export declare class ProductController {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    findAll(query: any, res: Response): Promise<void>;
    create(value: Product, res: Response): Promise<void>;
    createMany(value: Product[], res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
    update(value: Product, res: Response): Promise<void>;
    procedure(value: Product, res: Response): Promise<void>;
}
