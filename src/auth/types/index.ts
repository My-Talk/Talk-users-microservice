export type JwtPayload = {
  sub: string;
  username: string;
};

export type Tokens = {
  access_token: string;
  refresh_token: string;
};
