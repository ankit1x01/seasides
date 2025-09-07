'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setIsVisible(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-300 ${
      isDark 
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900' 
        : 'bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50'
    }`}>
      <div className="text-center">
        <div className="mb-8">
          <div className="w-24 h-24 mx-auto mb-6 relative">
            <div className={`absolute inset-0 rounded-full animate-ping ${
              isDark ? 'border-4 border-cyan-400' : 'border-4 border-blue-400'
            }`}></div>
            <div className={`absolute inset-2 rounded-full animate-pulse ${
              isDark ? 'border-4 border-purple-400' : 'border-4 border-purple-500'
            }`}></div>
            <div className="absolute inset-3 rounded-full overflow-hidden bg-white/10 backdrop-blur-sm">
              <Image
                src="/logo white.png"
                alt="Seasides Logo"
                width={72}
                height={72}
                className={`w-full h-full object-contain animate-pulse ${
                  isDark ? 'brightness-100' : 'brightness-0 invert'
                }`}
              />
            </div>
          </div>
          <h1 className={`text-4xl font-bold mb-2 ${
            isDark ? 'text-white' : 'text-gray-800'
          }`}>
            <span>Seasides </span>
            <span className={`${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>2026</span>
          </h1>
          <p className={`${
            isDark ? 'text-cyan-200' : 'text-blue-600'
          }`}>Loading the cyber experience...</p>
        </div>
        
        <div className={`w-64 h-2 rounded-full overflow-hidden ${
          isDark ? 'bg-gray-700' : 'bg-gray-300'
        }`}>
          <div 
            className={`h-full rounded-full transition-all duration-300 ${
              isDark 
                ? 'bg-gradient-to-r from-cyan-400 to-purple-500' 
                : 'bg-gradient-to-r from-blue-500 to-purple-600'
            }`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className={`mt-2 ${
          isDark ? 'text-white' : 'text-gray-800'
        }`}>{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
