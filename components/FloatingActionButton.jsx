'use client';
import { useState, useEffect } from 'react';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentAction, setCurrentAction] = useState(0);

  const actions = [
    { icon: '🎯', label: 'Register', color: 'bg-blue-500 hover:bg-blue-600' },
    { icon: '📅', label: 'Schedule', color: 'bg-purple-500 hover:bg-purple-600' },
    { icon: '🎤', label: 'Speakers', color: 'bg-green-500 hover:bg-green-600' },
    { icon: '🏆', label: 'Sponsors', color: 'bg-orange-500 hover:bg-orange-600' },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAction((prev) => (prev + 1) % actions.length);
    }, 2000);
    return () => clearInterval(interval);
  }, [actions.length]);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Main FAB */}
        <button
          className={`w-16 h-16 rounded-full ${actions[currentAction].color} text-white shadow-2xl transform hover:scale-110 transition-all duration-300 animate-bounce`}
          style={{ animation: 'bounce 2s infinite' }}
        >
          <span className="text-2xl">{actions[currentAction].icon}</span>
        </button>
        
        {/* Label */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-black bg-opacity-80 text-white text-sm rounded-lg transform translate-x-2 opacity-0 hover:opacity-100 transition-opacity">
          {actions[currentAction].label}
        </div>
      </div>
    </div>
  );
};

export default FloatingActionButton;
