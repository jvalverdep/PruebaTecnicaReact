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
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const app_controller_1 = require("./app.controller");
const auth_module_1 = require("./auth/auth.module");
const apps_module_1 = require("./apps/apps.module");
const shared_service_1 = require("./shared/shared.service");
const shared_module_1 = require("./shared/shared.module");
const users_app_module_1 = require("./users-app/users-app.module");
const trademark_module_1 = require("./trademark/trademark.module");
const product_module_1 = require("./product/product.module");
const category_module_1 = require("./category/category.module");
let AppModule = class AppModule {
    constructor(connection) {
        this.connection = connection;
    }
};
AppModule = __decorate([
    common_1.Module({
        imports: [
            typeorm_1.TypeOrmModule.forRoot(),
            auth_module_1.AuthModule,
            apps_module_1.AppsModule,
            shared_module_1.SharedModule,
            users_app_module_1.UserAppModule,
            trademark_module_1.TrademarkModule,
            product_module_1.ProductModule,
            category_module_1.CategoryModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [shared_service_1.SharedService],
    }),
    __metadata("design:paramtypes", [typeorm_2.Connection])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map