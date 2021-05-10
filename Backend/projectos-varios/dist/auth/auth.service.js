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
const apps_service_1 = require("../apps/apps.service");
const jwt_1 = require("@nestjs/jwt");
let AuthService = class AuthService {
    constructor(appsService, jwtService) {
        this.appsService = appsService;
        this.jwtService = jwtService;
    }
    async validateApp(applicationName, key) {
        const app = await this.appsService.findAll({
            applicationName: applicationName,
            key: key,
        });
        if (app.length === 1) {
            const { key, ...result } = app[0];
            console.log(result);
            return result;
        }
        return null;
    }
    async login(app) {
        const payload = { applicationName: app.applicationName, id: app.id };
        console.dir(payload);
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [apps_service_1.AppsService,
        jwt_1.JwtService])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map