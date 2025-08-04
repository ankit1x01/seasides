'use client';
import { useState, useEffect, useRef } from 'react';

const Hero = () => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const [typedText, setTypedText] = useState('');
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [terminalLines, setTerminalLines] = useState([]);
  const [systemStatus, setSystemStatus] = useState('INITIALIZING');
  const heroRef = useRef(null);

  const bootSequence = [
    'SEASIDES Cyber Security Framework v2026.1.26',
    'Initializing conference systems...',
    'Loading speaker modules... [████████████████████] 100%',
    'Connecting to cybersecurity network... [OK]',
    'Scanning for security threats... [CLEAN]',
    'Welcome to SEASIDES 2026 - India\'s Premier CyberSec Conference',
    'Location: International Centre Goa | Jan 26-27, 2026',
    'Status: READY FOR DEPLOYMENT'
  ];

  // Calculate countdown
  useEffect(() => {
    const eventDate = new Date('2026-01-26T09:00:00').getTime();
    
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = eventDate - now;
      
      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);
        
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  // Terminal typing effect
  useEffect(() => {
    if (currentLineIndex >= bootSequence.length) {
      setSystemStatus('ONLINE');
      return;
    }

    const typeLine = async () => {
      const line = bootSequence[currentLineIndex];
      
      for (let i = 0; i <= line.length; i++) {
        setTypedText(line.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 50));
      }
      
      // Add completed line to terminal history
      setTimeout(() => {
        setTerminalLines(prev => [...prev, line]);
        setTypedText('');
        setCurrentLineIndex(prev => prev + 1);
      }, 1000);
    };

    const timer = setTimeout(typeLine, 500);
    return () => clearTimeout(timer);
  }, [currentLineIndex]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes scan-lines {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00; }
          50% { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00; }
        }
        
        @keyframes matrix {
          0% { opacity: 0; }
          50% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .terminal-window {
          background: linear-gradient(180deg, transparent 50%, rgba(0, 255, 0, 0.03) 50%);
          background-size: 100% 4px;
          animation: scan-lines 0.1s linear infinite;
        }
        
        .terminal-cursor {
          animation: blink 1s infinite;
        }
        
        .terminal-text {
          font-family: 'Courier New', monospace;
        }
        
        .glow-text {
          animation: glow 2s ease-in-out infinite;
        }
        
        .matrix-char {
          animation: matrix 3s ease-in-out infinite;
        }
      `}</style>

      <section ref={heroRef} className="relative min-h-screen bg-black text-green-400 overflow-hidden flex items-center">
        {/* Matrix-style background */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-20 gap-1 h-full">
            {Array.from({ length: 400 }).map((_, i) => (
              <div
                key={i}
                className="matrix-char text-xs text-green-500"
                style={{ 
                  animationDelay: `${Math.random() * 3}s`,
                  animationDuration: `${2 + Math.random() * 2}s`
                }}
              >
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </div>
        </div>

        {/* Terminal Background Pattern */}
        <div className="absolute inset-0 opacity-20">
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
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Terminal Interface */}
            <div className="bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window">
              <div className="terminal-text">
                {/* Terminal Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-400">seasides@cybersec-2026 - Terminal</span>
                </div>

                {/* Boot Sequence */}
                <div className="space-y-2 mb-6">
                  {terminalLines.map((line, index) => (
                    <div key={index} className="text-green-300 text-sm">
                      {line}
                    </div>
                  ))}
                  
                  {currentLineIndex < bootSequence.length && (
                    <div className="text-green-300 text-sm">
                      {typedText}
                      <span className={`terminal-cursor ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                    </div>
                  )}
                </div>

                {/* System Status */}
                <div className="border-t border-green-600 pt-4">
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-cyan-400">STATUS:</span>
                    <span className={`glow-text ${systemStatus === 'ONLINE' ? 'text-green-400' : 'text-yellow-400'}`}>
                      {systemStatus}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Conference Info Terminal */}
            <div className="bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window">
              <div className="terminal-text">
                {/* Header */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <span className="ml-4 text-sm text-gray-400">conference-info.sh</span>
                </div>

                {/* Conference Details */}
                <div className="space-y-4">
                  <div>
                    <span className="text-cyan-400">root@seasides:</span>
                    <span className="text-white">~#</span>
                    <span className="ml-2 text-green-400">cat /etc/conference/info.txt</span>
                  </div>

                  <div className="ml-4 space-y-2 text-green-300">
                    <div className="text-2xl font-bold glow-text">SEASIDES 2026</div>
                    <div>India's Premier Cybersecurity Conference</div>
                    <div className="text-cyan-400">📍 International Centre Goa</div>
                    <div className="text-yellow-400">📅 January 26-27, 2026</div>
                  </div>

                  <div className="mt-6">
                    <span className="text-cyan-400">root@seasides:</span>
                    <span className="text-white">~#</span>
                    <span className="ml-2 text-green-400">./countdown.sh</span>
                  </div>

                  {/* Countdown Display */}
                  <div className="ml-4 bg-black bg-opacity-50 p-4 rounded border border-green-600">
                    <div className="text-green-400 text-sm mb-2">TIME_TO_EVENT:</div>
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div>
                        <div className="text-2xl font-bold text-cyan-400 glow-text">{timeLeft.days}</div>
                        <div className="text-xs text-green-300">DAYS</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-400 glow-text">{timeLeft.hours}</div>
                        <div className="text-xs text-green-300">HOURS</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-400 glow-text">{timeLeft.minutes}</div>
                        <div className="text-xs text-green-300">MINS</div>
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-cyan-400 glow-text">{timeLeft.seconds}</div>
                        <div className="text-xs text-green-300">SECS</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Action Terminal */}
          <div className="mt-12 bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window max-w-4xl mx-auto">
            <div className="terminal-text">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">action-menu.sh</span>
              </div>

              <div className="space-y-4">
                <div>
                  <span className="text-cyan-400">user@seasides:</span>
                  <span className="text-white">~$</span>
                  <span className="ml-2 text-green-400">ls /usr/bin/conference-actions/</span>
                </div>

                <div className="ml-4 flex flex-wrap gap-4">
                  <button className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 terminal-text text-sm">
                    ./register.sh
                  </button>
                  <button className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 terminal-text text-sm">
                    ./view-speakers.sh
                  </button>
                  <button className="px-6 py-3 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 terminal-text text-sm">
                    ./schedule.sh
                  </button>
                </div>

                <div className="text-green-300 text-sm">
                  <div className="flex items-center gap-4">
                    <span>► Type ./help.sh for more options</span>
                    <span className="terminal-cursor animate-pulse">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
