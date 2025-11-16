import { useState, type FormEvent } from 'react';

import type { User } from './index';

const SignIn = ({ onSuccess }: { onSuccess: (user: User) => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const users: User[] = (await import('~/db/users')).default;
    const loggedInUser = users.find(user => user.username === username && user.password === password);

    if (loggedInUser) {
      onSuccess(loggedInUser);
    } else {
      alert('Incorrect username or password');
    }
  };

  return (
    <div className='flex items-center justify-center px-4'>
      <div className='w-full max-w-md bg-white dark:bg-gray-800 p-8 rounded-xl shadow-md text-gray-900 dark:text-gray-100 transition-colors'>
        <h2 className='text-2xl font-bold text-center mb-6'>Sign In</h2>

        <form onSubmit={handleSubmit} className='space-y-5'>
          {/* Username */}
          <div>
            <label className='block text-sm mb-1 font-medium'>Username</label>
            <input
              type='text'
              value={username}
              onChange={e => setUsername(e.target.value)}
              required
              className='w-full px-4 py-2 border rounded-lg outline-none bg-gray-100 dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500'
              placeholder='eg. john.doe'
            />
          </div>

          {/* Password */}
          <div>
            <label className='block text-sm mb-1 font-medium'>Password</label>
            <input
              type='password'
              value={password}
              onChange={e => setPassword(e.target.value)}
              required
              className='w-full px-4 py-2 border rounded-lg outline-none bg-gray-100 dark:bg-gray-700 border-gray-300  :border-gray-600 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-blue-500'
              placeholder='••••••••'
            />
          </div>

          <button type='submit' className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'>
            Sign In
          </button>
        </form>

        <p className='text-center text-sm mt-4 text-gray-600 dark:text-gray-300'>
          Don't have an account?
          <a href='#' className='text-blue-500 font-semibold ml-1'>
            Sign up
          </a>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
