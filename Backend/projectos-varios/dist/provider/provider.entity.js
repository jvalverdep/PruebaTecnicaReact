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
const typeorm_1 = require("typeorm");
const swagger_1 = require("@nestjs/swagger");
let Provider = class Provider {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], Provider.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "OrganCompras", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "Nombre", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "ContratistaNombre", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "Nif1", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "Calle", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "CodigoPostal", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "Telefono", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "Fax", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "Mail", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "ContactoPrincipal", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], Provider.prototype, "NumeroNatural", void 0);
Provider = __decorate([
    typeorm_1.Entity()
], Provider);
exports.Provider = Provider;
//# sourceMappingURL=provider.entity.js.map