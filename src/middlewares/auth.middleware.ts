<<<<<<< HEAD
// import {
//   CanActivate,
//   ExecutionContext,
//   Injectable,
//   UnauthorizedException,
// } from '@nestjs/common';
// import { Reflector } from '@nestjs/core';
// import { Request } from 'express';
=======
import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
>>>>>>> ae3f7b15b6f39cce02b5a228d6be66bfaeac0c55
// import { UserEntity } from 'src/entities/user.entity';
// import { RequestWithUser } from 'src/interfaces/request-user';
// import { JwtService } from 'src/jwt/jwt.service';
// import { UsersService } from 'src/services/users/users.service';
<<<<<<< HEAD
// import { Permissions } from './decorators/permissions.decorator';
=======
import { Permissions } from './decorators/permissions.decorator';
>>>>>>> ae3f7b15b6f39cce02b5a228d6be66bfaeac0c55

// @Injectable()
// export class AuthGuard implements CanActivate {
//   constructor(
<<<<<<< HEAD
//     private jwtService: JwtService,
//     private usersService: UsersService,
=======
>>>>>>> ae3f7b15b6f39cce02b5a228d6be66bfaeac0c55
//     private reflector:Reflector
//   ) {}
//   async canActivate(context: ExecutionContext): Promise<boolean> {
//     try {
//       const request: RequestWithUser = context.switchToHttp().getRequest();
//       const token = request.headers.authorization.replace('Bearer ','');
//       if (token == null) {
//         throw new UnauthorizedException('El token no existe');
//       }
<<<<<<< HEAD
//       const payload = this.jwtService.getPayload(token);
//       const user = await this.usersService.findByEmail(payload.email);
=======
//       // const payload = this.jwtService.getPayload(token);
//       // const user = await this.usersService.findByEmail(payload.email);
>>>>>>> ae3f7b15b6f39cce02b5a228d6be66bfaeac0c55
//       //AGREGAR LOGICA PARA USAR LOS PERMISOS QUE VIENEN EN EL DECORADOR
//       const permissions = this.reflector.get(Permissions, context.getHandler());
//       console.log(permissions)
//       return true;
//     } catch (error) {
//       throw new UnauthorizedException(error?.message);
//     }
//   }
// }
