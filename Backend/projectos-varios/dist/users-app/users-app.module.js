"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const users_app_entity_1 = require("./users-app.entity");
const users_app_controller_1 = require("./users-app.controller");
const shared_module_1 = require("../shared/shared.module");
let UserAppModule = class UserAppModule {
};
UserAppModule = __decorate([
    common_1.Module({
        imports: [shared_module_1.SharedModule, typeorm_1.TypeOrmModule.forFeature([users_app_entity_1.UserApp])],
        controllers: [users_app_controller_1.UserAppController],
        exports: [typeorm_1.TypeOrmModule],
    })
], UserAppModule);
exports.UserAppModule = UserAppModule;
//# sourceMappingURL=users-app.module.js.map