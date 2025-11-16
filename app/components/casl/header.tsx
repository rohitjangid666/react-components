import { getUserPermissions } from './lib/permissions/getUserPermissions';
import type { TabType, User } from './types';

interface HeaderProps {
  user: User | null;
  onTabChange: (tab: TabType) => void;
  onSignOut: () => void;
}

const Header: React.FC<HeaderProps> = ({ user, onTabChange, onSignOut }) => {
  return (
    <header className='bg-gray-800 text-white shadow-md'>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex justify-between items-center h-16'>
          {/* Logo / Title */}
          <div className='flex-shrink-0 text-xl font-bold'>CASL Ability</div>

          {/* Navigation / Users */}
          <div className='hidden md:flex space-x-4'>
            <button className='px-3 py-2 rounded-md hover:bg-gray-700 transition' onClick={() => onTabChange('todos')}>
              My Todos
            </button>
            {getUserPermissions(user || undefined).can('read', 'User') && (
              <button
                className='px-3 py-2 rounded-md hover:bg-gray-700 transition'
                onClick={() => onTabChange('users')}
              >
                Users
              </button>
            )}
          </div>

          {/* Sign Out Button */}
          <div>
            <button
              onClick={onSignOut}
              className='bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md transition'
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
