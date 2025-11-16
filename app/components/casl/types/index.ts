export type TabType = 'todos' | 'users';

export type RoleType = 'admin' | 'user';

export interface User {
  id: string;
  name: string;
  username: string;
  password: string;
  role: RoleType;
}

export interface TodoType {
  id: string;
  complete: boolean;
  title: string;
  public: boolean;
  user: string;
}
