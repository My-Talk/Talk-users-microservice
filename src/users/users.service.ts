import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/mongodb/schemas';
import { UserEntity } from './entities';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  async searchByName(username: string) {
    const searchedUser = await this.userModel.findOne<User>({ username });

    return new UserEntity(searchedUser);
  }

  async isUserExist(userId: string) {
    const user = await this.userModel.findById<User>({ id: userId });

    if (!user.phone) return false;

    return true;
  }
}
