import { useState, useTransition } from 'react';

import todos from '~/db/todos';

interface TodoCheckboxProps {
  id: string;
  checked: boolean;
}

function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

import React from 'react';
import { canCreateTodo, canDeleteTodo, canToggleTodo, canUpdateTodo } from './lib/permissions/todos';
import type { User } from './types';

type Props = {
  isChecked: boolean;
  handleToggle: (checked: boolean) => void;
  isPending?: boolean;
  label?: string;
};

const CustomCheckbox: React.FC<Props> = ({ isChecked, handleToggle, isPending = false, label }) => {
  return (
    <label className='flex items-center space-x-3 cursor-pointer select-none opacity-100 transition-opacity duration-200 disabled:opacity-50'>
      {/* Hidden native checkbox */}
      <input
        type='checkbox'
        checked={isChecked}
        onChange={e => handleToggle(e.target.checked)}
        disabled={isPending}
        className='hidden'
      />

      {/* Custom checkbox */}
      <div
        className={`w-5 h-5 flex items-center justify-center border-2 rounded-md transition-all duration-200
          ${isChecked ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}
          ${isPending ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        `}
      >
        {isChecked && (
          <svg className='w-3 h-3 text-white' fill='none' stroke='currentColor' strokeWidth='2' viewBox='0 0 24 24'>
            <path d='M5 13l4 4L19 7' />
          </svg>
        )}
      </div>

      {label && <span className='text-gray-700 font-medium'>{label}</span>}
    </label>
  );
};

export function TodoCheckbox({ id, checked }: TodoCheckboxProps) {
  const [isPending, startTransition] = useTransition();
  const [isChecked, setIsChecked] = useState<boolean>(checked || false);

  function handleToggle(newChecked: boolean) {
    startTransition(async () => {
      await delay(1000);
      setIsChecked(newChecked);
    });
  }

  return (
    <CustomCheckbox isChecked={isChecked} handleToggle={newChecked => handleToggle(newChecked)} isPending={isPending} />
  );
}

const Todos = ({ user }: { user: User | null }) => {
  return (
    <div className='container mx-auto px-4 my-6'>
      <div className='flex items-center justify-between mb-6'>
        <h1 className='text-3xl font-bold'>My Todos</h1>
        {canCreateTodo({ user }) && <button>Add Todo</button>}
      </div>
      {todos.length === 0 ? (
        <p className='text-muted-foreground'>You do not have any todos yet.</p>
      ) : (
        <ul className='space-y-4'>
          {todos.map(todo => (
            <li
              key={todo.id}
              className={`border rounded-lg p-4 shadow-sm bg-card${todo.complete ? ' opacity-60' : ''}`}
            >
              <div className='flex items-center gap-3'>
                {canToggleTodo({ user, todo }) && <TodoCheckbox id={todo.id} checked={todo.complete} />}

                <div className='flex-1'>
                  <h3 className={`text-lg font-medium${todo.complete ? ' line-through text-muted-foreground' : ''}`}>
                    {todo.title}
                  </h3>

                  <span className='text-white text-xs border dark:border-white rounded-2xl px-1 py-0.5 mr-2'>
                    {todo.public ? 'Public' : 'Private'}
                  </span>
                </div>
                <div className='flex items-center gap-2'>
                  {canUpdateTodo({ user, todo }) && <button>Update</button>}
                  {canDeleteTodo({ user, todo }) && <button>Delete</button>}
                </div>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Todos;
