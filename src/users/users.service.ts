import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Query } from 'mongoose';
import { User } from 'src/mongodb/schemas';
import { UserEntity } from './entities';
import { USER_MODEL_TOKEN } from './users.costants';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(USER_MODEL_TOKEN) private readonly userModel: Model<User>,
  ) {}

  async searchByName(username: string): Promise<UserEntity> {
    const searchedUser = await this.userModel.findOne({
      username: { $regex: new RegExp(username), $options: 'i' },
    });

    if (!searchedUser) throw new NotFoundException('User not found.');

    return new UserEntity(searchedUser);
  }

  async findById(userId: string): Promise<UserEntity> {
    const user = await this.userModel.findById<User>(userId);

    if (!user) throw new NotFoundException('User not foud.');

    return new UserEntity(user);
  }

  async isUserExist(userId: string) {
    const user = await this.userModel.findById<User>(userId);

    if (!user) return { data: false };

    return { data: true };
  }
}
