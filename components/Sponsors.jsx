'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { useTheme } from '@/contexts/ThemeContext';

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSponsor, setHoveredSponsor] = useState(null);
  const sponsorsRef = useRef(null);
  const { isDark } = useTheme();

  const sponsorTiers = [
    {
      title: "Diamond Partners",
      description: "Leading the cybersecurity revolution",
      sponsors: [
        { name: "HackerOne", logo: "/sponsors/hackerone.png", tier: "diamond" },
        { name: "Bugcrowd", logo: "/sponsors/bugcrowd.png", tier: "diamond" },
      ],
      gradient: "from-cyan-300 to-blue-200",
      glow: "shadow-cyan-400/40"
    },
    {
      title: "Platinum Partners",
      description: "Pioneering cybersecurity excellence",
      sponsors: [
        { name: "Checkmarx", logo: "/sponsors/checkmarx.png", tier: "platinum" },
        { name: "DNIF", logo: "/sponsors/dnif.png", tier: "platinum" },
        { name: "ArmorCode", logo: "/sponsors/armorcode.png", tier: "platinum" },
        { name: "XBiz Ventures", logo: "/sponsors/xbiz.png", tier: "platinum" },
        { name: "CloudSek", logo: "/sponsors/cloudsek.png", tier: "platinum" },
      ],
      gradient: "from-gray-300 to-gray-100",
      glow: "shadow-gray-400/30"
    },
    {
      title: "Goodie Bag Sponsor",
      description: "Making the conference memorable",
      sponsors: [
        { name: "RiskProfiler", logo: "/sponsors/riskprofiler.png", tier: "goodie" },
      ],
      gradient: "from-purple-300 to-indigo-200",
      glow: "shadow-purple-400/30"
    },
    {
      title: "Gold Supporters",
      description: "Powering innovation in security",
      sponsors: [
        { name: "SecureLayer7", logo: "/sponsors/securelayer7.png", tier: "gold" },
        { name: "Enciphers", logo: "/sponsors/enciphers.png", tier: "gold" },
        { name: "ComplianceCow", logo: "/sponsors/compliancecow.png", tier: "gold" },
        { name: "Network Intelligence", logo: "/sponsors/networkintel.png", tier: "gold" },
        { name: "Altered Security", logo: "/sponsors/altered.png", tier: "gold" },
        { name: "HighRadius", logo: "/sponsors/highradius.png", tier: "gold" },
        { name: "Cobalt", logo: "/sponsors/cobalt.png", tier: "gold" },
      ],
      gradient: "from-yellow-300 to-amber-200",
      glow: "shadow-yellow-400/30"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sponsorsRef.current) {
      observer.observe(sponsorsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes float-sponsor {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse-border {
          0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
          50% { border-color: rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes glow-effect {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.2); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.5), 0 0 60px rgba(147, 51, 234, 0.3); }
        }
        
        .sponsor-card {
          animation: slide-up 0.8s ease-out;
          transition: all 0.3s ease;
        }
        
        .sponsor-card:hover {
          animation: float-sponsor 2s ease-in-out infinite, glow-effect 2s ease-in-out infinite;
          transform: translateY(-10px) scale(1.05);
        }
        
        .tier-section {
          animation: slide-up 1s ease-out;
        }
      `}</style>
      
  <section ref={sponsorsRef} className={`relative py-20 md:py-28 overflow-hidden transition-colors duration-300 ${
    isDark 
      ? 'bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white' 
      : 'bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 text-gray-900'
  }`}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 bg-purple-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-36 h-36 bg-pink-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
    <div className="relative container mx-auto px-6 max-w-7xl z-10">
          <div className="text-center mb-16">
  <h2 className={`font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`} style={{fontSize: 'clamp(2rem,4.5vw,3.25rem)'}}>
              Our Cyber Allies
            </h2>
      <div className="w-32 h-1 brand-gradient mx-auto rounded-full mb-6"></div>
            <p className={`text-lg md:text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-white/90' : 'text-gray-700'
            }`}>
              Partnering with industry leaders to advance cybersecurity innovation and education. 
              Together, we&apos;re building a safer digital future.
            </p>
          </div>
          
          {/* Sponsor Tiers */}
          {sponsorTiers.map((tier, tierIndex) => (
            <div 
              key={tierIndex}
              className={`tier-section mb-16`}
              style={{ animationDelay: `${tierIndex * 0.3}s` }}
            >
              <div className="text-center mb-8">
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {tier.title}
                </h3>
                <p className={`text-sm md:text-base ${
                  isDark ? 'text-gray-300' : 'text-gray-600'
                }`}>
                  {tier.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {tier.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className={`sponsor-card rounded-2xl p-8 border text-center group cursor-pointer relative overflow-hidden transition-all duration-300 ${
                      isDark 
                        ? `glass ${tier.glow}` 
                        : 'bg-white hover:bg-gray-50 shadow-lg hover:shadow-xl border-gray-200'
                    }`}
                    style={{ animationDelay: `${(tierIndex * 0.3) + (index * 0.1)}s` }}
                    onMouseEnter={() => setHoveredSponsor(`${tierIndex}-${index}`)}
                    onMouseLeave={() => setHoveredSponsor(null)}
                  >
                    {/* Sponsor Logo */}
                    <div className="relative mb-4">
                      <div className="w-full h-20 bg-white rounded-lg flex items-center justify-center p-2 group-hover:bg-gray-50 transition-all duration-300">
                        <Image
                          src={sponsor.logo}
                          alt={`${sponsor.name} logo`}
                          width={200}
                          height={80}
                          className="max-w-full max-h-full object-contain filter group-hover:brightness-110 transition-all duration-300"
                        />
                      </div>
                      {hoveredSponsor === `${tierIndex}-${index}` && (
                        <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-lg animate-pulse"></div>
                      )}
                    </div>
                    
                    <h4 className={`text-lg font-semibold transition-colors mb-2 ${
                      isDark ? 'text-white/90' : 'text-gray-900'
                    }`}>
                      {sponsor.name}
                    </h4>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                      isDark 
                        ? 'bg-white text-gray-900' 
                        : 'bg-gray-100 text-gray-700 border border-gray-300'
                    }`}> 
                      {tier.title.split(' ')[0]} Partner
                    </div>
                    
                    {/* Hover Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                  </div>
                ))}
              </div>
            </div>
          ))}
          
          {/* Become a Sponsor Section */}
          <div className={`text-center mt-16 p-12 border transition-all duration-300 ${
            isDark 
              ? 'border-white border-opacity-20 bg-black' 
              : 'border-gray-300 bg-white shadow-lg'
          }`} style={{ borderRadius: '1.5rem' }}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 text-4xl mb-4">
                <span className="animate-bounce">🤝</span>
                <span className="animate-pulse">⚡</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#FF0000 !important', fontSize: '3rem !important', fontWeight: 'bold !important', textShadow: '2px 2px 4px black !important' }}>
                Partner with SEASIDES 2026
              </h3>
              <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: '#FF0000 !important', fontSize: '1.5rem !important', fontWeight: 'bold !important', textShadow: '2px 2px 4px black !important' }}>
                Join the elite network of cybersecurity innovators. Showcase your brand to 500+ security professionals, 
                students, and community members at India&apos;s premier FREE conference.
              </p>
            </div>
            
            
            {/* Benefits Preview */}
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-lg">
              <div className="hover:text-cyan-300 transition-colors cursor-pointer flex flex-col items-center" style={{color: '#22d3ee'}}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 p-4 shadow-lg flex items-center justify-center text-white mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <span className="font-semibold text-center">Premium Exhibition Space</span>
              </div>
              <div className="hover:text-purple-300 transition-colors cursor-pointer flex flex-col items-center" style={{color: '#a855f7'}}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-indigo-600 p-4 shadow-lg flex items-center justify-center text-white mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a2 2 0 012-2h2a2 2 0 012 2v6a3 3 0 01-3 3z" />
                  </svg>
                </div>
                <span className="font-semibold text-center">Speaking Opportunities</span>
              </div>
              <div className="hover:text-pink-300 transition-colors cursor-pointer flex flex-col items-center" style={{color: '#f472b6'}}>
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 p-4 shadow-lg flex items-center justify-center text-white mb-3">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9V3m0 9L9.5 9.5M12 12l2.5 2.5" />
                  </svg>
                </div>
                <span className="font-semibold text-center">Digital Brand Visibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
