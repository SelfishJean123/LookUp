interface User {
  _id: string;
  token: string;
  access: string;
  refresh: string;
  name: string;
  username: string;
  email: string;
  password: string;
  isAdmin: boolean;
}

export default User;
