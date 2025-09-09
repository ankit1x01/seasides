'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const About = () => {
  const { isDark } = useTheme();

  const features = [
    { label: 'Free Courses', color: 'from-blue-500 to-cyan-500' },
    { label: 'Community-driven', color: 'from-purple-500 to-pink-500' },
    { label: 'Hands-on Learning', color: 'from-green-500 to-emerald-500' }
  ];

  return (
    <section id="about" className={`relative py-20 scroll-mt-24 overflow-hidden ${
      isDark ? 'bg-black' : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className={`absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl aurora-x ${
          isDark ? 'opacity-30' : 'opacity-20'
        }`}></div>
        <div className={`absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl aurora-y ${
          isDark ? 'opacity-30' : 'opacity-20'
        }`}></div>
      </div>

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
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
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
                  Join us from <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>February 19-21, 2026</span> for the <span className={`font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Seasides InfoSec Conference 2026</span>, where you&apos;ll gain valuable insights into cybersecurity. We&apos;re proud to offer top-notch courses and sessions for free, bringing a community-driven experience that mirrors major global events like <span className={`font-bold ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>Blackhat</span> and <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>Defcon</span>—ensuring equal learning opportunities for all.
                </p>
              </motion.div>

              {/* Feature Chips */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex flex-wrap gap-4"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative overflow-hidden rounded-2xl p-6 cursor-pointer ${
                      isDark ? 'bg-white/5 border border-white/10' : 'bg-white border border-gray-200 shadow-lg'
                    }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                    <div className="relative">
                      <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${feature.color} mb-3 group-hover:scale-110 transition-transform duration-300`}></div>
                      <span className={`font-semibold text-sm ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>
                        {feature.label}
                      </span>
                    </div>
                  </motion.div>
                ))}
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
                  className={`relative z-20 w-24 h-24 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center cursor-pointer ${
                    isDark ? 'shadow-2xl shadow-blue-500/50' : 'shadow-2xl shadow-blue-500/30'
                  }`}
                >
                  <div className={`w-20 h-20 rounded-full flex items-center justify-center ${
                    isDark ? 'bg-gray-900' : 'bg-white'
                  }`}>
                    <span className="text-2xl">🏖️</span>
                  </div>
                  
                  {/* Pulsing Ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-ping opacity-20"></div>
                </motion.div>

                {/* Orbiting Learning Nodes */}
                {[
                  { icon: '🔐', label: 'Security', angle: 0, color: 'from-red-400 to-red-600' },
                  { icon: '🛠️', label: 'Workshops', angle: 60, color: 'from-blue-400 to-blue-600' },
                  { icon: '👥', label: 'Community', angle: 120, color: 'from-green-400 to-green-600' },
                  { icon: '🎓', label: 'Learning', angle: 180, color: 'from-purple-400 to-purple-600' },
                  { icon: '🌐', label: 'Network', angle: 240, color: 'from-cyan-400 to-cyan-600' },
                  { icon: '⚡', label: 'Skills', angle: 300, color: 'from-orange-400 to-orange-600' }
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
                    <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${node.color} flex items-center justify-center ${
                      isDark ? 'shadow-lg shadow-blue-500/25' : 'shadow-lg shadow-gray-400/25'
                    } hover:shadow-2xl transition-shadow duration-300`}>
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                        isDark ? 'bg-gray-800' : 'bg-white'
                      }`}>
                        <span className="text-lg">{node.icon}</span>
                      </div>
                    </div>
                    
                    {/* Connection Lines */}
                    <div className={`absolute top-8 left-8 w-32 h-px bg-gradient-to-r ${node.color} opacity-30`}
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
                    className="absolute w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-60"
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
                      <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 animate-pulse"></div>
                      <span className={`text-sm font-medium ${isDark ? 'text-white' : 'text-gray-900'}`}>
                        Feb 19-21, 2026
                      </span>
                    </div>
                    <div className={`w-px h-4 ${isDark ? 'bg-gray-600' : 'bg-gray-300'}`}></div>
                    <div className="flex items-center space-x-2">
                      <span className="text-sm">📍</span>
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
