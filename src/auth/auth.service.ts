import { Injectable } from '@nestjs/common';
import { LoginUserDto, RegisterUserDto } from './dto';

@Injectable()
export class AuthService {
  async register(registerUserDto: RegisterUserDto) {
    return registerUserDto;
  }

  async login(loginUserDto: LoginUserDto) {
    return loginUserDto;
  }

  async refreshToken(userId: string) {
    return { userId, message: 'refresh' };
  }

  async logout(userId: string) {
    return { userId, message: 'logout' };
  }

  async jwtValidateUser(userId: string) {
    return { userId, username: 'danilix', name: 'ngimdock zemfack' };
  }

  async jwtRefreshValidateUser(userId: string, bearerToken: string) {
    return {
      userId,

      username: 'danilix',
      name: 'ngimdock zemfack',
    };
  }
}
