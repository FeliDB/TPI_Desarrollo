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
exports.statusEntity = void 0;
const typeorm_1 = require("typeorm");
const delivery_entity_1 = require("./delivery.entity");
let statusEntity = class statusEntity extends typeorm_1.BaseEntity {
    idStatus;
    status;
    deliveries;
};
exports.statusEntity = statusEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], statusEntity.prototype, "idStatus", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], statusEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => delivery_entity_1.deliveryEntity, (delivery) => delivery.status),
    __metadata("design:type", Array)
], statusEntity.prototype, "deliveries", void 0);
exports.statusEntity = statusEntity = __decorate([
    (0, typeorm_1.Entity)('Status')
], statusEntity);
//# sourceMappingURL=status.entitiy.js.map