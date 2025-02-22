import { Outlet, useLocation } from 'react-router';

const MainLayout = () => {
  const pathname = useLocation().pathname;

  return (
    <div className='flex items-center justify-center pt-16 pb-4'>
      <div className='max-w-7xl w-full space-y-6 px-4'>
        <h1 className='capitalize text-5xl font-bold text-center'>
          {pathname.replaceAll('/', '').replaceAll('-', ' ')}
        </h1>
        <div className='rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4'>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
