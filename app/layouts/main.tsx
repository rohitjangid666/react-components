import { Outlet, useLocation } from 'react-router';

const MainLayout = () => {
  const pathname = useLocation().pathname;

  return (
    <main className='flex items-center justify-center pt-16 pb-4'>
      <div className='flex-1 flex flex-col items-center gap-16 min-h-0'>
        <header className='flex flex-col items-center gap-9'>
          <h1 className='capitalize text-2xl font-bold text-center leading-none'>
            {pathname.replaceAll('/', '').replaceAll('-', ' ')}
          </h1>
        </header>
        <div className='max-w-[90vw] w-full space-y-6 px-4'>
          <div className='rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4'>
            <Outlet />
          </div>
        </div>
      </div>
    </main>
  );
};

export default MainLayout;
