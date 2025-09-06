'use client';
import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSponsor, setHoveredSponsor] = useState(null);
  const sponsorsRef = useRef(null);

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
      
  <section ref={sponsorsRef} className="relative py-20 md:py-28 bg-gradient-to-br from-gray-950 via-slate-950 to-black text-white overflow-hidden">
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
  <h2 className="font-bold mb-6 text-white" style={{fontSize: 'clamp(2rem,4.5vw,3.25rem)'}}>
              Our Cyber Allies
            </h2>
      <div className="w-32 h-1 brand-gradient mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-white/90">
              Partnering with industry leaders to advance cybersecurity innovation and education. 
              Together, we're building a safer digital future.
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
                <h3 className={`text-2xl md:text-3xl font-bold mb-3 text-white`}>
                  {tier.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300">
                  {tier.description}
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {tier.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className={`sponsor-card glass rounded-2xl p-8 border text-center group cursor-pointer relative overflow-hidden ${tier.glow}`}
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
                    
                    <h4 className="text-lg font-semibold transition-colors mb-2 text-white/90">
                      {sponsor.name}
                    </h4>
                    
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white text-gray-900`}> 
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
          <div className="text-center mt-16 p-12 border border-white border-opacity-20" style={{ backgroundColor: '#000000', borderRadius: '1.5rem' }}>
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 text-4xl mb-4">
                <span className="animate-bounce">🤝</span>
                <span className="animate-pulse">⚡</span>
                <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🚀</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ color: '#FF0000 !important', fontSize: '3rem !important', fontWeight: 'bold !important', textShadow: '2px 2px 4px black !important' }}>
                Partner with SEASIDES 2026
              </h3>
              <p className="text-lg max-w-2xl mx-auto mb-8 leading-relaxed" style={{ color: '#FF0000 !important', fontSize: '1.5rem !important', fontWeight: 'bold !important', textShadow: '2px 2px 4px black !important' }}>
                Join the elite network of cybersecurity innovators. Showcase your brand to 1000+ security professionals, 
                researchers, and industry leaders.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 font-bold rounded-2xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden" style={{color: 'white'}}>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-bounce">🎯</span>
                  Become a Sponsor
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button className="group px-10 py-4 border-2 border-cyan-400 font-bold rounded-2xl hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-400/25 relative overflow-hidden" style={{color: '#22d3ee'}}>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-pulse">📋</span>
                  Download Sponsorship Kit
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
            </div>
            
            {/* Benefits Preview */}
            <div className="mt-8 grid md:grid-cols-3 gap-4 text-sm">
              <div className="hover:text-cyan-300 transition-colors cursor-pointer" style={{color: '#22d3ee'}}>
                <span className="block">🎪</span>
                <span>Premium Exhibition Space</span>
              </div>
              <div className="hover:text-purple-300 transition-colors cursor-pointer" style={{color: '#a855f7'}}>
                <span className="block">🎤</span>
                <span>Speaking Opportunities</span>
              </div>
              <div className="hover:text-pink-300 transition-colors cursor-pointer" style={{color: '#f472b6'}}>
                <span className="block">🌐</span>
                <span>Digital Brand Visibility</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
