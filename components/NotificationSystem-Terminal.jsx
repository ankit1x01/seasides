'use client';
import { useState, useEffect } from 'react';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);
  const [systemTime, setSystemTime] = useState('');

  const terminalMessages = [
    { message: "🎉 SYSTEM BOOT: Seasides 2026 terminal initialized", type: "success", command: "systemctl start seasides-welcome.service" },
    { message: "🚀 CONNECTION ESTABLISHED: Cybersecurity network ready", type: "info", command: "ping -c 1 cyber.seasides2026.com" },
    { message: "💡 DATABASE SYNC: Latest security insights loaded", type: "success", command: "rsync -av /data/insights/ /cache/" },
    { message: "🤝 NETWORK SCAN: Community nodes discovered", type: "info", command: "nmap -sP 192.168.1.0/24" },
    { message: "⚡ PERFORMANCE: All systems operating at optimal levels", type: "success", command: "top -p $(pgrep seasides)" }
  ];

  useEffect(() => {
    // Update system time
    const timeInterval = setInterval(() => {
      const now = new Date();
      setSystemTime(now.toLocaleTimeString('en-US', { hour12: false }));
    }, 1000);

    // Show welcome notification after 2 seconds
    const timer = setTimeout(() => {
      const randomMessage = terminalMessages[Math.floor(Math.random() * terminalMessages.length)];
      addNotification(randomMessage.message, randomMessage.type, randomMessage.command);
    }, 2000);

    return () => {
      clearTimeout(timer);
      clearInterval(timeInterval);
    };
  }, []);

  const addNotification = (message, type = 'info', command = '') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type, command, timestamp: new Date() }]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    }, 6000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  const getTypeColor = (type) => {
    switch(type) {
      case 'success': return 'border-green-400 bg-green-900';
      case 'error': return 'border-red-400 bg-red-900';
      case 'warning': return 'border-yellow-400 bg-yellow-900';
      default: return 'border-cyan-400 bg-cyan-900';
    }
  };

  const getTypeIcon = (type) => {
    switch(type) {
      case 'success': return '[✓]';
      case 'error': return '[✗]';
      case 'warning': return '[!]';
      default: return '[i]';
    }
  };

  if (notifications.length === 0) return null;

  return (
    <>
      <style jsx>{`
        @keyframes slideInTerminal {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeOutTerminal {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes scan {
          0% { background-position: 0 0; }
          100% { background-position: 0 10px; }
        }
        
        .terminal-notification {
          animation: slideInTerminal 0.5s ease-out;
          background: linear-gradient(180deg, transparent 90%, rgba(0, 255, 0, 0.1) 90%);
          background-size: 100% 10px;
          animation: slideInTerminal 0.5s ease-out, scan 0.1s linear infinite;
        }
        
        .terminal-notification.fadeOut {
          animation: fadeOutTerminal 0.5s ease-in forwards;
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .terminal-text {
          font-family: 'Courier New', monospace;
        }
      `}</style>

      <div className="fixed top-20 right-4 z-40 space-y-3 max-w-md">
        {notifications.map(notification => (
          <div
            key={notification.id}
            className={`terminal-notification ${getTypeColor(notification.type)} bg-opacity-95 backdrop-blur-sm border-2 rounded p-4 shadow-2xl terminal-text`}
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between mb-2 text-xs">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <span className="text-gray-400">notification.log</span>
              </div>
              <span className="text-gray-400">{systemTime}</span>
            </div>

            {/* Command Line */}
            <div className="mb-2 text-xs">
              <div className="flex items-center gap-1">
                <span className="text-cyan-400">system@seasides:</span>
                <span className="text-white">~$</span>
                <span className="text-green-400 ml-1">{notification.command}</span>
              </div>
            </div>

            {/* Message Output */}
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <div className="flex items-center gap-2 text-sm">
                  <span className={`${getTypeColor(notification.type).includes('green') ? 'text-green-400' : 
                                     getTypeColor(notification.type).includes('red') ? 'text-red-400' :
                                     getTypeColor(notification.type).includes('yellow') ? 'text-yellow-400' :
                                     'text-cyan-400'}`}>
                    {getTypeIcon(notification.type)}
                  </span>
                  <span className="text-green-300">{notification.message}</span>
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  [{notification.timestamp.toLocaleTimeString()}] Process completed
                </div>
              </div>
              
              <button
                onClick={() => removeNotification(notification.id)}
                className="text-red-400 hover:text-red-300 transition-colors text-xs px-1"
                title="Kill process"
              >
                [X]
              </button>
            </div>

            {/* Command Prompt */}
            <div className="mt-2 flex items-center gap-1 text-xs">
              <span className="text-cyan-400">system@seasides:</span>
              <span className="text-white">~$</span>
              <span className="cursor-blink text-green-400 ml-1">|</span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default NotificationSystem;
