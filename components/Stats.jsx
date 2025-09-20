'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Stats = () => {
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0, 0]);
  const [isVisible, setIsVisible] = useState(false);
  const { isDark } = useTheme();

  // Add custom CSS animations
  const floatAnimation = `
    @keyframes float {
      0%, 100% { transform: translateY(0px) rotate(0deg); }
      25% { transform: translateY(-10px) rotate(1deg); }
      50% { transform: translateY(-5px) rotate(-1deg); }
      75% { transform: translateY(-15px) rotate(0.5deg); }
    }
    @keyframes scaleX {
      0%, 100% { transform: scaleX(0); }
      50% { transform: scaleX(1); }
    }
  `;

  const finalStats = [15, 100, 3, 1000];
  const labels = ['Villages', '% FREE Conference', 'Days of Learning', 'Expected Attendees'];
  const icons = [
    <svg key="villages" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>,
    <svg key="security" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
    </svg>,
    <svg key="days" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>,
    <svg key="attendees" className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  ];


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('stats-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (isVisible) {
      finalStats.forEach((finalValue, index) => {
        let startValue = 0;
        const duration = 2000;
        const startTime = Date.now();

        const animate = () => {
          const elapsed = Date.now() - startTime;
          const progress = Math.min(elapsed / duration, 1);

          const easeOutQuart = 1 - Math.pow(1 - progress, 4);
          const currentValue = Math.floor(startValue + (finalValue - startValue) * easeOutQuart);

          setAnimatedValues(prev => {
            const newValues = [...prev];
            newValues[index] = currentValue;
            return newValues;
          });

          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };

        setTimeout(() => animate(), index * 200);
      });
    }
  }, [isVisible]);

  return (
    <>
      <style jsx>{floatAnimation}</style>
      <section id="stats-section" className={`py-20 relative overflow-hidden ${
        isDark ? 'bg-charcoal-gray' : 'bg-light-gray'
      }`}>
      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-40 right-20 w-24 h-24 bg-cyan-500/10 rounded-full blur-2xl animate-bounce" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-pink-500/10 rounded-full blur-xl animate-bounce" style={{ animationDelay: '0.5s' }} />

        {/* Floating Icons */}
        <div className="absolute top-32 right-10 text-sunset-orange/20 animate-float">
          <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
          </svg>
        </div>
        <div className="absolute bottom-32 left-20 text-cyan-300/20 animate-float" style={{ animationDelay: '2s' }}>
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">

          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 ${
            isDark ? 'text-white' : 'text-gray-900'
          }`}>
            Conference at a{' '}
            <span className="relative inline-block">
              <span className="text-sunset-orange animate-pulse">
                Glance
              </span>
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-sunset-orange rounded-full transform scale-x-0 animate-[scaleX_2s_ease-in-out_infinite]" />
            </span>
          </h2>
          <p className={`text-xl max-w-3xl mx-auto ${
            isDark ? 'text-gray-300' : 'text-gray-600'
          }`}>
Join us for an unprecedented gathering of minds across coastal communities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {finalStats.map((stat, index) => {
            const cardColors = [
              'bg-deep-ocean-blue',
              'bg-sunset-orange',
              'bg-sunny-yellow',
              'bg-deep-ocean-blue'
            ];

            return (
              <div
                key={index}
                className="group text-center"
                style={{
                  animation: `float 6s ease-in-out infinite`,
                  animationDelay: `${index * 0.5}s`
                }}
              >
                <div className="flex flex-col items-center space-y-4">
                  <div className={`p-4 ${cardColors[index]} rounded-2xl text-white transform group-hover:scale-110 transition-all duration-500`}>
                    {icons[index]}
                  </div>

                  <div className="relative inline-block">
                    <div className={`text-5xl md:text-6xl font-black font-mono ${cardColors[index].replace('bg-', 'text-')} group-hover:scale-110 transition-transform duration-500`}>
                      {animatedValues[index]}
                      {index === 1 && '%'}
                      {index === 3 && '+'}
                    </div>
                  </div>

                  <p className={`text-lg font-bold transition-all duration-300 ${
                    isDark
                      ? 'text-gray-300 group-hover:text-white'
                      : 'text-gray-700 group-hover:text-gray-900'
                  }`}>
                    {labels[index]}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
    </>
  );
};

export default Stats;
