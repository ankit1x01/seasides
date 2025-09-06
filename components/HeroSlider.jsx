'use client';
import { useState, useEffect, useRef } from 'react';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);
  const touchStartX = useRef(null);

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
    const id = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4500);
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
              <div className="h-full flex flex-col items-center justify-center text-center p-6">
                <div className={`slide-icon text-6xl md:text-7xl mb-4`}>
                  {slide.icon}
                </div>
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-white`}>
                  {slide.title}
                </h3>
                <p className="text-lg md:text-xl text-white opacity-90 leading-relaxed max-w-2xl slide-enter">
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
            className={`bg-gradient-to-r from-cyan-400 to-blue-500 h-1 rounded-full ${isPaused ? '' : 'animate-[progress_4.5s_linear_1]'}`}
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