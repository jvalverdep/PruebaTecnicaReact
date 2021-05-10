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
let EmployeeUDF = class EmployeeUDF {
};
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.PrimaryColumn(),
    __metadata("design:type", Number)
], EmployeeUDF.prototype, "id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Employee_Name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "IMP_Unit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Organizational_Unit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Position_Text", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeeUDF.prototype, "Company_Id", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Company", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Denom_Edif_MI", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "MI_Direction", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "MI_Provincia", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeeUDF.prototype, "PostalCode", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeeUDF.prototype, "Cost_Center", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Surname", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Second_Surname", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Name", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Mail", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeeUDF.prototype, "Number_Jefe2", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Name_Jefe2", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeeUDF.prototype, "Number_Jefe1", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Name_Jefe1", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeeUDF.prototype, "Number_RespUnit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Name_RespUnit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Mail_RespUnit", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeeUDF.prototype, "Number_DirectResp", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Name_DirectResp", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Last_Update_Date", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Fix_Phone", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Movil_Phone", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", Number)
], EmployeeUDF.prototype, "Movil_Extension", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Profile", void 0);
__decorate([
    swagger_1.ApiProperty(),
    typeorm_1.Column(),
    __metadata("design:type", String)
], EmployeeUDF.prototype, "Process", void 0);
EmployeeUDF = __decorate([
    typeorm_1.Entity()
], EmployeeUDF);
exports.EmployeeUDF = EmployeeUDF;
//# sourceMappingURL=employees-udf.entity.js.map