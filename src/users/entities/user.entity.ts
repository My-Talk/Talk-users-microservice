export interface UserInterface {
  username: string;
  name: string;
  phone: number;
  avatar: string;
  createdAt: Date;
  updatedAt: Date;
}

export class UserEntity {
  private username: string;
  private name: string;
  private phone: number;
  private avatar: string;
  private createdAt: Date;
  private updatedAt: Date;

  constructor(userData: UserInterface) {
    this.init(userData);
  }

  init(userData: UserInterface) {
    this.username = userData.username;
    this.name = userData.name;
    this.phone = userData.phone;
    this.avatar = userData.avatar;
    this.createdAt = userData.createdAt;
    this.updatedAt = userData.updatedAt;
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
}
