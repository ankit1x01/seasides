'use client';
import { useState, useRef, useEffect } from 'react';

const Stats = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedCommands, setTypedCommands] = useState({});
  const [animatedStats, setAnimatedStats] = useState({
    speakers: 0,
    attendees: 0,
    workshops: 0,
    villages: 0
  });
  const statsRef = useRef(null);

  const statsData = [
    { 
      key: 'speakers', 
      value: 50, 
      label: 'Expert Speakers', 
      command: 'grep -c "speaker" /var/log/conference.log',
      icon: '🎤',
      color: 'text-green-400'
    },
    { 
      key: 'attendees', 
      value: 1000, 
      label: 'Cyber Warriors', 
      command: 'wc -l /etc/passwd | cut -d" " -f1',
      icon: '👥',
      color: 'text-cyan-400'
    },
    { 
      key: 'workshops', 
      value: 12, 
      label: 'Hands-on Labs', 
      command: 'ls /usr/share/workshops/ | wc -l',
      icon: '🛠️',
      color: 'text-yellow-400'
    },
    { 
      key: 'villages', 
      value: 8, 
      label: 'Security Villages', 
      command: 'find /opt/villages -type d | wc -l',
      icon: '🏘️',
      color: 'text-purple-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          
          // Start typing commands and animating stats
          statsData.forEach((stat, index) => {
            setTimeout(() => {
              typeCommand(stat.key, stat.command);
              animateValue(stat.key, stat.value, 2000);
            }, index * 800);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const typeCommand = async (key, command) => {
    for (let i = 0; i <= command.length; i++) {
      setTypedCommands(prev => ({
        ...prev,
        [key]: command.slice(0, i)
      }));
      await new Promise(resolve => setTimeout(resolve, 50));
    }
  };

  const animateValue = (key, targetValue, duration) => {
    const startTime = Date.now();
    const startValue = 0;
    
    const updateValue = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const currentValue = Math.floor(startValue + (targetValue - startValue) * progress);
      
      setAnimatedStats(prev => ({
        ...prev,
        [key]: currentValue
      }));
      
      if (progress < 1) {
        requestAnimationFrame(updateValue);
      }
    };
    
    requestAnimationFrame(updateValue);
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
      `}</style>

      <section ref={statsRef} className="relative py-20 bg-black text-green-400 overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 50 }).map((_, i) => (
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
                <span className="ml-4 text-sm text-gray-400">stats-monitor.sh - Conference Analytics</span>
              </div>

              {/* Header Command */}
              <div className="mb-8">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-cyan-400">admin@seasides:</span>
                  <span className="text-white">~$</span>
                  <span className="ml-2 text-green-400">./show-conference-stats.sh --live</span>
                </div>
                <div className="text-green-300 text-sm mb-4">
                  Analyzing conference metrics... [DONE]
                </div>
                <div className="text-center mb-6">
                  <div className="text-2xl font-bold glow-text text-green-400">
                    === SEASIDES 2025 LIVE STATISTICS ===
                  </div>
                </div>
              </div>

              {/* Stats Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {statsData.map((stat, index) => (
                  <div key={stat.key} className="bg-black bg-opacity-50 border border-green-600 rounded p-4">
                    {/* Command Line */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <span className="text-cyan-400">root@seasides:</span>
                        <span className="text-white">~#</span>
                      </div>
                      <div className="text-green-400 text-xs min-h-[20px]">
                        {typedCommands[stat.key] || ''}
                        {typedCommands[stat.key] && typedCommands[stat.key].length < stat.command.length && (
                          <span className="cursor-blink">|</span>
                        )}
                      </div>
                    </div>

                    {/* Output */}
                    {typedCommands[stat.key] && typedCommands[stat.key].length === stat.command.length && (
                      <div className="border-t border-green-600 pt-4">
                        <div className="text-center">
                          <div className={`text-4xl mb-2 ${stat.color} glow-text`}>
                            {stat.icon}
                          </div>
                          <div className={`text-3xl font-bold mb-2 ${stat.color} glow-text`}>
                            {animatedStats[stat.key].toLocaleString()}
                          </div>
                          <div className="text-green-300 text-sm">
                            {stat.label}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* System Status */}
              <div className="mt-8 border-t border-green-600 pt-6">
                <div className="grid md:grid-cols-3 gap-6 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">SYSTEM_STATUS:</span>
                    <span className="text-green-400 glow-text">OPERATIONAL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">UPTIME:</span>
                    <span className="text-yellow-400">247 days, 18:42:15</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">SECURITY_LEVEL:</span>
                    <span className="text-red-400 glow-text">MAXIMUM</span>
                  </div>
                </div>
              </div>

              {/* Footer Commands */}
              <div className="mt-6 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">admin@seasides:</span>
                  <span className="text-white">~$</span>
                  <span className="text-green-400 ml-2">echo "Join us for the ultimate cybersecurity experience!"</span>
                </div>
                <div className="text-green-300 ml-6">
                  Join us for the ultimate cybersecurity experience!
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-cyan-400">admin@seasides:</span>
                  <span className="text-white">~$</span>
                  <span className="cursor-blink text-green-400 ml-2">|</span>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Terminal Windows */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {/* Network Monitor */}
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 terminal-window">
              <div className="terminal-text">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-xs text-gray-400">netstat.sh</span>
                </div>
                <div className="text-xs space-y-1">
                  <div className="text-green-400">► Network connections: 1000+ active</div>
                  <div className="text-cyan-400">► Global reach: 25+ countries</div>
                  <div className="text-yellow-400">► Bandwidth utilization: 95%</div>
                  <div className="text-purple-400">► Security protocols: Active</div>
                </div>
              </div>
            </div>

            {/* Process Monitor */}
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 terminal-window">
              <div className="terminal-text">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-xs text-gray-400">htop.sh</span>
                </div>
                <div className="text-xs space-y-1">
                  <div className="text-green-400">► Conference engine: Running</div>
                  <div className="text-cyan-400">► Speaker modules: Loaded</div>
                  <div className="text-yellow-400">► Workshop VMs: Ready</div>
                  <div className="text-purple-400">► Security scans: Continuous</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stats;
