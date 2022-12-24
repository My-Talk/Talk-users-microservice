import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/mongodb/schemas';
import { LoginUserDto, RegisterUserDto } from './dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async register(registerUserDto: RegisterUserDto): Promise<User> {
    const hash = await argon.hash(registerUserDto.password);

    delete registerUserDto.password;

    const createdUser = new this.userModel({ ...registerUserDto, hash });

    return createdUser.save();
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
