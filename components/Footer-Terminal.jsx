'use client';
import { useState, useEffect } from 'react';

const Footer = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [uptime, setUptime] = useState(0);
  const [systemStats, setSystemStats] = useState({
    visitors: 0,
    sessions: 0,
    connections: 0
  });
  const [typedCommands, setTypedCommands] = useState({});
  const [isBooted, setIsBooted] = useState(false);

  const footerSections = [
    {
      id: 'about',
      title: 'ABOUT_SEASIDES',
      command: 'cat /etc/seasides/about.conf',
      links: [
        { label: 'Mission Statement', path: '/mission', icon: '📜' },
        { label: 'Conference History', path: '/history', icon: '📚' },
        { label: 'Organizers', path: '/team', icon: '👥' },
        { label: 'Code of Conduct', path: '/conduct', icon: '⚖️' }
      ]
    },
    {
      id: 'connect',
      title: 'SOCIAL_NETWORK',
      command: 'ls -la /social/connections/',
      links: [
        { label: 'Twitter/X', path: 'https://twitter.com/seasides2026', icon: '🐦' },
        { label: 'LinkedIn', path: 'https://linkedin.com/company/seasides', icon: '💼' },
        { label: 'Discord Server', path: 'https://discord.gg/seasides', icon: '💬' },
        { label: 'GitHub', path: 'https://github.com/seasides2026', icon: '🐙' }
      ]
    },
    {
      id: 'resources',
      title: 'RESOURCES',
      command: 'find /resources -type f -name "*.md"',
      links: [
        { label: 'Speaker Guidelines', path: '/speakers', icon: '🎤' },
        { label: 'Travel & Hotels', path: '/travel', icon: '✈️' },
        { label: 'Sponsor Packages', path: '/sponsors', icon: '🤝' },
        { label: 'Media Kit', path: '/media', icon: '📦' }
      ]
    },
    {
      id: 'support',
      title: 'SYSTEM_SUPPORT',
      command: 'systemctl status seasides-support',
      links: [
        { label: 'Contact Support', path: '/support', icon: '🛠️' },
        { label: 'Privacy Policy', path: '/privacy', icon: '🔒' },
        { label: 'Terms of Service', path: '/terms', icon: '📋' },
        { label: 'Accessibility', path: '/accessibility', icon: '♿' }
      ]
    }
  ];

  useEffect(() => {
    // Initialize boot sequence
    const bootTimer = setTimeout(() => {
      setIsBooted(true);
      loadFooterSections();
    }, 1000);

    // System time update
    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleString('en-US', {
        timeZone: 'America/New_York',
        hour12: false,
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      }));
    }, 1000);

    // Uptime counter
    const uptimeInterval = setInterval(() => {
      setUptime(prev => prev + 1);
    }, 1000);

    // System stats simulation
    const statsInterval = setInterval(() => {
      setSystemStats({
        visitors: Math.floor(Math.random() * 1000) + 500,
        sessions: Math.floor(Math.random() * 50) + 25,
        connections: Math.floor(Math.random() * 10) + 5
      });
    }, 3000);

    return () => {
      clearTimeout(bootTimer);
      clearInterval(timeInterval);
      clearInterval(uptimeInterval);
      clearInterval(statsInterval);
    };
  }, []);

  const loadFooterSections = async () => {
    for (const section of footerSections) {
      await typeCommand(section.id, section.command);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  };

  const typeCommand = async (id, command) => {
    for (let i = 0; i <= command.length; i++) {
      setTypedCommands(prev => ({
        ...prev,
        [id]: command.slice(0, i)
      }));
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  };

  const formatUptime = (seconds) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
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
          0%, 100% { text-shadow: 0 0 5px currentColor; }
          50% { text-shadow: 0 0 10px currentColor, 0 0 15px currentColor; }
        }
        
        @keyframes matrix-fall {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes boot-text {
          0% { opacity: 0; }
          50% { opacity: 0.5; }
          100% { opacity: 1; }
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
        
        .matrix-char {
          animation: matrix-fall 4s linear infinite;
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .boot-sequence {
          animation: boot-text 1s ease-in;
        }
        
        .footer-link:hover {
          text-shadow: 0 0 8px currentColor;
          transform: translateX(4px);
        }
      `}</style>

      <footer className="relative bg-black text-green-400 border-t border-green-600 overflow-hidden">
        {/* Matrix Rain Background */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="matrix-char absolute text-green-500 text-xs"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 2}s`
              }}
            >
              {String.fromCharCode(0x30A0 + Math.random() * 96)}
            </div>
          ))}
        </div>

        {/* Terminal Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full terminal-window"></div>
        </div>

        <div className="relative container mx-auto px-6 py-8 z-10">
          {/* Main Terminal Window */}
          <div className="bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window">
            <div className="terminal-text">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">system-footer.sh - Site Navigation & Info</span>
              </div>

              {/* System Status Bar */}
              <div className="mb-8 p-4 bg-black border border-green-600 rounded">
                <div className="grid md:grid-cols-4 gap-4 text-xs">
                  <div className="text-green-400">
                    <span className="text-cyan-400">SYSTEM:</span> SEASIDES-2026
                  </div>
                  <div className="text-green-400">
                    <span className="text-cyan-400">UPTIME:</span> {formatUptime(uptime)}
                  </div>
                  <div className="text-green-400">
                    <span className="text-cyan-400">TIME:</span> {currentTime}
                  </div>
                  <div className="text-green-400">
                    <span className="text-cyan-400">STATUS:</span> 
                    <span className="text-green-300 glow-text ml-1">ONLINE</span>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mt-2 text-xs">
                  <div className="text-yellow-400">
                    <span className="text-cyan-400">VISITORS:</span> {systemStats.visitors}
                  </div>
                  <div className="text-yellow-400">
                    <span className="text-cyan-400">SESSIONS:</span> {systemStats.sessions}
                  </div>
                  <div className="text-yellow-400">
                    <span className="text-cyan-400">CONNECTIONS:</span> {systemStats.connections}
                  </div>
                </div>
              </div>

              {/* Boot Sequence */}
              {!isBooted && (
                <div className="boot-sequence mb-6 text-green-300 text-sm space-y-1">
                  <div>Loading footer navigation system...</div>
                  <div>Initializing link directories...</div>
                  <div>Mounting social network connections...</div>
                  <div>Footer system ready.</div>
                </div>
              )}

              {/* Navigation Sections */}
              {isBooted && (
                <div className="space-y-8">
                  <div className="grid lg:grid-cols-4 gap-6">
                    {footerSections.map((section) => (
                      <div key={section.id} className="space-y-4">
                        {/* Section Header */}
                        <div className="text-cyan-400 font-bold glow-text">
                          {section.title}
                        </div>

                        {/* Command */}
                        <div className="mb-3">
                          <div className="flex items-center gap-2 text-xs">
                            <span className="text-cyan-400">user@seasides:</span>
                            <span className="text-white">~$</span>
                          </div>
                          <div className="text-green-400 text-xs min-h-[16px]">
                            {typedCommands[section.id] || ''}
                            {typedCommands[section.id] && typedCommands[section.id].length < section.command.length && (
                              <span className="cursor-blink">|</span>
                            )}
                          </div>
                        </div>

                        {/* Links */}
                        {typedCommands[section.id] && typedCommands[section.id].length === section.command.length && (
                          <div className="space-y-2">
                            {section.links.map((link, index) => (
                              <div key={index} className="flex items-center gap-2 text-sm group">
                                <span className="text-yellow-400">{link.icon}</span>
                                <a
                                  href={link.path}
                                  className="text-green-300 hover:text-green-100 transition-all duration-300 footer-link"
                                  target={link.path.startsWith('http') ? '_blank' : '_self'}
                                  rel={link.path.startsWith('http') ? 'noopener noreferrer' : ''}
                                >
                                  ./{link.label.toLowerCase().replace(/\s+/g, '-')}
                                </a>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Conference Info Block */}
                  <div className="border-t border-green-600 pt-6">
                    <div className="bg-black p-6 rounded border border-cyan-600">
                      <div className="text-center space-y-4">
                        <div className="text-cyan-400 font-bold text-lg glow-text">
                          SEASIDES CYBERSECURITY CONFERENCE 2026
                        </div>
                        <div className="text-green-300 text-sm space-y-1">
                          <div>🏖️ Miami Beach Convention Center | April 15-17, 2026</div>
                          <div>🌊 Where Cybersecurity Meets Innovation</div>
                          <div>🔒 Protecting Digital Shores, Building Secure Futures</div>
                        </div>
                        
                        <div className="flex items-center justify-center gap-4 text-xs">
                          <div className="text-purple-400">
                            💻 conf-support@seasides2026.com
                          </div>
                          <div className="text-yellow-400">
                            📞 +1 (305) 555-WAVE
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Copyright and System Info */}
                  <div className="border-t border-green-600 pt-6">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
                      <div className="text-green-400">
                        <span className="text-cyan-400">root@seasides2026:</span>
                        <span className="text-white">~$</span>
                        <span className="text-green-400 ml-2">echo "© 2026 Seasides Conference. All systems operational."</span>
                      </div>
                      
                      <div className="flex items-center gap-4 text-green-300">
                        <div>Build: v2026.1.0</div>
                        <div>|</div>
                        <div>SSL: Enabled</div>
                        <div>|</div>
                        <div className="text-green-400 glow-text">● System Online</div>
                      </div>
                    </div>

                    <div className="mt-4 text-center">
                      <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
                        <span>Developed with ❤️ by the Seasides Tech Team</span>
                        <span>|</span>
                        <span>Powered by Next.js & Terminal.css</span>
                      </div>
                    </div>

                    {/* Final Command Prompt */}
                    <div className="mt-6 flex items-center gap-2 text-xs">
                      <span className="text-cyan-400">user@seasides:</span>
                      <span className="text-white">~$</span>
                      <span className="cursor-blink text-green-400 ml-2">|</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
