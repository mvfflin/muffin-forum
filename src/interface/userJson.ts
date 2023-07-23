export type BadgesType = {
  _id?: string;
  badgename: string;
  badgedesc: string;
};

export type UserJson = {
  _id: string;
  id: number;
  avatarUrl: string;
  username: string;
  email: string;
  password: string;
  desc: string;
  registered: string;
  badges: Array<BadgesType>;
  __v: number;
};

export type UserJsonFix = Array<UserJson>;
