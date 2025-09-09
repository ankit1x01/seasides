'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { isDark } = useTheme();

  return (
    <nav className={`
      backdrop-blur-md shadow-lg border-b sticky top-0 z-50 transition-all duration-300
      ${isDark 
        ? 'bg-slate-900/95 border-slate-700 navbar-dark' 
        : 'bg-white/95 border-gray-100'
      }
    `}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer group">
              <Image
                src={isDark ? "/light-logo.png" : "/dark-logo.png"}
                alt="Seasides Logo"
                width={80}
                height={40}
                priority
                sizes="80px"
                quality={60}
                className="w-20 h-10 group-hover:scale-110 transition-transform duration-300"
                style={{
                  width: '80px',
                  height: '40px',
                  maxWidth: '100%',
                  height: 'auto'
                }}
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`
                font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                Home
                <span className={`
                  absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300
                  ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}
                `}></span>
              </span>
            </Link>
            
            <Link href="/about">
              <span className={`
                font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                About
                <span className={`
                  absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300
                  ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}
                `}></span>
              </span>
            </Link>

            <Link href="/gallery">
              <span className={`
                font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                Gallery
                <span className={`
                  absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300
                  ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}
                `}></span>
              </span>
            </Link>

            <Link href="/sponsors">
              <span className={`
                font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                Sponsors
                <span className={`
                  absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300
                  ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}
                `}></span>
              </span>
            </Link>

            <a href="/#reach-us">
              <span className={`
                font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                Venue
                <span className={`
                  absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300
                  ${isDark ? 'bg-cyan-400' : 'bg-blue-600'}
                `}></span>
              </span>
            </a>

            {/* Theme Toggle */}
            <ThemeToggle />

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`
                focus:outline-none transition-colors duration-300
                ${isDark 
                  ? 'text-slate-300 hover:text-cyan-400' 
                  : 'text-gray-800 hover:text-blue-600'
                }
              `} 
              aria-label="toggle menu"
            >
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden mt-4 pb-4`}>
          <div className="flex flex-col space-y-3">
            <Link href="/">
              <span className={`
                block font-medium cursor-pointer transition-colors duration-300 py-2
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                Home
              </span>
            </Link>
            <Link href="/about">
              <span className={`
                block font-medium cursor-pointer transition-colors duration-300 py-2
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                About
              </span>
            </Link>
            <Link href="/gallery">
              <span className={`
                block font-medium cursor-pointer transition-colors duration-300 py-2
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                Gallery
              </span>
            </Link>
            <Link href="/sponsors">
              <span className={`
                block font-medium cursor-pointer transition-colors duration-300 py-2
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                Sponsors
              </span>
            </Link>
            <a href="/#reach-us" onClick={() => setIsOpen(false)}>
              <span className={`
                block font-medium cursor-pointer transition-colors duration-300 py-2
                ${isDark ? 'text-slate-300 hover:text-cyan-400' : 'text-gray-700 hover:text-blue-600'}
              `}>
                Venue
              </span>
            </a>
            <div className="pt-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
