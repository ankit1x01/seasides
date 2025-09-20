'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [timeLeft, setTimeLeft] = useState({});
  const [isMounted, setIsMounted] = useState(false);
  const { isDark } = useTheme();

  // Conference date: February 19, 2026
  const conferenceDate = new Date('2026-02-19T00:00:00Z');

  useEffect(() => {
    setIsMounted(true);
    const timer = setInterval(() => {
      const now = new Date();
      const difference = conferenceDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({});
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (!isMounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <nav className={`backdrop-blur-md shadow-lg border-b sticky top-0 z-50 transition-all duration-300 ${
      isDark
        ? 'bg-modern-sleek border-gray-600'
        : 'bg-white/95 border-deep-ocean-blue/20'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Countdown */}
          <div className="flex items-center gap-6">
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

            {/* Countdown Timer */}
            {Object.keys(timeLeft).length > 0 && (
              <div className={`hidden md:flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-sm ${
                isDark
                  ? 'bg-black/20 border-white/30 text-white'
                  : 'bg-deep-ocean-blue/10 border-deep-ocean-blue/30 text-deep-ocean'
              }`}>
                <div className="flex items-center gap-1">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-xs font-medium">Conference in:</span>
                </div>
                <div className="flex items-center gap-2 text-sm font-bold">
                  <span>{timeLeft.days}d</span>
                  <span className="opacity-50">:</span>
                  <span>{timeLeft.hours.toString().padStart(2, '0')}h</span>
                  <span className="opacity-50">:</span>
                  <span>{timeLeft.minutes.toString().padStart(2, '0')}m</span>
                </div>
              </div>
            )}
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/">
              <span className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                isDark
                  ? 'text-white hover:text-sunny-yellow'
                  : 'text-gray-800 hover:text-sunset-orange'
              }`}>
                Home
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                }`}></span>
              </span>
            </Link>

            <Link href="/sponsors">
              <span className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                isDark
                  ? 'text-white hover:text-sunny-yellow'
                  : 'text-gray-800 hover:text-sunset-orange'
              }`}>
                Sponsorship
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                }`}></span>
              </span>
            </Link>

            <Link href="/about">
              <span className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                isDark
                  ? 'text-white hover:text-sunny-yellow'
                  : 'text-gray-800 hover:text-sunset-orange'
              }`}>
                About
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                }`}></span>
              </span>
            </Link>

            <Link href="/gallery">
              <span className={`font-medium cursor-pointer transition-all duration-300 hover:scale-105 relative group ${
                isDark
                  ? 'text-white hover:text-sunny-yellow'
                  : 'text-gray-800 hover:text-sunset-orange'
              }`}>
                Gallery
                <span className={`absolute -bottom-1 left-0 w-0 h-0.5 group-hover:w-full transition-all duration-300 ${
                  isDark ? 'bg-sunny-yellow' : 'bg-sunset-orange'
                }`}></span>
              </span>
            </Link>

            

            {/* Theme Toggle */}
            <ThemeToggle />

          </div>

          {/* Mobile Menu Button */}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`focus:outline-none transition-colors duration-300 ${
                isDark
                  ? 'text-white hover:text-sunny-yellow'
                  : 'text-gray-800 hover:text-sunset-orange'
              }`} 
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
          {/* Mobile Countdown */}
          {Object.keys(timeLeft).length > 0 && (
            <div className={`mb-4 p-3 rounded-lg border backdrop-blur-sm ${
              isDark
                ? 'bg-black/20 border-white/30 text-white'
                : 'bg-deep-ocean-blue/10 border-deep-ocean-blue/30 text-deep-ocean'
            }`}>
              <div className="flex items-center justify-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-xs font-medium">Conference in:</span>
                <div className="flex items-center gap-1 text-sm font-bold">
                  <span>{timeLeft.days}d</span>
                  <span className="opacity-50">:</span>
                  <span>{timeLeft.hours.toString().padStart(2, '0')}h</span>
                  <span className="opacity-50">:</span>
                  <span>{timeLeft.minutes.toString().padStart(2, '0')}m</span>
                </div>
              </div>
            </div>
          )}

          <div className="flex flex-col space-y-3">
            <Link href="/">
              <span className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                isDark
                  ? 'text-white hover:text-sunny-yellow'
                  : 'text-gray-800 hover:text-sunset-orange'
              }`}>
                Home
              </span>
            </Link>
            <Link href="/sponsors">
              <span className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                isDark
                  ? 'text-white hover:text-sunny-yellow'
                  : 'text-gray-800 hover:text-sunset-orange'
              }`}>
                Sponsorship
              </span>
            </Link>
            <Link href="/about">
              <span className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                isDark
                  ? 'text-white hover:text-sunny-yellow'
                  : 'text-gray-800 hover:text-sunset-orange'
              }`}>
                About
              </span>
            </Link>
            <Link href="/gallery">
              <span className={`block font-medium cursor-pointer transition-colors duration-300 py-2 ${
                isDark
                  ? 'text-white hover:text-sunny-yellow'
                  : 'text-gray-800 hover:text-sunset-orange'
              }`}>
                Gallery
              </span>
            </Link>
            <Link href="/#reach-us">
              <span className={`
                block font-medium cursor-pointer transition-colors duration-300 py-2
                ${isDark ? 'text-slate-300 hover:text-sunny-yellow' : 'text-gray-700 hover:text-sunset-orange'}
              `} onClick={() => setIsOpen(false)}>
                Venue
              </span>
            </Link>
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
