import React from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const AddTodo: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={handleAdd} className='search mb-3'>
      <div className='d-flex'>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Enter a todo'
          className='form-control form-control-lg'
        />
        <div className=''>
          <button className='btn btn-success btn'>Add Todo</button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
