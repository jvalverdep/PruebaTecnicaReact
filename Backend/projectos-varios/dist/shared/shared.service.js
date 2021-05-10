"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const customResponse_1 = require("./customResponse");
const typeorm_1 = require("typeorm");
let SharedService = class SharedService {
    constructor(connection) {
        this.connection = connection;
    }
    async findAll(entityClass, query) {
        const customResponse = new customResponse_1.CustomResponse();
        const queryRunner = this.connection.createQueryRunner();
        let result;
        await queryRunner.connect();
        try {
            await queryRunner.startTransaction();
            result = await queryRunner.manager.find(entityClass, query);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.log('ERROR');
            console.dir(err);
            customResponse.Error = true;
            customResponse.ErrorDescription = err;
            await queryRunner.rollbackTransaction();
            return customResponse;
        }
        finally {
            await queryRunner.release();
            return result;
        }
    }
    async save(entityClass, value) {
        const customResponse = new customResponse_1.CustomResponse();
        const queryRunner = this.connection.createQueryRunner();
        let result;
        await queryRunner.connect();
        try {
            await queryRunner.startTransaction();
            result = await queryRunner.manager.save(entityClass, value);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.log('ERROR');
            console.dir(err);
            customResponse.Error = true;
            customResponse.ErrorDescription = err;
            await queryRunner.rollbackTransaction();
            return customResponse;
        }
        finally {
            await queryRunner.release();
            return result;
        }
    }
    async remove(entityClass, idT) {
        const customResponse = new customResponse_1.CustomResponse();
        const queryRunner = this.connection.createQueryRunner();
        let result;
        await queryRunner.connect();
        try {
            await queryRunner.startTransaction();
            const entityToDelete = await queryRunner.manager.find(entityClass, idT);
            const entityToDelete2 = entityToDelete.filter(id => id == idT);
            console.log(entityToDelete);
            result = await queryRunner.manager.delete(entityClass, idT);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.log('ERROR');
            console.dir(err);
            customResponse.Error = true;
            customResponse.ErrorDescription = err;
            await queryRunner.rollbackTransaction();
            return customResponse;
        }
        finally {
            await queryRunner.release();
            return result;
        }
    }
    async clearAndUpdate(entityClass, values) {
        const customResponse = new customResponse_1.CustomResponse();
        const queryRunner = this.connection.createQueryRunner();
        let result;
        await queryRunner.connect();
        try {
            await queryRunner.startTransaction();
            await queryRunner.manager.clear(entityClass);
            result = await queryRunner.manager.save(entityClass, values);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.log('ERROR');
            console.dir(err);
            customResponse.Error = true;
            customResponse.ErrorDescription = err;
            await queryRunner.rollbackTransaction();
            return customResponse;
        }
        finally {
            await queryRunner.release();
            return result;
        }
    }
    async procedure(query) {
        const customResponse = new customResponse_1.CustomResponse();
        const queryRunner = this.connection.createQueryRunner();
        let result;
        await queryRunner.connect();
        try {
            await queryRunner.startTransaction();
            result = await queryRunner.manager.query('call jass.sp_get_products_by_brands()');
            console.log(result);
            await queryRunner.commitTransaction();
        }
        catch (err) {
            console.log('ERROR');
            console.dir(err);
            customResponse.Error = true;
            customResponse.ErrorDescription = err;
            await queryRunner.rollbackTransaction();
            return customResponse;
        }
        finally {
            await queryRunner.release();
            return result;
        }
    }
};
SharedService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [typeorm_1.Connection])
], SharedService);
exports.SharedService = SharedService;
//# sourceMappingURL=shared.service.js.map