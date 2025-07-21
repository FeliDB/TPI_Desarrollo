"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const zone_service_1 = require("./services/zone.service");
const delivery_service_1 = require("./services/delivery.service");
const zone_controller_1 = require("./controllers/zone.controller");
const delivery_controller_1 = require("./controllers/delivery.controller");
const typeorm_1 = require("@nestjs/typeorm");
const entities_1 = require("./entities");
const auth_middleware_1 = require("./middlewares/auth.middleware");
const common_2 = require("@nestjs/common");
let AppModule = class AppModule {
    configure(consumer) {
        consumer
            .apply(auth_middleware_1.AuthMiddleware)
            .forRoutes({ path: 'delivery/*', method: common_2.RequestMethod.ALL });
    }
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                database: 'deliverydb',
                username: 'felipe',
                password: '12345',
                synchronize: true,
                entities: entities_1.entities,
                port: 5433,
                host: 'localhost',
            }),
            typeorm_1.TypeOrmModule.forFeature(entities_1.entities)
        ],
        controllers: [app_controller_1.AppController, zone_controller_1.ZoneController, delivery_controller_1.DeliveryController],
        providers: [app_service_1.AppService, delivery_service_1.DeliveryService, zone_service_1.ZoneService],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map