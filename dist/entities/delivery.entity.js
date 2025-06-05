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
exports.deliveryEntity = void 0;
const typeorm_1 = require("typeorm");
const location_entity_1 = require("./location.entity");
const status_entitiy_1 = require("./status.entitiy");
let deliveryEntity = class deliveryEntity extends typeorm_1.BaseEntity {
    idDelivery;
    radius;
    personId;
    status;
    location;
    zone;
};
exports.deliveryEntity = deliveryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], deliveryEntity.prototype, "idDelivery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], deliveryEntity.prototype, "radius", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], deliveryEntity.prototype, "personId", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => status_entitiy_1.statusEntity, (status) => status.deliveries),
    __metadata("design:type", status_entitiy_1.statusEntity)
], deliveryEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => location_entity_1.locationEntity, (location) => location.deliveries),
    __metadata("design:type", location_entity_1.locationEntity)
], deliveryEntity.prototype, "location", void 0);
exports.deliveryEntity = deliveryEntity = __decorate([
    (0, typeorm_1.Entity)('Delivery')
], deliveryEntity);
//# sourceMappingURL=delivery.entity.js.map