'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import InteractiveCountdown from './InteractiveCountdown';
import { EVENT_DATE_SHORT } from '@/lib/eventConfig';
const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);

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

  // Precompute particle positions once to avoid layout shift
  const particles = useMemo(() => (
    Array.from({ length: 14 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      size: Math.random() > 0.8 ? 2 : 1,
      delay: i * 0.18,
      duration: 8 + Math.random() * 2,
    }))
  ), []);

  const Particle = ({ left, top, size = 1, delay = 0, duration = 3 }) => (
    <div
      className={`absolute rounded-full bg-white/90 opacity-70`} 
      style={{
        width: `${size}px`,
        height: `${size}px`,
        left: `${left}%`,
        top: `${top}%`,
        animation: `float ${duration}s ease-in-out ${delay}s infinite, twinkle 3s ease-in-out ${delay}s infinite`,
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

        @keyframes aurora-sway {
          0% { transform: translateY(-10%) rotate(0deg); opacity: 0.35; }
          50% { transform: translateY(-12%) rotate(2deg); opacity: 0.5; }
          100% { transform: translateY(-10%) rotate(0deg); opacity: 0.35; }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.5; filter: blur(0px); }
          50% { opacity: 0.9; filter: blur(0.5px); }
        }

        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
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
        
        .gradient-bg { /* use unified brand gradient, subtle motion */
          background: linear-gradient(90deg, var(--brand-primary), var(--brand-accent), #f0abfc);
          background-size: 200% 100%;
          animation: gradient-shift 12s ease infinite;
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

        /* Ensure gradient text is visible across browsers (WebKit + others) */
        .gradient-clip {
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .aurora {
          pointer-events: none;
          position: absolute;
          inset: -20% -10% 0 -10%;
          background: radial-gradient(60% 60% at 20% 20%, rgba(59,130,246,0.25), transparent 70%),
                      radial-gradient(50% 70% at 80% 10%, rgba(168,85,247,0.25), transparent 70%),
                      radial-gradient(50% 50% at 50% 0%, rgba(236,72,153,0.2), transparent 70%);
          filter: blur(60px) saturate(120%);
          animation: aurora-sway 12s ease-in-out infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .animate-pulse, .neon-glow, .bounce-in { animation: none !important; }
          .aurora { animation: none !important; }
        }
      `}</style>
      
      <section 
        ref={heroRef}
        className="relative min-h-screen gradient-bg cyber-grid text-white overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Animated Particles */}
        {particles.map((p) => (
          <Particle key={p.id} left={p.left} top={p.top} size={p.size} delay={p.delay} duration={p.duration} />
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
          {/* Aurora overlay */}
          <div className="aurora" aria-hidden />
          {/* Animated Logo/Title */}
      <FloatingElement delay={0}>
            <div className="mb-12">
        <div className="inline-block p-6 glass rounded-2xl mb-8">
                <Image
                  src="https://seasides.net/wp-content/uploads/2024/09/Logo-3-No-BG-White-Website.png"
                  alt="Seasides Logo"
                  width={160}
                  height={160}
                  priority
                  className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                />
              </div>
              <div className="text-center">
  <p className="text-lg md:text-xl opacity-90 font-medium text-white">
                  India&apos;s Premier Cybersecurity Conference
                </p>
              </div>
            </div>
          </FloatingElement>
          
          <div className="bounce-in">
  <h1 className="font-bold leading-tight mb-4 text-white" style={{fontSize: 'clamp(3rem, 7vw, 7rem)', lineHeight: 1.05}}>
              Seasides 2026
            </h1>
          </div>
          
          <FloatingElement delay={0.5}>
  <p className="text-2xl md:text-3xl mb-3 font-light text-white/90 tracking-wide">
              India&apos;s Most Loved Conference
            </p>
          </FloatingElement>

          {/* Info Pills */}
          <div className="flex flex-wrap items-center justify-center gap-3 md:gap-4 mt-4 mb-10">
            {[
              { icon: '📅', text: EVENT_DATE_SHORT },
              { icon: '📍', text: 'Goa, India' },
              { icon: '🆓', text: 'Free Workshops' },
              { icon: '🎤', text: 'Speakers & Villages' },
            ].map((item, idx) => (
              <div key={idx} className="glass rounded-full px-4 py-2 text-sm md:text-base flex items-center gap-2 shadow-inner ring-1 ring-white/10 text-white/90">
                <span className="opacity-90">{item.icon}</span>
                <span className="opacity-90">{item.text}</span>
              </div>
            ))}
          </div>
          
          {/* Hero slider removed per request */}
          
          {/* Interactive Countdown */}
          <InteractiveCountdown />

          {/* Event Details with Animation */}
          <FloatingElement delay={1.5}>
            <div className="glass-morphism rounded-xl p-6 mb-12">
              <div className="flex flex-col md:flex-row items-center justify-center gap-6 text-lg">
                <div className="flex items-center gap-2 hover:scale-105 transition-transform">
                  <span className="text-2xl animate-pulse">📅</span>
                  <span className="font-semibold">{EVENT_DATE_SHORT.replace('–', '-')}</span>
                </div>
                <div className="hidden md:block w-1 h-6 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
                <div className="flex items-center gap-2 hover:scale-105 transition-transform">
                  <span className="text-2xl animate-bounce">📍</span>
                  <span className="font-semibold">International Centre Goa</span>
                </div>
              </div>
            </div>
          </FloatingElement>

          {/* Interactive Buttons removed per request */}
          
          {/* Marquee Highlights (non-CTA) */}
          <div className="relative w-full overflow-hidden mt-10" aria-label="Highlights ticker">
            <div className="whitespace-nowrap flex gap-8 will-change-transform md:animate-[marquee_24s_linear_infinite] hover:[animation-play-state:paused]">
              {[...Array(2)].flatMap((_) => [
                'Talks', 'Workshops', 'Villages', 'Trainings', 'CTFs', 'Networking', 'Live Demos'
              ]).map((word, idx) => (
                <span key={idx} className="text-white/80 text-sm md:text-base">{word} •</span>
              ))}
            </div>
          </div>
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
