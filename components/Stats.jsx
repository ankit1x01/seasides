'use client';
import { useState, useEffect, useRef } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState([0, 0, 0, 0]);
  const statsRef = useRef(null);

  const finalStats = [50, 80, 25, 10];
  const labels = ['Visionary Speakers', 'Spectacular Sponsors', 'Workshops', 'Villages Booth'];
  const icons = ['🎤', '🏢', '🛠️', '🏘️'];
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
      
      <section ref={statsRef} className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Conference Statistics
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
                <div className={`bg-gradient-to-br ${colors[index]} p-8 rounded-2xl shadow-2xl backdrop-blur-lg border border-white border-opacity-20 text-center relative overflow-hidden`}>
                  {/* Floating Icon */}
                  <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    <span className="inline-block animate-bounce" style={{ animationDelay: `${index * 0.1}s` }}>
                      {icons[index]}
                    </span>
                  </div>
                  
                  {/* Animated Number */}
                  <div className="number-animation">
                    <p className="text-4xl lg:text-6xl font-bold leading-none mb-2 text-white">
                      {stat}+
                    </p>
                  </div>
                  
                  {/* Label */}
                  <p className="text-sm sm:text-base font-medium text-white opacity-90">
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
            <div className="inline-flex items-center gap-3 text-lg opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
              <span className="animate-bounce">📊</span>
              <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent font-semibold">
                Real-time conference metrics
              </span>
              <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>✨</span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
