import './style.css';

const CSSAnchor = () => {
  return (
    <div>
      {/* // * Popover */}
      {/* <form action=''>
        <div>
          <div className='mb-2 flex items-center'>
            <label htmlFor='confusing'>Confusing Field</label>
            <button type='button' className='ml-2' popoverTarget='info' popoverTargetAction='toggle'>
              <svg className='size-6 text-blue-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
            <div id='info' popover='auto'>
              Popover
            </div>
          </div>
          <input
            type='text'
            id='confusing'
            placeholder="I'm not sure what this does"
            className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
      </form> */}

      {/* // * Anchor */}
      <form action=''>
        <div>
          <div className='mb-2 flex items-center'>
            <label htmlFor='confusing'>Confusing Field</label>
            <button type='button' className='ml-2 information' popoverTarget='info' popoverTargetAction='toggle'>
              <svg className='size-6 text-blue-500' fill='none' viewBox='0 0 24 24' stroke='currentColor'>
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </button>
            <div id='info' popover='auto'>
              Popover
            </div>
          </div>
          <input
            type='text'
            id='confusing'
            placeholder="I'm not sure what this does"
            className='border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
          />
        </div>
      </form>
    </div>
  );
};

export default CSSAnchor;
