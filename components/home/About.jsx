'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const features = [
    { label: 'Free Training', color: 'bg-deep-ocean-blue' },
    { label: 'Community-driven', color: 'bg-sunset-orange' },
    { label: 'Hands-on Learning', color: 'bg-sunny-yellow' }
  ];

  return (
    <section id="about" className={`relative py-20 scroll-mt-24 overflow-hidden ${
      isDark ? 'bg-black' : 'bg-white'
    }`}>

      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Content */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="space-y-8"
            >
              {/* Kicker */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="inline-block"
              >
                <span className={`text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full border ${
                  isDark 
                    ? 'text-cyan-400 border-cyan-400/30 bg-cyan-400/10' 
                    : 'text-blue-600 border-blue-600/30 bg-blue-600/10'
                }`}>
                  WHY JOIN CONFERENCE
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight ${
                  isDark ? 'text-white soft-glow' : 'text-gray-900'
                }`}>
                  About The{' '}
                  <span className="text-sunset-orange">
                    Conference
                  </span>
                </h2>
              </motion.div>

              {/* Body Content */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  To stay ahead in the ever-evolving security landscape, continuous learning and networking are essential. As attacks grow more complex, sharpening our skills is crucial. Cybersecurity conferences are a powerful way to keep up with this fast-changing domain.
                </p>
                
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  Join us from <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>February 19-21, 2026</span> for the <span className={`font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Seasides InfoSec Conference 2026</span>, where you&apos;ll gain valuable insights into cybersecurity. We&apos;re proud to offer top-notch training sessions for free, bringing a community-driven experience that mirrors major global events like <span className={`font-bold ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>Blackhat</span> and <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>Defcon</span>—ensuring equal learning opportunities for all.
                </p>
              </motion.div>

              {/* Feature Tags */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-3"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      isDark ? 'bg-gray-800 text-gray-300 hover:bg-gray-700' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    <div className={`w-2 h-2 rounded-full ${feature.color} mr-2`}></div>
                    {feature.label}
                  </motion.div>
                ))}
              </motion.div>

              {/* About Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="pt-4"
              >
                <motion.a
                  href="/about"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`inline-flex items-center px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                    isDark
                      ? 'bg-fiery-citrus text-white shadow-lg hover:shadow-blue-500/25'
                      : 'bg-fiery-citrus text-white shadow-lg hover:shadow-blue-500/25'
                  }`}
                >
                  <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Learn More About Us
                </motion.a>
              </motion.div>
            </motion.div>

            {/* Right Column - Interactive Cybersecurity Network Visualization */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              {/* Interactive Network Hub */}
              <div className="relative h-96 flex items-center justify-center">
                
                {/* Central Hub - Conference Core */}
                <motion.div
                  whileHover={{ scale: 1.1, rotateZ: 10 }}
                  transition={{ duration: 0.3 }}
                  className={`relative z-20 w-24 h-24 rounded-full bg-sunset-orange flex items-center justify-center cursor-pointer ${
                    isDark ? 'shadow-2xl shadow-blue-500/50' : 'shadow-2xl shadow-blue-500/30'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-gray-900' : 'bg-white'
                  }`}>
                    <svg className="w-10 h-10 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
                    </svg>
                  </div>
                  
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 rounded-full bg-sunset-orange animate-ping opacity-20"></div>
                </motion.div>

                {/* Orbiting Learning Nodes */}
                {[
                  { icon: 'security', label: 'Security', angle: 0, color: 'bg-deep-ocean-blue' },
                  { icon: 'workshops', label: 'Workshops', angle: 60, color: 'bg-sunset-orange' },
                  { icon: 'community', label: 'Community', angle: 120, color: 'bg-sunny-yellow' },
                  { icon: 'learning', label: 'Learning', angle: 180, color: 'bg-deep-ocean-blue' },
                  { icon: 'network', label: 'Network', angle: 240, color: 'bg-sunset-orange' },
                  { icon: 'skills', label: 'Skills', angle: 300, color: 'bg-sunny-yellow' }
                ].map((node, index) => (
                  <motion.div
                    key={node.label}
                    initial={{ scale: 0, rotate: node.angle }}
                    whileInView={{ scale: 1, rotate: node.angle }}
                    whileHover={{ scale: 1.2, rotate: node.angle + 15 }}
                    viewport={{ once: true }}
                    transition={{ 
                      duration: 0.5, 
                      delay: 0.5 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    className="absolute cursor-pointer"
                    style={{
                      transform: `rotate(${node.angle}deg) translateX(140px) rotate(-${node.angle}deg)`,
                      transformOrigin: 'center'
                    }}
                  >
                    <div className={`w-16 h-16 rounded-full ${node.color} flex items-center justify-center ${
                      isDark ? 'shadow-lg shadow-blue-500/25' : 'shadow-lg shadow-gray-400/25'
                    } hover:shadow-2xl transition-shadow duration-300`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isDark ? 'bg-gray-800' : 'bg-white'
                      }`}>
                        {node.icon === 'security' && (
                          <svg className="w-6 h-6 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 1L3 5v6c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V5l-9-4z"/>
                          </svg>
                        )}
                        {node.icon === 'workshops' && (
                          <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M22.7 19l-9.1-9.1c.9-2.3.4-5-1.5-6.9-2-2-5-2.4-7.4-1.3L9 6 6 9 1.6 4.7C.4 7.1.9 10.1 2.9 12.1c1.9 1.9 4.6 2.4 6.9 1.5l9.1 9.1c.4.4 1 .4 1.4 0l2.3-2.3c.5-.4.5-1.1.1-1.4z"/>
                          </svg>
                        )}
                        {node.icon === 'community' && (
                          <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M16 4c0-1.11.89-2 2-2s2 .89 2 2-.89 2-2 2-2-.89-2-2zm4 18v-6h2.5l-2.54-7.63A3.01 3.01 0 0 0 17.06 6H16.94c-.93 0-1.78.5-2.22 1.31L12 14h-2V9c0-.55-.45-1-1-1s-1 .45-1 1v6h2l2.54 7.63A3.01 3.01 0 0 0 15.44 24h.56c.93 0 1.78-.5 2.22-1.31L20 16v6h2z"/>
                          </svg>
                        )}
                        {node.icon === 'learning' && (
                          <svg className="w-6 h-6 text-purple-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5 13.18v4L12 21l7-3.82v-4L12 17l-7-3.82zM12 3L1 9l11 6 9-4.91V17h2V9L12 3z"/>
                          </svg>
                        )}
                        {node.icon === 'network' && (
                          <svg className="w-6 h-6 text-cyan-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/>
                          </svg>
                        )}
                        {node.icon === 'skills' && (
                          <svg className="w-6 h-6 text-orange-500" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M7 14c-1.66 0-3 1.34-3 3 0 1.31-1.16 2-2 2 .92 1.22 2.49 2 4 2 2.21 0 4-1.79 4-4 0-1.66-1.34-3-3-3zm13.71-9.37l-1.34-1.34c-.39-.39-1.02-.39-1.41 0L9 12.25 11.75 15l8.96-8.96c.39-.39.39-1.02 0-1.41z"/>
                          </svg>
                        )}
                      </div>
                    </div>
                    
                    {/* Connection Lines */}
                    <div className={`absolute top-8 left-8 w-32 h-px ${node.color} opacity-30`}
                         style={{
                           transform: `rotate(${180 + node.angle}deg)`,
                           transformOrigin: '0 0'
                         }}>
                    </div>
                    
                    {/* Node Label */}
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-2 py-1 rounded-full text-xs font-medium ${
                        isDark ? 'bg-gray-800 text-white border border-gray-700' : 'bg-white text-gray-900 border border-gray-200'
                      } shadow-lg whitespace-nowrap`}
                    >
                      {node.label}
                    </motion.div>
                  </motion.div>
                ))}

                {/* Floating Data Particles */}
                {Array.from({ length: 12 }).map((_, i) => (
                  <motion.div
                    key={`particle-${i}`}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="absolute w-2 h-2 rounded-full bg-sunset-orange opacity-60"
                    style={{
                      left: `${20 + Math.cos(i * 30 * Math.PI / 180) * (100 + Math.sin(i * 15) * 20)}px`,
                      top: `${20 + Math.sin(i * 30 * Math.PI / 180) * (100 + Math.cos(i * 15) * 20)}px`,
                    }}
                    animate={{
                      x: [0, Math.cos(i * 20) * 10, 0],
                      y: [0, Math.sin(i * 20) * 10, 0],
                      opacity: [0.3, 0.8, 0.3]
                    }}
                    transition={{
                      duration: 4 + i * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1 + i * 0.1
                    }}
                  />
                ))}

                {/* Interactive Timeline */}
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 1.2 }}
                  className="absolute -bottom-16 left-1/2 transform -translate-x-1/2"
                >
                  <div className={`flex items-center space-x-4 px-6 py-3 rounded-full backdrop-blur-sm ${
                    isDark ? 'bg-gray-900/80 border border-gray-700' : 'bg-white/80 border border-gray-200'
                  } shadow-xl`}>
                    <div className="flex items-center space-x-2">
                      <div className="w-3 h-3 rounded-full bg-sunset-orange animate-pulse"></div>
                      <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Feb 19-21, 2026
                      </span>
                    </div>
                    <div className={`w-px h-4 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                      </svg>
                      <span className={`text-sm font-medium ${isDark ? 'text-gray-300' : 'text-gray-600'}`}>
                        International Centre Goa
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
