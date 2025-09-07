'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const highlights = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>,
      title: "Learn & Grow",
      description: "Cutting-edge cybersecurity knowledge from industry experts and community leaders",
      color: "from-blue-500 to-indigo-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-800"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      title: "Network & Connect",
      description: "Build lasting relationships with cybersecurity professionals across India",
      color: "from-purple-500 to-pink-600",
      bgColor: "bg-purple-50",
      textColor: "text-purple-800"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      title: "Completely FREE",
      description: "All sessions, meals, and networking events at absolutely zero cost",
      color: "from-green-500 to-emerald-600",
      bgColor: "bg-green-50",
      textColor: "text-green-800"
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Goa Experience",
      description: "Learn, network, and enjoy the beautiful coastal setting of International Centre Goa",
      color: "from-orange-500 to-red-600",
      bgColor: "bg-orange-50",
      textColor: "text-orange-800"
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Section Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-4">
            <span className={`font-medium text-lg ${
              isDark 
                ? 'text-cyan-400' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
            }`}>
              About Seasides 2026
            </span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
            isDark 
              ? 'text-white' 
              : 'bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'
          }`}>
            India&apos;s Premier FREE
            <span className={`block ${
              isDark 
                ? 'text-cyan-400' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
            }`}>
              Cybersecurity Conference
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Mission Statement */}
        <div className={`max-w-5xl mx-auto mb-16 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-300 ${
            isDark 
              ? 'bg-slate-800/80 border border-slate-700/50 shadow-2xl' 
              : 'bg-white/80 border border-white/20 shadow-xl'
          }`}>
            <div className="text-center space-y-6">
              <p className={`text-xl md:text-2xl leading-relaxed ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}>
                In the ever-evolving cybersecurity landscape, <strong className="text-blue-400">continuous learning</strong> and 
                <strong className="text-purple-400"> community building</strong> are essential. As threats grow more sophisticated, 
                staying ahead requires collective knowledge sharing.
              </p>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
              <p className={`text-lg md:text-xl leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}>
                Join us from <strong className="text-blue-600">February 19-21, 2026</strong> at the beautiful 
                <strong className="text-indigo-600"> International Centre Goa</strong> for a community-driven experience 
                that rivals global conferences like Black Hat and DEF CON—with the key difference being it&apos;s 
                <strong className="text-green-600"> completely FREE</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className={`grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {highlights.map((highlight, index) => (
            <div 
              key={index}
              className={`group rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 backdrop-blur-sm ${
                isDark 
                  ? 'bg-slate-800/80 border border-slate-700/50 hover:bg-slate-700/80' 
                  : `${highlight.bgColor} border border-white/20`
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : ''
              }}
            >
              <div className="text-center">
                <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300 flex justify-center">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${highlight.color} p-4 shadow-lg flex items-center justify-center text-white`}>
                    {highlight.icon}
                  </div>
                </div>
                <h3 className={`text-xl font-bold mb-3 transition-colors ${
                  isDark 
                    ? 'text-white group-hover:text-cyan-400' 
                    : `${highlight.textColor} group-hover:text-opacity-80`
                }`}>
                  {highlight.title}
                </h3>
                <p className={`leading-relaxed transition-colors ${
                  isDark 
                    ? 'text-slate-300 group-hover:text-white' 
                    : `${highlight.textColor} text-opacity-80 group-hover:text-opacity-100`
                }`}>
                  {highlight.description}
                </p>
              </div>
              
              {/* Gradient border effect on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${highlight.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none`} />
            </div>
          ))}
        </div>

        {/* Team Members Section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Team Section Header */}
          <div className="text-center mb-12">
            <h3 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark 
                ? 'text-white' 
                : 'bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'
            }`}>
              Meet Our Team
            </h3>
            <p className={`text-lg ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            } max-w-2xl mx-auto`}>
              The passionate cybersecurity professionals who make Seasides possible
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
          </div>

          {/* Founders Section */}
          <div className="mb-16">
            <h4 className={`text-2xl font-bold text-center mb-8 ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              Founders
            </h4>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {/* Prashant KV */}
              <div className={`group rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark 
                  ? 'bg-slate-800/80 border border-slate-700/50 hover:bg-slate-700/80' 
                  : 'bg-white/90 border border-white/20 hover:bg-white'
              }`}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-slate-700">
                      PK
                    </div>
                  </div>
                  <h5 className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    Prashant KV
                  </h5>
                  <p className={`text-sm font-medium mb-3 ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    Co-Founder Seasides
                  </p>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Over 20 years of experience in security domain, mentored countless cybersecurity enthusiasts
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parveen Yadav */}
              <div className={`group rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                isDark 
                  ? 'bg-slate-800/80 border border-slate-700/50 hover:bg-slate-700/80' 
                  : 'bg-white/90 border border-white/20 hover:bg-white'
              }`}>
                <div className="text-center">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-1">
                    <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-slate-700">
                      PY
                    </div>
                  </div>
                  <h5 className={`text-xl font-bold mb-2 ${
                    isDark ? 'text-white' : 'text-slate-800'
                  }`}>
                    Parveen Yadav
                  </h5>
                  <p className={`text-sm font-medium mb-3 ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`}>
                    Co-Founder Seasides
                  </p>
                  <p className={`text-sm leading-relaxed mb-4 ${
                    isDark ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    Expertise in cybersecurity, bug hunter on Hackerone & Bugcrowd
                  </p>
                  <div className="flex justify-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Team Section */}
          <div>
            <h4 className={`text-2xl font-bold text-center mb-8 ${
              isDark ? 'text-cyan-400' : 'text-blue-600'
            }`}>
              Core Team Members
            </h4>
            <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
              {[
                { name: "Pankaj Upadhyay", initials: "PU", color: "from-green-500 to-emerald-600" },
                { name: "Arun Mishra", initials: "AM", color: "from-orange-500 to-red-600" },
                { name: "Honey Merrin Sam", initials: "HS", color: "from-pink-500 to-rose-600" },
                { name: "Narendra", initials: "N", color: "from-indigo-500 to-blue-600" },
                { name: "Abhinav Khanna", initials: "AK", color: "from-teal-500 to-cyan-600", description: "Information Security Professional with 6+ years experience, spoken at BlackHat Asia, BlackHat MEA" },
                { name: "Parag Dave", initials: "PD", color: "from-violet-500 to-purple-600" },
                { name: "Sunita Sharma", initials: "SS", color: "from-yellow-500 to-orange-600" },
                { name: "Ashish Huria", initials: "AH", color: "from-lime-500 to-green-600" },
                { name: "Seedon Adlin D'souza", initials: "SD", color: "from-sky-500 to-blue-600" }
              ].map((member, index) => (
                <div 
                  key={index}
                  className={`group rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${
                    isDark 
                      ? 'bg-slate-800/80 border border-slate-700/50 hover:bg-slate-700/80' 
                      : 'bg-white/90 border border-white/20 hover:bg-white'
                  }`}
                  style={{
                    animationDelay: `${index * 50}ms`,
                    animation: isVisible ? 'fadeInUp 0.6s ease-out forwards' : ''
                  }}
                >
                  <div className="text-center">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} p-1`}>
                      <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-slate-700">
                        {member.initials}
                      </div>
                    </div>
                    <h5 className={`text-lg font-semibold mb-2 ${
                      isDark ? 'text-white' : 'text-slate-800'
                    }`}>
                      {member.name}
                    </h5>
                    {member.description && (
                      <p className={`text-xs leading-relaxed mb-3 ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`}>
                        {member.description}
                      </p>
                    )}
                    <div className="flex justify-center gap-2">
                      <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </div>
                      <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`mt-16 text-center transform transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`rounded-3xl p-8 text-white relative overflow-hidden transition-all duration-300 ${
            isDark 
              ? 'bg-gradient-to-r from-slate-800 to-slate-700 border border-slate-600' 
              : 'bg-gradient-to-r from-blue-600 to-indigo-600'
          }`}>
            <div className={`absolute inset-0 ${
              isDark ? 'bg-black/20' : 'bg-black/10'
            }`}></div>
            <div className="relative">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Ready to be part of India&apos;s cybersecurity community?
              </h3>
              <p className="text-lg text-blue-100 mb-6 max-w-2xl mx-auto">
                Registration opens soon. Follow our social channels for updates and be among the first to secure your spot!
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4M9 21h6a2 2 0 002-2v-1a1 1 0 00-1-1H8a1 1 0 00-1 1v1a2 2 0 002 2z" /></svg>
                  Feb 19-21, 2026
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                  Goa, India
                </div>
                <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3 text-sm font-medium flex items-center gap-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                  Completely FREE
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;
