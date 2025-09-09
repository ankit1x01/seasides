'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { EVENT_DATE_LONG, EVENT_START_ISO } from '@/lib/eventConfig';

const RevolutionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);
  const { isDark } = useTheme();

  const slides = [
    {
      id: 1,
      type: "main",
      title: "Seasides 2026",
  subtitle: `${EVENT_DATE_LONG} • International Centre Goa`,
      description: "India's Most Loved Conference - Join the community for free talks, workshops, and training sessions",
      backgroundImage: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      animation: "fadeInUp",
      particles: true,
      showCountdown: true
    },
    {
      id: 2,
      type: "training",
      title: "Expert Training",
      subtitle: "Master Advanced Cybersecurity Skills",
      description: "Intensive hands-on training sessions led by industry experts covering the latest security techniques and methodologies",
      backgroundImage: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
      animation: "slideInRight",
      particles: true,
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      id: 3,
      type: "workshops",
      title: "Hands-on Workshops",
      subtitle: "Learn by Doing",
      description: "Interactive workshops where you build, break, and secure systems using cutting-edge tools and techniques",
      backgroundImage: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      animation: "slideInLeft",
      particles: true,
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      id: 4,
      type: "village",
      title: "7 Specialized Villages",
      subtitle: "Choose Your Adventure",
      description: "Immerse yourself in specialized learning environments tailored to your interests and skill level",
      backgroundImage: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
      animation: "zoomIn",
      particles: true,
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    },
    {
      id: 5,
      type: "party",
      title: "Beach Party & Networking",
      subtitle: "Connect • Celebrate • Create",
      description: "Epic beach parties, networking events, and cultural experiences that make Seasides legendary",
      backgroundImage: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      animation: "bounceIn",
      particles: true,
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    }
  ];


  // Auto-play functionality with reduced-motion and visibility pause
  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isAutoPlay || prefersReduced || isHovered) return;

    let interval;
    const tick = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const start = () => { interval = setInterval(tick, 6000); };
    const stop = () => { if (interval) clearInterval(interval); };

    const handleVisibility = () => {
      if (document.hidden) stop(); else start();
    };

    start();
    document.addEventListener('visibilitychange', handleVisibility);

    return () => {
      stop();
      document.removeEventListener('visibilitychange', handleVisibility);
    };
  }, [isAutoPlay, isHovered, slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 10000);
  };

  const currentSlideData = slides[currentSlide];

  // Memoize particle positions per mount for stability
  const particles = useMemo(() => (
    Array.from({ length: 10 }).map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: i * 0.5,
      duration: 8 + Math.random() * 2
    }))
  ), []);

  // Keyboard navigation
  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
      if (e.key === ' ') { e.preventDefault(); setIsAutoPlay((v) => !v); }
      if (e.key === 'Home') goToSlide(0);
      if (e.key === 'End') goToSlide(slides.length - 1);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [slides.length]);

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slideInRight {
          from { opacity: 0; transform: translateX(100px) rotate(5deg); }
          to { opacity: 1; transform: translateX(0) rotate(0deg); }
        }
        
        @keyframes slideInLeft {
          from { opacity: 0; transform: translateX(-100px) rotate(-5deg); }
          to { opacity: 1; transform: translateX(0) rotate(0deg); }
        }
        
        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.7) rotate(10deg); }
          to { opacity: 1; transform: scale(1) rotate(0deg); }
        }
        
        @keyframes bounceIn {
          0% { opacity: 0; transform: scale(0.3) translateY(100px); }
          50% { opacity: 0.9; transform: scale(1.1) translateY(-20px); }
          70% { transform: scale(0.9) translateY(10px); }
          100% { opacity: 1; transform: scale(1) translateY(0); }
        }
        
        @keyframes highlightPulse {
          0%, 100% { background-color: rgba(0, 0, 0, 0.4); transform: scale(1); }
          50% { background-color: rgba(0, 0, 0, 0.55); transform: scale(1.05); }
        }
        
        @keyframes iconBounce {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(5deg); }
          50% { transform: translateY(-5px) rotate(-5deg); }
          75% { transform: translateY(-15px) rotate(3deg); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(1deg); }
          50% { transform: translateY(-5px) rotate(0deg); }
          75% { transform: translateY(-15px) rotate(-1deg); }
        }
        
        @keyframes slideProgress {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        .slide-content {
          animation: ${currentSlideData.animation} 1s ease-out;
        }
        
        .float-particle {
          animation: float 6s ease-in-out infinite;
        }
        
        .progress-bar {
          animation: slideProgress 6s linear infinite;
        }
        
        .hero-bg {
          background: ${currentSlideData.backgroundImage};
          transition: all 1s ease-in-out;
        }

        /* Ensure gradient text is visible across browsers (WebKit + others) */
        .gradient-clip {
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
        }
      `}</style>

      <section ref={heroRef} className={`
        relative min-h-screen overflow-hidden transition-all duration-500
        ${isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-black' 
          : 'hero-bg'
        }
      `}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        role="region" aria-roledescription="carousel" aria-label="Seasides highlights"
      >
        {/* Background Elements */}
  <div className={`absolute inset-0 transition-opacity duration-700 ${isDark ? 'bg-black/60' : 'bg-black/40'}`}></div>
        
        {/* Animated Particles */}
        {currentSlideData.particles && (
          <div className="absolute inset-0">
            {particles.map((p) => (
              <div
                key={p.id}
                className={`
                  float-particle absolute w-2 h-2 rounded-full transition-all duration-500
                  ${isDark 
                    ? 'bg-cyan-400 opacity-30 shadow-sm shadow-cyan-400/50' 
                    : 'bg-white opacity-20'
                  }
                `}
                style={{
                  left: `${p.left}%`,
                  top: `${p.top}%`,
                  animationDelay: `${p.delay}s`,
                  animationDuration: `${p.duration}s`
                }}
              />
            ))}
          </div>
        )}

        {/* Cybersec Grid Overlay for Dark Theme */}
        {isDark && (
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 212, 255, 0.2) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 212, 255, 0.2) 1px, transparent 1px)
              `,
              backgroundSize: '50px 50px'
            }}></div>
          </div>
        )}


        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group ring-1 ring-white/40 shadow-lg"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group ring-1 ring-white/40 shadow-lg"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Main Content */}
        <div className="relative z-10 min-h-screen flex items-center">
          <div className="container mx-auto px-6 text-center text-white">
            <div className="slide-content max-w-4xl mx-auto">
              
              {/* Main slide (dates, countdown, venue) */}
              {currentSlideData.type === 'main' && (
                <>

                  <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight text-white whitespace-nowrap">
                    <span>Seasides </span>
                    <span className="text-cyan-400">2026</span>
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-blue-100">
                    {currentSlideData.subtitle}
                  </h2>
                  
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto text-white">
                    {currentSlideData.description}
                  </p>


                </>
              )}

              {/* Other slides (training, workshops, village, party) */}
              {currentSlideData.type !== 'main' && (
                <>
                  {/* Animated Icon */}
                  <div className="mb-8">
                    <div className="inline-block text-6xl md:text-8xl" style={{ animation: 'iconBounce 3s ease-in-out infinite' }}>
                      {currentSlideData.icon}
                    </div>
                  </div>

                  <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
                    {currentSlideData.title}
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 opacity-90">
                    {currentSlideData.subtitle}
                  </h2>
                  
                  <p className="text-lg md:text-xl lg:text-2xl mb-12 text-white/90 leading-relaxed max-w-3xl mx-auto">
                    {currentSlideData.description}
                  </p>
                </>
              )}

              {/* Explore More button removed per request */}
            </div>
          </div>
        </div>

      </section>
    </>
  );
};

export default RevolutionHero;