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