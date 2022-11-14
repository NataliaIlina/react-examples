export type IUserStatus = 'blocked' | 'active' | 'frozen';

export interface IUser {
  id: number;
  firstName: string;
  lastName: string;
  status: IUserStatus;
  email: string;
  registrationDate: string;
}

export interface IUserFormValues {
  firstName: IUser['firstName'];
  lastName: IUser['lastName'];
  email: IUser['email'];
}
