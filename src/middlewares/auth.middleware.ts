import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import axios from 'axios';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor() {}

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request = context.switchToHttp().getRequest();
    const authHeader = request.headers['authorization'];

    if (!authHeader) {
      throw new UnauthorizedException('Token not provided');
    }

    // Enviar token al otro backend
    try {
      const response = await axios.get('http://localhost:3000/can-do', {
        headers: {
          Authorization: authHeader, // Reenviás exactamente lo que recibiste
        },
      });

      // Si querés, podés guardar info del usuario verificado en request.user
      request.user = response.data; // Suponiendo que el backend te devuelve datos del usuario
    } catch (error) {
      throw new UnauthorizedException('Token inválido o error externo');
    }

    return true; // Permitir el acceso si todo fue bien
  }
}
