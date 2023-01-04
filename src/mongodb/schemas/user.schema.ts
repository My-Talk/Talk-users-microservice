import mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    unique: true,
    minLength: 5,
    maxLength: 15,
    index: true,
  },

  name: {
    type: String,
    default: '',
    maxLength: 50,
  },

  phone: {
    type: Number,
    require: true,
    unique: true,
  },

  avatar: {
    type: String,
    default: '',
  },

  createdAt: {
    type: Date,
    immutable: true,
    default: () => Date.now(),
  },

  updatedAt: {
    type: Date,
    default: () => Date.now(),
  },

  hash: String,

  hashRt: String,
});

UserSchema.pre('save', function (next) {
  this.updatedAt = new Date(Date.now());
  next();
});

export interface User {
  id: string;
  username: string;
  name: string;
  phone: number;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
  hash: string;
  hashRt: string;
}
