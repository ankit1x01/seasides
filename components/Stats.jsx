'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);
  const { isDark } = useTheme();

  const finalStats = [500, 100, 2, 15];
  const labels = ['Expected Attendees', '% FREE Conference', 'Days of Learning', 'States Represented'];
  const icons = [
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M9 21h6a2 2 0 002-2v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1a2 2 0 002 2z" /></svg>,
    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
  ];
  const colors = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500', 
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500'
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
  }, [isVisible]);

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
      
      <section ref={statsRef} className={`relative py-20 overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-black text-white' 
          : 'bg-gradient-to-br from-gray-50 to-blue-50 text-gray-900'
      }`}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-pink-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Cyber Grid Background */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark 
                ? "text-green-400" 
                : "text-blue-800"
            }`} style={{ fontWeight: 'bold', textShadow: isDark ? '2px 2px 4px rgba(255,255,255,0.3)' : '2px 2px 4px rgba(0,0,0,0.2)' }}>
              Seasides 2026 by Numbers
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 justify-center">
            {animatedStats.map((stat, index) => (
              <div 
                key={index}
                className={`stat-card relative group cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`p-8 rounded-2xl shadow-2xl border-2 text-center relative overflow-hidden transition-all duration-300 ${
                  isDark 
                    ? 'bg-black hover:bg-gray-900' 
                    : 'bg-white hover:bg-gray-50 shadow-lg'
                }`} style={{ 
                  borderColor: ['#00FFFF', '#FF69B4', '#32CD32', '#FFD700'][index]
                }}>
                  {/* Floating Icon */}
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                    <div className={`inline-block animate-bounce ${
                      isDark ? 'text-white' : 'text-gray-700'
                    }`} style={{ animationDelay: `${index * 0.1}s` }}>
                      {icons[index]}
                    </div>
                  </div>
                  
                  {/* Animated Number */}
                  <div className="number-animation">
                    <p className="text-4xl lg:text-6xl font-bold leading-none mb-2" style={{
                      color: ['#00FFFF', '#FF69B4', '#32CD32', '#FFD700'][index],
                      fontWeight: 'bold',
                      textShadow: '2px 2px 4px rgba(255,255,255,0.3)'
                    }}>
                      {stat}+
                    </p>
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm sm:text-base font-medium" style={{
                    color: ['#87CEEB', '#DDA0DD', '#98FB98', '#F0E68C'][index],
                    fontWeight: 'bold',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.8)'
                  }}>
                    {labels[index]}
                  </p>
                  
                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Glowing Border Effect */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-white border-opacity-0 group-hover:border-opacity-50 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom Decorative Element */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center gap-3 text-lg hover:text-white transition-colors cursor-pointer">
              <svg className="w-6 h-6 animate-bounce text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
              <span style={{ color: '#40E0D0', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                Join India's premier FREE cybersecurity conference
              </span>
              <svg className="w-6 h-6 animate-bounce text-purple-400" style={{ animationDelay: '0.5s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
