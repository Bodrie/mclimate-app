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
  error: null | string;
};

export type LoginReqBody = {
  client_id: string;
  client_secret: string;
  username: string;
  password: string;
};

export type Building = {
  id: number;
  name: string;
  address: string;
  floors: { id: number; name: string }[];
  offices: { id: number; name: string }[];
  rooms: { id: number; name: string }[];
  devices: { id: number; name: string }[];
  onlineDevices: { id: number; name: string }[];
};
