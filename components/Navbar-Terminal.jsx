'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [systemStatus, setSystemStatus] = useState('INITIALIZING');
  const [typedPrompt, setTypedPrompt] = useState('');
  const [activeCommand, setActiveCommand] = useState('');
  const [isBooted, setIsBooted] = useState(false);

  const navigationItems = [
    { label: 'Home', command: 'cd ~/', path: '/', icon: '🏠' },
    { label: 'Speakers', command: './speakers.sh', path: '/speakers', icon: '🎤' },
    { label: 'Schedule', command: 'cat schedule.conf', path: '/schedule', icon: '📅' },
    { label: 'Workshops', command: 'ls /workshops/', path: '/workshops', icon: '🛠️' },
    { label: 'Sponsors', command: 'query sponsors.db', path: '/sponsors', icon: '🤝' },
    { label: 'Contact', command: 'ping contact.seasides', path: '/contact', icon: '📧' }
  ];

  const promptText = 'admin@seasides2026:~$ ';

  useEffect(() => {
    // Boot sequence
    const bootSequence = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setSystemStatus('LOADING');
      
      await new Promise(resolve => setTimeout(resolve, 800));
      setSystemStatus('READY');
      
      // Type prompt
      for (let i = 0; i <= promptText.length; i++) {
        setTypedPrompt(promptText.slice(0, i));
        await new Promise(resolve => setTimeout(resolve, 100));
      }
      
      setIsBooted(true);
    };

    bootSequence();

    // Update system time
    const timeInterval = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { 
        hour12: false,
        timeZone: 'America/New_York'
      }));
    }, 1000);

    return () => clearInterval(timeInterval);
  }, []);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    setActiveCommand(isMenuOpen ? '' : 'menu --toggle');
  };

  const handleNavClick = (item) => {
    setActiveCommand(item.command);
    setIsMenuOpen(false);
    // Reset command after animation
    setTimeout(() => setActiveCommand(''), 2000);
  };

  return (
    <>
      <style jsx>{`
        @keyframes scan-lines {
          0% { background-position: 0 0; }
          100% { background-position: 0 15px; }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 5px currentColor; }
          50% { text-shadow: 0 0 10px currentColor, 0 0 15px currentColor; }
        }
        
        @keyframes matrix-flow {
          0% { transform: translateX(-100%); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateX(100vw); opacity: 0; }
        }
        
        @keyframes menu-slide {
          from { transform: translateY(-100%); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes status-pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.6; }
        }
        
        .terminal-nav {
          background: linear-gradient(180deg, transparent 90%, rgba(0, 255, 0, 0.03) 90%);
          background-size: 100% 15px;
          animation: scan-lines 0.1s linear infinite;
        }
        
        .terminal-text {
          font-family: 'Courier New', monospace;
        }
        
        .glow-text {
          animation: glow 2s ease-in-out infinite;
        }
        
        .matrix-char {
          animation: matrix-flow 3s linear infinite;
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .menu-dropdown {
          animation: menu-slide 0.3s ease-out;
        }
        
        .status-indicator {
          animation: status-pulse 1.5s ease-in-out infinite;
        }
        
        .nav-link:hover {
          text-shadow: 0 0 8px currentColor;
          transform: translateX(2px);
        }
      `}</style>

      <nav className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-95 border-b border-green-400 terminal-nav backdrop-blur-sm">
        {/* Matrix Background Effect */}
        <div className="absolute inset-0 opacity-10 overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="matrix-char absolute text-green-500 text-xs"
              style={{
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>

        <div className="relative container mx-auto px-6">
          {/* Main Terminal Header */}
          <div className="bg-gray-900 border-x border-green-400 terminal-text">
            <div className="px-4 py-3">
              {/* Terminal Window Controls */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Window Controls */}
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                  
                  {/* Terminal Title */}
                  <span className="text-xs text-gray-400">seasides-navigator.sh</span>
                </div>

                {/* System Status */}
                <div className="flex items-center gap-4 text-xs">
                  <div className="text-cyan-400">
                    TIME: {currentTime}
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-yellow-400">STATUS:</span>
                    <span className={`status-indicator ${
                      systemStatus === 'READY' ? 'text-green-400' : 'text-yellow-400'
                    }`}>
                      {systemStatus}
                    </span>
                  </div>
                </div>
              </div>

              {/* Command Line Interface */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Command Prompt */}
                  <div className="flex items-center gap-2 text-sm">
                    <span className="text-green-400">
                      {typedPrompt}
                      {!isBooted && <span className="cursor-blink">|</span>}
                    </span>
                    {isBooted && activeCommand && (
                      <span className="text-cyan-400">{activeCommand}</span>
                    )}
                    {isBooted && !activeCommand && (
                      <span className="cursor-blink text-green-400">|</span>
                    )}
                  </div>

                  {/* Brand/Logo */}
                  <Link 
                    href="/" 
                    className="text-cyan-400 font-bold text-lg glow-text hover:text-cyan-300 transition-colors"
                    onClick={() => handleNavClick({ command: 'cd ~/' })}
                  >
                    SEASIDES_2026
                  </Link>
                </div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-6">
                  {navigationItems.slice(1).map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="nav-link flex items-center gap-2 text-green-400 hover:text-green-300 transition-all duration-300 text-sm"
                      onClick={() => handleNavClick(item)}
                    >
                      <span className="text-xs">{item.icon}</span>
                      <span>./{item.label.toLowerCase()}</span>
                    </Link>
                  ))}
                </div>

                {/* Mobile Menu Button */}
                <button
                  className="md:hidden flex items-center gap-2 text-green-400 hover:text-green-300 transition-colors"
                  onClick={handleMenuToggle}
                >
                  <span className="text-sm">📋</span>
                  <span className="text-sm">menu</span>
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
              <div className="md:hidden bg-black border-t border-green-600 menu-dropdown">
                <div className="px-4 py-4 space-y-3">
                  {/* Mobile Menu Header */}
                  <div className="text-xs text-cyan-400 mb-4">
                    admin@seasides2026:~$ ./show-navigation-menu.sh
                  </div>
                  
                  {/* Menu Items */}
                  {navigationItems.map((item) => (
                    <Link
                      key={item.path}
                      href={item.path}
                      className="nav-link flex items-center gap-3 text-green-400 hover:text-green-300 transition-all duration-300 py-2 border-l-2 border-transparent hover:border-green-400 pl-3"
                      onClick={() => handleNavClick(item)}
                    >
                      <span className="text-sm">{item.icon}</span>
                      <div className="flex flex-col">
                        <span className="text-sm">./{item.label.toLowerCase()}</span>
                        <span className="text-xs text-gray-400">{item.command}</span>
                      </div>
                    </Link>
                  ))}

                  {/* Mobile Menu Footer */}
                  <div className="border-t border-green-600 pt-3 mt-4">
                    <div className="text-xs text-gray-400 space-y-1">
                      <div>Menu loaded successfully</div>
                      <div className="text-green-400">● {navigationItems.length} navigation items available</div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Quick Action Bar */}
          {isBooted && !isMenuOpen && (
            <div className="bg-gray-800 border-x border-green-600 px-4 py-2 border-t border-gray-700">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-4">
                  <span className="text-cyan-400">QUICK_ACCESS:</span>
                  <Link 
                    href="/register" 
                    className="text-yellow-400 hover:text-yellow-300 transition-colors"
                    onClick={() => setActiveCommand('./register-now.sh')}
                  >
                    🎟️ ./register
                  </Link>
                  <Link 
                    href="/call-for-papers" 
                    className="text-purple-400 hover:text-purple-300 transition-colors"
                    onClick={() => setActiveCommand('vim call-for-papers.md')}
                  >
                    📝 ./submit-paper
                  </Link>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <span>SESSION:</span>
                  <span className="text-green-400">ACTIVE</span>
                  <span>|</span>
                  <span>USER:</span>
                  <span className="text-cyan-400">VISITOR</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content overlap */}
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
