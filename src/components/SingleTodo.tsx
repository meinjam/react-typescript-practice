import React from 'react';
import { Todo } from '../helpers/models';

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  const handleEditTodo = (t: Object) => {
    const newTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, isCompleted: !t.isCompleted };
      }
      return t;
    });

    setTodos(newTodos);
  };

  const handleDeleteTodo = (t: Object) => {
    const newTodos = todos.filter((t) => t.id !== todo.id);
    setTodos(newTodos);
  };

  return (
    <>
      <div className='card p-3'>
        <div className='item d-flex justify-content-between'>
          <div className='left d-flex'>
            <div className='icon mr-1'>
              {todo.isCompleted ? (
                <svg
                  onClick={() => handleEditTodo(todo)}
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-circle-check'
                  width={25}
                  height={25}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#00b341'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <circle cx={12} cy={12} r={9} />
                  <path d='M9 12l2 2l4 -4' />
                </svg>
              ) : (
                <svg
                  onClick={() => handleEditTodo(todo)}
                  xmlns='http://www.w3.org/2000/svg'
                  className='icon icon-tabler icon-tabler-circle'
                  width={25}
                  height={25}
                  viewBox='0 0 24 24'
                  strokeWidth='1.5'
                  stroke='#ff9300'
                  fill='none'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                >
                  <path stroke='none' d='M0 0h24v24H0z' fill='none' />
                  <circle cx={12} cy={12} r={9} />
                </svg>
              )}
            </div>
            <p
              className={`mb-0 align-self-center ${
                todo.isCompleted ? 'lin-through' : ''
              }`}
            >
              {todo.todo}
            </p>
          </div>
          <div className='right'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-edit'
              width={25}
              height={25}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#ff9300'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <path d='M9 7h-3a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-3' />
              <path d='M9 15h3l8.5 -8.5a1.5 1.5 0 0 0 -3 -3l-8.5 8.5v3' />
              <line x1={16} y1={5} x2={19} y2={8} />
            </svg>
            <svg
              onClick={() => handleDeleteTodo(todo)}
              xmlns='http://www.w3.org/2000/svg'
              className='icon icon-tabler icon-tabler-trash'
              width={25}
              height={25}
              viewBox='0 0 24 24'
              strokeWidth='1.5'
              stroke='#ff2825'
              fill='none'
              strokeLinecap='round'
              strokeLinejoin='round'
            >
              <path stroke='none' d='M0 0h24v24H0z' fill='none' />
              <line x1={4} y1={7} x2={20} y2={7} />
              <line x1={10} y1={11} x2={10} y2={17} />
              <line x1={14} y1={11} x2={14} y2={17} />
              <path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' />
              <path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' />
            </svg>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleTodo;
