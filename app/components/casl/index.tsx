import { useEffect, useState } from 'react';

import Header from './header';
import SignIn from './sign-in';
import Todos from './todos';
import Users from './users';

import type { TabType, User } from './types';

export const CASLAbility = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<TabType>('todos');
  const [loggedInUser, setLoggedInUser] = useState<User | null>(null);

  const checkIsAuthenticated = async () => {
    try {
      setIsLoading(true);

      if (typeof window === 'undefined') return;

      const storedUserStr = localStorage.getItem('user');
      if (!storedUserStr) {
        setIsAuthenticated(false);
        setLoggedInUser(null);
        return;
      }

      const storedUser: User = JSON.parse(storedUserStr);

      const users = (await import('~/db/users')).default;

      const loggedInUser = users.find(
        user => user.username === storedUser.username && user.password === storedUser.password
      );

      setIsAuthenticated(!!loggedInUser);
      setLoggedInUser(loggedInUser || null);
    } catch (error) {
      console.error('Authentication check failed:', error);
      setIsAuthenticated(false);
      setLoggedInUser(null);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    checkIsAuthenticated();
  }, []);

  const handleSuccessSignIn = (user: User) => {
    localStorage.setItem('user', JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setIsAuthenticated(false);
    setLoggedInUser(null);
  };

  if (isLoading) return <>Loading...</>;

  return (
    <>
      <h1>
        Works with Next.js as well because we're using only{' '}
        <a
          className='text-blue-500'
          href='https://www.npmjs.com/package/@casl/ability'
          target='_blank'
          rel='noopener noreferrer'
        >
          @casl/ability
        </a>
        {` not `}
        <a
          className='text-blue-500'
          href='https://www.npmjs.com/package/@casl/react'
          target='_blank'
          rel='noopener noreferrer'
        >
          @casl/react
        </a>
      </h1>
      {!isAuthenticated ? (
        <SignIn onSuccess={handleSuccessSignIn} />
      ) : (
        <>
          <Header user={loggedInUser} onSignOut={handleSignOut} onTabChange={setActiveTab} />

          {activeTab === 'users' ? <Users user={loggedInUser} /> : <Todos user={loggedInUser} />}
        </>
      )}
    </>
  );
};
