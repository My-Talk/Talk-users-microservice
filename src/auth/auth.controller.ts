import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginUserDto, RegisterUserDto } from './dto';
import { authConyroller } from './enum/auth-controller.enum';

@Controller(authConyroller.auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post(authConyroller.register)
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @Post(authConyroller.login)
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post(authConyroller.refreshToken)
  @HttpCode(HttpStatus.OK)
  async refreshToken(userId: string) {
    return this.authService.refreshToken(userId);
  }

  @Post(authConyroller.logout)
  @HttpCode(HttpStatus.OK)
  async logout(userId: string) {
    return this.authService.logout(userId);
  }
}
