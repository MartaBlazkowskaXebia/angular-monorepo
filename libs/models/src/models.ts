export interface IUser {
  id: number;
  name: string;
  username: string;
  email: string;
}

export interface ITodo {
  userId: number;
  id: string;
  title: string;
  completed: boolean;
}
