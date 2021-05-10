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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const apps_service_1 = require("./apps.service");
const apps_entity_1 = require("./apps.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_2 = require("@nestjs/swagger");
let AppsController = class AppsController {
    constructor(applicationService) {
        this.applicationService = applicationService;
    }
    async findAll(query, res) {
        console.log(query);
        res
            .status(common_1.HttpStatus.OK)
            .json(await this.applicationService.findAll(query));
    }
    async create(application, res) {
        res
            .status(common_1.HttpStatus.CREATED)
            .json(await this.applicationService.createOne(application));
    }
    async delete(id, res) {
        res.status(common_1.HttpStatus.OK).json([await this.applicationService.remove(id)]);
    }
    async update(application, res) {
        res
            .status(common_1.HttpStatus.OK)
            .json(await this.applicationService.update(application));
    }
};
__decorate([
    swagger_2.ApiBearerAuth(),
    swagger_2.ApiTags('Applications'),
    common_1.Get(),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "findAll", null);
__decorate([
    swagger_2.ApiBearerAuth(),
    swagger_2.ApiTags('Applications'),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [apps_entity_1.Application, Object]),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "create", null);
__decorate([
    swagger_2.ApiBearerAuth(),
    swagger_2.ApiTags('Applications'),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "delete", null);
__decorate([
    swagger_2.ApiBearerAuth(),
    swagger_2.ApiTags('Applications'),
    common_1.Put(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [apps_entity_1.Application, Object]),
    __metadata("design:returntype", Promise)
], AppsController.prototype, "update", null);
AppsController = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Controller('apps'),
    __metadata("design:paramtypes", [apps_service_1.AppsService])
], AppsController);
exports.AppsController = AppsController;
//# sourceMappingURL=apps.controller.js.map