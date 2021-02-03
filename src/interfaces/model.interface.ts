export interface User {
  id: number;
  email: string;
  password: string;
}

//TODO:
export interface Reading {
  id: number;
  user_id: number;
  novel_id: number;
  progress: number;
}

//TODO:
export interface Novel {
  id: number;
  name: string;
}
