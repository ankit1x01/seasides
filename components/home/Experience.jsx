'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useState } from 'react';

const Experience = () => {
  const { isDark } = useTheme();
  const [hoveredCard, setHoveredCard] = useState(null);

  const experiences = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 016 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
      title: 'Keynotes',
      description: 'Industry leaders sharing cutting-edge insights and future trends in cybersecurity.',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
      title: 'Real-world Case Studies',
      description: 'Deep dives into actual security incidents, analysis, and lessons learned.',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
      title: 'Mentor Hours',
      description: 'One-on-one guidance from experienced professionals to accelerate your growth.',
      color: 'from-green-500 to-emerald-500'
    }
  ];



  return (
    <section id="experience" className={`relative py-20 scroll-mt-24 overflow-hidden ${
      isDark ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' : 'bg-gradient-to-br from-indigo-50 via-white to-purple-50'
    }`}>
      {/* Animated noise/gradient background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 aurora-x ${
          isDark ? 'opacity-50' : 'opacity-30'
        }`}></div>
        <div className={`absolute inset-0 bg-gradient-to-b from-transparent via-purple-500/5 to-transparent aurora-y ${
          isDark ? 'opacity-40' : 'opacity-20'
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
                  ? 'text-purple-400 border-purple-400/30 bg-purple-400/10' 
                  : 'text-purple-600 border-purple-600/30 bg-purple-600/10'
              }`}>
                GET EXPERIENCE
              </span>
            </motion.div>

            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 ${
              isDark ? 'text-white soft-glow' : 'text-gray-900'
            }`}>
              Shift your{' '}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 bg-clip-text text-transparent">
                perspective
              </span>{' '}
              on Security
            </h2>

            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              How do you adapt as a technology enthusiast, security engineer, or developer amidst industry changes? Discover insights from those leading the way.
            </p>
          </motion.div>

          {/* Experience Cards */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid md:grid-cols-3 gap-8 mb-16"
          >
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                whileHover={{ 
                  scale: 1.05, 
                  rotateY: hoveredCard === index ? 2 : 0,
                  rotateX: hoveredCard === index ? 1 : 0
                }}
                onHoverStart={() => setHoveredCard(index)}
                onHoverEnd={() => setHoveredCard(null)}
                className={`group relative overflow-hidden rounded-2xl p-8 backdrop-blur-sm transform-gpu cursor-pointer ${
                  isDark 
                    ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                    : 'bg-white/80 border border-gray-200 shadow-xl hover:shadow-2xl'
                } transition-all duration-300`}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setHoveredCard(hoveredCard === index ? null : index);
                  }
                }}
                aria-label={`Learn more about ${exp.title}`}
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${exp.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                {/* Content */}
                <div className="relative space-y-6">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${exp.color} flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 ${
                    isDark ? 'shadow-lg shadow-blue-500/25' : 'shadow-xl shadow-blue-500/25'
                  }`}>
                    {exp.icon}
                  </div>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    {exp.title}
                  </h3>

                  {/* Description */}
                  <p className={`text-base leading-relaxed ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {exp.description}
                  </p>

                  {/* Hover indicator */}
                  <motion.div 
                    className={`w-8 h-1 rounded-full bg-gradient-to-r ${exp.color} ${
                      hoveredCard === index ? 'opacity-100' : 'opacity-0'
                    } transition-opacity duration-300`}
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
