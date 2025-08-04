'use client';
import { useState, useEffect } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(true);
  const [bootMessages, setBootMessages] = useState([]);
  const [currentMessage, setCurrentMessage] = useState('');

  const bootSequence = [
    'Initializing Seasides Cybersecurity Framework...',
    'Loading kernel modules... [OK]',
    'Mounting virtual filesystems... [OK]',
    'Starting network services... [OK]',
    'Loading conference database... [OK]',
    'Initializing security protocols... [OK]',
    'Starting web interface... [OK]',
    'Seasides 2026 ready for deployment.'
  ];

  useEffect(() => {
    let messageIndex = 0;
    
    const timer = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 12;
        
        // Add boot message based on progress
        const messageProgress = Math.floor((newProgress / 100) * bootSequence.length);
        if (messageProgress > messageIndex && messageIndex < bootSequence.length) {
          setBootMessages(prevMessages => [...prevMessages, bootSequence[messageIndex]]);
          messageIndex++;
        }
        
        if (newProgress >= 100) {
          clearInterval(timer);
          setCurrentMessage('System ready. Launching interface...');
          setTimeout(() => setIsVisible(false), 1000);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

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
          0%, 100% { text-shadow: 0 0 5px #00ff00, 0 0 10px #00ff00; }
          50% { text-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00, 0 0 30px #00ff00; }
        }
        
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes terminal-boot {
          0% { opacity: 0; transform: translateY(10px); }
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
        
        .matrix-char {
          animation: matrix-rain 3s linear infinite;
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .boot-message {
          animation: terminal-boot 0.5s ease-out;
        }
      `}</style>

      <div className="fixed inset-0 bg-black z-50 flex items-center justify-center overflow-hidden">
        {/* Matrix Background */}
        <div className="absolute inset-0 opacity-10">
          {Array.from({ length: 100 }).map((_, i) => (
            <div
              key={i}
              className="matrix-char absolute text-green-500 text-xs"
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

        {/* Terminal Loading Interface */}
        <div className="relative z-10 w-full max-w-4xl mx-auto px-6">
          <div className="bg-gray-900 border border-green-400 rounded-lg p-8 terminal-window">
            <div className="terminal-text">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-8">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">seasides-boot-loader v2026.2.20</span>
              </div>

              {/* System Header */}
              <div className="text-center mb-8">
                <div className="text-4xl font-bold glow-text text-green-400 mb-4">
                  SEASIDES CYBERSECURITY FRAMEWORK
                </div>
                <div className="text-green-300 text-lg mb-2">
                  🌊 India's Premier Cyber Conference 2026 🌊
                </div>
                <div className="text-cyan-400 text-sm">
                  International Centre Goa | February 20-22, 2026
                </div>
              </div>

              {/* Boot Messages */}
              <div className="mb-8 min-h-[200px]">
                {bootMessages.map((message, index) => (
                  <div key={index} className="boot-message text-green-300 text-sm mb-1 flex items-center gap-2">
                    <span className="text-cyan-400">[{String(index + 1).padStart(2, '0')}]</span>
                    <span>{message}</span>
                  </div>
                ))}
                
                {currentMessage && (
                  <div className="text-green-300 text-sm flex items-center gap-2">
                    <span className="text-cyan-400">[**]</span>
                    <span>{currentMessage}</span>
                    <span className="cursor-blink text-green-400">|</span>
                  </div>
                )}
              </div>

              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-cyan-400 text-sm">LOADING:</span>
                  <span className="text-green-400 text-sm">{Math.round(progress)}%</span>
                </div>
                
                <div className="w-full h-4 bg-gray-800 border border-green-600 rounded overflow-hidden">
                  <div className="h-full bg-gray-700 border-r border-green-500 relative">
                    <div 
                      className="absolute inset-0 bg-gradient-to-r from-green-600 to-cyan-400 transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                    <div className="absolute inset-0 bg-green-400 opacity-20"></div>
                  </div>
                </div>
                
                <div className="flex justify-between text-xs text-gray-400 mt-1">
                  <span>{'█'.repeat(Math.floor(progress / 5))}</span>
                  <span>{'░'.repeat(20 - Math.floor(progress / 5))}</span>
                </div>
              </div>

              {/* System Status */}
              <div className="border-t border-green-600 pt-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-xs">
                  <div className="text-green-400">
                    <span className="text-cyan-400">CPU:</span> 
                    <span className="ml-1 glow-text">READY</span>
                  </div>
                  <div className="text-green-400">
                    <span className="text-cyan-400">RAM:</span> 
                    <span className="ml-1">8GB/8GB</span>
                  </div>
                  <div className="text-green-400">
                    <span className="text-cyan-400">NET:</span> 
                    <span className="ml-1 text-cyan-300">CONNECTED</span>
                  </div>
                  <div className="text-green-400">
                    <span className="text-cyan-400">SEC:</span> 
                    <span className="ml-1 text-green-300">ENABLED</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 text-center">
                <div className="text-xs text-gray-400 mb-2">
                  Powered by Terminal.js Framework | Built for Cybersecurity Professionals
                </div>
                <div className="flex items-center justify-center gap-2 text-xs">
                  <span className="text-cyan-400">root@seasides:</span>
                  <span className="text-white">~#</span>
                  <span className="text-green-400 ml-2">systemctl start conference-2026.service</span>
                  <span className="cursor-blink text-green-400">|</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoadingScreen;
