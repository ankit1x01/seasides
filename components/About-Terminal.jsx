'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedCommands, setTypedCommands] = useState({});
  const [loadedSections, setLoadedSections] = useState([]);
  const [expandedFeature, setExpandedFeature] = useState(null);
  const aboutRef = useRef(null);

  const aboutSections = [
    {
      id: 'intro',
      command: 'cat /conf/about/introduction.md',
      content: 'To stay ahead in the ever-evolving security landscape, continuous learning and networking are essential. As attacks grow more complex, sharpening our skills is crucial. Cybersecurity conferences are a powerful way to keep up with this fast-changing domain.'
    },
    {
      id: 'details',
      command: 'grep -A 10 "event_details" /etc/seasides/config.json',
      content: 'Join us from February 20th to 22nd for the Seasides InfoSec Conference 2026, where you\'ll gain valuable insights into cybersecurity. We\'re proud to offer top-notch courses and sessions for free, bringing a community-driven experience that mirrors major global events like Blackhat and Defcon—ensuring equal learning opportunities for all.'
    }
  ];

  const features = [
    {
      id: 'experts',
      icon: '🎯',
      title: 'Expert Insights',
      description: 'Learn from industry leaders and cybersecurity experts',
      command: './load-experts.sh --category=speakers',
      details: ['World-class security researchers', 'Industry veterans with 20+ years experience', 'Latest threat intelligence briefings', 'Real-world case studies and scenarios']
    },
    {
      id: 'networking',
      icon: '🤝', 
      title: 'Networking',
      description: 'Connect with like-minded professionals and build lasting relationships',
      command: './network-connect.sh --protocol=professional',
      details: ['500+ cybersecurity professionals', 'Dedicated networking sessions', 'Industry roundtables', 'Career mentorship opportunities']
    },
    {
      id: 'hands-on',
      icon: '🚀',
      title: 'Hands-on Learning',
      description: 'Participate in workshops and villages for practical experience',
      command: 'docker run --rm -it seasides/workshops:latest',
      details: ['Interactive lab environments', 'Real attack scenarios', 'Tool demonstrations', 'Take-home virtual machines']
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          loadAboutSections();
        }
      },
      { threshold: 0.3 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const loadAboutSections = async () => {
    // Load intro section first
    await typeCommand('intro', aboutSections[0].command);
    await new Promise(resolve => setTimeout(resolve, 800));
    setLoadedSections(prev => [...prev, 'intro']);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Load details section
    await typeCommand('details', aboutSections[1].command);
    await new Promise(resolve => setTimeout(resolve, 800));
    setLoadedSections(prev => [...prev, 'details']);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Load features
    for (const feature of features) {
      await typeCommand(feature.id, feature.command);
      await new Promise(resolve => setTimeout(resolve, 600));
      setLoadedSections(prev => [...prev, feature.id]);
    }
  };

  const typeCommand = async (id, command) => {
    for (let i = 0; i <= command.length; i++) {
      setTypedCommands(prev => ({
        ...prev,
        [id]: command.slice(0, i)
      }));
      await new Promise(resolve => setTimeout(resolve, 40));
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
        
        @keyframes section-load {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
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
          animation: matrix-rain 3s linear infinite;
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .section-fade-in {
          animation: section-load 0.6s ease-out;
        }
      `}</style>

      <section ref={aboutRef} className="relative py-20 bg-black text-green-400 overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 40 }).map((_, i) => (
            <div
              key={i}
              className="matrix-digit absolute text-green-500 text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
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
                <span className="ml-4 text-sm text-gray-400">about-conference.sh - Conference Information System</span>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="text-3xl font-bold glow-text text-green-400 mb-4">
                  === ABOUT THE CONFERENCE ===
                </div>
                <div className="text-green-300 text-sm mb-4">
                  Cybersecurity Knowledge Transfer Protocol v2026
                </div>
                <div className="w-24 h-1 bg-green-400 mx-auto mb-6"></div>
              </div>

              {/* Introduction Section */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-cyan-400">admin@seasides:</span>
                  <span className="text-white">~$</span>
                </div>
                <div className="text-green-400 text-sm min-h-[20px] mb-4">
                  {typedCommands['intro'] || ''}
                  {typedCommands['intro'] && typedCommands['intro'].length < aboutSections[0].command.length && (
                    <span className="cursor-blink">|</span>
                  )}
                </div>

                {loadedSections.includes('intro') && (
                  <div className="ml-6 bg-black bg-opacity-50 p-4 rounded border border-green-600 section-fade-in">
                    <div className="text-green-300 leading-relaxed">
                      {aboutSections[0].content}
                    </div>
                  </div>
                )}
              </div>

              {/* Details Section */}
              {loadedSections.includes('intro') && (
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-cyan-400">admin@seasides:</span>
                    <span className="text-white">~$</span>
                  </div>
                  <div className="text-green-400 text-sm min-h-[20px] mb-4">
                    {typedCommands['details'] || ''}
                    {typedCommands['details'] && typedCommands['details'].length < aboutSections[1].command.length && (
                      <span className="cursor-blink">|</span>
                    )}
                  </div>

                  {loadedSections.includes('details') && (
                    <div className="ml-6 bg-black bg-opacity-50 p-4 rounded border border-cyan-600 section-fade-in">
                      <div className="text-green-300 leading-relaxed mb-4">
                        {aboutSections[1].content}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        <span className="px-3 py-1 bg-green-900 bg-opacity-50 text-green-300 text-sm rounded border border-green-600">
                          📅 Feb 20-22, 2026
                        </span>
                        <span className="px-3 py-1 bg-blue-900 bg-opacity-50 text-blue-300 text-sm rounded border border-blue-600">
                          💰 FREE Access
                        </span>
                        <span className="px-3 py-1 bg-purple-900 bg-opacity-50 text-purple-300 text-sm rounded border border-purple-600">
                          🌍 Community-Driven
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Why Join Conference */}
              {loadedSections.includes('details') && (
                <div className="mb-8">
                  <div className="text-center mb-6">
                    <div className="text-2xl font-bold text-cyan-400 glow-text mb-4">
                      WHY JOIN CONFERENCE
                    </div>
                    <div className="text-green-300 text-sm">
                      Executing feature analysis commands...
                    </div>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {features.map((feature) => (
                      <div key={feature.id} className="bg-black bg-opacity-50 border border-green-600 rounded p-4">
                        {/* Command */}
                        <div className="mb-3">
                          <div className="flex items-center gap-2 text-xs mb-2">
                            <span className="text-cyan-400">user@feature-{feature.id}:</span>
                            <span className="text-white">~$</span>
                          </div>
                          <div className="text-green-400 text-xs min-h-[16px]">
                            {typedCommands[feature.id] || ''}
                            {typedCommands[feature.id] && typedCommands[feature.id].length < feature.command.length && (
                              <span className="cursor-blink">|</span>
                            )}
                          </div>
                        </div>

                        {/* Feature Content */}
                        {loadedSections.includes(feature.id) && (
                          <div className="section-fade-in">
                            <div className="text-center mb-4">
                              <div className="w-12 h-12 bg-green-900 bg-opacity-50 rounded-full flex items-center justify-center mx-auto mb-3 border border-green-600">
                                <span className="text-xl">{feature.icon}</span>
                              </div>
                              <div className="text-lg font-bold text-green-400 glow-text">
                                {feature.title}
                              </div>
                              <div className="text-green-300 text-sm mt-2">
                                {feature.description}
                              </div>
                            </div>

                            {/* Expandable Details */}
                            <button 
                              className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors w-full text-left"
                              onClick={() => setExpandedFeature(expandedFeature === feature.id ? null : feature.id)}
                            >
                              {expandedFeature === feature.id ? '▼' : '►'} ./show-details.sh
                            </button>

                            {expandedFeature === feature.id && (
                              <div className="mt-3 ml-4 space-y-1">
                                {feature.details.map((detail, index) => (
                                  <div key={index} className="text-green-300 text-xs flex items-center gap-2">
                                    <span className="text-yellow-400">►</span>
                                    <span>{detail}</span>
                                  </div>
                                ))}
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quote and CTA */}
              {loadedSections.length >= 6 && (
                <div className="border-t border-green-600 pt-8">
                  <div className="text-center space-y-6">
                    {/* Quote Terminal */}
                    <div className="bg-black p-6 rounded border border-yellow-600">
                      <div className="flex items-center gap-2 mb-4">
                        <span className="text-cyan-400">root@seasides:</span>
                        <span className="text-white">~#</span>
                        <span className="text-green-400 ml-2">fortune | cowsay</span>
                      </div>
                      <blockquote className="text-lg italic text-green-300 leading-relaxed">
                        "Shift your perspective on Security - How do you adapt as a technology enthusiast, security engineer, or developer amidst industry changes? Discover insights from those leading the way"
                      </blockquote>
                    </div>

                    {/* CTA Button */}
                    <div className="flex items-center gap-2 justify-center">
                      <span className="text-cyan-400">user@seasides:</span>
                      <span className="text-white">~$</span>
                      <Link href="/about">
                        <button className="ml-2 px-8 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 terminal-text">
                          ./learn-more-about-seasides.sh
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Final Command Prompt */}
              {loadedSections.length >= 6 && (
                <div className="mt-8 flex items-center gap-2">
                  <span className="text-cyan-400">admin@seasides:</span>
                  <span className="text-white">~$</span>
                  <span className="cursor-blink text-green-400 ml-2">|</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
