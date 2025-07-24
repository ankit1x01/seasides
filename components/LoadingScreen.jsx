'use client';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

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
    <div className="fixed inset-0 bg-gradient-to-br from-blue-900 via-purple-900 to-pink-900 z-50 flex items-center justify-center">
      <div className="text-center">
        <div className="mb-8">
          <div className="w-20 h-20 mx-auto mb-4 relative">
            <div className="absolute inset-0 border-4 border-blue-200 rounded-full animate-ping"></div>
            <div className="absolute inset-2 border-4 border-purple-300 rounded-full animate-pulse"></div>
            <div className="absolute inset-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
              <span className="text-2xl animate-bounce">🌊</span>
            </div>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">Seasides 2026</h1>
          <p className="text-blue-200">Loading the cyber experience...</p>
        </div>
        
        <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-white mt-2">{Math.round(progress)}%</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
