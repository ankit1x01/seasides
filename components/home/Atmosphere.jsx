'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';

const Atmosphere = () => {
  const { isDark } = useTheme();

  const atmosphereElements = [
    {
      title: 'Collaborative Learning',
      description: 'Work together on real projects with peers from diverse backgrounds',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      )
    },
    {
      title: 'Interactive Workshops',
      description: 'Hands-on sessions with cutting-edge tools and techniques',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
        </svg>
      )
    },
    {
      title: 'Networking Lounge',
      description: 'Connect with industry experts in relaxed, inspiring environments',
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      )
    }
  ];

  return (
    <section id="atmosphere" className={`relative py-20 scroll-mt-24 overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-black via-gray-900 to-purple-900/20' : 'bg-gradient-to-br from-gray-50 via-white to-blue-50'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10 aurora-x ${
          isDark ? 'opacity-60' : 'opacity-30'
        }`}></div>
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent aurora-y ${
          isDark ? 'opacity-50' : 'opacity-25'
        }`}></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className={`text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full border ${
                isDark 
                  ? 'text-blue-400 border-blue-400/30 bg-blue-400/10' 
                  : 'text-blue-600 border-blue-600/30 bg-blue-600/10'
              }`}>
                LEARNING ATMOSPHERE
              </span>
            </motion.div>

            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 ${
              isDark ? 'text-white soft-glow' : 'text-gray-900'
            }`}>
              Immerse in{' '}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                Learning
              </span>{' '}
              Culture
            </h2>

            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Experience a unique learning environment where innovation meets collaboration. Join specialized villages and workshops designed to accelerate your growth.
            </p>
          </motion.div>

          {/* Atmosphere Elements */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {atmosphereElements.map((element, index) => (
              <motion.div
                key={element.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className={`relative p-8 rounded-2xl backdrop-blur-sm text-center group ${
                  isDark 
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                    : 'bg-white/80 border border-gray-200 shadow-xl hover:shadow-2xl'
                } transition-all duration-300`}
              >
                {/* Icon */}
                <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${
                  isDark ? 'shadow-lg shadow-blue-500/25' : 'shadow-xl shadow-blue-500/25'
                }`}>
                  {element.icon}
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-4 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {element.title}
                </h3>

                <p className={`text-base leading-relaxed ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {element.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Atmosphere;
