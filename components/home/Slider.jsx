'use client';
import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { EVENT_DATE_LONG } from '@/lib/eventConfig';

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
      backgroundImage: "linear-gradient(135deg, #FF8C42 0%, #FF6B35 20%, #F7931E 40%, #FFD23F 60%, #87CEEB 80%, #4682B4 100%)",
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
      backgroundImage: "linear-gradient(135deg, #0F172A 0%, #1E293B 20%, #334155 40%, #00D4AA 60%, #00F5FF 80%, #38EF7D 100%)",
      animation: "slideInRight",
      particles: true,
      theme: "cyber",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
    },
    {
      id: 3,
      type: "workshops",
      title: "Hands-on Workshops",
      subtitle: "Learn by Doing",
      description: "Interactive workshops where you build, break, and secure systems using cutting-edge tools and techniques",
      backgroundImage: "linear-gradient(135deg, #667EEA 0%, #764BA2 20%, #F093FB 40%, #F5576C 60%, #4FACFE 80%, #00F2FE 100%)",
      animation: "slideInLeft",
      particles: true,
      theme: "workshop",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    },
    {
      id: 4,
      type: "village",
      title: "7 Specialized Villages",
      subtitle: "Choose Your Adventure",
      description: "Immerse yourself in specialized learning environments tailored to your interests and skill level",
      backgroundImage: "linear-gradient(135deg, #FF9A9E 0%, #FECFEF 20%, #FECFEF 40%, #FEE140 60%, #FA709A 80%, #C471F5 100%)",
      animation: "zoomIn",
      particles: true,
      theme: "community",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" /></svg>
    },
    {
      id: 5,
      type: "party",
      title: "Beach Party & Networking",
      subtitle: "Connect • Celebrate • Create",
      description: "Epic beach parties, networking events, and cultural experiences that make Seasides legendary",
      backgroundImage: "linear-gradient(135deg, #FF6B6B 0%, #FFD93D 20%, #6BCF7F 40%, #4D9DE0 60%, #F093FB 80%, #F5576C 100%)",
      animation: "bounceIn",
      particles: true,
      theme: "beach",
      icon: <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
    }
  ];


  // Auto-play functionality with reduced-motion and visibility pause
  useEffect(() => {
    const prefersReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!isAutoPlay || prefersReduced || isHovered) return;

    let interval;
    const tick = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
    const start = () => { interval = setInterval(tick, 15000); };
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

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 30000);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 30000);
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlay(false);
    setTimeout(() => setIsAutoPlay(true), 30000);
  }, [slides.length]);

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
  }, [slides.length, nextSlide, prevSlide, goToSlide]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500&display=swap');
        
        .playfair-display {
          font-family: 'Playfair Display', serif;
        }
        
        .inter-font {
          font-family: 'Inter', sans-serif;
        }
        
        .wave-gradient {
          background: linear-gradient(90deg, #87CEEB 0%, #4682B4 30%, #2E5CE6 60%, #1E3A8A 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-size: 200% 100%;
          animation: waveShimmer 3s ease-in-out infinite;
        }
        
        .curved-underline {
          position: relative;
        }
        
        .curved-underline::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 120px;
          height: 4px;
          background: linear-gradient(90deg, #87CEEB 0%, #4682B4 50%, #2E5CE6 100%);
          border-radius: 2px;
          animation: flowingWave 2s ease-in-out infinite;
        }
        
        .text-shadow-sunset {
          text-shadow: 0 4px 8px rgba(0, 0, 0, 0.3), 0 2px 4px rgba(0, 0, 0, 0.2);
        }
        
        @keyframes waveShimmer {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        @keyframes flowingWave {
          0%, 100% {
            transform: translateX(-50%) scaleX(1);
            opacity: 1;
          }
          50% {
            transform: translateX(-50%) scaleX(1.1);
            opacity: 0.8;
          }
        }
        
        @keyframes fadeInUp {
          from { 
            opacity: 0; 
            transform: translateY(50px) scale(0.95); 
            filter: blur(2px);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
            filter: blur(0);
          }
        }
        
        @keyframes slideInRight {
          from { 
            opacity: 0; 
            transform: translateX(100px) rotate(5deg) scaleX(0.8); 
            clip-path: polygon(100% 0%, 100% 100%, 100% 100%, 100% 0%);
          }
          to { 
            opacity: 1; 
            transform: translateX(0) rotate(0deg) scaleX(1); 
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes slideInLeft {
          from { 
            opacity: 0; 
            transform: translateX(-100px) rotate(-5deg) scaleX(0.8); 
            clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
          }
          to { 
            opacity: 1; 
            transform: translateX(0) rotate(0deg) scaleX(1); 
            clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
          }
        }
        
        @keyframes zoomIn {
          from { 
            opacity: 0; 
            transform: scale(0.7) rotate(10deg); 
            filter: blur(3px);
          }
          50% {
            transform: scale(1.05) rotate(5deg); 
            filter: blur(1px);
          }
          to { 
            opacity: 1; 
            transform: scale(1) rotate(0deg); 
            filter: blur(0);
          }
        }
        
        @keyframes bounceIn {
          0% { 
            opacity: 0; 
            transform: scale(0.3) translateY(100px) rotate(-10deg); 
            filter: blur(4px);
          }
          50% { 
            opacity: 0.9; 
            transform: scale(1.1) translateY(-20px) rotate(5deg); 
            filter: blur(1px);
          }
          70% { 
            transform: scale(0.95) translateY(10px) rotate(-2deg); 
            filter: blur(0.5px);
          }
          100% { 
            opacity: 1; 
            transform: scale(1) translateY(0) rotate(0deg); 
            filter: blur(0);
          }
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

        /* Enhanced wave animations */
        @keyframes waveFlow {
          0% { transform: translateX(-100%) scaleY(1) scaleX(1.2); }
          25% { transform: translateX(-75%) scaleY(1.3) scaleX(1); }
          50% { transform: translateX(-50%) scaleY(0.8) scaleX(1.1); }
          75% { transform: translateX(-25%) scaleY(1.2) scaleX(0.9); }
          100% { transform: translateX(0%) scaleY(1) scaleX(1); }
        }
        
        @keyframes waveFlow2 {
          0% { transform: translateX(-100%) scaleY(0.9) scaleX(0.8); }
          30% { transform: translateX(-70%) scaleY(1.4) scaleX(1.2); }
          60% { transform: translateX(-40%) scaleY(0.7) scaleX(1); }
          90% { transform: translateX(-10%) scaleY(1.1) scaleX(0.9); }
          100% { transform: translateX(0%) scaleY(0.9) scaleX(1); }
        }

        @keyframes waveFlow3 {
          0% { transform: translateX(100%) scaleY(1.1) rotate(0deg); }
          33% { transform: translateX(66%) scaleY(0.9) rotate(1deg); }
          66% { transform: translateX(33%) scaleY(1.3) rotate(-1deg); }
          100% { transform: translateX(0%) scaleY(1) rotate(0deg); }
        }

        @keyframes waveUndulation {
          0%, 100% { 
            clip-path: polygon(0 100%, 100% 100%, 100% 60%, 85% 55%, 70% 60%, 55% 50%, 40% 55%, 25% 45%, 10% 50%, 0 45%);
          }
          25% { 
            clip-path: polygon(0 100%, 100% 100%, 100% 55%, 85% 60%, 70% 45%, 55% 55%, 40% 40%, 25% 50%, 10% 45%, 0 50%);
          }
          50% { 
            clip-path: polygon(0 100%, 100% 100%, 100% 65%, 85% 50%, 70% 65%, 55% 45%, 40% 60%, 25% 40%, 10% 55%, 0 40%);
          }
          75% { 
            clip-path: polygon(0 100%, 100% 100%, 100% 50%, 85% 65%, 70% 50%, 55% 60%, 40% 45%, 25% 55%, 10% 40%, 0 55%);
          }
        }

        @keyframes waveCrest {
          0%, 100% { transform: translateY(0) skewX(0deg); }
          25% { transform: translateY(-5px) skewX(2deg); }
          50% { transform: translateY(-10px) skewX(0deg); }
          75% { transform: translateY(-3px) skewX(-1deg); }
        }
        
        @keyframes sunGlow {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          50% { transform: scale(1.05) rotate(180deg); opacity: 1; }
        }
        
        @keyframes palmSway {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        
        @keyframes ripple {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          50% { transform: scale(1) rotate(180deg); opacity: 0.6; }
          100% { transform: scale(2) rotate(360deg); opacity: 0; }
        }
        
        /* Cybersecurity Training Theme Animations */
        @keyframes digitalGlitch {
          0%, 100% { transform: translateX(0) skew(0deg); filter: hue-rotate(0deg); }
          20% { transform: translateX(-2px) skew(1deg); filter: hue-rotate(90deg); }
          40% { transform: translateX(1px) skew(-1deg); filter: hue-rotate(180deg); }
          60% { transform: translateX(-1px) skew(0.5deg); filter: hue-rotate(270deg); }
          80% { transform: translateX(2px) skew(-0.5deg); filter: hue-rotate(360deg); }
        }
        
        @keyframes matrixRain {
          0% { transform: translateY(-100vh); opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes cyberpulse {
          0%, 100% { box-shadow: 0 0 5px #00D4AA, 0 0 10px #00D4AA, 0 0 15px #00D4AA; }
          50% { box-shadow: 0 0 10px #00F5FF, 0 0 20px #00F5FF, 0 0 30px #00F5FF; }
        }
        
        /* Workshop Theme Animations */
        @keyframes toolSpin {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.1); }
          50% { transform: rotate(180deg) scale(1); }
          75% { transform: rotate(270deg) scale(0.9); }
          100% { transform: rotate(360deg) scale(1); }
        }
        
        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }
        
        @keyframes buildingBlocks {
          0% { transform: translateY(20px) rotateY(0deg); opacity: 0; }
          50% { transform: translateY(-10px) rotateY(180deg); opacity: 0.7; }
          100% { transform: translateY(0) rotateY(360deg); opacity: 1; }
        }
        
        /* Community Village Theme Animations */
        @keyframes communityPulse {
          0%, 100% { transform: scale(1) rotate(0deg); opacity: 0.8; }
          33% { transform: scale(1.1) rotate(120deg); opacity: 1; }
          66% { transform: scale(0.9) rotate(240deg); opacity: 0.9; }
        }
        
        @keyframes villageGlow {
          0%, 100% { background-color: rgba(255, 154, 158, 0.3); }
          25% { background-color: rgba(254, 207, 239, 0.3); }
          50% { background-color: rgba(254, 225, 64, 0.3); }
          75% { background-color: rgba(250, 112, 154, 0.3); }
        }
        
        @keyframes pathFinding {
          0% { stroke-dashoffset: 100; }
          100% { stroke-dashoffset: 0; }
        }
        
        /* Beach Party Theme Animations */
        @keyframes beachWave {
          0%, 100% { transform: translateX(0) rotate(0deg) scale(1); }
          25% { transform: translateX(10px) rotate(5deg) scale(1.05); }
          50% { transform: translateX(-5px) rotate(-3deg) scale(0.95); }
          75% { transform: translateX(8px) rotate(2deg) scale(1.02); }
        }
        
        @keyframes partyLights {
          0%, 100% { background: linear-gradient(45deg, #FF6B6B, #FFD93D); }
          20% { background: linear-gradient(45deg, #FFD93D, #6BCF7F); }
          40% { background: linear-gradient(45deg, #6BCF7F, #4D9DE0); }
          60% { background: linear-gradient(45deg, #4D9DE0, #F093FB); }
          80% { background: linear-gradient(45deg, #F093FB, #FF6B6B); }
        }
        
        @keyframes confetti {
          0% { transform: translateY(-10px) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        
        @keyframes fireworks {
          0% { transform: scale(0) rotate(0deg); opacity: 1; }
          50% { transform: scale(1) rotate(180deg); opacity: 0.8; }
          100% { transform: scale(1.5) rotate(360deg); opacity: 0; }
        }
        
        .slide-content {
          animation: ${currentSlideData.animation} 1s ease-out;
          will-change: transform, opacity;
        }
        
        .float-particle {
          animation: float 6s ease-in-out infinite;
          will-change: transform;
          backface-visibility: hidden;
        }
        
        .progress-bar {
          animation: slideProgress 15s linear infinite;
          will-change: width;
        }
        
        .hero-bg {
          background: ${currentSlideData.backgroundImage};
          transition: all 1.5s cubic-bezier(0.4, 0, 0.2, 1);
          position: relative;
        }

        .hero-bg::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(45deg, 
            rgba(59, 130, 246, 0.1) 0%, 
            transparent 25%, 
            rgba(14, 165, 233, 0.05) 50%, 
            transparent 75%, 
            rgba(6, 182, 212, 0.1) 100%);
          animation: waveFlow 20s linear infinite;
          opacity: 0.3;
        }

        /* Performance optimizations */
        .wave-element {
          will-change: transform;
          backface-visibility: hidden;
          transform: translateZ(0);
        }
        
        .logo-element {
          will-change: transform, opacity;
          backface-visibility: hidden;
          transform: translateZ(0);
        }

        /* Reduce animations on low-powered devices */
        @media (prefers-reduced-motion: reduce) {
          .wave-element,
          .logo-element,
          .float-particle {
            animation-duration: 20s;
            animation-iteration-count: 1;
          }
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

        {/* Logo-inspired elements - Sun and Palm Trees (only on main slide) */}
        {currentSlideData.type === 'main' && (
          <>
            {/* Animated Sun */}
            <div className="absolute top-8 left-8 md:top-16 md:left-16">
              <div className="relative">
                <svg 
                  width="120" 
                  height="120" 
                  viewBox="0 0 120 120" 
                  className="opacity-80 logo-element"
                  style={{ animation: 'sunGlow 8s ease-in-out infinite' }}
                >
                  <defs>
                    <radialGradient id="sunGradient" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="#FFD700" />
                      <stop offset="50%" stopColor="#FF8C00" />
                      <stop offset="100%" stopColor="#FF6B35" />
                    </radialGradient>
                  </defs>
                  <circle cx="60" cy="60" r="40" fill="url(#sunGradient)" opacity="0.9" />
                  <circle cx="60" cy="60" r="50" fill="none" stroke="#FFD700" strokeWidth="2" opacity="0.4" />
                </svg>
              </div>
            </div>

            {/* Palm Trees */}
            <div className="absolute bottom-0 left-4 md:left-12">
              <svg 
                width="80" 
                height="200" 
                viewBox="0 0 80 200" 
                className="opacity-70 logo-element"
                style={{ animation: 'palmSway 4s ease-in-out infinite' }}
              >
                {/* Trunk */}
                <path 
                  d="M35 200 Q40 150 38 100 Q36 50 40 0" 
                  stroke="#8B4513" 
                  strokeWidth="8" 
                  fill="none"
                />
                {/* Palm Fronds */}
                <path d="M40 20 Q20 10 5 15 Q10 25 40 20" fill="#228B22" opacity="0.8" />
                <path d="M40 20 Q60 5 75 10 Q70 25 40 20" fill="#32CD32" opacity="0.8" />
                <path d="M40 20 Q25 35 15 45 Q25 40 40 20" fill="#228B22" opacity="0.7" />
                <path d="M40 20 Q55 30 65 40 Q55 35 40 20" fill="#32CD32" opacity="0.7" />
                <path d="M40 20 Q35 0 30 -5 Q45 5 40 20" fill="#228B22" opacity="0.9" />
              </svg>
            </div>

            <div className="absolute bottom-0 left-16 md:left-32">
              <svg 
                width="60" 
                height="150" 
                viewBox="0 0 60 150" 
                className="opacity-60 logo-element"
                style={{ animation: 'palmSway 5s ease-in-out infinite reverse' }}
              >
                {/* Trunk */}
                <path 
                  d="M25 150 Q30 110 28 70 Q26 30 30 0" 
                  stroke="#8B4513" 
                  strokeWidth="6" 
                  fill="none"
                />
                {/* Palm Fronds */}
                <path d="M30 15 Q15 8 5 12 Q10 20 30 15" fill="#228B22" opacity="0.8" />
                <path d="M30 15 Q45 5 55 8 Q50 20 30 15" fill="#32CD32" opacity="0.8" />
                <path d="M30 15 Q20 25 12 35 Q20 30 30 15" fill="#228B22" opacity="0.7" />
                <path d="M30 15 Q40 22 48 30 Q40 25 30 15" fill="#32CD32" opacity="0.7" />
              </svg>
            </div>
          </>
        )}

        {/* Enhanced Dynamic Wave Overlay */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden pointer-events-none">
          {/* Primary Animated Wave with Undulation */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-40 opacity-90 wave-element"
            style={{
              background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.9) 0%, rgba(14, 165, 233, 0.7) 30%, rgba(6, 182, 212, 0.9) 60%, rgba(34, 211, 238, 0.8) 100%)',
              animation: 'waveFlow 15s ease-in-out infinite, waveUndulation 8s ease-in-out infinite'
            }}
          />
          
          {/* Secondary Flowing Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-28 opacity-75 wave-element"
            style={{
              background: 'linear-gradient(90deg, rgba(14, 165, 233, 0.7) 0%, rgba(6, 182, 212, 0.5) 25%, rgba(56, 189, 248, 0.8) 50%, rgba(125, 211, 252, 0.6) 75%, rgba(186, 230, 253, 0.7) 100%)',
              clipPath: 'polygon(0 100%, 100% 100%, 100% 70%, 90% 65%, 75% 70%, 60% 60%, 45% 65%, 30% 55%, 15% 60%, 0 55%)',
              animation: 'waveFlow2 10s ease-in-out infinite reverse'
            }}
          />

          {/* Tertiary Counter Wave */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-20 opacity-60 wave-element"
            style={{
              background: 'linear-gradient(90deg, rgba(125, 211, 252, 0.6) 0%, rgba(56, 189, 248, 0.4) 50%, rgba(14, 165, 233, 0.6) 100%)',
              clipPath: 'polygon(0 100%, 100% 100%, 100% 80%, 85% 75%, 70% 80%, 55% 70%, 40% 75%, 25% 65%, 10% 70%, 0 65%)',
              animation: 'waveFlow3 14s ease-in-out infinite'
            }}
          />

          {/* Wave Foam/Crest Effects */}
          <div 
            className="absolute bottom-0 left-0 right-0 h-16 opacity-40 wave-element"
            style={{
              background: 'linear-gradient(90deg, rgba(255, 255, 255, 0.3) 0%, rgba(186, 230, 253, 0.4) 50%, rgba(255, 255, 255, 0.3) 100%)',
              clipPath: 'polygon(0 100%, 100% 100%, 100% 85%, 90% 80%, 80% 85%, 70% 75%, 60% 80%, 50% 70%, 40% 75%, 30% 65%, 20% 70%, 10% 60%, 0 65%)',
              animation: 'waveCrest 6s ease-in-out infinite, waveFlow 20s linear infinite reverse'
            }}
          />

          {/* Enhanced Wave Ripples and Foam */}
          {currentSlideData.type === 'main' && (
            <>
              {/* Large ripples */}
              <div 
                className="absolute bottom-20 left-1/4 w-6 h-6 rounded-full bg-white/20 wave-element"
                style={{ animation: 'ripple 4s ease-out infinite' }}
              />
              <div 
                className="absolute bottom-24 right-1/3 w-4 h-4 rounded-full bg-cyan-300/30 wave-element"
                style={{ animation: 'ripple 5s ease-out infinite 1.5s' }}
              />
              <div 
                className="absolute bottom-16 left-2/3 w-8 h-8 rounded-full bg-blue-200/25 wave-element"
                style={{ animation: 'ripple 6s ease-out infinite 3s' }}
              />

              {/* Medium ripples */}
              <div 
                className="absolute bottom-28 left-1/6 w-3 h-3 rounded-full bg-white/40 wave-element"
                style={{ animation: 'ripple 3s ease-out infinite 0.5s' }}
              />
              <div 
                className="absolute bottom-14 right-1/4 w-5 h-5 rounded-full bg-cyan-400/20 wave-element"
                style={{ animation: 'ripple 7s ease-out infinite 2.5s' }}
              />
              <div 
                className="absolute bottom-32 left-3/4 w-4 h-4 rounded-full bg-blue-300/35 wave-element"
                style={{ animation: 'ripple 4.5s ease-out infinite 4s' }}
              />

              {/* Small foam bubbles */}
              <div 
                className="absolute bottom-18 left-1/8 w-2 h-2 rounded-full bg-white/60 wave-element"
                style={{ animation: 'ripple 2s ease-out infinite 1s' }}
              />
              <div 
                className="absolute bottom-22 right-1/8 w-2 h-2 rounded-full bg-cyan-200/50 wave-element"
                style={{ animation: 'ripple 2.5s ease-out infinite 2s' }}
              />
              <div 
                className="absolute bottom-26 left-5/6 w-2 h-2 rounded-full bg-white/45 wave-element"
                style={{ animation: 'ripple 3s ease-out infinite 0.8s' }}
              />
            </>
          )}
        </div>
        
        {/* Theme-Specific Background Effects and Particles */}
        {currentSlideData.particles && (
          <div className="absolute inset-0">
            
            {/* Cybersecurity Training Theme Effects */}
            {currentSlideData.theme === 'cyber' && (
              <>
                {/* Matrix Rain Effect */}
                {Array.from({ length: 8 }).map((_, i) => (
                  <div
                    key={`matrix-${i}`}
                    className="absolute text-green-400 font-mono text-xs opacity-30"
                    style={{
                      left: `${10 + i * 12}%`,
                      animation: `matrixRain ${5 + i}s linear infinite ${i * 0.5}s`
                    }}
                  >
                    {['01', '10', '11', '00', '01'][i % 5]}
                  </div>
                ))}
                
                {/* Cyber Grid Overlay */}
                <div 
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage: 'linear-gradient(#00D4AA 1px, transparent 1px), linear-gradient(90deg, #00D4AA 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                    animation: 'digitalGlitch 4s ease-in-out infinite'
                  }}
                />
                
                {/* Glowing Cyber Particles */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`cyber-${i}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${20 + i * 15}%`,
                      top: `${30 + Math.sin(i) * 30}%`,
                      width: '6px',
                      height: '6px',
                      background: '#00F5FF',
                      animation: `cyberpulse 2s ease-in-out infinite ${i * 0.3}s`
                    }}
                  />
                ))}
              </>
            )}
            
          
            {/* Community Village Theme Effects */}
            {currentSlideData.theme === 'community' && (
              <>
                {/* Community Nodes */}
                {Array.from({ length: 7 }).map((_, i) => (
                  <div
                    key={`node-${i}`}
                    className="absolute rounded-full"
                    style={{
                      left: `${20 + (i * 60 / 7)}%`,
                      top: `${30 + Math.sin(i * 0.8) * 25}%`,
                      width: '12px',
                      height: '12px',
                      animation: `communityPulse ${3 + i * 0.5}s ease-in-out infinite`,
                      animationDelay: `${i * 0.2}s`,
                      background: '#FEE140'
                    }}
                  />
                ))}
                
                {/* Village Glow Effect */}
                <div 
                  className="absolute inset-0 opacity-20 rounded-full blur-3xl"
                  style={{
                    width: '300px',
                    height: '300px',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    animation: 'villageGlow 4s ease-in-out infinite'
                  }}
                />
              </>
            )}
            
         
            {/* Default Ocean Theme for Main Slide */}
            {!currentSlideData.theme && (
              <>
                {particles.map((p) => (
                  <div
                    key={p.id}
                    className={`
                      float-particle absolute transition-all duration-500 wave-element
                      ${isDark 
                        ? 'opacity-40 shadow-lg shadow-cyan-400/30' 
                        : 'opacity-30'
                      }
                    `}
                    style={{
                      left: `${p.left}%`,
                      top: `${p.top}%`,
                      animationDelay: `${p.delay}s`,
                      animationDuration: `${p.duration}s`,
                      width: p.id % 3 === 0 ? '4px' : p.id % 2 === 0 ? '6px' : '3px',
                      height: p.id % 3 === 0 ? '4px' : p.id % 2 === 0 ? '6px' : '3px',
                      borderRadius: p.id % 4 === 0 ? '50%' : '2px',
                      background: p.id % 5 === 0 
                        ? 'linear-gradient(45deg, rgba(34, 211, 238, 0.6), rgba(59, 130, 246, 0.4))'
                        : p.id % 3 === 0
                        ? 'linear-gradient(135deg, rgba(125, 211, 252, 0.5), rgba(186, 230, 253, 0.3))'
                        : isDark 
                        ? 'radial-gradient(circle, rgba(6, 182, 212, 0.7), rgba(14, 165, 233, 0.4))'
                        : 'radial-gradient(circle, rgba(255, 255, 255, 0.6), rgba(186, 230, 253, 0.3))'
                    }}
                  />
                ))}
                
                {/* Additional wave-themed particles */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={`wave-${i}`}
                    className="absolute wave-element"
                    style={{
                      left: `${15 + i * 15}%`,
                      top: `${20 + Math.sin(i) * 20}%`,
                      width: `${3 + i}px`,
                      height: '2px',
                      background: 'linear-gradient(90deg, transparent, rgba(59, 130, 246, 0.4), transparent)',
                      borderRadius: '2px',
                      animation: `waveFlow ${8 + i * 2}s ease-in-out infinite ${i * 0.5}s`,
                      transform: `rotate(${i * 15}deg)`
                    }}
                  />
                ))}
              </>
            )}
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


        {/* Auto-play Toggle Button */}
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className="absolute top-4 right-4 z-20 bg-black/40 hover:bg-black/50 backdrop-blur-sm rounded-full p-3 transition-all duration-300 group ring-1 ring-white/40 shadow-lg"
          aria-label={isAutoPlay ? "Pause slideshow" : "Play slideshow"}
        >
          {isAutoPlay ? (
            <svg className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6" />
            </svg>
          ) : (
            <svg className="w-6 h-6 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.7)] group-hover:scale-110 transition-transform" fill="currentColor" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>

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

                  {/* Enhanced Title with Sunset-Ocean Theme */}
                  <div className="relative">
                    <h1 className="playfair-display text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-bold mb-6 leading-tight text-white text-shadow-sunset relative z-10">
                      <span className="relative inline-block" style={{ animation: 'fadeInUp 1.2s ease-out 0.5s both' }}>
                        The Future of{' '}
                      </span>
                      <span className="wave-gradient font-bold" style={{ animation: 'zoomIn 1.2s ease-out 0.8s both' }}>
                        Seasides
                      </span>
                    </h1>
                  </div>
                  
                  {/* Enhanced Subtitle with Curved Underline */}
                  <div className="curved-underline" style={{ animation: 'slideInLeft 1.2s ease-out 1.2s both' }}>
                    <h2 className="inter-font text-2xl md:text-3xl lg:text-4xl font-medium mb-8 text-orange-100 relative">
                      India&apos;s Most Loved Conference
                    </h2>
                  </div>
                  <h3 className="text-xl md:text-2xl font-light mb-8 text-white/90 relative" style={{ animation: 'fadeInUp 1.2s ease-out 1.4s both' }}>
                    <span className="relative z-10">{currentSlideData.subtitle}</span>
                  </h3>
                  
                  {/* Enhanced Description with Beach Theme */}
                  <div className="relative mb-8" style={{ animation: 'fadeInUp 1.2s ease-out 1.5s both' }}>
                    <p className="text-lg md:text-xl lg:text-2xl opacity-90 leading-relaxed max-w-3xl mx-auto text-white relative z-10 p-4 rounded-lg backdrop-blur-sm bg-white/5 border border-white/10">
                      
                      {currentSlideData.description}
                     
                    </p>
                    
                    {/* Floating quote decoration */}
                    <div className="absolute -top-4 -left-4 text-6xl text-cyan-400/30 font-serif" style={{ animation: 'float 6s ease-in-out infinite' }}>&ldquo;</div>
                    <div className="absolute -bottom-4 -right-4 text-6xl text-cyan-400/30 font-serif rotate-180" style={{ animation: 'float 6s ease-in-out infinite 3s' }}>&rdquo;</div>
                  </div>


                </>
              )}

              {/* Other slides (training, workshops, village, party) */}
              {currentSlideData.type !== 'main' && (
                <>
                  {/* Animated Icon */}
                  <div className="mb-8">
                    <div 
                      className={`
                        inline-block text-6xl md:text-8xl
                        ${currentSlideData.theme === 'cyber' ? 'drop-shadow-[0_0_10px_#00D4AA]' : ''}
                        ${currentSlideData.theme === 'workshop' ? 'drop-shadow-[0_0_15px_#F093FB]' : ''}
                        ${currentSlideData.theme === 'community' ? 'drop-shadow-[0_0_12px_#FEE140]' : ''}
                        ${currentSlideData.theme === 'beach' ? 'drop-shadow-[0_0_20px_#FF6B6B]' : ''}
                      `}
                      style={{ 
                        animation: currentSlideData.theme === 'cyber' 
                          ? 'digitalGlitch 2s ease-in-out infinite'
                          : currentSlideData.theme === 'workshop'
                          ? 'toolSpin 4s ease-in-out infinite'
                          : currentSlideData.theme === 'community'
                          ? 'communityPulse 3s ease-in-out infinite'
                          : currentSlideData.theme === 'beach'
                          ? 'beachWave 3s ease-in-out infinite'
                          : 'iconBounce 3s ease-in-out infinite'
                      }}
                    >
                      {currentSlideData.icon}
                    </div>
                  </div>

                  {/* Enhanced Theme-Specific Titles */}
                  <h1 className={`
                    text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight
                    ${currentSlideData.theme === 'cyber' 
                      ? 'playfair-display text-shadow-sunset' 
                      : currentSlideData.theme === 'workshop'
                      ? 'inter-font font-extrabold'
                      : currentSlideData.theme === 'community'
                      ? 'playfair-display'
                      : currentSlideData.theme === 'beach'
                      ? 'inter-font font-black'
                      : ''
                    }
                  `}>
                    {currentSlideData.theme === 'cyber' && (
                      <>
                        <span className="wave-gradient">Expert</span>
                        <span className="text-white"> Training</span>
                      </>
                    )}
                    {currentSlideData.theme === 'workshop' && (
                      <>
                        <span className="text-white">Hands-on </span>
                        <span className="wave-gradient">Workshops</span>
                      </>
                    )}
                    {currentSlideData.theme === 'community' && (
                      <>
                        <span className="wave-gradient">7 Specialized</span>
                        <span className="text-white"> Villages</span>
                      </>
                    )}
                    {currentSlideData.theme === 'beach' && (
                      <>
                        <span className="wave-gradient">Beach Party</span>
                        <span className="text-white"> & Networking</span>
                      </>
                    )}
                    {!currentSlideData.theme && currentSlideData.title}
                  </h1>
                  
                  {/* Enhanced Theme-Specific Subtitles */}
                  <div className="curved-underline mb-8">
                    <h2 className={`
                      text-2xl md:text-3xl lg:text-4xl font-medium
                      ${currentSlideData.theme === 'cyber' 
                        ? 'text-green-200 inter-font' 
                        : currentSlideData.theme === 'workshop'
                        ? 'text-purple-200 playfair-display'
                        : currentSlideData.theme === 'community'
                        ? 'text-yellow-200 inter-font'
                        : currentSlideData.theme === 'beach'
                        ? 'text-orange-200 playfair-display'
                        : 'text-white/90'
                      }
                    `}>
                      {currentSlideData.subtitle}
                    </h2>
                  </div>
                  
                  {/* Enhanced Theme-Specific Descriptions */}
                  <div className="relative mb-12">
                    <p className={`
                      text-lg md:text-xl lg:text-2xl leading-relaxed max-w-3xl mx-auto p-4 rounded-lg backdrop-blur-sm border relative z-10
                      ${currentSlideData.theme === 'cyber' 
                        ? 'bg-slate-900/30 border-green-400/20 text-green-100' 
                        : currentSlideData.theme === 'workshop'
                        ? 'bg-purple-900/30 border-purple-400/20 text-purple-100'
                        : currentSlideData.theme === 'community'
                        ? 'bg-yellow-900/30 border-yellow-400/20 text-yellow-100'
                        : currentSlideData.theme === 'beach'
                        ? 'bg-orange-900/30 border-orange-400/20 text-orange-100'
                        : 'text-white/90 bg-white/5 border-white/10'
                      }
                    `}>
                      {currentSlideData.description}
                    </p>
                    
                  
                  </div>
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