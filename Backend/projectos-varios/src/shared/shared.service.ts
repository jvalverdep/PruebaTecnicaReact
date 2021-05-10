import { Injectable } from '@nestjs/common';
import { CustomResponse } from 'src/shared/customResponse';
import { Connection } from 'typeorm';

@Injectable()
export class SharedService {

  constructor(private readonly connection: Connection) {}
    
  async findAll(entityClass: string, query: any): Promise<any> {
    const customResponse: CustomResponse = new CustomResponse();
    const queryRunner = this.connection.createQueryRunner();
    let result: any;
    await queryRunner.connect();

    try {
        await queryRunner.startTransaction();
        result = await queryRunner.manager.find(entityClass, query);
        await queryRunner.commitTransaction();
    } catch (err) {
        console.log('ERROR');
        console.dir(err);
        customResponse.Error = true;
        customResponse.ErrorDescription = err;
        await queryRunner.rollbackTransaction();
        return customResponse;
    } finally {
        await queryRunner.release();
        return result;
    }

  }

  async save(entityClass: string, value: any): Promise<any> {
    const customResponse: CustomResponse = new CustomResponse();
    const queryRunner = this.connection.createQueryRunner();
    let result: any;
    await queryRunner.connect();

    try {
        await queryRunner.startTransaction();
        
        result = await queryRunner.manager.save(entityClass, value);
  
        await queryRunner.commitTransaction();
  
    } catch (err) {
        console.log('ERROR');
        console.dir(err);
        customResponse.Error = true;
        customResponse.ErrorDescription = err;
        await queryRunner.rollbackTransaction();
        return customResponse;
    } finally {
        await queryRunner.release();
        return result;
    }
  }

  async remove(entityClass: string, idT: any): Promise<any> {
    const customResponse: CustomResponse = new CustomResponse();
    const queryRunner = this.connection.createQueryRunner();
    let result: any;
    await queryRunner.connect();

    try {
        await queryRunner.startTransaction();
        const entityToDelete = await queryRunner.manager.find(entityClass, idT);
        const entityToDelete2 =  entityToDelete.filter(id =>id ==idT );
        console.log(entityToDelete);
        result = await queryRunner.manager.delete(entityClass, idT);
        await queryRunner.commitTransaction();
  
    } catch (err) {
        console.log('ERROR');
        console.dir(err);
        customResponse.Error = true;
        customResponse.ErrorDescription = err;
        await queryRunner.rollbackTransaction();
        return customResponse;
    } finally {
        await queryRunner.release();
        return result;
    }
  }
  async clearAndUpdate(entityClass: string, values): Promise<any> {
    const customResponse: CustomResponse = new CustomResponse();
    const queryRunner = this.connection.createQueryRunner();
    let result: any;
    await queryRunner.connect();

    try {
        await queryRunner.startTransaction();

        await queryRunner.manager.clear(entityClass);
        
        result = await queryRunner.manager.save(entityClass, values);
  
        await queryRunner.commitTransaction();
  
    } catch (err) {
        console.log('ERROR');
        console.dir(err);
        customResponse.Error = true;
        customResponse.ErrorDescription = err;
        await queryRunner.rollbackTransaction();
        return customResponse;
    } finally {
        await queryRunner.release();
        return result;
    }
  }

  async procedure( query: any): Promise<any> {
    const customResponse: CustomResponse = new CustomResponse();
    const queryRunner = this.connection.createQueryRunner();
    let result: any;
    await queryRunner.connect();

    try {
        await queryRunner.startTransaction();
        result = await queryRunner.manager.query( 'call jass.sp_get_products_by_brands()');
        console.log(result);
        await queryRunner.commitTransaction();
    } catch (err) {
        console.log('ERROR');
        console.dir(err);
        customResponse.Error = true;
        customResponse.ErrorDescription = err;
        await queryRunner.rollbackTransaction();
        return customResponse;
    } finally {
        await queryRunner.release();
        return result;
    }

  }

}
