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
                  Join us from <span className={`font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>February 20th to 22nd</span> for the <span className={`font-bold ${isDark ? 'text-purple-400' : 'text-purple-600'}`}>Seasides InfoSec Conference 2025</span>, where you&apos;ll gain valuable insights into cybersecurity. We&apos;re proud to offer top-notch courses and sessions for free, bringing a community-driven experience that mirrors major global events like <span className={`font-bold ${isDark ? 'text-pink-400' : 'text-pink-600'}`}>Blackhat</span> and <span className={`font-bold ${isDark ? 'text-green-400' : 'text-green-600'}`}>Defcon</span>—ensuring equal learning opportunities for all.
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

            {/* Right Column - Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="relative"
            >
              <motion.div
                whileHover={{ rotateY: 5, rotateX: 5, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className={`relative overflow-hidden rounded-2xl p-8 md:p-12 backdrop-blur-sm transform-gpu tilt ${
                  isDark 
                    ? 'bg-gradient-to-br from-gray-900/80 to-gray-800/80 border border-white/10' 
                    : 'bg-gradient-to-br from-white/80 to-gray-50/80 border border-gray-200 shadow-2xl'
                }`}
              >
                {/* Animated gradient backdrop */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 aurora-x"></div>
                
                {/* Content */}
                <div className="relative space-y-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center ${
                    isDark ? 'shadow-lg shadow-blue-500/25' : 'shadow-xl shadow-blue-500/25'
                  }`}>
                    <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  
                  <div>
                    <h3 className={`text-2xl font-bold mb-3 ${
                      isDark ? 'text-white' : 'text-gray-900'
                    }`}>
                      World-Class Security Education
                    </h3>
                    <p className={`text-base leading-relaxed ${
                      isDark ? 'text-gray-300' : 'text-gray-600'
                    }`}>
                      Experience cutting-edge cybersecurity training with industry experts, hands-on workshops, and networking opportunities that will advance your career.
                    </p>
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 pt-6">
                    {[
                      { number: '15+', label: 'Villages' },
                      { number: '100%', label: 'Free' },
                      { number: '3', label: 'Days' }
                    ].map((stat) => (
                      <div key={stat.label} className="text-center">
                        <div className={`text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent`}>
                          {stat.number}
                        </div>
                        <div className={`text-xs font-medium ${
                          isDark ? 'text-gray-400' : 'text-gray-500'
                        }`}>
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
