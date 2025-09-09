'use client';
import { useState, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Stats = () => {
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const statsRef = useRef(null);
  const { isDark } = useTheme();

  const features = [
    {
      id: 'villages',
      title: 'Specialized Villages',
      description: 'Choose your learning path from 7 specialized cybersecurity villages',
      icon: '🏘️',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'free',
      title: '100% Free Conference',
      description: 'World-class cybersecurity education at absolutely no cost',
      icon: '🎯',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'hands-on',
      title: 'Hands-on Learning',
      description: 'Interactive workshops and practical training sessions',
      icon: '🛠️',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'networking',
      title: 'Epic Networking',
      description: 'Beach parties and connections with industry experts',
      icon: '🌊',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    }
  ];



  return (
    <>
      <style jsx>{`
        @keyframes float-in {
          0% { 
            transform: translateY(50px) scale(0.8); 
            opacity: 0; 
          }
          100% { 
            transform: translateY(0) scale(1); 
            opacity: 1; 
          }
        }
        
        @keyframes icon-bounce {
          0%, 100% { transform: translateY(0) rotate(0deg) scale(1); }
          25% { transform: translateY(-10px) rotate(5deg) scale(1.1); }
          50% { transform: translateY(-5px) rotate(-3deg) scale(1.05); }
          75% { transform: translateY(-15px) rotate(2deg) scale(1.1); }
        }
        
        @keyframes glow-wave {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(147, 51, 234, 0.2); 
          }
          50% { 
            box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 80px rgba(147, 51, 234, 0.4); 
          }
        }
        
        @keyframes ripple-effect {
          0% { 
            transform: scale(0); 
            opacity: 1; 
          }
          100% { 
            transform: scale(4); 
            opacity: 0; 
          }
        }
        
        @keyframes particle-float {
          0%, 100% { 
            transform: translateY(0) translateX(0) rotate(0deg); 
          }
          33% { 
            transform: translateY(-20px) translateX(10px) rotate(120deg); 
          }
          66% { 
            transform: translateY(-10px) translateX(-15px) rotate(240deg); 
          }
        }
        
        .feature-card {
          animation: float-in 0.8s ease-out;
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .feature-card:hover {
          transform: translateY(-20px) scale(1.05);
          animation: glow-wave 2s ease-in-out infinite;
        }
        
        .feature-icon {
          animation: icon-bounce 4s ease-in-out infinite;
          transition: all 0.3s ease;
        }
        
        .feature-card:hover .feature-icon {
          animation-duration: 1s;
        }
        
        .ripple {
          animation: ripple-effect 2s ease-out infinite;
        }
        
        .floating-particle {
          animation: particle-float 6s ease-in-out infinite;
        }
        
        /* Interactive hover effects */
        .feature-card:hover .feature-bg {
          opacity: 0.2;
        }
        
        .feature-card:hover .feature-border {
          opacity: 0.8;
        }
      `}</style>
      
      <section ref={statsRef} className={`relative py-20 scroll-mt-24 overflow-hidden ${
        isDark ? 'bg-gradient-to-br from-gray-900 via-black to-purple-900/20' : 'bg-gradient-to-br from-blue-50 via-white to-purple-50'
      }`}>
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 aurora-x ${
            isDark ? 'opacity-60' : 'opacity-30'
          }`}></div>
          <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent aurora-y ${
            isDark ? 'opacity-50' : 'opacity-25'
          }`}></div>
        </div>
        
        <div className="relative container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="inline-block mb-6">
                <span className={`text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full border ${
                  isDark 
                    ? 'text-blue-400 border-blue-400/30 bg-blue-400/10' 
                    : 'text-blue-600 border-blue-600/30 bg-blue-600/10'
                }`}>
                  WORLD-CLASS SECURITY EDUCATION
                </span>
              </div>

              <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 ${
                isDark ? 'text-white soft-glow' : 'text-gray-900'
              }`}>
                Experience{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Excellence
                </span>
              </h2>

              <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                Experience cutting-edge cybersecurity training with industry experts, hands-on workshops, and networking opportunities that will advance your career.
              </p>
            </div>

            {/* Interactive Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              {features.map((feature, index) => (
                <div 
                  key={feature.id}
                  className={`feature-card group relative overflow-hidden rounded-3xl p-8 backdrop-blur-sm cursor-pointer ${
                    isDark 
                      ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                      : 'bg-white/80 border border-gray-200 shadow-xl hover:shadow-2xl'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Background Gradient */}
                  <div className={`feature-bg absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300`}></div>
                  
                  {/* Border Glow */}
                  <div className={`feature-border absolute inset-0 rounded-3xl bg-gradient-to-br ${feature.color} opacity-0 transition-opacity duration-300 blur-sm`}></div>
                  
                  {/* Ripple Effect */}
                  {hoveredFeature === feature.id && (
                    <>
                      {Array.from({ length: 3 }).map((_, i) => (
                        <div
                          key={i}
                          className={`ripple absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r ${feature.color} opacity-20`}
                          style={{ 
                            animationDelay: `${i * 0.5}s`,
                            width: '20px',
                            height: '20px'
                          }}
                        />
                      ))}
                    </>
                  )}
                  
                  {/* Floating Particles */}
                  {Array.from({ length: 4 }).map((_, i) => (
                    <div
                      key={i}
                      className={`floating-particle absolute w-2 h-2 rounded-full bg-gradient-to-r ${feature.color} opacity-30`}
                      style={{
                        left: `${20 + i * 20}%`,
                        top: `${30 + Math.sin(i) * 20}%`,
                        animationDelay: `${i * 1.5}s`
                      }}
                    />
                  ))}
                  
                  {/* Content */}
                  <div className="relative z-10">
                    {/* Large Emoji Icon */}
                    <div className="feature-icon text-7xl mb-6 text-center">
                      {feature.icon}
                    </div>
                    
                    {/* Title */}
                    <h3 className={`text-2xl md:text-3xl font-bold mb-4 text-center ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      {feature.title}
                    </h3>
                    
                    {/* Description */}
                    <p className={`text-base md:text-lg leading-relaxed text-center ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      {feature.description}
                    </p>
                    
                    {/* Interactive Badge */}
                    <div className={`inline-block mt-6 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      hoveredFeature === feature.id
                        ? `${feature.bgColor} ${feature.borderColor} border text-white`
                        : isDark
                        ? 'bg-white/10 border-white/20 border text-gray-300'
                        : 'bg-gray-100 border-gray-200 border text-gray-600'
                    }`}>
                      Interactive Feature
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Central Interactive Graphic */}
            <div className="flex justify-center">
              <div className={`relative w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 ${
                isDark ? 'shadow-2xl shadow-blue-500/25' : 'shadow-2xl shadow-blue-500/25'
              }`}>
                <div className={`w-full h-full rounded-full flex items-center justify-center ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                }`}>
                  <div className="text-center">
                    <div className="text-8xl mb-4">🏖️</div>
                    <h3 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      Seasides 2026
                    </h3>
                    <p className={`text-lg ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                      Where Security Meets The Sea
                    </p>
                  </div>
                </div>
                
                {/* Orbiting Elements */}
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-6 h-6 rounded-full bg-gradient-to-r from-blue-400 to-purple-400"
                    style={{
                      top: '50%',
                      left: '50%',
                      transformOrigin: `${Math.cos(i * Math.PI / 3) * 200}px ${Math.sin(i * Math.PI / 3) * 200}px`,
                      animation: `particle-float ${8 + i}s ease-in-out infinite ${i * 0.5}s`,
                      transform: `translate(-50%, -50%) rotate(${i * 60}deg) translateY(-200px)`
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
