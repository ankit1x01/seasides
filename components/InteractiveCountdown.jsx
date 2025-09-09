'use client';
import { useState, useEffect } from 'react';
import { EVENT_START_ISO } from '@/lib/eventConfig';

const InteractiveCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [isEventStarted, setIsEventStarted] = useState(false);
  const [activeUnit, setActiveUnit] = useState(null);

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
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeUnits = [
    { value: timeLeft.days, label: 'Days', color: 'from-blue-500 to-blue-600', icon: '📅' },
    { value: timeLeft.hours, label: 'Hours', color: 'from-purple-500 to-purple-600', icon: '⏰' },
    { value: timeLeft.minutes, label: 'Minutes', color: 'from-pink-500 to-pink-600', icon: '⏱️' },
    { value: timeLeft.seconds, label: 'Seconds', color: 'from-orange-500 to-orange-600', icon: '⚡' }
  ];

  return (
    <>
      <style jsx>{`
        @keyframes countdown-pulse {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes number-flip {
          0% { transform: rotateX(0deg); }
          50% { transform: rotateX(90deg); }
          100% { transform: rotateX(0deg); }
        }
        
        @keyframes glow-effect {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4); }
        }
        
        .countdown-unit {
          animation: countdown-pulse 2s ease-in-out infinite;
        }
        
        .countdown-unit:hover {
          animation: glow-effect 1s ease-in-out infinite;
        }
        
        .number-display {
          animation: number-flip 0.6s ease-in-out;
        }
      `}</style>
      
  <div className="glass-morphism rounded-3xl p-8 mb-12 transform hover:scale-105 transition-all duration-300 safari-blur-lg">
        {isEventStarted ? (
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 text-white">
              🎉 Conference is Live! 🎉
            </h3>
            <p className="text-white text-lg">Welcome to Seasides 2026!</p>
          </div>
        ) : (
          <>
            <h3 className="text-xl font-semibold mb-8 text-white text-center">
              Conference Starts In:
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {timeUnits.map((unit, index) => (
                <div 
                  key={unit.label}
                  className={`countdown-unit bg-gradient-to-br ${unit.color} rounded-2xl p-6 transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-2xl relative overflow-hidden group`}
                  style={{ animationDelay: `${index * 0.15}s` }}
                  onMouseEnter={() => setActiveUnit(index)}
                  onMouseLeave={() => setActiveUnit(null)}
                >
                  {/* Background Glow */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Icon */}
                  <div className="text-2xl mb-2 text-center text-white/90">
                    {unit.icon}
                  </div>
                  
                  {/* Number */}
                  <div className={`text-center relative z-10 ${activeUnit === index ? 'number-display' : ''}`}>
                    <div className="text-4xl md:text-5xl font-bold mb-2 text-white">
                      {String(unit.value).padStart(2, '0')}
                    </div>
                    <div className="text-sm text-white/90 font-medium">
                      {unit.label}
                    </div>
                  </div>
                  
                  {/* Hover Ripple Effect */}
                  {activeUnit === index && (
                    <div className="absolute inset-0 bg-white opacity-20 rounded-2xl animate-ping"></div>
                  )}
                </div>
              ))}
            </div>
            
            {/* Progress Bar */}
            <div className="mt-8">
              <div className="w-full bg-white bg-opacity-20 rounded-full h-2">
                <div
                  className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: `${Math.max(0, Math.min(100, 100 - (timeLeft.days / 365) * 100))}%`
                  }}
                />
              </div>
              <p className="text-center text-white/90 text-sm mt-2">
                Time until conference begins
              </p>
            </div>
            
            {/* Milestone Alerts */}
            {timeLeft.days <= 30 && timeLeft.days > 0 && (
              <div className="mt-6 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-lg p-4 text-center text-white">
                <p className="text-yellow-200 font-semibold">
                    🔥 Less than a month to go! Finalizing schedules and speaker line-up.
                </p>
              </div>
            )}
            
            {timeLeft.days <= 7 && timeLeft.days > 0 && (
              <div className="mt-6 bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 rounded-lg p-4 text-center text-white">
                <p className="text-red-200 font-semibold">
                    ⚡ Final week! Get ready — see you at the venue.
                </p>
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default InteractiveCountdown;