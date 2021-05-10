import { Response } from 'express';
import { SharedService } from '../shared/shared.service';
import { EmployeeUDF } from './employees-udf.entity';
export declare class EmployeesUdfController {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    private readonly tag;
    findAll(query: any, res: Response): Promise<void>;
    create(value: EmployeeUDF, res: Response): Promise<void>;
    createMany(value: EmployeeUDF[], res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
    update(value: EmployeeUDF, res: Response): Promise<void>;
}
