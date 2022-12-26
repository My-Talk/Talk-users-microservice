import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from 'src/mongodb/schemas';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

  // search user by username
  async searchByName(username: string) {
    const searchedUser = await this.userModel.findOne({ username });

    return searchedUser;
  }

  // verify user exists
  async isUserExist(userId: string) {
    const user = await this.userModel.findById<User>({ id: userId });

    if (!user.phone) return false;

    return true;
  }
}
