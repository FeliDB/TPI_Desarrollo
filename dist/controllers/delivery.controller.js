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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeliveryController = exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const delivery_service_1 = require("../services/delivery.service");
const auth_middleware_1 = require("../middlewares/auth.middleware");
const core_1 = require("@nestjs/core");
exports.Roles = core_1.Reflector.createDecorator();
let DeliveryController = class DeliveryController {
    deliveryService;
    constructor(deliveryService) {
        this.deliveryService = deliveryService;
    }
    postDelivery(body) {
        return this.deliveryService.postDelivery(body);
    }
    putDeliveryLocation(id, body) {
        return this.deliveryService.putDeliveryLocation(id, body);
    }
    putDeliveryStatus(id, body) {
        return this.deliveryService.putDeliveryStatus(id, body);
    }
    findByProximity(body) {
        return this.deliveryService.findByProximity(body);
    }
    assignZone(id, body) {
        return this.deliveryService.assignZone(id, body);
    }
    findByZone(body) {
        return this.deliveryService.findByZone(body);
    }
    getZones(id) {
        return this.deliveryService.getZones(id);
    }
    deleteDeliveryZone(id, zoneId) {
        return this.deliveryService.deleteDeliveryZone(id, zoneId);
    }
    deleteDelivery(id) {
        return this.deliveryService.deleteDelivery(id);
    }
};
exports.DeliveryController = DeliveryController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "postDelivery", null);
__decorate([
    (0, common_1.Put)(":id/location"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "putDeliveryLocation", null);
__decorate([
    (0, common_1.Put)(":id/status"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "putDeliveryStatus", null);
__decorate([
    (0, common_1.UseGuards)(auth_middleware_1.AuthGuard),
    (0, common_1.Get)("findByProximity"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "findByProximity", null);
__decorate([
    (0, exports.Roles)(['admin']),
    (0, common_1.Post)(":id/assignZone"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "assignZone", null);
__decorate([
    (0, common_1.UseGuards)(auth_middleware_1.AuthGuard),
    (0, common_1.Get)("findByZone"),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "findByZone", null);
__decorate([
    (0, common_1.UseGuards)(auth_middleware_1.AuthGuard),
    (0, common_1.Get)(":id/zones"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "getZones", null);
__decorate([
    (0, common_1.Delete)(":id/zone/:zoneId"),
    __param(0, (0, common_1.Param)("id")),
    __param(1, (0, common_1.Param)("zoneId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "deleteDeliveryZone", null);
__decorate([
    (0, common_1.Delete)(":id"),
    __param(0, (0, common_1.Param)("id")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], DeliveryController.prototype, "deleteDelivery", null);
exports.DeliveryController = DeliveryController = __decorate([
    (0, common_1.Controller)("delivery"),
    __metadata("design:paramtypes", [delivery_service_1.DeliveryService])
], DeliveryController);
//# sourceMappingURL=delivery.controller.js.map