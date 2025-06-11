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
const zone_entity_1 = require("./zone.entity");
const location_entity_1 = require("./location.entity");
let deliveryEntity = class deliveryEntity {
    idDelivery;
    personId;
    radius;
    status;
    zones;
    location;
};
exports.deliveryEntity = deliveryEntity;
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], deliveryEntity.prototype, "idDelivery", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", Number)
], deliveryEntity.prototype, "personId", void 0);
__decorate([
    (0, typeorm_1.Column)('float'),
    __metadata("design:type", Number)
], deliveryEntity.prototype, "radius", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: "avaliable" }),
    __metadata("design:type", String)
], deliveryEntity.prototype, "status", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => zone_entity_1.zoneEntity, { nullable: true }),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], deliveryEntity.prototype, "zones", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => location_entity_1.locationEntity),
    (0, typeorm_1.JoinColumn)({ name: 'location' }),
    __metadata("design:type", location_entity_1.locationEntity)
], deliveryEntity.prototype, "location", void 0);
exports.deliveryEntity = deliveryEntity = __decorate([
    (0, typeorm_1.Entity)('delivery')
], deliveryEntity);
//# sourceMappingURL=delivery.entity.js.map