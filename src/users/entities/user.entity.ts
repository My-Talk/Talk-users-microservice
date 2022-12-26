import { Exclude } from 'class-transformer';
import { User } from 'src/mongodb/schemas';

export class UserEntity {
  private id: string;
  private username: string;
  private name: string;
  private phone: number;
  private avatar: string;

  private createdAt: Date;
  private updatedAt: Date;

  @Exclude({ toPlainOnly: true })
  private hash: string;

  @Exclude({ toPlainOnly: true })
  private hashRt: string;

  @Exclude({ toPlainOnly: true })
  private bearerRefreshToken: string;

  constructor(userData: User) {
    this.init(userData);
  }

  init(userData: User) {
    this.id = userData._id;
    this.username = userData.username;
    this.name = userData.name;
    this.phone = userData.phone;
    this.avatar = userData.avatar;

    this.createdAt = userData.createdAt;
    this.updatedAt = userData.updatedAt;

    this.hash = userData.hash;
    this.hashRt = userData.hashRt;
  }

  get getDatas() {
    return {
      id: this.id,
      username: this.username,
      name: this.name,
      phone: this.phone,
      avatar: this.avatar,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt,
    };
  }

  get getId() {
    return this.id;
  }

  get getUsername() {
    return this.username;
  }

  get getName() {
    return this.name;
  }

  get getPhone() {
    return this.phone;
  }

  get getAvatar() {
    return this.avatar;
  }

  get getCreatedAt() {
    return this.createdAt;
  }

  get getUpdatedAt() {
    return this.updatedAt;
  }

  get getHash() {
    return this.hash;
  }

  get getHashRt() {
    return this.hashRt;
  }

  get getBearerRt(): string {
    return this.bearerRefreshToken;
  }

  setBearerRefreshToken(bearerToken: string): void {
    this.bearerRefreshToken = bearerToken;
  }
}
