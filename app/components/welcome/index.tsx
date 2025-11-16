import { useMemo, useState } from 'react';

import Fuse from 'fuse.js';
import { Link } from 'react-router';

import Logo from '../shared/Logo';

export function Welcome() {
  const [search, setSearch] = useState('');

  // Fuse.js setup
  const fuse = useMemo(() => {
    return new Fuse(componentsRoutes, {
      keys: ['text'],
      includeScore: true,
      threshold: 0.4, // lower = stricter match
    });
  }, []);

  const searchResults = search ? fuse.search(search).map(result => result.item) : componentsRoutes;

  // Did you mean suggestion (first closest result)
  const suggestion =
    search && searchResults.length > 0 && searchResults[0].text.toLowerCase() !== search.toLowerCase()
      ? searchResults[0].text
      : null;

  return (
    <main className='flex items-center justify-center pt-16 pb-4'>
      <div className='flex-1 flex flex-col items-center gap-16 min-h-0'>
        <header className='flex flex-col items-center gap-9'>
          <Logo />
        </header>

        <div className='max-w-[90vw] w-full px-4'>
          {/* Search Bar */}
          <div className='mb-4 w-full max-w-md'>
            <input
              type='text'
              placeholder='Search components...'
              value={search}
              onChange={e => setSearch(e.target.value)}
              className='w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-700 
                         bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200
                         placeholder-gray-400 dark:placeholder-gray-500
                         focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
                         transition'
            />
            <span className='text-xs text-gray-500'>
              *Using <strong>fuse.js</strong> for suggestions
            </span>
            {/* Suggestion */}
            {suggestion && suggestion.toLowerCase() !== search.toLowerCase() && (
              <p className='mt-2 text-sm text-gray-500 dark:text-gray-400' onClick={() => setSearch(suggestion)}>
                Did you mean{' '}
                <span className='text-blue-600 dark:text-blue-400 cursor-pointer underline'>{suggestion}</span>?
              </p>
            )}
          </div>

          {/* Card Grid */}
          <nav className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
            {searchResults.length > 0 ? (
              searchResults.map(({ href, text }, i) => (
                <Link
                  key={href}
                  to={href}
                  className='group block p-6 rounded-2xl 
                             bg-white dark:bg-gray-900 
                             border border-gray-200 dark:border-gray-800
                             shadow-sm hover:shadow-xl 
                             transition-all duration-300 
                             hover:-translate-y-1
                             bg-gradient-to-br from-white to-gray-50
                             dark:from-gray-900 dark:to-gray-800'
                >
                  <div className='flex items-center gap-4'>
                    {/* Icon placeholder */}
                    <div
                      className='w-12 h-12 rounded-xl flex items-center justify-center
                                 bg-blue-100 dark:bg-blue-900/40 
                                 text-blue-600 dark:text-blue-400
                                 group-hover:bg-blue-200 dark:group-hover:bg-blue-800
                                 transition-all'
                    >
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        className='w-6 h-6'
                        fill='none'
                        viewBox='0 0 24 24'
                        stroke='currentColor'
                        strokeWidth='2'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                        />
                      </svg>
                    </div>

                    <div>
                      <h3 className='text-lg font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors'>
                        {text}
                      </h3>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>Explore component details</p>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className='text-gray-500 dark:text-gray-400 col-span-full text-center'>No components found.</p>
            )}
          </nav>
        </div>
      </div>
    </main>
  );
}

const componentsRoutes = [
  { href: '/inverted-border-radius', text: 'Inverted Border Radius' },
  { href: '/corner-only-borders', text: 'Corner Only Borders' },
  { href: '/cards', text: 'Cards' },
  { href: '/input-field-grows', text: 'Input Field Grows' },
  { href: '/react-virtuoso', text: 'React Virtuoso' },
  { href: '/css-anchor', text: 'CSS Anchor' },
  { href: '/contact-us', text: 'Contact Us' },
  { href: '/switch-case', text: 'Switch Case' },
  { href: '/casl-ability', text: 'CASL Ability' },
];
