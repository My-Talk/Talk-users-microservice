import { LoginUserDto, RegisterUserDto } from './dto';

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
}
