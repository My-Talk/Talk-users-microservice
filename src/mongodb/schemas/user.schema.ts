import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User {
  @Prop()
  _id: string;

  @Prop({ required: true, unique: true })
  username: string;

  @Prop({ default: '' })
  name: string;

  @Prop({ required: true, unique: true })
  phone: number;

  @Prop({ default: '' })
  avatar: string;

  @Prop({ default: Date.now })
  createdAt: Date;

  @Prop({ default: Date.now })
  updatedAt: Date;

  @Prop({ required: true })
  hash: string;

  @Prop({ default: '' })
  hashRt: string;
}

export const UserSchema = SchemaFactory.createForClass(User);
