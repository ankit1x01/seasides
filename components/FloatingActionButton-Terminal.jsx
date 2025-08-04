'use client';
import { useState, useEffect } from 'react';

const FloatingActionButton = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentAction, setCurrentAction] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [typedCommand, setTypedCommand] = useState('');

  const actions = [
    { 
      icon: '🎯', 
      label: 'Register', 
      command: './register-user.sh',
      color: 'border-blue-400 text-blue-400 hover:bg-blue-400',
      description: 'Quick registration for Seasides 2026'
    },
    { 
      icon: '📅', 
      label: 'Schedule', 
      command: 'cat /conf/schedule.json',
      color: 'border-purple-400 text-purple-400 hover:bg-purple-400',
      description: 'View conference timeline'
    },
    { 
      icon: '🎤', 
      label: 'Speakers', 
      command: 'ls -la /speakers/',
      color: 'border-green-400 text-green-400 hover:bg-green-400',
      description: 'Browse speaker profiles'
    },
    { 
      icon: '🏆', 
      label: 'Sponsors', 
      command: 'query sponsors.db',
      color: 'border-orange-400 text-orange-400 hover:bg-orange-400',
      description: 'Explore partnership opportunities'
    },
  ];

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAction((prev) => (prev + 1) % actions.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [actions.length]);

  useEffect(() => {
    if (isExpanded) {
      typeCommand(actions[currentAction].command);
    } else {
      setTypedCommand('');
    }
  }, [currentAction, isExpanded]);

  const typeCommand = async (command) => {
    setTypedCommand('');
    for (let i = 0; i <= command.length; i++) {
      setTypedCommand(command.slice(0, i));
      await new Promise(resolve => setTimeout(resolve, 100));
    }
  };

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        @keyframes terminal-pulse {
          0%, 100% { 
            box-shadow: 0 0 5px currentColor;
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 20px currentColor, 0 0 30px currentColor;
            transform: scale(1.05);
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes scan-lines {
          0% { background-position: 0 0; }
          100% { background-position: 0 10px; }
        }
        
        @keyframes expand {
          from { 
            opacity: 0; 
            transform: translateY(20px) scale(0.8);
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1);
          }
        }
        
        .terminal-fab {
          animation: terminal-pulse 2s ease-in-out infinite;
          background: linear-gradient(180deg, transparent 90%, rgba(0, 255, 0, 0.1) 90%);
          background-size: 100% 10px;
        }
        
        .terminal-fab:hover {
          animation: scan-lines 0.1s linear infinite, terminal-pulse 2s ease-in-out infinite;
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .terminal-text {
          font-family: 'Courier New', monospace;
        }
        
        .expand-animation {
          animation: expand 0.3s ease-out;
        }
      `}</style>

      <div className="fixed bottom-8 right-8 z-50">
        <div className="relative">
          {/* Expanded Terminal Window */}
          {isExpanded && (
            <div className="absolute bottom-20 right-0 w-80 bg-gray-900 border border-green-400 rounded-lg p-4 terminal-text expand-animation">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-4">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="ml-2 text-xs text-gray-400">quick-actions.sh</span>
              </div>

              {/* Current Action Display */}
              <div className="space-y-3">
                <div className="text-center">
                  <div className="text-2xl mb-2">{actions[currentAction].icon}</div>
                  <div className={`text-lg font-bold ${actions[currentAction].color.split(' ')[1]}`}>
                    {actions[currentAction].label.toUpperCase()}
                  </div>
                  <div className="text-green-300 text-xs mt-1">
                    {actions[currentAction].description}
                  </div>
                </div>

                {/* Command Line */}
                <div className="border-t border-green-600 pt-3">
                  <div className="flex items-center gap-2 text-xs mb-2">
                    <span className="text-cyan-400">user@seasides:</span>
                    <span className="text-white">~$</span>
                  </div>
                  <div className="text-green-400 text-xs min-h-[16px]">
                    {typedCommand}
                    {typedCommand.length < actions[currentAction].command.length && (
                      <span className="cursor-blink">|</span>
                    )}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-2">
                  {actions.map((action, index) => (
                    <button
                      key={index}
                      className={`w-full p-2 border ${action.color} hover:text-black transition-all duration-300 text-xs text-left flex items-center gap-2`}
                      onClick={() => setCurrentAction(index)}
                    >
                      <span>{action.icon}</span>
                      <span>./{action.label.toLowerCase()}.sh</span>
                    </button>
                  ))}
                </div>

                <div className="border-t border-green-600 pt-2">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="text-cyan-400">user@seasides:</span>
                    <span className="text-white">~$</span>
                    <span className="cursor-blink text-green-400 ml-1">|</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main FAB Button */}
          <button
            className={`terminal-fab w-16 h-16 bg-black border-2 ${actions[currentAction].color} rounded-lg terminal-text hover:scale-110 transition-all duration-300 relative overflow-hidden`}
            onClick={() => setIsExpanded(!isExpanded)}
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => setIsExpanded(false)}
          >
            <span className="text-2xl relative z-10">{actions[currentAction].icon}</span>
            
            {/* Scan line effect */}
            <div className="absolute inset-0 opacity-20">
              <div className="w-full h-full" 
                   style={{
                     backgroundImage: `
                       repeating-linear-gradient(
                         0deg,
                         transparent,
                         transparent 2px,
                         rgba(0, 255, 0, 0.3) 2px,
                         rgba(0, 255, 0, 0.3) 4px
                       )
                     `
                   }}>
              </div>
            </div>
          </button>
          
          {/* Command Label */}
          <div className={`absolute bottom-full right-0 mb-2 px-3 py-1 bg-black border ${actions[currentAction].color.split(' ')[1]} text-xs rounded transform translate-x-2 opacity-0 hover:opacity-100 transition-opacity terminal-text`}>
            ./{actions[currentAction].label.toLowerCase()}.sh
          </div>

          {/* Status Indicator */}
          <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-black rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FloatingActionButton;
