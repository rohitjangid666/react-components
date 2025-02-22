import { Link } from 'react-router';

import Logo from '../shared/Logo';

export function Welcome() {
  return (
    <main className='flex items-center justify-center pt-16 pb-4'>
      <div className='flex-1 flex flex-col items-center gap-16 min-h-0'>
        <header className='flex flex-col items-center gap-9'>
          <Logo />
        </header>
        <div className='max-w-7xl w-full space-y-6 px-4'>
          <nav className='rounded-3xl border border-gray-200 p-6 dark:border-gray-700 space-y-4'>
            <ul>
              {componetsRoutes.map(({ href, text }) => (
                <li key={href}>
                  <Link
                    className='group flex items-center gap-3 self-stretch p-3 leading-normal text-blue-700 hover:underline dark:text-blue-500'
                    to={href}
                  >
                    {text}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </main>
  );
}

const componetsRoutes = [
  {
    href: '/inverted-border-radius',
    text: 'Inverted Border Radius',
  },
  {
    href: '/contact-us',
    text: 'Contact Us',
  },
];
