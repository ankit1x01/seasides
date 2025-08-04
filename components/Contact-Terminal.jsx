'use client';
import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedText, setTypedText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [outputVisible, setOutputVisible] = useState([]);
  const contactRef = useRef(null);

  const commands = [
    {
      command: 'cd /var/conference/location/',
      output: []
    },
    {
      command: 'cat venue_info.txt',
      output: [
        '📍 VENUE: International Centre Goa',
        '🏨 ADDRESS: Dona Paula, Goa 403004, India',
        '✈️  AIRPORT: 30 minutes from Goa Airport',
        '🚗 PARKING: Ample parking space available',
        '🏨 ACCOMMODATION: On-site rooms available',
        '🍽️  DINING: Multiple restaurant options'
      ]
    },
    {
      command: 'cat contact_info.txt',
      output: [
        '📧 EMAIL: info@seasides.net',
        '📱 PHONE: +91-XXX-XXX-XXXX',
        '⏰ HOURS: Mon-Fri 9AM-6PM IST',
        '💬 RESPONSE: Within 24 hours',
        '🌐 WEBSITE: https://seasides.net',
        '📱 SOCIAL: @seasides_conf'
      ]
    },
    {
      command: 'ls -la /usr/bin/travel-tools/',
      output: [
        'total 8',
        'drwxr-xr-x 2 root root 4096 Jan 15 10:30 .',
        'drwxr-xr-x 3 root root 4096 Jan 15 10:29 ..',
        '-rwxr-xr-x 1 root root  128 Jan 15 10:30 get-directions.sh',
        '-rwxr-xr-x 1 root root  256 Jan 15 10:30 venue-map.sh',
        '-rwxr-xr-x 1 root root  512 Jan 15 10:30 booking-hotels.sh',
        '-rwxr-xr-x 1 root root  64  Jan 15 10:30 weather-check.sh'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          startTyping();
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const startTyping = async () => {
    for (let i = 0; i < commands.length; i++) {
      await typeCommand(commands[i].command);
      await new Promise(resolve => setTimeout(resolve, 500));
      setOutputVisible(prev => [...prev, i]);
      await new Promise(resolve => setTimeout(resolve, 1000));
      setCurrentCommand(i + 1);
      setTypedText('');
    }
  };

  const typeCommand = async (command) => {
    for (let i = 0; i <= command.length; i++) {
      setTypedText(command.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 50));
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
      `}</style>

      <section ref={contactRef} className="relative py-20 bg-black text-green-400 overflow-hidden">
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
          <div className="bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window max-w-5xl mx-auto">
            <div className="terminal-text">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">contact-info.sh - Venue & Contact Details</span>
              </div>

              {/* Terminal Session */}
              <div className="space-y-4">
                {/* Initial Welcome */}
                <div className="text-green-300 text-sm mb-6">
                  <div className="glow-text text-lg font-bold text-center mb-4">
                    === SEASIDES 2026 CONTACT TERMINAL ===
                  </div>
                  <div className="text-center">Welcome to the venue information system</div>
                </div>

                {/* Commands and Output */}
                {commands.map((cmd, index) => (
                  <div key={index} className="space-y-2">
                    {index <= currentCommand && (
                      <>
                        {/* Command Prompt */}
                        <div className="flex items-center gap-2">
                          <span className="text-cyan-400">user@seasides:</span>
                          <span className="text-white">~$</span>
                          <span className="text-green-400 ml-2">
                            {index === currentCommand ? typedText : cmd.command}
                            {index === currentCommand && (
                              <span className="cursor-blink">|</span>
                            )}
                          </span>
                        </div>

                        {/* Command Output */}
                        {outputVisible.includes(index) && (
                          <div className="ml-6 space-y-1">
                            {cmd.output.map((line, lineIndex) => (
                              <div key={lineIndex} className="text-green-300 text-sm">
                                {line}
                              </div>
                            ))}
                          </div>
                        )}
                      </>
                    )}
                  </div>
                ))}

                {/* Interactive Command Section */}
                {currentCommand >= commands.length && (
                  <div className="mt-8 border-t border-green-600 pt-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <span className="text-cyan-400">user@seasides:</span>
                        <span className="text-white">~$</span>
                        <span className="text-green-400 ml-2">ls /usr/bin/actions/</span>
                      </div>
                      
                      <div className="ml-6 grid md:grid-cols-2 gap-4">
                        <button className="px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 text-sm text-left">
                          ./get-directions.sh
                        </button>
                        <button className="px-4 py-2 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 text-sm text-left">
                          ./venue-map.sh
                        </button>
                        <button className="px-4 py-2 border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black transition-all duration-300 text-sm text-left">
                          ./send-message.sh
                        </button>
                        <button className="px-4 py-2 border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black transition-all duration-300 text-sm text-left">
                          ./book-accommodation.sh
                        </button>
                      </div>

                      <div className="flex items-center gap-2 mt-4">
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

          {/* Side Terminal Windows */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {/* Quick Access Terminal */}
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 terminal-window">
              <div className="terminal-text">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-xs text-gray-400">quick-links.sh</span>
                </div>
                <div className="text-xs space-y-2">
                  <div className="text-cyan-400 glow-text">QUICK ACCESS MENU:</div>
                  <div className="text-green-400">► Email: info@seasides.net</div>
                  <div className="text-yellow-400">► Phone: +91-XXX-XXX-XXXX</div>
                  <div className="text-purple-400">► Location: Goa, India</div>
                  <div className="text-pink-400">► Date: Jan 26-27, 2026</div>
                </div>
              </div>
            </div>

            {/* Status Monitor Terminal */}
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 terminal-window">
              <div className="terminal-text">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-xs text-gray-400">venue-status.sh</span>
                </div>
                <div className="text-xs space-y-2">
                  <div className="text-cyan-400 glow-text">VENUE STATUS:</div>
                  <div className="text-green-400">► Facility: OPERATIONAL</div>
                  <div className="text-green-400">► WiFi: HIGH-SPEED</div>
                  <div className="text-green-400">► Parking: AVAILABLE</div>
                  <div className="text-yellow-400">► Rooms: BOOKING OPEN</div>
                </div>
              </div>
            </div>
          </div>

          {/* Emergency Contact Terminal */}
          <div className="mt-8 bg-red-900 bg-opacity-30 border border-red-400 rounded-lg p-4 terminal-window max-w-3xl mx-auto">
            <div className="terminal-text">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                <span className="ml-2 text-xs text-red-400">emergency-contacts.sh</span>
              </div>
              <div className="text-xs space-y-1">
                <div className="text-red-400 glow-text">EMERGENCY CONTACTS:</div>
                <div className="text-orange-400">► Conference Help Desk: Available 24/7 during event</div>
                <div className="text-orange-400">► Venue Security: +91-XXX-XXX-XXXX</div>
                <div className="text-orange-400">► Medical Emergency: 108 (India Emergency Number)</div>
                <div className="text-orange-400">► Local Police: 100</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
