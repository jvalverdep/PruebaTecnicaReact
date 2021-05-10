import { Connection } from 'typeorm';
export declare class SharedService {
    private readonly connection;
    constructor(connection: Connection);
    findAll(entityClass: string, query: any): Promise<any>;
    save(entityClass: string, value: any): Promise<any>;
    remove(entityClass: string, idT: any): Promise<any>;
    clearAndUpdate(entityClass: string, values: any): Promise<any>;
    procedure(query: any): Promise<any>;
}
