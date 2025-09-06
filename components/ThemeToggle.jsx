'use client';
import { useTheme } from '@/contexts/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`
        relative inline-flex items-center justify-center w-12 h-6 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 
        ${isDark 
          ? 'bg-gradient-to-r from-cyan-500 to-blue-500 focus:ring-cyan-400' 
          : 'bg-gradient-to-r from-gray-200 to-gray-300 focus:ring-gray-400'
        }
        hover:scale-105 shadow-lg
      `}
      aria-label="Toggle theme"
      title={`Switch to ${isDark ? 'light' : 'dark'} theme`}
    >
      {/* Toggle Switch */}
      <span
        className={`
          absolute inline-block w-4 h-4 bg-white rounded-full shadow-lg transform transition-all duration-300 ease-in-out
          ${isDark ? 'translate-x-3' : 'translate-x-[-3px]'}
        `}
      >
        {/* Icon inside toggle */}
        <span className="absolute inset-0 flex items-center justify-center">
          {isDark ? (
            // Moon icon for dark mode
            <svg className="w-3 h-3 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
              <path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
            </svg>
          ) : (
            // Sun icon for light mode
            <svg className="w-3 h-3 text-yellow-500" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.25a.75.75 0 01.75.75v2.25a.75.75 0 01-1.5 0V3a.75.75 0 01.75-.75zM7.5 12a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM18.894 6.166a.75.75 0 00-1.06-1.06l-1.591 1.59a.75.75 0 101.06 1.061l1.591-1.59zM21.75 12a.75.75 0 01-.75.75h-2.25a.75.75 0 010-1.5H21a.75.75 0 01.75.75zM17.834 18.894a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 10-1.061 1.06l1.59 1.591zM12 18a.75.75 0 01.75.75V21a.75.75 0 01-1.5 0v-2.25A.75.75 0 0112 18zM7.758 17.303a.75.75 0 00-1.061-1.06l-1.591 1.59a.75.75 0 001.06 1.061l1.591-1.59zM6 12a.75.75 0 01-.75.75H3a.75.75 0 010-1.5h2.25A.75.75 0 016 12zM6.697 7.757a.75.75 0 001.06-1.06l-1.59-1.591a.75.75 0 00-1.061 1.06l1.59 1.591z" />
            </svg>
          )}
        </span>
      </span>

      {/* Background glow effect */}
      <span className={`
        absolute inset-0 rounded-full opacity-0 transition-opacity duration-300
        ${isDark 
          ? 'bg-gradient-to-r from-cyan-400 to-blue-400 group-hover:opacity-20' 
          : 'bg-gradient-to-r from-yellow-300 to-orange-300 group-hover:opacity-20'
        }
      `}></span>

      {/* Cyber-style border for dark theme */}
      {isDark && (
        <span className="absolute inset-0 rounded-full border border-cyan-400 opacity-30 animate-pulse"></span>
      )}
    </button>
  );
};

export default ThemeToggle;