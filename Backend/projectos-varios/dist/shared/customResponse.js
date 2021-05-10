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
const swagger_2 = require("@nestjs/swagger");
class CustomResponse {
    constructor() {
        this.Error = false;
        this.ErrorDescription = '';
        this.UpdatedItems = 0;
        this.CreatedItems = 0;
    }
}
__decorate([
    swagger_2.ApiProperty(),
    __metadata("design:type", Boolean)
], CustomResponse.prototype, "Error", void 0);
__decorate([
    swagger_2.ApiProperty(),
    __metadata("design:type", String)
], CustomResponse.prototype, "ErrorDescription", void 0);
__decorate([
    swagger_2.ApiProperty(),
    __metadata("design:type", Number)
], CustomResponse.prototype, "UpdatedItems", void 0);
__decorate([
    swagger_2.ApiProperty(),
    __metadata("design:type", Number)
], CustomResponse.prototype, "CreatedItems", void 0);
exports.CustomResponse = CustomResponse;
//# sourceMappingURL=customResponse.js.map