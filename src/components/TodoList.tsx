import { useSelector } from 'react-redux';
import TodoItem from './TodoItem';
import { ITodo, IRootState } from '../types';

const TodoList = () => {
  const todos = useSelector((state: IRootState) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo: ITodo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
    </ul>
  );
};

export default TodoList;
