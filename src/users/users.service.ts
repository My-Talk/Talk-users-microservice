import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { NotFoundError } from 'rxjs';
import { User, UserDocument } from 'src/mongodb/schemas';
import { UserEntity } from './entities';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async searchByName(username: string): Promise<UserEntity> {
    const searchedUser = await this.userModel.findOne<User>({ username });

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

    console.log({ user });

    if (!user) return { data: false };

    return { data: true };
  }
}
