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
const typeorm_2 = require("typeorm");
const swagger_2 = require("@nestjs/swagger");
let Application = class Application {
};
__decorate([
    swagger_2.ApiProperty(),
    typeorm_2.PrimaryGeneratedColumn(),
    __metadata("design:type", Number)
], Application.prototype, "id", void 0);
__decorate([
    swagger_2.ApiProperty(),
    typeorm_2.Column(),
    __metadata("design:type", String)
], Application.prototype, "applicationName", void 0);
__decorate([
    swagger_2.ApiProperty(),
    typeorm_2.Column(),
    __metadata("design:type", String)
], Application.prototype, "key", void 0);
Application = __decorate([
    typeorm_2.Entity()
], Application);
exports.Application = Application;
//# sourceMappingURL=apps.entity.js.map