'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);
  const { isDark } = useTheme();

  const finalStats = [15, 100, 3, 1000];
  const labels = ['Villages', '% FREE Conference', 'Days of Learning', 'Expected Attendees'];
  const icons = [
    <svg key="villages" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
    <svg key="security" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    <svg key="days" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M9 21h6a2 2 0 002-2v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1a2 2 0 002 2z" /></svg>,
    <svg key="attendees" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      finalStats.forEach((finalValue, index) => {
        let currentValue = 0;
        const increment = finalValue / 50;
        const timer = setInterval(() => {
          currentValue += increment;
          if (currentValue >= finalValue) {
            currentValue = finalValue;
            clearInterval(timer);
          }
          setAnimatedStats(prev => {
            const newStats = [...prev];
            newStats[index] = Math.floor(currentValue);
            return newStats;
          });
        }, 50);
      });
    }
  }, [isVisible, finalStats]);

  return (
    <>
      <style jsx>{`
        @keyframes float-up {
          0% { transform: translateY(30px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse-scale {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.05); }
        }
        
        @keyframes glow-pulse {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4); }
        }
        
        .stat-card {
          animation: float-up 0.8s ease-out;
          transition: all 0.3s ease;
        }
        
        .stat-card:hover {
          transform: translateY(-10px) scale(1.05);
          animation: glow-pulse 2s ease-in-out infinite;
        }
        
        .number-animation {
          animation: pulse-scale 2s ease-in-out infinite;
        }
      `}</style>
      
      <section ref={statsRef} className={`relative py-20 scroll-mt-24 overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-gray-900 via-black to-purple-900/20' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 aurora-x ${
            isDark ? 'opacity-60' : 'opacity-30'
          }`}></div>
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent aurora-y ${
            isDark ? 'opacity-50' : 'opacity-25'
          }`}></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className={`text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full border ${
                  isDark 
                    ? 'text-blue-400 border-blue-400/30 bg-blue-400/10' 
                    : 'text-blue-600 border-blue-600/30 bg-blue-600/10'
                }`}>
                  CONFERENCE STATS
                </span>
              </div>

              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 ${
                isDark ? 'text-white soft-glow' : 'text-gray-900'
              }`}>
                By the{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Numbers
                </span>
              </h2>

              <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Join India&apos;s premier FREE cybersecurity conference and be part of something extraordinary.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {animatedStats.map((stat, index) => (
                <div 
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl p-8 backdrop-blur-sm text-center transition-all duration-300 ${
                    isDark 
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                      : 'bg-white/80 border border-gray-200 shadow-xl hover:shadow-2xl'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  {/* Icon */}
                  <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r ${
                    ['from-blue-500 to-cyan-600', 'from-purple-500 to-pink-600', 'from-green-500 to-emerald-600', 'from-orange-500 to-red-600'][index]
                  } flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${
                    isDark ? 'shadow-lg shadow-blue-500/25' : 'shadow-xl shadow-blue-500/25'
                  }`}>
                    {icons[index]}
                  </div>

                  {/* Animated Number */}
                  <div className="number-animation mb-4">
                    <p className={`text-4xl lg:text-6xl font-extrabold leading-none ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {stat}
                      <span className={`text-2xl lg:text-3xl ${
                        isDark ? 'text-gray-400' : 'text-gray-600'
                      }`}>+</span>
                    </p>
                  </div>
                  
                  {/* Label */}
                  <p className={`text-sm sm:text-base font-semibold ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {labels[index]}
                  </p>

                  {/* Gradient overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${
                    ['from-blue-500 to-cyan-600', 'from-purple-500 to-pink-600', 'from-green-500 to-emerald-600', 'from-orange-500 to-red-600'][index]
                  } opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
