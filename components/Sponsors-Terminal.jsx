'use client';
import { useState, useRef, useEffect } from 'react';

const Sponsors = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedCommands, setTypedCommands] = useState({});
  const [loadingSponsors, setLoadingSponsors] = useState(false);
  const [sponsorsLoaded, setSponsorsLoaded] = useState([]);
  const sponsorsRef = useRef(null);

  const sponsorTiers = [
    {
      id: 'platinum',
      name: 'Platinum',
      command: 'curl -H "Authorization: Bearer TOKEN" https://api.seasides.net/sponsors/platinum',
      sponsors: ['CyberCorp', 'SecureFlow', 'DataGuard Pro'],
      color: 'text-gray-300',
      description: 'Leading cybersecurity companies'
    },
    {
      id: 'gold',
      name: 'Gold',
      command: 'wget -q -O- https://api.seasides.net/sponsors/gold.json | jq .',
      sponsors: ['TechShield', 'InfoSec Labs', 'CryptoVault', 'NetDefender'],
      color: 'text-yellow-400',
      description: 'Industry innovators'
    },
    {
      id: 'silver',
      name: 'Silver',
      command: 'cat /etc/sponsors/silver-tier.txt',
      sponsors: ['ByteWall', 'CloudSafe', 'ScanPro', 'FireGuard', 'ZeroTrust Inc'],
      color: 'text-blue-400',
      description: 'Technology supporters'
    },
    {
      id: 'community',
      name: 'Community',
      command: 'ls -la /var/community-sponsors/',
      sponsors: ['Local Security Groups', 'Cyber Clubs', 'Tech Communities', 'Student Organizations'],
      color: 'text-green-400',
      description: 'Community partners'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          loadSponsors();
        }
      },
      { threshold: 0.3 }
    );

    if (sponsorsRef.current) {
      observer.observe(sponsorsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const loadSponsors = async () => {
    setLoadingSponsors(true);
    
    for (let i = 0; i < sponsorTiers.length; i++) {
      const tier = sponsorTiers[i];
      await typeCommand(tier.id, tier.command);
      await new Promise(resolve => setTimeout(resolve, 500));
      setSponsorsLoaded(prev => [...prev, tier.id]);
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
    
    setLoadingSponsors(false);
  };

  const typeCommand = async (id, command) => {
    for (let i = 0; i <= command.length; i++) {
      setTypedCommands(prev => ({
        ...prev,
        [id]: command.slice(0, i)
      }));
      await new Promise(resolve => setTimeout(resolve, 30));
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes scan-lines {
          0% { background-position: 0 0; }
          100% { background-position: 0 20px; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
          50% { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
        }
        
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes loading-dots {
          0%, 20% { color: transparent; }
          40% { color: currentColor; }
          100% { color: transparent; }
        }
        
        .terminal-window {
          background: linear-gradient(180deg, transparent 90%, rgba(0, 255, 0, 0.03) 90%);
          background-size: 100% 20px;
          animation: scan-lines 0.1s linear infinite;
        }
        
        .terminal-text {
          font-family: 'Courier New', monospace;
        }
        
        .glow-text {
          animation: glow 2s ease-in-out infinite;
        }
        
        .matrix-digit {
          animation: matrix-rain 4s linear infinite;
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .loading-dots span {
          animation: loading-dots 1.5s linear infinite;
        }
        
        .loading-dots span:nth-child(2) {
          animation-delay: 0.2s;
        }
        
        .loading-dots span:nth-child(3) {
          animation-delay: 0.4s;
        }
      `}</style>

      <section ref={sponsorsRef} className="relative py-20 bg-black text-green-400 overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="matrix-digit absolute text-green-500 text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        {/* Terminal Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   repeating-linear-gradient(
                     0deg,
                     transparent,
                     transparent 2px,
                     rgba(0, 255, 0, 0.1) 2px,
                     rgba(0, 255, 0, 0.1) 4px
                   )
                 `
               }}>
          </div>
        </div>

        <div className="relative container mx-auto px-6 z-10">
          {/* Main Terminal Window */}
          <div className="bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window max-w-6xl mx-auto">
            <div className="terminal-text">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">sponsor-api.sh - Partnership Database</span>
              </div>

              {/* Initial Setup */}
              <div className="mb-8">
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold glow-text text-green-400">
                    === SEASIDES 2025 CYBER ALLIES ===
                  </div>
                  <div className="text-green-300 text-sm mt-2">
                    Connecting with industry leaders and community partners
                  </div>
                </div>

                <div className="flex items-center gap-2 mb-4">
                  <span className="text-cyan-400">admin@seasides:</span>
                  <span className="text-white">~$</span>
                  <span className="text-green-400 ml-2">./fetch-sponsors.sh --all-tiers</span>
                </div>
                <div className="text-green-300 text-sm ml-6 mb-6">
                  Fetching sponsor database...
                  {loadingSponsors && (
                    <span className="loading-dots">
                      <span>.</span><span>.</span><span>.</span>
                    </span>
                  )}
                  {!loadingSponsors && sponsorsLoaded.length > 0 && ' [COMPLETE]'}
                </div>
              </div>

              {/* Sponsor Tiers */}
              <div className="space-y-8">
                {sponsorTiers.map((tier, index) => (
                  <div key={tier.id} className="bg-black bg-opacity-50 border border-green-600 rounded p-6">
                    {/* Command */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-cyan-400">root@api:</span>
                        <span className="text-white">~#</span>
                      </div>
                      <div className="text-green-400 text-sm min-h-[20px]">
                        {typedCommands[tier.id] || ''}
                        {typedCommands[tier.id] && typedCommands[tier.id].length < tier.command.length && (
                          <span className="cursor-blink">|</span>
                        )}
                      </div>
                    </div>

                    {/* Output */}
                    {sponsorsLoaded.includes(tier.id) && (
                      <div className="border-t border-green-600 pt-4">
                        <div className="mb-4">
                          <div className={`text-xl font-bold ${tier.color} glow-text`}>
                            {tier.name.toUpperCase()} TIER SPONSORS
                          </div>
                          <div className="text-green-300 text-sm">
                            {tier.description}
                          </div>
                        </div>

                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                          {tier.sponsors.map((sponsor, sponsorIndex) => (
                            <div 
                              key={sponsorIndex}
                              className="bg-gray-800 border border-gray-600 rounded p-4 hover:border-green-500 transition-colors cursor-pointer"
                            >
                              <div className="text-center">
                                <div className="text-2xl mb-2">🏢</div>
                                <div className={`font-semibold ${tier.color}`}>
                                  {sponsor}
                                </div>
                                <div className="text-xs text-gray-400 mt-1">
                                  {tier.name} Partner
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Partnership Opportunities */}
              {sponsorsLoaded.length === sponsorTiers.length && (
                <div className="mt-8 border-t border-green-600 pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">admin@seasides:</span>
                      <span className="text-white">~$</span>
                      <span className="text-green-400 ml-2">cat /partnership/opportunities.txt</span>
                    </div>
                    
                    <div className="ml-6 bg-black bg-opacity-50 p-4 rounded border border-cyan-600">
                      <div className="text-cyan-400 glow-text text-lg font-bold mb-4">
                        BECOME A CYBER ALLY
                      </div>
                      <div className="grid md:grid-cols-2 gap-6 text-sm">
                        <div>
                          <div className="text-green-400 font-semibold mb-2">Benefits:</div>
                          <div className="space-y-1 text-green-300">
                            <div>► Brand visibility to 1000+ professionals</div>
                            <div>► Technical speaking opportunities</div>
                            <div>► Recruitment access</div>
                            <div>► Community engagement</div>
                          </div>
                        </div>
                        <div>
                          <div className="text-yellow-400 font-semibold mb-2">Partnership Tiers:</div>
                          <div className="space-y-1 text-green-300">
                            <div>🥈 Silver: ₹50,000</div>
                            <div>🥇 Gold: ₹1,00,000</div>
                            <div>💎 Platinum: ₹2,50,000</div>
                            <div>🤝 Community: Free</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 flex flex-wrap gap-4">
                        <button className="px-6 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-sm">
                          ./contact-partnerships.sh
                        </button>
                        <button className="px-6 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm">
                          ./download-sponsorship-kit.sh
                        </button>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">admin@seasides:</span>
                      <span className="text-white">~$</span>
                      <span className="cursor-blink text-green-400 ml-2">|</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Side Terminal - Sponsor Stats */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 terminal-window">
              <div className="terminal-text">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-xs text-gray-400">sponsor-stats.sh</span>
                </div>
                <div className="text-xs space-y-1">
                  <div className="text-cyan-400 glow-text">PARTNERSHIP METRICS:</div>
                  <div className="text-green-400">► Total Sponsors: 15+</div>
                  <div className="text-yellow-400">► Industry Coverage: 100%</div>
                  <div className="text-purple-400">► Community Partners: 8+</div>
                  <div className="text-pink-400">► Global Reach: Worldwide</div>
                </div>
              </div>
            </div>

            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 terminal-window">
              <div className="terminal-text">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-xs text-gray-400">contact-info.sh</span>
                </div>
                <div className="text-xs space-y-1">
                  <div className="text-cyan-400 glow-text">PARTNERSHIP CONTACT:</div>
                  <div className="text-green-400">► Email: sponsors@seasides.net</div>
                  <div className="text-yellow-400">► Response: 24-48 hours</div>
                  <div className="text-purple-400">► Custom packages available</div>
                  <div className="text-pink-400">► Early bird discounts</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Sponsors;
