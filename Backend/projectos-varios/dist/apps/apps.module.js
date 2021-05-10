"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const apps_service_1 = require("./apps.service");
const apps_controller_1 = require("./apps.controller");
const apps_entity_1 = require("./apps.entity");
const typeorm_2 = require("@nestjs/typeorm");
let AppsModule = class AppsModule {
};
AppsModule = __decorate([
    common_1.Module({
        imports: [typeorm_2.TypeOrmModule.forFeature([apps_entity_1.Application])],
        providers: [apps_service_1.AppsService],
        controllers: [apps_controller_1.AppsController],
        exports: [typeorm_2.TypeOrmModule, apps_service_1.AppsService],
    })
], AppsModule);
exports.AppsModule = AppsModule;
//# sourceMappingURL=apps.module.js.map