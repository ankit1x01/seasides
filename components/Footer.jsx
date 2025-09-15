'use client';
import { useState } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube } from 'react-icons/fa';
import { EVENT_DATE_LONG } from '@/lib/eventConfig';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

const Footer = () => {
  const [hoveredIcon, setHoveredIcon] = useState(null);
  const { isDark } = useTheme();



  const socialIcons = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/seasides/", color: "hover:text-blue-400", glow: "hover:drop-shadow-[0_0_10px_#3b82f6]" },
    { Icon: FaTwitter, href: "https://x.com/seasides_conf/", color: "hover:text-cyan-400", glow: "hover:drop-shadow-[0_0_10px_#06b6d4]" },
    { Icon: FaInstagram, href: "https://www.instagram.com/seasides_conf/", color: "hover:text-pink-400", glow: "hover:drop-shadow-[0_0_10px_#ec4899]" },
    { Icon: FaFacebook, href: "https://www.facebook.com/seasidesconference", color: "hover:text-blue-500", glow: "hover:drop-shadow-[0_0_10px_#3b82f6]" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@seasidesgoa", color: "hover:text-red-400", glow: "hover:drop-shadow-[0_0_10px_#ef4444]" }
  ];



  return (
    <>
      <style jsx>{`
        @keyframes pulse-footer {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes float-footer {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        
        .social-icon {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .social-icon:hover {
          transform: translateY(-5px) scale(1.2);
          animation: float-footer 2s ease-in-out infinite;
        }
        
        
        .footer-link:hover {
          transform: translateX(5px);
          color: #00ffff;
        }
      `}</style>
      
      <footer className={`relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white' 
          : 'bg-gradient-to-br from-gray-100 via-blue-100 to-indigo-100 text-gray-900'
      }`} style={{color: isDark ? 'white' : 'inherit'}}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-0 right-1/4 w-40 h-40 bg-purple-500 rounded-full opacity-10 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-cyan-500 rounded-full opacity-10 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>

        {/* Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}
        ></div>


        <div className="relative container mx-auto px-6 py-16 z-10 max-w-7xl">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 mb-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="relative">
                  <Image
                    src={isDark ? "/light-logo.png" : "/dark-logo.png"}
                    alt="Seasides Logo"
                    width={80}
                    height={48}
                    sizes="80px"
                    className="w-20 h-12 group-hover:scale-110 transition-transform duration-300"
                    style={{
                      width: '80px',
                      height: '48px',
                    }}
                  />
                  <div className="absolute inset-0 bg-cyan-400 opacity-20 rounded-full blur-lg"></div>
                </div>
              </div>
              <p className={`leading-relaxed mb-6 text-base ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                India&apos;s premier cybersecurity conference bringing together experts, enthusiasts, and innovators
                to explore the future of digital security in the beautiful coastal setting of Goa.
              </p>
            </div>

            {/* Event Info */}
            <div className="flex flex-col lg:col-span-1">
              <h4 className={`text-xl font-semibold mb-6 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                Event Details
              </h4>
              <div className={`space-y-4 text-base ${
                isDark ? 'text-gray-300' : 'text-gray-600'
              }`}>
                <div className="flex items-center gap-3">
                  <svg className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0a1 1 0 110 2h6a1 1 0 110-2M9 9h6m-6 4h6m-6 4h6m-6 4h6" />
                  </svg>
                  <span>{EVENT_DATE_LONG}</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>International Centre Goa</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <span>Cybersecurity & Innovation</span>
                </div>
                <div className="flex items-center gap-3">
                  <svg className={`w-5 h-5 flex-shrink-0 ${isDark ? 'text-cyan-400' : 'text-blue-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                  <span>Goa, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Bottom Section */}
          <div className={`border-t pt-8 ${
            isDark ? 'border-gray-700 border-opacity-50' : 'border-gray-300'
          }`}>
            <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-6">
              {/* Copyright */}
              <div className="text-center md:text-left">
                <p className={`text-sm ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  © 2026 Organised by{' '}
                  <span className={`font-semibold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>
                    Seasides Social Welfare Foundation
                  </span>
                </p>
              </div>

              {/* Social Icons */}
              <div className="flex items-center gap-1">
                <span className={`text-sm mr-4 ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>Connect with us:</span>
                <div className="flex items-center gap-4">
                  {socialIcons.map(({ Icon, href, color, glow }, index) => (
                    <a
                      key={index}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`social-icon ${color} ${glow} transition-all duration-300 relative ${
                        isDark ? 'text-gray-300 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                      }`}
                      onMouseEnter={() => setHoveredIcon(index)}
                      onMouseLeave={() => setHoveredIcon(null)}
                    >
                      <Icon size={20} />
                      {hoveredIcon === index && (
                        <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-20 rounded-full animate-ping"></div>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
