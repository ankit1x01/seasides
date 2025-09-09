'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { EVENT_START_ISO } from '@/lib/eventConfig';

const Countdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEventStarted, setIsEventStarted] = useState(false);
  const { isDark } = useTheme();

  // Countdown timer
  useEffect(() => {
    const eventDate = new Date(EVENT_START_ISO);
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate.getTime() - now;
      
      if (distance < 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        setIsEventStarted(true);
        clearInterval(timer);
      } else {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
        setIsEventStarted(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className={`relative py-20 overflow-hidden ${
      isDark 
        ? 'bg-gradient-to-br from-slate-900 via-purple-900 to-black' 
        : 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50'
    }`}>
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className={`absolute top-0 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl animate-pulse ${
            isDark ? 'bg-blue-500' : 'bg-blue-400'
          }`}></div>
          <div className={`absolute bottom-0 right-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-bounce ${
            isDark ? 'bg-purple-500' : 'bg-purple-400'
          }`} style={{ animationDelay: '2s', animationDuration: '3s' }}></div>
          <div className={`absolute top-1/2 left-1/2 w-64 h-64 rounded-full opacity-10 blur-3xl animate-pulse ${
            isDark ? 'bg-cyan-500' : 'bg-cyan-400'
          }`} style={{ animationDelay: '4s', animationDuration: '4s' }}></div>
        </div>

        {/* Grid Pattern */}
        <div 
          className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-10'}`}
          style={{
            backgroundImage: `
              linear-gradient(${isDark ? 'rgba(59,130,246,0.3)' : 'rgba(99,102,241,0.2)'} 1px, transparent 1px),
              linear-gradient(90deg, ${isDark ? 'rgba(59,130,246,0.3)' : 'rgba(99,102,241,0.2)'} 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        ></div>

        <div className="relative container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r ${
                isDark 
                  ? 'from-white via-blue-200 to-purple-200 text-transparent bg-clip-text' 
                  : 'from-gray-900 via-blue-600 to-purple-600 text-transparent bg-clip-text'
              } drop-shadow-lg`}>
                Event Countdown
              </h2>
              <div className={`w-32 h-1 mx-auto mt-4 rounded-full bg-gradient-to-r ${
                isDark ? 'from-blue-400 to-purple-400' : 'from-blue-500 to-purple-500'
              }`}></div>
            </div>
            <p className={`text-xl md:text-2xl font-medium ${
              isDark ? 'text-blue-200' : 'text-gray-700'
            } max-w-2xl mx-auto leading-relaxed`}>
              {isEventStarted ? 'Seasides 2026 is now live!' : 'Time until Seasides 2026'}
            </p>
          </div>

          {/* Enhanced Interactive Countdown */}
          <div className="w-full max-w-6xl mx-auto">
            <div className={`backdrop-blur-xl rounded-3xl p-6 md:p-8 lg:p-12 ${
              isDark 
                ? 'bg-black/20 border border-white/10' 
                : 'bg-white/30 border border-blue-200/50'
            } shadow-2xl hover:shadow-3xl transition-shadow duration-500`}>
              
              {isEventStarted ? (
                // Event Started State
                <div className="text-center py-12">
                  <div className={`text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r ${
                    isDark 
                      ? 'from-green-400 to-blue-400 text-transparent bg-clip-text' 
                      : 'from-green-600 to-blue-600 text-transparent bg-clip-text'
                  } animate-pulse`}>
                    🎉 LIVE NOW! 🎉
                  </div>
                  <p className={`text-2xl md:text-3xl font-semibold ${
                    isDark ? 'text-green-300' : 'text-green-700'
                  }`}>
                    Seasides 2026 has begun!
                  </p>
                </div>
              ) : (
                // Countdown State
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 lg:gap-8">
                  {[
                    { 
                      value: timeLeft.days, 
                      label: 'Days', 
                      gradient: isDark ? 'from-blue-500 to-cyan-400' : 'from-blue-600 to-cyan-500',
                      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M9 21h6a2 2 0 002-2v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1a2 2 0 002 2z" /></svg>
                    },
                    { 
                      value: timeLeft.hours, 
                      label: 'Hours', 
                      gradient: isDark ? 'from-purple-500 to-indigo-400' : 'from-purple-600 to-indigo-500',
                      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    },
                    { 
                      value: timeLeft.minutes, 
                      label: 'Minutes', 
                      gradient: isDark ? 'from-pink-500 to-rose-400' : 'from-pink-600 to-rose-500',
                      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    },
                    { 
                      value: timeLeft.seconds, 
                      label: 'Seconds', 
                      gradient: isDark ? 'from-orange-500 to-yellow-400' : 'from-orange-600 to-yellow-500',
                      icon: <svg className="w-8 h-8 md:w-10 md:h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>
                    }
                  ].map((unit, index) => (
                    <div key={unit.label} 
                         className="relative group transform transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                         style={{ animationDelay: `${index * 0.1}s` }}>
                      
                      {/* Main Card */}
                      <div className={`relative overflow-hidden rounded-2xl p-6 md:p-8 bg-gradient-to-br ${unit.gradient} 
                        shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20`}>
                        
                        {/* Content */}
                        <div className="relative z-10 text-center text-white">
                          {/* Icon */}
                          <div className="flex justify-center mb-4 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                            {unit.icon}
                          </div>
                          
                          {/* Value */}
                          <div className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-2 drop-shadow-lg 
                            ${unit.label === 'Seconds' ? 'animate-pulse' : ''}`}>
                            {String(unit.value).padStart(2, '0')}
                          </div>
                          
                          {/* Label */}
                          <div className="text-sm md:text-base font-semibold opacity-90 uppercase tracking-wide">
                            {unit.label}
                          </div>
                        </div>
                        
                        {/* Decorative Elements */}
                        <div className="absolute top-2 right-2 w-2 h-2 bg-white/40 rounded-full animate-ping 
                          opacity-0 group-hover:opacity-100" style={{ animationDelay: '0.5s' }}></div>
                        <div className="absolute bottom-2 left-2 w-1 h-1 bg-white/30 rounded-full animate-ping 
                          opacity-0 group-hover:opacity-100" style={{ animationDelay: '1s' }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
              
              {/* Call to Action */}
              {!isEventStarted && (
                <div className="text-center mt-12">
                  <p className={`text-lg md:text-xl font-medium mb-6 ${
                    isDark ? 'text-blue-200' : 'text-gray-700'
                  }`}>
                    Don&apos;t miss India&apos;s premier cybersecurity conference
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <a href="#about" 
                       className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 ${
                         isDark 
                           ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-400 hover:to-purple-400' 
                           : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-500 hover:to-purple-500'
                       } transform hover:scale-105 shadow-lg hover:shadow-xl`}>
                      Learn More
                    </a>
                    <a href="#social" 
                       className={`px-8 py-3 rounded-xl font-semibold transition-all duration-300 border-2 ${
                         isDark 
                           ? 'border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black' 
                           : 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                       } transform hover:scale-105`}>
                      Stay Updated
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Countdown;