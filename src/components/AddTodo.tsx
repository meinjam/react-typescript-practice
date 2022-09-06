import React from 'react';

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

const AddTodo: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form onSubmit={handleAdd} className='search mb-3'>
      <div className='input-group mb-3'>
        <input
          type='text'
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder='Enter a task'
          className='form-control form-control-lg'
        />
        <div className='input-group-append'>
          <button className='btn btn-info'>Add</button>
        </div>
      </div>
    </form>
  );
};

export default AddTodo;
