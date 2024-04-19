import { useDispatch } from 'react-redux';
import { toggleComplete, removeTodo } from '../store/todoSlice';
import { ITodo } from '../types';

const TodoItem = ({ id, text, completed }: ITodo) => {
  const dispatch = useDispatch();

  return (
    <li className='todo-list'>
      <input type='checkbox' checked={completed} onChange={() => dispatch(toggleComplete({ id }))} />
      <span>{text}</span>
      <span onClick={() => dispatch(removeTodo({ id }))}>&times;</span>
    </li>
  );
};

export default TodoItem;
