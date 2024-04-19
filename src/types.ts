import store from './store';

export interface ITodo {
  id: string;
  text: string;
  completed: boolean;
}
export type AddTodo = (newTodo: string) => void;
export type HandleAction = () => void;
export type IRootState = ReturnType<typeof store.getState>;
