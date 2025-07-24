'use client';
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold text-gray-800 md:text-2xl hover:text-blue-400 cursor-pointer">Seasides 2026</span>
          </Link>
          <div className="flex md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
              <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className={`${isOpen ? 'block' : 'hidden'} md:flex items-center`}>
          <div className="flex flex-col md:flex-row md:mx-6">
            <Link href="/"><span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 cursor-pointer interactive transition-all duration-300 hover:scale-105">Home</span></Link>
            <Link href="/about"><span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 cursor-pointer interactive transition-all duration-300 hover:scale-105">About</span></Link>
            <Link href="/speakers"><span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 cursor-pointer interactive transition-all duration-300 hover:scale-105">Speakers</span></Link>
            <Link href="/sponsors"><span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 cursor-pointer interactive transition-all duration-300 hover:scale-105">Sponsors</span></Link>
            <Link href="/workshops"><span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 cursor-pointer interactive transition-all duration-300 hover:scale-105">Workshops</span></Link>
            <Link href="/gallery"><span className="my-1 text-sm text-gray-700 font-medium hover:text-indigo-500 md:mx-4 md:my-0 cursor-pointer interactive transition-all duration-300 hover:scale-105">Gallery</span></Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
