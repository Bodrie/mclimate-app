export type UserResponse = {
  auth: {
    access_token: string;
    expires_in: number;
    token_type: string;
    scope: null;
    refresh_token: string;
  };
  _links: {
    self: {
      href: string;
    };
  };
} | null;

export type UserState = {
  user: UserResponse;
  loading: boolean;
  error: null;
};

export type LoginReqBody = {
    client_id: string,
    client_secret: string,
    username: string,
    password: string
  }
