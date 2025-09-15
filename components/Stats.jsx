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
      icon: 'villages',
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-500/10',
      borderColor: 'border-blue-500/30'
    },
    {
      id: 'free',
      title: '100% Free Conference',
      description: 'World-class cybersecurity education at absolutely no cost',
      icon: 'target',
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-500/10',
      borderColor: 'border-green-500/30'
    },
    {
      id: 'hands-on',
      title: 'Hands-on Learning',
      description: 'Interactive workshops and practical training sessions',
      icon: 'tools',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'bg-purple-500/10',
      borderColor: 'border-purple-500/30'
    },
    {
      id: 'networking',
      title: 'Epic Networking',
      description: 'Beach parties and connections with industry experts',
      icon: 'network',
      color: 'from-orange-500 to-red-600',
      bgColor: 'bg-orange-500/10',
      borderColor: 'border-orange-500/30'
    }
  ];



  return (
    <>
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
      
      <section ref={statsRef} className={`relative py-20 scroll-mt-24 overflow-hidden ${
        isDark ? 'bg-gray-900' : 'bg-gray-50'
      }`}>
        
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

            {/* Modern Feature List */}
            <div className="space-y-8 mb-16">
              {features.map((feature, index) => (
                <div
                  key={feature.id}
                  className={`group relative overflow-hidden rounded-2xl transition-all duration-300 ${
                    isDark ? 'hover:bg-white/5' : 'hover:bg-gray-50'
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                  onMouseEnter={() => setHoveredFeature(feature.id)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex items-center p-6 md:p-8">
                    {/* Icon */}
                    <div className="flex-shrink-0 mr-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-r ${feature.color} flex items-center justify-center text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        {feature.icon === 'villages' && (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                          </svg>
                        )}
                        {feature.icon === 'target' && (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/>
                            <circle cx="12" cy="12" r="5"/>
                            <circle cx="12" cy="12" r="2"/>
                          </svg>
                        )}
                        {feature.icon === 'tools' && (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                          </svg>
                        )}
                        {feature.icon === 'network' && (
                          <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                            <circle cx="7" cy="7" r="2"/>
                            <circle cx="17" cy="7" r="2"/>
                            <circle cx="7" cy="17" r="2"/>
                            <circle cx="17" cy="17" r="2"/>
                          </svg>
                        )}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-grow">
                      <h3 className={`text-xl md:text-2xl font-bold mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {feature.title}
                      </h3>
                      <p className={`text-base leading-relaxed ${
                        isDark ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        {feature.description}
                      </p>
                    </div>

                    {/* Hover Indicator */}
                    <div className={`flex-shrink-0 ml-4 w-2 h-12 rounded-full bg-gradient-to-b ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  </div>

                  {/* Bottom Border */}
                  <div className={`h-px bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                </div>
              ))}
            </div>

            {/* Simple Call to Action */}
            <div className="text-center">
              <div className={`inline-flex items-center px-8 py-4 rounded-2xl ${
                isDark ? 'bg-blue-600 hover:bg-blue-700' : 'bg-blue-600 hover:bg-blue-700'
              } text-white transition-colors duration-200`}>
                <svg className="w-6 h-6 mr-3" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                </svg>
                <div className="text-left">
                  <div className="font-bold text-lg">Seasides 2026</div>
                  <div className="text-blue-100 text-sm">where Infosec meets the sea</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
