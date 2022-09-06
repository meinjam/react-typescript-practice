import React from 'react';
import { Todo } from '../helpers/models';
import SingleTodo from './SingleTodo';

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const AllTodos: React.FC<Props> = ({ todos, setTodos }) => {
  return (
    <>
      {todos &&
        todos.map((todo) => (
          <SingleTodo
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
    </>
  );
};

export default AllTodos;
