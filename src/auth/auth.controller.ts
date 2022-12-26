import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { GetUser, PublicRoute } from './decorator';
import { LoginUserDto, RegisterUserDto } from './dto';
import { authController } from './enum';
import { JwtRefreshGuard } from './guards';

@Controller(authController.auth)
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @PublicRoute()
  @Post(authController.register)
  async register(@Body() registerUserDto: RegisterUserDto) {
    return this.authService.register(registerUserDto);
  }

  @PublicRoute()
  @Post(authController.login)
  @HttpCode(HttpStatus.OK)
  async login(@Body() loginUserDto: LoginUserDto) {
    return this.authService.login(loginUserDto);
  }

  @Post(authController.refreshToken)
  @HttpCode(HttpStatus.OK)
  @UseGuards(JwtRefreshGuard)
  async refreshToken(@GetUser() user: any) {
    return this.authService.refreshTokens(user.id, user.bearerRefreshToken);
  }

  @Post(authController.logout)
  @HttpCode(HttpStatus.OK)
  async logout(@GetUser('id') userId: string) {
    return this.authService.logout(userId);
  }
}
