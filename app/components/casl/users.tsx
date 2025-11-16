import { Navigate } from 'react-router';

import users from '~/db/users';

import { getUserPermissions } from './lib/permissions/getUserPermissions';
import type { User } from './types';

const Users = ({ user }: { user: User | null }) => {
  const permissions = getUserPermissions(user || undefined);

  if (!permissions.can('read', 'User')) {
    return <Navigate to='/' />;
  }

  return (
    <div className='p-6'>
      <h2 className='text-2xl font-bold mb-4'>Users List</h2>
      <div className='overflow-x-auto'>
        <table className='min-w-full border border-gray-200 divide-y divide-gray-200'>
          <thead className=''>
            <tr>
              <th className='px-6 py-3 text-left text-sm font-semibold dark:text-white'>Name</th>
              <th className='px-6 py-3 text-left text-sm font-semibold dark:text-white'>Username</th>
              <th className='px-6 py-3 text-left text-sm font-semibold dark:text-white'>Role</th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-200'>
            {users.map((user: User, index: number) => (
              <tr key={index} className='hover:bg-white/10'>
                <td className='px-6 py-4 whitespace-nowrap text-sm dark:text-white'>{user.name}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm dark:text-white'>{user.username}</td>
                <td className='px-6 py-4 whitespace-nowrap text-sm dark:text-white'>{user.role}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
