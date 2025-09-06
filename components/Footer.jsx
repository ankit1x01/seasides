'use client';
import { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaFacebook, FaYoutube, FaRocket, FaShieldAlt, FaCode } from 'react-icons/fa';
import { EVENT_DATE_LONG } from '@/lib/eventConfig';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        timeZone: 'Asia/Kolkata',
        hour12: true 
      }));
    };
    
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const socialIcons = [
    { Icon: FaLinkedin, href: "https://www.linkedin.com/company/seasides/", color: "hover:text-blue-400", glow: "hover:drop-shadow-[0_0_10px_#3b82f6]" },
    { Icon: FaTwitter, href: "https://x.com/seasides_conf/", color: "hover:text-cyan-400", glow: "hover:drop-shadow-[0_0_10px_#06b6d4]" },
    { Icon: FaInstagram, href: "https://www.instagram.com/seasides_conf/", color: "hover:text-pink-400", glow: "hover:drop-shadow-[0_0_10px_#ec4899]" },
    { Icon: FaFacebook, href: "https://www.facebook.com/seasidesconference", color: "hover:text-blue-500", glow: "hover:drop-shadow-[0_0_10px_#3b82f6]" },
    { Icon: FaYoutube, href: "https://www.youtube.com/@seasidesgoa", color: "hover:text-red-400", glow: "hover:drop-shadow-[0_0_10px_#ef4444]" }
  ];

  const quickLinks = [
  { icon: '📊', text: 'Stats', href: '#stats' },
  { icon: '📍', text: 'Venue', href: '#venue' },
  { icon: '✉️', text: 'Contact', href: '#contact' }
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
        
        @keyframes cyber-scan {
          0% { left: -100%; }
          100% { left: 100%; }
        }
        
        .social-icon {
          transition: all 0.3s ease;
          position: relative;
        }
        
        .social-icon:hover {
          transform: translateY(-5px) scale(1.2);
          animation: float-footer 2s ease-in-out infinite;
        }
        
        .scan-line {
          position: absolute;
          top: 0;
          width: 2px;
          height: 100%;
          background: linear-gradient(to bottom, transparent, #00ffff, transparent);
          animation: cyber-scan 3s linear infinite;
        }
        
        .footer-link:hover {
          transform: translateX(5px);
          color: #00ffff;
        }
      `}</style>
      
      <footer className="relative bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden" style={{color: 'white'}}>
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

        {/* Scanning Line */}
        <div className="scan-line"></div>

        <div className="relative container mx-auto px-6 py-12 z-10">
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 mb-8">
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="relative">
                  <FaShieldAlt className="text-3xl text-cyan-400 animate-pulse" />
                  <div className="absolute inset-0 bg-cyan-400 opacity-20 rounded-full blur-lg"></div>
                </div>
                <h3 className="text-2xl font-bold text-white">
                  SEASIDES 2026
                </h3>
              </div>
              <p className="leading-relaxed mb-4" style={{color: 'white'}}>
                India's premier cybersecurity conference bringing together experts, enthusiasts, and innovators 
                to explore the future of digital security in the beautiful coastal setting of Goa.
              </p>
              <div className="flex items-center gap-2 text-sm text-cyan-300">
                <span className="animate-pulse">🕒</span>
                <span>IST: {currentTime}</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="footer-link flex items-center gap-2 hover:text-cyan-400 transition-all duration-300 text-sm text-white"
                    >
                      <span className="text-base">{link.icon}</span>
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Event Info */}
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white">
                Event Details
              </h4>
              <div className="space-y-3 text-sm text-white">
                <div className="flex items-center gap-2">
                  <span>📅</span>
                  <span>{EVENT_DATE_LONG}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📍</span>
                  <span>International Centre Goa</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🎯</span>
                  <span>Cybersecurity & Innovation</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🌊</span>
                  <span>Goa, India</span>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Bottom Section */}
          <div className="border-t border-gray-700 border-opacity-50 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {/* Social Icons */}
              <div className="flex items-center gap-6">
                <span className="text-sm mr-2 text-white">Connect with us:</span>
                {socialIcons.map(({ Icon, href, color, glow }, index) => (
                  <a
                    key={index}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-icon ${color} ${glow} transition-all duration-300 relative text-white`}
                    onMouseEnter={() => setHoveredIcon(index)}
                    onMouseLeave={() => setHoveredIcon(null)}
                  >
                    <Icon size={24} />
                    {hoveredIcon === index && (
                      <div className="absolute -inset-2 bg-gradient-to-r from-transparent via-white to-transparent opacity-20 rounded-full animate-ping"></div>
                    )}
                  </a>
                ))}
              </div>

              {/* Copyright */}
              <div className="text-center md:text-right">
                <p className="text-sm mb-1 text-white">
                  © 2026 Organised by{' '}
                  <span className="text-white font-semibold">
                    Seasides Social Welfare Foundation
                  </span>
                </p>
                <p className="text-xs text-white">
                  All rights reserved. Built with 💙 for the cybersecurity community.
                </p>
              </div>
            </div>

            {/* Tech Credits */}
            <div className="mt-6 text-center">
              <div className="inline-flex items-center gap-2 text-xs hover:text-cyan-400 transition-colors cursor-pointer text-white">
                <FaCode className="animate-pulse" />
                <span>Powered by Next.js & Modern Web Technologies</span>
                <FaRocket className="animate-bounce" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
