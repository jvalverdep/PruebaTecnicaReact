import { Repository } from 'typeorm';
import { Application } from './apps.entity';
export declare class AppsService {
    private readonly applicationRepository;
    constructor(applicationRepository: Repository<Application>);
    findAll(query?: any): Promise<Application[]>;
    createOne(application: Application): Promise<Application>;
    remove(id: number): Promise<Application>;
    update(application: Application): Promise<Application>;
}
