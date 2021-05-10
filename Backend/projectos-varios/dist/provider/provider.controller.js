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
const shared_service_1 = require("../shared/shared.service");
const provider_entity_1 = require("./provider.entity");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const swagger_1 = require("@nestjs/swagger");
const utils_1 = require("../shared/utils");
let ProviderController = class ProviderController {
    constructor(sharedService) {
        this.sharedService = sharedService;
    }
    async findAll(query, res) {
        res.status(common_1.HttpStatus.OK).json(await this.sharedService.findAll('Provider', query));
    }
    async create(value, res) {
        res.status(common_1.HttpStatus.CREATED).json(await this.sharedService.save('Provider', value));
    }
    async createMany(value, res) {
        res.status(common_1.HttpStatus.CREATED).json(await this.sharedService.clearAndUpdate('Provider', value));
    }
    async delete(id, res) {
        res.status(common_1.HttpStatus.OK).json([await this.sharedService.remove('Provider', id)]);
    }
    async update(value, res) {
        res.status(common_1.HttpStatus.OK).json(await this.sharedService.save('Provider', value));
    }
};
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags(utils_1.tags.PROVIDER),
    swagger_1.ApiResponse({ status: 200, type: provider_entity_1.Provider, isArray: true, description: 'Returns Provider searched' }),
    common_1.Get(),
    __param(0, common_1.Query()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ProviderController.prototype, "findAll", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags(utils_1.tags.PROVIDER),
    swagger_1.ApiResponse({ status: 201, type: provider_entity_1.Provider, isArray: false, description: 'Returns Provider created' }),
    common_1.Post(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [provider_entity_1.Provider, Object]),
    __metadata("design:returntype", Promise)
], ProviderController.prototype, "create", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags(utils_1.tags.PROVIDER),
    swagger_1.ApiResponse({ status: 201, type: provider_entity_1.Provider, isArray: true, description: 'Returns Provider created' }),
    common_1.Post('clearAndUpdate'),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, Object]),
    __metadata("design:returntype", Promise)
], ProviderController.prototype, "createMany", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags(utils_1.tags.PROVIDER),
    swagger_1.ApiResponse({ status: 200, type: provider_entity_1.Provider, isArray: false, description: 'Returns Provider deleted' }),
    common_1.Delete(':id'),
    __param(0, common_1.Param('id')), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ProviderController.prototype, "delete", null);
__decorate([
    swagger_1.ApiBearerAuth(),
    swagger_1.ApiTags(utils_1.tags.PROVIDER),
    swagger_1.ApiResponse({ status: 200, type: provider_entity_1.Provider, isArray: false, description: 'Returns Provider updated' }),
    common_1.Put(),
    __param(0, common_1.Body()), __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [provider_entity_1.Provider, Object]),
    __metadata("design:returntype", Promise)
], ProviderController.prototype, "update", null);
ProviderController = __decorate([
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Controller('provider'),
    __metadata("design:paramtypes", [shared_service_1.SharedService])
], ProviderController);
exports.ProviderController = ProviderController;
//# sourceMappingURL=provider.controller.js.map