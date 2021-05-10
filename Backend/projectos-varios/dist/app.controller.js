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
const local_auth_guard_1 = require("./auth/local-auth.guard");
const auth_service_1 = require("./auth/auth.service");
const jwt_auth_guard_1 = require("./auth/jwt-auth.guard");
const apps_service_1 = require("./apps/apps.service");
const swagger_2 = require("@nestjs/swagger");
const user_1 = require("./shared/user");
let AppController = class AppController {
    constructor(authService, appsService) {
        this.authService = authService;
        this.appsService = appsService;
    }
    async login(body) {
        const app = await this.appsService.findAll({
            applicationName: body.username,
            key: body.password,
        });
        return this.authService.login(app[0]);
    }
    getProfile(req) {
        return req.user;
    }
};
__decorate([
    swagger_2.ApiTags('Login'),
    common_1.UseGuards(local_auth_guard_1.LocalAuthGuard),
    common_1.Post('auth/login'),
    __param(0, common_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [user_1.User]),
    __metadata("design:returntype", Promise)
], AppController.prototype, "login", null);
__decorate([
    swagger_2.ApiBearerAuth(),
    swagger_2.ApiTags('Applications'),
    common_1.UseGuards(jwt_auth_guard_1.JwtAuthGuard),
    common_1.Get('profile'),
    __param(0, common_1.Request()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AppController.prototype, "getProfile", null);
AppController = __decorate([
    common_1.Controller(),
    __metadata("design:paramtypes", [auth_service_1.AuthService,
        apps_service_1.AppsService])
], AppController);
exports.AppController = AppController;
//# sourceMappingURL=app.controller.js.map