import React, { useState, useEffect } from 'react';
import AddTodo from './components/AddTodo';
import AllTodos from './components/AllTodos';
import { Todo } from './helpers/models';

const App: React.FC = () => {
  const [todo, setTodo] = useState<string>('');
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const getAllTodos = localStorage.getItem('allTodos');
    if (getAllTodos) {
      const parseAllTodos = JSON.parse(getAllTodos);
      setTodos(parseAllTodos);
    }
  }, []);

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (todo.trim() !== '') {
      const newTodo = { id: Date.now(), todo: todo, isCompleted: false };
      setTodos([...todos, newTodo]);
      localStorage.setItem('allTodos', JSON.stringify([...todos, newTodo]));
      setTodo('');
    } else {
      alert('Please enter some todo and then add.');
    }
  };

  return (
    <section className='todo py-5'>
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-7'>
            <div className='contents'>
              <div className='header d-flex justify-content-between mb-3'>
                <h4 className='align-self-center font-weight-bold'>Todo App</h4>
              </div>
              <AddTodo todo={todo} setTodo={setTodo} handleAdd={handleAdd} />
              <AllTodos todos={todos} setTodos={setTodos} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default App;
