import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(), // Busca el token en el header
      ignoreExpiration: false,
      secretOrKey: process.env.JWT_SECRET, // Debe ser el mismo que usaste en el Backend A
    });
  }

  async validate(payload: any) {
    // Este método se llama si el token es válido
    return { userId: payload.sub, email: payload.email };
  }
}
