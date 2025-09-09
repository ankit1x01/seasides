'use client';
import { useState, useEffect, useRef } from 'react';

// Check if device is mobile/low-power
const isMobile = () => {
  if (typeof window === 'undefined') return false;
  return window.innerWidth <= 768 || /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isLowPowerMode, setIsLowPowerMode] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

  // Detect mobile/low-power device
  useEffect(() => {
    setIsLowPowerMode(isMobile());
  }, []);

  const slides = [
    {
      icon: "🆓",
      title: "100% FREE Conference",
      description: "World-class talks, workshops, and networking - completely free for all participants",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: "🏖️",
      title: "Beautiful Goa Venue",
      description: "International Centre Goa - Premier venue with state-of-the-art facilities in paradise",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: "🎯",
      title: "7 Specialized Villages",
      description: "AI Security, Cloud, Hardware, Kubernetes, Bug Bounty, Social Engineering & Threat Hunting",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: "🎤",
      title: "50+ Expert Speakers",
      description: "Industry leaders, researchers, and innovators sharing cutting-edge cybersecurity insights",
      color: "from-orange-500 to-red-500"
    },
    {
      icon: "🛠️",
      title: "Hands-on Workshops",
      description: "Interactive learning experiences with practical skills you can apply immediately",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  // Auto-advance with pause on hover/focus, page visibility, and reduced-motion
  useEffect(() => {
    const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (isPaused || document.hidden || prefersReduced) return;
    // 7 seconds per slide - comfortable reading time
    const interval = 7000;
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, interval);
    return () => clearInterval(id);
  }, [isPaused, slides.length]);

  useEffect(() => {
    const onVisibility = () => {
      // trigger re-run of effect above
      setIsPaused((p) => p);
    };
    document.addEventListener('visibilitychange', onVisibility);
    return () => document.removeEventListener('visibilitychange', onVisibility);
  }, []);

  // Keyboard controls
  useEffect(() => {
    const onKey = (e) => {
      if (!containerRef.current) return;
      if (document.activeElement && containerRef.current.contains(document.activeElement) === false) return;
      if (e.key === 'ArrowRight') setCurrentSlide((s) => (s + 1) % slides.length);
      if (e.key === 'ArrowLeft') setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [slides.length]);

  // Touch swipe
  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (dx > 40) setCurrentSlide((s) => (s - 1 + slides.length) % slides.length);
    if (dx < -40) setCurrentSlide((s) => (s + 1) % slides.length);
    touchStartX.current = null;
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <style jsx>{`
        @keyframes slide-in-right {
          0% { transform: translateX(100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes slide-in-left {
          0% { transform: translateX(-100px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes pulse-dot {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.2); opacity: 1; }
        }
        
        .slide-enter {
          animation: slide-in-right 0.6s ease-out;
        }
        
        .slide-icon {
          animation: pulse-dot 2s ease-in-out infinite;
        }
        
        /* Minimal wave animations - performance optimized */
        @keyframes waveFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-3px);
          }
        }
        
        @keyframes waveFloat2 {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-2px);
          }
        }
        
        .wave-path {
          animation: waveFloat 4s ease-in-out infinite;
        }
        
        .wave-path-2 {
          animation: waveFloat2 3s ease-in-out infinite 1s;
        }
        
        /* Slide-specific animations */
        
        /* Slide 1: FREE Conference */
        @keyframes dollarFloat {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
            opacity: 0.6;
          }
          50% {
            transform: translateY(-15px) rotate(10deg);
            opacity: 1;
          }
        }
        .dollar-float {
          animation: dollarFloat 4s ease-in-out infinite;
        }
        
        /* Slide 2: Goa Venue */
        @keyframes palmSway {
          0%, 100% {
            transform: rotate(0deg);
          }
          50% {
            transform: rotate(8deg);
          }
        }
        .palm-sway {
          animation: palmSway 6s ease-in-out infinite;
        }
        
        @keyframes beachWave {
          0%, 100% {
            transform: translateX(0);
          }
          50% {
            transform: translateX(-10px);
          }
        }
        .beach-wave {
          animation: beachWave 3s ease-in-out infinite;
        }
        
        @keyframes sunRays {
          0%, 100% {
            transform: rotate(0deg) scale(1);
          }
          50% {
            transform: rotate(180deg) scale(1.1);
          }
        }
        .sun-rays {
          animation: sunRays 8s linear infinite;
        }
        
        /* Slide 3: Villages */
        @keyframes circuitGlow {
          0%, 100% {
            opacity: 0.3;
            filter: brightness(1);
          }
          50% {
            opacity: 0.8;
            filter: brightness(1.5);
          }
        }
        .circuit-glow {
          animation: circuitGlow 2s ease-in-out infinite;
        }
        
        @keyframes codeFloat {
          0%, 100% {
            transform: translateY(0px);
            opacity: 0.5;
          }
          50% {
            transform: translateY(-8px);
            opacity: 0.8;
          }
        }
        .code-float {
          animation: codeFloat 3s ease-in-out infinite;
        }
        
        /* Slide 4: Speakers */
        @keyframes soundRing {
          0% {
            transform: scale(0.8);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
          }
        }
        .sound-ring {
          animation: soundRing 2s ease-out infinite;
        }
        
        @keyframes micBounce {
          0%, 100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        .mic-bounce {
          animation: micBounce 2.5s ease-in-out infinite;
        }
        
        @keyframes noteFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-12px) translateX(5px);
            opacity: 0.8;
          }
        }
        .note-float {
          animation: noteFloat 3s ease-in-out infinite;
        }
        
        /* Slide 5: Workshops */
        @keyframes toolSpin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .tool-spin {
          animation: toolSpin 6s linear infinite;
        }
        
        @keyframes workshopGrid {
          0%, 100% {
            opacity: 0.1;
            transform: scale(1);
          }
          50% {
            opacity: 0.3;
            transform: scale(1.1);
          }
        }
        .workshop-grid {
          animation: workshopGrid 4s ease-in-out infinite;
        }
      `}</style>
      
      <div
        ref={containerRef}
        className="relative w-full max-w-4xl mx-auto"
        role="region"
        aria-roledescription="carousel"
        aria-label="Hero highlights"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        onFocus={() => setIsPaused(true)}
        onBlur={() => setIsPaused(false)}
        tabIndex={0}
      >
        {/* Slider Content */}
        <div
          className="relative h-48 md:h-56 overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-all duration-500 ease-in-out ${
                index === currentSlide 
                  ? 'opacity-100 transform translate-x-0' 
                  : index < currentSlide 
                    ? 'opacity-0 transform -translate-x-full'
                    : 'opacity-0 transform translate-x-full'
              }`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of ${slides.length}`}
              aria-hidden={index === currentSlide ? 'false' : 'true'}
            >
              <div className="h-full flex flex-col items-center justify-center text-center p-6 relative">
                
                {/* Slide 1: FREE Conference - Wave Effect (Desktop Only) */}
                {index === 0 && index === currentSlide && !isLowPowerMode && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Gentle wave overlay */}
                    <div className="absolute bottom-0 left-0 w-full h-20 opacity-30">
                      <svg
                        className="absolute bottom-0 left-0 w-full h-full"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,60 C300,120 600,0 900,60 C1050,90 1150,30 1200,60 V120 H0 V60 Z"
                          className="wave-path"
                          fill="currentColor"
                          style={{ color: '#10b981' }}
                        />
                      </svg>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-16 opacity-20">
                      <svg
                        className="absolute bottom-0 left-0 w-full h-full"
                        viewBox="0 0 1200 120"
                        preserveAspectRatio="none"
                      >
                        <path
                          d="M0,40 C240,100 480,0 720,40 C900,70 1050,20 1200,40 V120 H0 V40 Z"
                          className="wave-path-2"
                          fill="currentColor"
                          style={{ color: '#059669' }}
                        />
                      </svg>
                    </div>
                    {/* Floating dollar signs */}
                    <div className="absolute top-4 left-8 text-green-400 opacity-60 text-2xl dollar-float">$</div>
                    <div className="absolute top-12 right-12 text-green-300 opacity-50 text-xl dollar-float" style={{ animationDelay: '0.5s' }}>$</div>
                    <div className="absolute bottom-20 left-16 text-green-500 opacity-40 text-lg dollar-float" style={{ animationDelay: '1s' }}>$</div>
                    <div className="absolute top-20 left-1/3 text-green-400 opacity-30 text-sm dollar-float" style={{ animationDelay: '1.5s' }}>$</div>
                  </div>
                )}

                {/* Slide 2: Goa Venue - Beach Elements (Desktop Only) */}
                {index === 1 && index === currentSlide && !isLowPowerMode && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Palm trees */}
                    <div className="absolute top-4 left-4 text-6xl opacity-40 palm-sway">🌴</div>
                    <div className="absolute top-8 right-8 text-4xl opacity-30 palm-sway" style={{ animationDelay: '0.8s' }}>🌴</div>
                    {/* Beach waves */}
                    <div className="absolute bottom-0 left-0 w-full h-12 opacity-25">
                      <svg viewBox="0 0 1200 60" className="w-full h-full beach-wave">
                        <path d="M0,30 Q300,60 600,30 T1200,30 V60 H0 V30 Z" fill="#0ea5e9" opacity="0.6"/>
                      </svg>
                    </div>
                    {/* Sun rays */}
                    <div className="absolute top-6 right-20 text-yellow-300 opacity-50 text-3xl sun-rays">☀️</div>
                  </div>
                )}

                {/* Slide 3: Villages - Tech Circuits (Desktop Only) */}
                {index === 2 && index === currentSlide && !isLowPowerMode && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Circuit patterns */}
                    <div className="absolute top-8 left-12 w-16 h-16 opacity-30">
                      <svg viewBox="0 0 64 64" className="w-full h-full circuit-glow">
                        <path d="M8,32 L24,32 L24,16 L40,16 L40,48 L56,48" stroke="#a855f7" strokeWidth="2" fill="none"/>
                        <circle cx="24" cy="32" r="3" fill="#a855f7"/>
                        <circle cx="40" cy="16" r="3" fill="#ec4899"/>
                        <circle cx="40" cy="48" r="3" fill="#a855f7"/>
                      </svg>
                    </div>
                    <div className="absolute bottom-12 right-16 w-12 h-12 opacity-25 circuit-glow" style={{ animationDelay: '0.5s' }}>
                      <svg viewBox="0 0 48 48" className="w-full h-full">
                        <path d="M8,24 L16,24 L16,12 L32,12 L32,36 L40,36" stroke="#ec4899" strokeWidth="2" fill="none"/>
                        <circle cx="16" cy="24" r="2" fill="#ec4899"/>
                        <circle cx="32" cy="12" r="2" fill="#a855f7"/>
                      </svg>
                    </div>
                    {/* Floating code brackets */}
                    <div className="absolute top-16 right-12 text-purple-400 opacity-50 text-xl code-float">{'{ }'}</div>
                    <div className="absolute bottom-20 left-20 text-pink-400 opacity-40 text-lg code-float" style={{ animationDelay: '0.7s' }}>{'< />'}</div>
                  </div>
                )}

                {/* Slide 4: Speakers - Sound Waves (Desktop Only) */}
                {index === 3 && index === currentSlide && !isLowPowerMode && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Sound wave rings */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="sound-ring w-32 h-32 border-2 border-orange-400 rounded-full opacity-30"></div>
                      <div className="sound-ring w-48 h-48 border-2 border-red-400 rounded-full opacity-20" style={{ animationDelay: '0.5s' }}></div>
                      <div className="sound-ring w-64 h-64 border-2 border-orange-500 rounded-full opacity-10" style={{ animationDelay: '1s' }}></div>
                    </div>
                    {/* Floating microphones */}
                    <div className="absolute top-6 left-16 text-orange-400 opacity-60 text-2xl mic-bounce">🎤</div>
                    <div className="absolute bottom-16 right-12 text-red-400 opacity-50 text-xl mic-bounce" style={{ animationDelay: '0.6s' }}>🎤</div>
                    {/* Speaker notes */}
                    <div className="absolute top-20 right-20 text-yellow-400 opacity-40 text-lg note-float">♪</div>
                    <div className="absolute bottom-24 left-8 text-orange-300 opacity-35 text-sm note-float" style={{ animationDelay: '0.8s' }}>♫</div>
                  </div>
                )}

                {/* Slide 5: Workshops - Tool Elements (Desktop Only) */}
                {index === 4 && index === currentSlide && !isLowPowerMode && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden">
                    {/* Floating tools */}
                    <div className="absolute top-8 right-16 text-indigo-400 opacity-60 text-2xl tool-spin">⚙️</div>
                    <div className="absolute bottom-12 left-12 text-purple-400 opacity-50 text-xl tool-spin" style={{ animationDelay: '0.4s' }}>🔧</div>
                    <div className="absolute top-16 left-8 text-indigo-300 opacity-45 text-lg tool-spin" style={{ animationDelay: '0.8s' }}>🛠️</div>
                    {/* Workshop grid pattern */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-8 grid-rows-6 h-full w-full gap-4 p-8">
                        <div className="bg-indigo-400 rounded workshop-grid"></div>
                        <div className="bg-purple-400 rounded workshop-grid" style={{ animationDelay: '0.2s' }}></div>
                        <div className="bg-indigo-500 rounded workshop-grid" style={{ animationDelay: '0.4s' }}></div>
                        <div className="bg-purple-500 rounded workshop-grid" style={{ animationDelay: '0.6s' }}></div>
                      </div>
                    </div>
                  </div>
                )}
                
                <div className={`slide-icon text-6xl md:text-7xl mb-4 relative z-10`}>
                  {slide.icon}
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-white relative z-10`}>
                  {slide.title}
                </h3>
                <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed max-w-2xl slide-enter relative z-10">
                  {slide.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Slider Dots */}
    <div className="flex justify-center mt-6 space-x-2" role="tablist" aria-label="Slide selection">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-white scale-125 shadow-lg'
                  : 'bg-white bg-opacity-50 hover:bg-opacity-75'
              }`}
      role="tab"
      aria-selected={index === currentSlide}
      aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={() => goToSlide(currentSlide === 0 ? slides.length - 1 : currentSlide - 1)}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={() => goToSlide((currentSlide + 1) % slides.length)}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 rounded-full p-2 transition-all duration-300 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Progress Bar */}
        <div className="mt-4 w-full bg-white/20 rounded-full h-1 overflow-hidden">
          <div
            key={currentSlide}
            className={`bg-gradient-to-r from-cyan-400 to-blue-500 h-1 rounded-full ${isPaused ? '' : 'animate-[progress_7s_linear_1]'}`}
            style={{ width: '100%' }}
          />
        </div>
        <style jsx>{`
          @keyframes progress {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(0%); }
          }
        `}</style>
      </div>
    </>
  );
};

export default HeroSlider;