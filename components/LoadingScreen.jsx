'use client';
import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const LoadingScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const { isDark } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-1000 ${
        isDark
          ? 'bg-gradient-to-b from-[#0d1b2a] via-[#1b263b] to-[#415a77]'
          : 'bg-gradient-to-b from-[#87ceeb] via-[#b0e0e6] to-[#f0f8ff]'
      }`}
    >
      {/* Sun/Moon */}
      <div
        className={`absolute w-32 h-32 rounded-full blur-sm transition-all duration-1000 ${
          isDark 
            ? 'top-20 right-20 bg-gradient-to-br from-yellow-200 to-orange-300 shadow-[0_0_100px_rgba(255,215,0,0.6)]' 
            : 'top-16 right-16 bg-gradient-to-br from-yellow-300 to-orange-400 shadow-[0_0_120px_rgba(255,165,0,0.8)]'
        }`}
        style={{ animation: 'sunPulse 4s ease-in-out infinite' }}
      />

      {/* Floating clouds */}
      <div className="absolute inset-0">
        <div 
          className={`absolute w-24 h-12 rounded-full opacity-60 ${
            isDark ? 'bg-gray-600/40' : 'bg-white/70'
          }`}
          style={{ 
            top: '15%', 
            left: '10%',
            animation: 'floatSlow 20s linear infinite'
          }}
        />
        <div 
          className={`absolute w-32 h-16 rounded-full opacity-40 ${
            isDark ? 'bg-gray-500/30' : 'bg-white/80'
          }`}
          style={{ 
            top: '25%', 
            left: '70%',
            animation: 'floatSlow 25s linear infinite reverse'
          }}
        />
        <div 
          className={`absolute w-20 h-10 rounded-full opacity-50 ${
            isDark ? 'bg-gray-600/35' : 'bg-white/75'
          }`}
          style={{ 
            top: '35%', 
            left: '40%',
            animation: 'floatSlow 30s linear infinite'
          }}
        />
      </div>

      {/* Seagulls */}
      <div className="absolute inset-0">
        <div 
          className="absolute text-white text-xl opacity-70"
          style={{ 
            top: '20%', 
            left: '30%',
            animation: 'seagullFly 15s linear infinite',
            transform: 'rotate(-10deg)'
          }}
        >
          ⌒
        </div>
        <div 
          className="absolute text-white text-lg opacity-60"
          style={{ 
            top: '30%', 
            left: '60%',
            animation: 'seagullFly 18s linear infinite reverse',
            animationDelay: '-5s'
          }}
        >
          ⌒
        </div>
      </div>

      {/* Center logo */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative">
          <Image
            src={isDark ? "/light-logo.png" : "/dark-logo.png"}
            alt="Seasides"
            width={400}
            height={160}
            priority
            className="object-contain drop-shadow-[0_8px_32px_rgba(0,0,0,0.3)]"
            style={{
              animation: 'gentleBob 4s ease-in-out infinite',
            }}
          />
          
          {/* Logo reflection in water */}
          <div className="absolute top-full left-0 w-full h-full opacity-20 overflow-hidden">
            <Image
              src={isDark ? "/light-logo.png" : "/dark-logo.png"}
              alt=""
              width={400}
              height={160}
              className="object-contain scale-y-[-1] blur-sm"
              style={{
                animation: 'waveDistort 3s ease-in-out infinite',
                maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, transparent 80%)'
              }}
            />
          </div>
        </div>
      </div>

      {/* Waves container */}
      <div className="absolute bottom-0 left-0 w-full h-2/5">
        {/* Wave layer 1 (back) */}
        <Wave
          speed={22}
          amplitude={8}
          opacity={isDark ? 0.35 : 0.25}
          color={isDark ? '#2563eb' : '#38bdf8'}
          height="55%"
          invert={false}
        />
        {/* Wave layer 2 (mid) */}
        <Wave
          speed={14}
          amplitude={12}
          opacity={isDark ? 0.55 : 0.45}
          color={isDark ? '#0ea5e9' : '#0ea5e9'}
          height="65%"
          invert={false}
          delay={-3}
        />
        {/* Wave layer 3 (front/foam) */}
        <Wave
          speed={9}
          amplitude={16}
          opacity={0.8}
          color={isDark ? '#93c5fd' : '#ffffff'}
          height="75%"
          invert={false}
          delay={-1.5}
        />
      </div>

      {/* Enhanced animations */}
      <style jsx>{`
        @keyframes wave {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes gentleBob {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          25% {
            transform: translateY(-8px) rotate(1deg);
          }
          50% {
            transform: translateY(-4px) rotate(0deg);
          }
          75% {
            transform: translateY(-8px) rotate(-1deg);
          }
        }
        @keyframes sunPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 0.8;
          }
          50% {
            transform: scale(1.1);
            opacity: 1;
          }
        }
        @keyframes floatSlow {
          0% {
            transform: translateX(-100px);
          }
          100% {
            transform: translateX(calc(100vw + 100px));
          }
        }
        @keyframes seagullFly {
          0% {
            transform: translateX(-50px) translateY(0px) rotate(-10deg);
          }
          25% {
            transform: translateX(25vw) translateY(-10px) rotate(-5deg);
          }
          50% {
            transform: translateX(50vw) translateY(-5px) rotate(-10deg);
          }
          75% {
            transform: translateX(75vw) translateY(-15px) rotate(-8deg);
          }
          100% {
            transform: translateX(calc(100vw + 50px)) translateY(-5px) rotate(-10deg);
          }
        }
        @keyframes waveDistort {
          0%, 100% {
            transform: scaleY(-1) scaleX(1);
          }
          50% {
            transform: scaleY(-1) scaleX(1.02);
          }
        }
      `}</style>
    </div>
  );
};

export default LoadingScreen;

/* ---------- Wave component ---------- */
const Wave = ({
  speed,
  amplitude,
  opacity = 0.6,
  color,
  height = '60%',
  invert = false,
  delay = 0,
}) => {
  // Path with smooth crests; repeated twice for seamless scroll
  const path =
    'M0 67 C 273,183 822,-40 1920,106 V 360 H 0 V 67 Z';

  return (
    <div
      className="absolute bottom-0 left-0 w-full overflow-hidden"
      style={{ height }}
    >
      <div
        className="absolute bottom-0 left-0 h-full"
        style={{
          width: '200%',
          animation: `wave ${speed}s linear ${delay}s infinite`,
          transform: 'translateZ(0)',
        }}
      >
        <svg
          viewBox="0 0 1920 360"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-0 h-full"
          style={{ width: '100%' }}
        >
          <path
            d={path}
            fill={color}
            fillOpacity={opacity}
            transform={invert ? 'scale(1,-1) translate(0,-360)' : undefined}
          />
        </svg>

        {/* second copy to tile seamlessly */}
        <svg
          viewBox="0 0 1920 360"
          preserveAspectRatio="none"
          className="absolute bottom-0 left-[50%] h-full"
          style={{ width: '100%' }}
        >
          <path
            d={path}
            fill={color}
            fillOpacity={opacity}
            transform={invert ? 'scale(1,-1) translate(0,-360)' : undefined}
          />
        </svg>
      </div>

      {/* subtle vertical “amplitude” wobble */}
      <div
        className="absolute inset-0"
        style={{
          animation: `bob ${Math.max(2.5, amplitude / 2)}s ease-in-out infinite`,
        }}
      />
    </div>
  );
};
