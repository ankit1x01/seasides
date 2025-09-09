'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { EVENT_START_ISO } from '@/lib/eventConfig';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { isDark } = useTheme();

  // Countdown timer
  useEffect(() => {
    const eventDate = new Date(EVENT_START_ISO);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`py-16 ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black' 
        : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
    }`}>
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            🚀 Event Countdown
          </h2>
          <p className={`text-lg md:text-xl ${
            isDark ? 'text-white/80' : 'text-gray-600'
          }`}>
            Time until Seasides 2026
          </p>
        </div>

        {/* Interactive Countdown */}
        <div className="w-full max-w-4xl mx-auto">
          <div className="flex items-center justify-center gap-6 md:gap-8 lg:gap-12 bg-black/30 backdrop-blur-lg rounded-3xl px-8 md:px-12 py-8 ring-2 ring-white/20 shadow-2xl">
            {[
              { 
                value: timeLeft.days, 
                label: 'Days', 
                color: 'from-blue-500 to-cyan-500', 
                icon: <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M9 21h6a2 2 0 002-2v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1a2 2 0 002 2z" /></svg>
              },
              { 
                value: timeLeft.hours, 
                label: 'Hours', 
                color: 'from-purple-500 to-indigo-500', 
                icon: <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              },
              { 
                value: timeLeft.minutes, 
                label: 'Min', 
                color: 'from-pink-500 to-rose-500', 
                icon: <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              },
              { 
                value: timeLeft.seconds, 
                label: 'Sec', 
                color: 'from-orange-500 to-yellow-500', 
                icon: <svg className="w-6 h-6 md:w-7 md:h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
              }
            ].map((unit, index) => (
              <div key={unit.label} className={`text-center transform hover:scale-110 hover:rotate-1 transition-all duration-300 cursor-pointer bg-gradient-to-br ${unit.color} rounded-3xl p-4 md:p-6 lg:p-8 shadow-2xl ring-2 ring-white/20 hover:ring-white/40 min-w-[100px] md:min-w-[120px] lg:min-w-[140px] animate-pulse hover:animate-bounce relative overflow-hidden group`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${2 + index * 0.5}s` 
                }}
              > 
                {/* Animated background overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-pulse"></div>
                
                {/* Pulsing border effect */}
                <div className="absolute inset-0 rounded-3xl border-2 border-white/30 animate-ping opacity-0 group-hover:opacity-75"></div>
                
                <div className="relative z-10">
                  <div className={`flex justify-center mb-2 md:mb-3 text-white animate-spin-slow group-hover:animate-bounce`} style={{ animationDuration: '3s' }}>
                    {unit.icon}
                  </div>
                  <div className={`text-3xl md:text-4xl lg:text-5xl font-bold text-white drop-shadow-lg transition-all duration-300 group-hover:scale-110 ${unit.label === 'Sec' ? 'animate-pulse' : ''}`}>
                    {String(unit.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm md:text-base lg:text-lg text-white/90 font-semibold mt-2 drop-shadow-md">
                    {unit.label}
                  </div>
                </div>
                
                {/* Floating particles effect */}
                <div className="absolute top-2 right-2 w-2 h-2 bg-white/50 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/40 rounded-full animate-ping opacity-0 group-hover:opacity-100" style={{ animationDelay: '1s' }}></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Countdown;