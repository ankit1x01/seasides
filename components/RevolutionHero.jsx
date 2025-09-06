'use client';
import { useState, useEffect, useMemo, useRef } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';
import { EVENT_DATE_LONG, EVENT_START_ISO } from '@/lib/eventConfig';

const RevolutionHero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const heroRef = useRef(null);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const { isDark } = useTheme();

  const slides = [
    {
      id: 1,
      type: "main",
      title: "Seasides 2026",
  subtitle: `${EVENT_DATE_LONG} • International Centre Goa`,
      description: "India's Premier Cybersecurity Conference - Join 1000+ security professionals for three days of cutting-edge education",
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
      icon: "🎯",
      highlights: ["Live Hacking Demos", "Certification Paths", "1-on-1 Mentoring", "Real-world Scenarios"]
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
      icon: "🛠️",
      highlights: ["Build Your Own Labs", "Tool Mastery", "Group Challenges", "Take-home Projects"]
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
      icon: "🏘️",
      highlights: ["AI Security Village", "Cloud Security Village", "Hardware Village", "Social Engineering Village"]
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
      icon: "🏖️",
      highlights: ["Sunset Beach Party", "Cultural Showcase", "Music & Dance", "Networking Mixers"]
    }
  ];

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

        {/* Logo */}
        <div className="absolute top-8 left-8 z-20">
          <Image
            src="https://seasides.net/wp-content/uploads/2024/09/Logo-3-No-BG-White-Website.png"
            alt="Seasides Logo"
            width={80}
            height={80}
            priority
            className="w-16 h-16 md:w-20 md:h-20 object-contain"
          />
        </div>

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
                  {/* Logo with floating animation */}
                  <div className="mb-8">
                    <div className="inline-block transform hover:scale-110 transition-all duration-500 animate-bounce">
                      <Image
                        src="https://seasides.net/wp-content/uploads/2024/09/Logo-3-No-BG-White-Website.png"
                        alt="Seasides Logo"
                        width={96}
                        height={96}
                        priority
                        className="w-20 h-20 md:w-24 md:h-24 object-contain mx-auto"
                        style={{ filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))' }}
                      />
                    </div>
                  </div>

                  <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-6 leading-tight text-white">
                    {currentSlideData.title}
                  </h1>
                  
                  <h2 className="text-2xl md:text-3xl lg:text-4xl font-light mb-8 text-blue-100">
                    {currentSlideData.subtitle}
                  </h2>
                  
                  <p className="text-lg md:text-xl lg:text-2xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto text-white">
                    {currentSlideData.description}
                  </p>

                  {/* Trust Indicators */}
                  <div className="mb-12">
                    <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 text-white">
                      <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white border-opacity-20">
                        <div className="text-xl md:text-2xl font-bold text-blue-200">1000+</div>
                        <div className="text-xs md:text-sm text-white/90">Expected Attendees</div>
                      </div>
                      <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white border-opacity-20">
                        <div className="text-xl md:text-2xl font-bold text-green-200">7th</div>
                        <div className="text-xs md:text-sm text-white/90">Annual Conference</div>
                      </div>
                      <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white border-opacity-20">
                        <div className="text-xl md:text-2xl font-bold text-purple-200">FREE</div>
                        <div className="text-xs md:text-sm text-white/90">Registration</div>
                      </div>
                      <div className="text-center bg-white bg-opacity-10 backdrop-blur-sm rounded-xl px-4 py-2 border border-white border-opacity-20">
                        <div className="text-xl md:text-2xl font-bold text-orange-200">3 Days</div>
                        <div className="text-xs md:text-sm text-white/90">Full Experience</div>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Countdown */}
                  <div className="mb-12">
                    <div className="inline-flex items-center gap-4 md:gap-6 glass rounded-3xl px-6 md:px-8 py-6 ring-1 ring-white/10">
                      {[
                        { value: timeLeft.days, label: 'Days', color: 'from-blue-400 to-blue-600', icon: '📅' },
                        { value: timeLeft.hours, label: 'Hours', color: 'from-purple-400 to-purple-600', icon: '⏰' },
                        { value: timeLeft.minutes, label: 'Min', color: 'from-pink-400 to-pink-600', icon: '⏱️' },
                        { value: timeLeft.seconds, label: 'Sec', color: 'from-orange-400 to-orange-600', icon: '⚡' }
                      ].map((unit, index) => (
                        <div key={unit.label} className={`text-center transform hover:scale-105 transition-all duration-200 cursor-pointer bg-gradient-to-br ${unit.color} rounded-2xl p-3 md:p-4 shadow-inner ring-1 ring-white/10`}> 
                          <div className="text-lg mb-1">{unit.icon}</div>
                          <div className="text-2xl md:text-3xl font-bold text-white">
                            {String(unit.value).padStart(2, '0')}
                          </div>
                          <div className="text-xs md:text-sm text-white/90">{unit.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
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

                  {/* Interactive Highlights */}
                  {currentSlideData.highlights && (
                    <div className="mb-12">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-2xl mx-auto">
                        {currentSlideData.highlights.map((highlight, index) => (
                          <div 
                            key={index}
                            className="group rounded-2xl p-4 transform hover:scale-105 transition-all duration-300 cursor-pointer border border-white/20 backdrop-blur-sm"
                            style={{ 
                              backgroundColor: 'rgba(0,0,0,0.4)',
                              animationDelay: `${index * 0.1}s`,
                              animation: 'highlightPulse 3s ease-in-out infinite'
                            }}
                          >
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 bg-white/90 rounded-full group-hover:animate-ping"></div>
                              <span className="text-white font-medium drop-shadow-md">{highlight}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Explore More button removed per request */}
            </div>
          </div>
        </div>

        {/* Slide Indicators */}
  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20" aria-label="Slide indicators">
          <div className="flex items-center gap-3">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`relative w-12 h-1 rounded-full transition-all duration-300 ${
                  index === currentSlide ? 'bg-white' : 'bg-white bg-opacity-40'
                }`}
    aria-label={`Go to slide ${index + 1}`}
    aria-current={index === currentSlide}
              >
                {index === currentSlide && isAutoPlay && (
                  <div className="absolute top-0 left-0 h-full bg-white rounded-full progress-bar"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-8 right-8 z-20 bg-black bg-opacity-30 backdrop-blur-sm rounded-full px-4 py-2 text-white text-sm">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
      </section>
    </>
  );
};

export default RevolutionHero;