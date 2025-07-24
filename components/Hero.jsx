'use client';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const eventDate = new Date('2026-02-20T00:00:00');
    
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

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const Particle = ({ delay = 0, duration = 3 }) => (
    <div 
      className="absolute w-1 h-1 bg-white rounded-full opacity-70"
      style={{
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${duration}s ease-in-out ${delay}s infinite`,
      }}
    />
  );

  const FloatingElement = ({ children, delay = 0 }) => (
    <div 
      className="animate-pulse"
      style={{
        animation: `float 6s ease-in-out ${delay}s infinite`,
      }}
    >
      {children}
    </div>
  );

  return (
    <>
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.5); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.8), 0 0 60px rgba(147, 51, 234, 0.6); }
        }
        
        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        @keyframes bounce-in {
          0% { transform: scale(0.3) rotate(-15deg); opacity: 0; }
          50% { transform: scale(1.05) rotate(5deg); }
          70% { transform: scale(0.9) rotate(-2deg); }
          100% { transform: scale(1) rotate(0deg); opacity: 1; }
        }
        
        @keyframes typewriter {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes blink {
          50% { border-color: transparent; }
        }
        
        .gradient-bg {
          background: linear-gradient(-45deg, #667eea, #764ba2, #6B73FF, #9A9CE2, #FF6B9D, #C44569);
          background-size: 400% 400%;
          animation: gradient-shift 15s ease infinite;
        }
        
        .glass-morphism {
          background: rgba(255, 255, 255, 0.1);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .neon-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .bounce-in {
          animation: bounce-in 1s ease-out;
        }
        
        .cyber-grid {
          background-image: 
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
      
      <section 
        ref={heroRef}
        className="relative min-h-screen gradient-bg cyber-grid text-white overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Particles */}
        {[...Array(20)].map((_, i) => (
          <Particle key={i} delay={i * 0.2} duration={3 + Math.random() * 2} />
        ))}
        
        {/* Dynamic Background Elements */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-96 h-96 bg-blue-500 rounded-full opacity-20 blur-3xl"
            style={{
              left: `${30 + mousePosition.x * 10}%`,
              top: `${20 + mousePosition.y * 10}%`,
              transform: `translate(-50%, -50%) scale(${isHovered ? 1.2 : 1})`,
              transition: 'all 0.3s ease',
            }}
          />
          <div 
            className="absolute w-80 h-80 bg-purple-500 rounded-full opacity-20 blur-3xl"
            style={{
              right: `${20 + mousePosition.x * 5}%`,
              bottom: `${30 + mousePosition.y * 5}%`,
              transform: `translate(50%, 50%) scale(${isHovered ? 1.1 : 1})`,
              transition: 'all 0.4s ease',
            }}
          />
        </div>
        
        <div className="relative container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 z-10">
          {/* Animated Logo/Title */}
          <FloatingElement delay={0}>
            <div className="mb-8">
              <div className="inline-block p-4 glass-morphism rounded-full mb-6 neon-glow">
                <div className="text-6xl">🌊</div>
              </div>
            </div>
          </FloatingElement>
          
          <div className="bounce-in">
            <h1 className="text-6xl font-bold leading-tight sm:text-7xl md:text-8xl mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
              Seasides 2026
            </h1>
          </div>
          
          <FloatingElement delay={0.5}>
            <p className="text-2xl md:text-3xl mb-3 font-light bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              India's Most Loved Conference
            </p>
          </FloatingElement>
          
          <FloatingElement delay={1}>
            <div className="flex items-center gap-4 text-lg md:text-xl mb-12 opacity-90">
              <span className="animate-bounce">🎤</span>
              <span>Talks</span>
              <span className="animate-pulse text-blue-300">•</span>
              <span className="animate-bounce" style={{ animationDelay: '0.2s' }}>🛠️</span>
              <span>Workshops</span>
              <span className="animate-pulse text-purple-300">•</span>
              <span className="animate-bounce" style={{ animationDelay: '0.4s' }}>🏘️</span>
              <span>Villages</span>
              <span className="animate-pulse text-pink-300">•</span>
              <span className="animate-bounce" style={{ animationDelay: '0.6s' }}>🎉</span>
              <span>Party</span>
            </div>
          </FloatingElement>
          
          {/* Interactive Countdown */}
          <div className="glass-morphism rounded-2xl p-8 mb-12 transform hover:scale-105 transition-all duration-300 neon-glow">
            <h3 className="text-xl font-semibold mb-6 bg-gradient-to-r from-yellow-200 to-orange-200 bg-clip-text text-transparent">
              🚀 Conference Launches In:
            </h3>
            <div className="grid grid-cols-4 gap-6 text-center">
              {[
                { value: timeLeft.days, label: 'Days', color: 'from-blue-400 to-blue-600' },
                { value: timeLeft.hours, label: 'Hours', color: 'from-purple-400 to-purple-600' },
                { value: timeLeft.minutes, label: 'Minutes', color: 'from-pink-400 to-pink-600' },
                { value: timeLeft.seconds, label: 'Seconds', color: 'from-orange-400 to-orange-600' }
              ].map((item, index) => (
                <div 
                  key={item.label}
                  className={`bg-gradient-to-br ${item.color} rounded-xl p-4 transform hover:scale-110 transition-all duration-300 cursor-pointer shadow-lg hover:shadow-2xl`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl md:text-4xl font-bold mb-1 text-white">
                    {String(item.value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-white opacity-90">{item.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Event Details with Animation */}
          <FloatingElement delay={1.5}>
            <div className="glass-morphism rounded-xl p-6 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
                <div className="flex items-center gap-2 hover:scale-105 transition-transform">
                  <span className="text-2xl animate-pulse">📅</span>
                  <span className="font-semibold">20-22 Feb 2026</span>
                </div>
                <div className="hidden md:block w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                <div className="flex items-center gap-2 hover:scale-105 transition-transform">
                  <span className="text-2xl animate-bounce">�</span>
                  <span className="font-semibold">International Centre Goa</span>
                </div>
              </div>
            </div>
          </FloatingElement>

          {/* Interactive Buttons */}
          <div className="flex flex-wrap justify-center gap-6">
            <button 
              className="group px-10 py-4 text-lg font-bold rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
              onMouseEnter={() => setIsHovered(true)}
            >
              <span className="relative z-10 flex items-center gap-2">
                <span className="animate-bounce">🎯</span>
                Register Now - FREE!
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
            </button>
            
            <button className="group px-10 py-4 text-lg font-bold border-2 border-white rounded-2xl text-white hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 relative overflow-hidden">
              <span className="relative z-10 flex items-center gap-2">
                <span className="animate-spin">⚡</span>
                View Schedule
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
            </button>
          </div>
          
          {/* Fun Interactive Element */}
          <FloatingElement delay={2}>
            <div className="mt-16 text-center">
              <div className="inline-flex items-center gap-2 text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="animate-bounce">👇</span>
                <span>Scroll to explore the cyber universe</span>
                <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>✨</span>
              </div>
            </div>
          </FloatingElement>
        </div>
        
        {/* Bottom Wave Effect */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" className="w-full h-20 fill-current text-white opacity-10">
            <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
