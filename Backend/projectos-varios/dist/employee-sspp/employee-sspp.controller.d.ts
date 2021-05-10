import { Response } from 'express';
import { SharedService } from '../shared/shared.service';
import { EmployeeSSPP } from './employee-sspp.entity';
export declare class EmployeeSsppController {
    private readonly sharedService;
    constructor(sharedService: SharedService);
    findAll(query: any, res: Response): Promise<void>;
    create(value: EmployeeSSPP, res: Response): Promise<void>;
    createMany(value: EmployeeSSPP[], res: Response): Promise<void>;
    delete(id: number, res: Response): Promise<void>;
    update(value: EmployeeSSPP, res: Response): Promise<void>;
}
