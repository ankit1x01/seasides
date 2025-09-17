'use client';
import { useState, useEffect, useRef } from 'react';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

const SponsorsPage = () => {
  const [visibleSections, setVisibleSections] = useState(new Set());
  const sectionRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.indexOf(entry.target);
            setVisibleSections(prev => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.2 }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);
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

  return (
    <>
      <style jsx>{`
        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes sponsorFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.6); }
        }
        
        @keyframes slideInLeft {
          0% { opacity: 0; transform: translateX(-50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slideInRight {
          0% { opacity: 0; transform: translateX(50px); }
          100% { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes scaleIn {
          0% { opacity: 0; transform: scale(0.8); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        .fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        
        .slide-in-left {
          animation: slideInLeft 0.8s ease-out forwards;
        }
        
        .slide-in-right {
          animation: slideInRight 0.8s ease-out forwards;
        }
        
        .scale-in {
          animation: scaleIn 0.6s ease-out forwards;
        }
        
        .sponsor-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .sponsor-card:hover {
          animation: sponsorFloat 2s ease-in-out infinite;
        }
        
        .pulse-glow {
          animation: pulseGlow 2s ease-in-out infinite;
        }
        
        .stagger-animation {
          opacity: 0;
        }
        
        .stagger-animation.visible {
          opacity: 1;
        }
      `}</style>
      
      <main className="relative">
        <Navbar />
        <div className="min-h-screen bg-black relative overflow-hidden">
          {/* Animated Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute top-3/4 left-1/2 w-48 h-48 bg-cyan-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          </div>
          
          {/* Cyber Grid Background */}
          <div 
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage: `
                linear-gradient(rgba(0,255,255,0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0,255,255,0.3) 1px, transparent 1px)
              `,
              backgroundSize: '40px 40px'
            }}
          ></div>
          
          <div className="container mx-auto px-6 py-16 relative z-10">
            <div 
              ref={el => sectionRefs.current[0] = el}
              className={`text-center mb-16 ${
                visibleSections.has(0) ? 'fade-in-up' : 'stagger-animation'
              }`}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-6 pulse-glow">
                Our Sponsors
              </h1>
              <div className="w-32 h-1 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto mb-8 rounded-full"></div>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
                We are grateful to our amazing sponsors who make this free conference possible and support the cybersecurity community&apos;s growth.
              </p>
            </div>

          {sponsorTiers.map((tier, tierIndex) => (
            <div 
              key={tierIndex} 
              ref={el => sectionRefs.current[tierIndex + 1] = el}
              className={`mb-16 ${
                visibleSections.has(tierIndex + 1) 
                  ? (tierIndex % 2 === 0 ? 'slide-in-left' : 'slide-in-right')
                  : 'stagger-animation'
              }`}
            >
              <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-400 mb-4">
                  {tier.title}
                </h2>
                <p className="text-gray-300 text-lg">{tier.description}</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {tier.sponsors.map((sponsor, index) => (
                  <div
                    key={index}
                    className={`sponsor-card bg-gray-900/80 backdrop-blur-sm border-2 border-cyan-400/50 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:shadow-cyan-400/30 transition-all duration-500 group hover:border-yellow-400 hover:scale-105 ${
                      visibleSections.has(tierIndex + 1) ? 'scale-in' : 'stagger-animation'
                    }`}
                    style={{ 
                      animationDelay: `${index * 0.1}s`,
                      transform: visibleSections.has(tierIndex + 1) ? 'none' : 'scale(0.8)'
                    }}
                  >
                    <div className="relative h-24 mb-4 flex items-center justify-center bg-white rounded-lg overflow-hidden group-hover:bg-gray-50 transition-colors duration-300">
                      <Image
                        src={sponsor.logo}
                        alt={sponsor.name}
                        fill
                        className="object-contain p-2 group-hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <h3 className="text-lg font-semibold text-center text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">
                      {sponsor.name}
                    </h3>
                    
                    {/* Hover glow effect */}
                    <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-400/0 via-cyan-400/5 to-purple-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          <div 
            ref={el => sectionRefs.current[sponsorTiers.length + 1] = el}
            className={`bg-gray-900/80 backdrop-blur-sm border-2 border-green-400/50 rounded-xl p-8 text-center hover:border-green-400 transition-all duration-500 hover:shadow-lg hover:shadow-green-400/20 ${
              visibleSections.has(sponsorTiers.length + 1) ? 'fade-in-up' : 'stagger-animation'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-400 mb-6">
              Why Sponsor Seasides?
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: "🎯", text: "Reach 2,500+ cybersecurity professionals and enthusiasts", color: "text-cyan-400" },
                { icon: "🌍", text: "Global audience with participants from 30+ countries", color: "text-green-400" },
                { icon: "💡", text: "Associate your brand with cutting-edge security innovation", color: "text-purple-400" },
                { icon: "🤝", text: "Support the cybersecurity community's education and growth", color: "text-red-400" },
                { icon: "📈", text: "Generate leads and build meaningful business relationships", color: "text-yellow-400" },
                { icon: "🎉", text: "Be part of India's most loved cybersecurity conference", color: "text-pink-400" }
              ].map((item, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 p-4 rounded-lg bg-gray-800/50 hover:bg-gray-800/80 transition-all duration-300 hover:scale-105 ${
                    visibleSections.has(sponsorTiers.length + 1) ? 'slide-in-left' : 'stagger-animation'
                  }`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <span className="text-xl animate-bounce" style={{ animationDelay: `${index * 0.2}s` }}>
                    {item.icon}
                  </span>
                  <span className="text-gray-300 hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div 
            ref={el => sectionRefs.current[sponsorTiers.length + 2] = el}
            className={`bg-gray-900/80 backdrop-blur-sm border-2 border-purple-400/50 rounded-xl p-8 mt-12 text-center hover:border-purple-400 transition-all duration-500 hover:shadow-lg hover:shadow-purple-400/20 ${
              visibleSections.has(sponsorTiers.length + 2) ? 'scale-in' : 'stagger-animation'
            }`}
          >
            <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
              Become a Sponsor
            </h2>
            <p className="text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us in making cybersecurity education accessible to all. Partner with Seasides and be part of something meaningful.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-6">
              <button
                onClick={() => window.open('mailto:sponsors@seasides.in?subject=Sponsorship Inquiry - Seasides 2026', '_blank')}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-400/30"
              >
                Contact Sponsorship Team
              </button>
              <button
                onClick={() => window.open('/sponsors/sponsorship-info.pdf', '_blank')}
                className="px-8 py-3 bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-black font-semibold rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-400/30"
              >
                Download Sponsorship Info
              </button>
            </div>
            <div className="mt-6 text-sm text-gray-400">
              <p>For custom sponsorship packages, please reach out to our team.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
    </>
  );
};

export default SponsorsPage;
