'use client';
import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [typedText, setTypedText] = useState('');
  const [currentCommandIndex, setCurrentCommandIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const [terminalOutput, setTerminalOutput] = useState([]);
  const [activeTerminal, setActiveTerminal] = useState(null);
  const contactRef = useRef(null);

  const terminalCommands = [
    { command: 'ls -la /seasides/contact/', output: 'drwxr-xr-x 3 root cybersec 4096 Jan 26 09:00 .' },
    { command: 'cat venue.txt', output: 'International Centre Goa\nDona Paula, Goa 403004' },
    { command: 'ping seasides.net', output: 'PING seasides.net (192.168.1.100): 56 data bytes\n64 bytes from seasides.net: icmp_seq=0 time=12.345ms' },
    { command: 'whoami', output: 'cybersec_attendee@seasides2025' }
  ];

  const contactMethods = [
    {
      command: 'ssh venue@seasides.net',
      title: 'Event Location',
      info: 'International Centre Goa',
      detail: 'Dona Paula, Goa 403004',
      prompt: 'venue@seasides:~$ ',
      color: 'text-green-400',
      output: ['Connecting to venue server...', 'Connection established.', 'Location: International Centre Goa', 'Address: Dona Paula, Goa 403004']
    },
    {
      command: 'mail info@seasides.net',
      title: 'Email Support',
      info: 'info@seasides.net',
      detail: 'Response within 24 hours',
      prompt: 'mail@seasides:~$ ',
      color: 'text-cyan-400',
      output: ['Opening mail client...', 'To: info@seasides.net', 'Subject: Conference Inquiry', 'Response time: < 24 hours']
    },
    {
      command: 'call +91-XXX-XXX-XXXX',
      title: 'Phone Support',
      info: '+91-XXX-XXX-XXXX',
      detail: 'Mon-Fri 9AM-6PM IST',
      prompt: 'phone@seasides:~$ ',
      color: 'text-yellow-400',
      output: ['Initializing call...', 'Number: +91-XXX-XXX-XXXX', 'Hours: Mon-Fri 9AM-6PM IST', 'Status: Available']
    }
  ];

  // Typing effect
  useEffect(() => {
    const typeCommand = async () => {
      if (currentCommandIndex >= terminalCommands.length) return;
      
      setIsTyping(true);
      const command = terminalCommands[currentCommandIndex].command;
      
      for (let i = 0; i <= command.length; i++) {
        setTypedText(command.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      // Show output after typing
      setTimeout(() => {
        setTerminalOutput(prev => [...prev, {
          command: command,
          output: terminalCommands[currentCommandIndex].output
        }]);
        setTypedText('');
        setCurrentCommandIndex(prev => prev + 1);
        setIsTyping(false);
      }, 1000);
    };

    const timer = setTimeout(typeCommand, 2000);
    return () => clearTimeout(timer);
  }, [currentCommandIndex]);

  // Cursor blink effect
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);
    return () => clearInterval(interval);
  }, []);

  const handleTerminalClick = (index) => {
    setActiveTerminal(activeTerminal === index ? null : index);
  };

  return (
    <>
      <style jsx>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes typing {
          from { width: 0; }
          to { width: 100%; }
        }
        
        @keyframes terminal-glow {
          0%, 100% { box-shadow: 0 0 5px #00ff00, inset 0 0 5px #00ff00; }
          50% { box-shadow: 0 0 20px #00ff00, inset 0 0 10px #00ff00; }
        }
        
        @keyframes scan-lines {
          0% { background-position: 0 0; }
          100% { background-position: 0 50px; }
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
        
        .terminal-glow:hover {
          animation: terminal-glow 2s ease-in-out infinite;
        }
      `}</style>
      
      <section ref={contactRef} className="relative py-20 bg-black text-green-400 overflow-hidden">
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
          {/* Terminal Header */}
          <div className="text-center mb-16">
            <div className="bg-gray-900 border border-green-400 rounded-t-lg p-4 max-w-4xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">contact@seasides.net - Terminal</span>
              </div>
              <div className="text-left">
                <div className="text-green-400 terminal-text">
                  <span className="text-blue-400">root@seasides:</span>
                  <span className="text-white">~#</span>
                  <span className="ml-2">echo "Welcome to SEASIDES 2025 Contact Portal"</span>
                </div>
                <div className="text-green-300 terminal-text mt-2">
                  Welcome to SEASIDES 2025 Contact Portal
                </div>
              </div>
            </div>
          </div>
          
          {/* Live Terminal Demo */}
          <div className="bg-gray-900 border border-green-400 rounded-lg p-6 mb-12 max-w-4xl mx-auto terminal-window">
            <div className="terminal-text">
              {terminalOutput.map((item, index) => (
                <div key={index} className="mb-4">
                  <div className="text-blue-400">
                    <span className="text-blue-400">cybersec@seasides:</span>
                    <span className="text-white">~$</span>
                    <span className="ml-2 text-green-400">{item.command}</span>
                  </div>
                  <div className="text-green-300 whitespace-pre-line ml-4">
                    {item.output}
                  </div>
                </div>
              ))}
              
              {currentCommandIndex < terminalCommands.length && (
                <div className="text-blue-400">
                  <span className="text-blue-400">cybersec@seasides:</span>
                  <span className="text-white">~$</span>
                  <span className="ml-2 text-green-400">{typedText}</span>
                  <span className={`terminal-cursor text-green-400 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>|</span>
                </div>
              )}
            </div>
          </div>
          
          {/* Interactive Terminal Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className="bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window terminal-glow cursor-pointer transition-all duration-300 hover:border-green-300"
                onClick={() => handleTerminalClick(index)}
              >
                <div className="terminal-text">
                  {/* Terminal Header */}
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <span className="ml-2 text-xs text-gray-400">{method.title}</span>
                  </div>
                  
                  {/* Command Line */}
                  <div className="mb-3">
                    <span className={method.color}>{method.prompt}</span>
                    <span className="text-green-400">{method.command}</span>
                  </div>
                  
                  {/* Output */}
                  {activeTerminal === index && (
                    <div className="text-green-300 text-sm space-y-1">
                      {method.output.map((line, lineIndex) => (
                        <div key={lineIndex} className="ml-4">
                          {line}
                        </div>
                      ))}
                    </div>
                  )}
                  
                  {/* Info Display */}
                  <div className="mt-4 p-3 bg-black bg-opacity-50 rounded border border-green-600">
                    <div className="text-green-400 font-semibold">{method.info}</div>
                    <div className="text-green-300 text-sm">{method.detail}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Terminal Map Section */}
          <div className="bg-gray-900 border border-green-400 rounded-lg p-8 mb-12 terminal-window">
            <div className="terminal-text">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">venue-map.sh</span>
              </div>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="text-green-400 mb-4">
                    <span className="text-blue-400">root@venue:</span>
                    <span className="text-white">~#</span>
                    <span className="ml-2">cat /etc/venue/info.txt</span>
                  </div>
                  
                  <div className="text-green-300 space-y-2 ml-4">
                    <div>Name: International Centre Goa</div>
                    <div>Address: Dona Paula, Goa 403004</div>
                    <div>Capacity: 500+ attendees</div>
                    <div>Facilities: A/C, WiFi, Parking</div>
                    <div>Distance from Airport: 30km</div>
                  </div>
                </div>
                
                <div className="bg-black bg-opacity-50 p-6 rounded border border-green-600">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🗺️</div>
                    <div className="text-green-400 mb-4">ASCII Map Loading...</div>
                    <div className="text-green-300 text-xs mb-4">
                      [████████████████████] 100%
                    </div>
                    <button className="px-4 py-2 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-colors">
                      ./open-maps.sh
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Terminal Action Buttons */}
          <div className="text-center">
            <div className="bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window max-w-2xl mx-auto">
              <div className="terminal-text">
                <div className="text-green-400 mb-4">
                  <span className="text-blue-400">user@seasides:</span>
                  <span className="text-white">~$</span>
                  <span className="ml-2">ls /usr/bin/contact-actions/</span>
                </div>
                
                <div className="flex flex-wrap justify-center gap-4 mb-4">
                  <button className="px-6 py-3 border border-green-400 text-green-400 hover:bg-green-400 hover:text-black transition-all duration-300 terminal-text">
                    ./get-directions.sh
                  </button>
                  <button className="px-6 py-3 border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition-all duration-300 terminal-text">
                    ./download-app.sh
                  </button>
                </div>
                
                <div className="text-green-300 text-sm">
                  <div className="flex items-center justify-center gap-4">
                    <span>► ./help.sh for more options</span>
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

export default Contact;

