import { AddTodo, HandleAction } from '../types';

interface TodoProps {
  value: string;
  addTodo: AddTodo;
  handleAction: HandleAction;
}

const TodoForm = ({ value, addTodo, handleAction }: TodoProps) => {
  return (
    <label>
      <input type='text' placeholder='new todo' value={value} onChange={(e: React.ChangeEvent<HTMLInputElement>) => addTodo(e.target.value)} />
      <button onClick={handleAction}>Add todo</button>
    </label>
  );
};

export default TodoForm;
