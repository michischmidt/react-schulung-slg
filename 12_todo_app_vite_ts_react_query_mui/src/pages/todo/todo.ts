export type Todo = {
  id: number | string;
  completed: boolean;
  todo: string;
  userId: number;
};

export type TodoDTO = {
  completed: boolean;
  todo: string;
  userId: number;
};
