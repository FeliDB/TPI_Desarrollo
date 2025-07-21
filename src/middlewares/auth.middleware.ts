<<<<<<< HEAD
import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';
import { response } from 'express';

@Injectable()
export class AuthGuard implements CanActivate {
  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();

    const authHeader = request.headers['authorization'];
    const permissions = request.headers['permissions'];
    // console.log("permissions", permissions);
    // console.log("authHeader", authHeader);

    if (!authHeader || !permissions) {
      throw new UnauthorizedException('Token or permissions not provided');
    }
    

    try {
      const response = await axios.get('http://localhost:3000/can-do', {
        headers: {
          Authorization: authHeader,
        },
        params: {
          permissions: permissions
        }
      });

      request.user = response.data;
    } catch (error) {
      console.error('Error validating token:', error);
    }

    return true;


  }
}
=======
// delivery/middleware/auth.middleware.ts

import { Injectable, NestMiddleware, UnauthorizedException } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import axios from 'axios';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: Request, res: Response, next: NextFunction) {
    const token = req.headers['authorization'];
    if (!token) throw new UnauthorizedException('Falta el token');

    try {
      const { data } = await axios.post('http://localhost:3000/jwt/validate-token', {}, {
        headers: { Authorization: token }
      });

      // Si es válido, continuar
      req['user'] = data.user; // opcional, para usar luego
      next();
    } catch (err) {
      throw new UnauthorizedException('Token inválido');
    }
  }
}
>>>>>>> 78012b475187c1971991e658e364085fb77dbe74
