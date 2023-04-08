export interface IUsers {
  id?: number;
  userName: string;
  firstName: string;
  lastName: string;
  password: string;
  roles: Option[];
  workBorders: Option[];
}

export interface Option {
  value: string;
  name: string;
}
