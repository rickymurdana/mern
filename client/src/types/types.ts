export interface IUser {
  email: string;
  password: string;
  lastLogin?: Date;
  lastLogout?: Date;
}

export interface ITask {
  _id?: string;
  email: string;
  date: string; // ISO format date string
  description: string;
}
