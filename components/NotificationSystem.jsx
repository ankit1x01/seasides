'use client';
import { useState, useEffect } from 'react';

const NotificationSystem = () => {
  const [notifications, setNotifications] = useState([]);

  const welcomeMessages = [
    "🎉 Welcome to Seasides 2026!",
    "🚀 Ready for an amazing cyber journey?",
    "💡 Discover cutting-edge security insights!",
    "🤝 Connect with the community!",
    "⚡ Power up your security skills!"
  ];

  useEffect(() => {
    // Show welcome notification after 2 seconds
    const timer = setTimeout(() => {
      const randomMessage = welcomeMessages[Math.floor(Math.random() * welcomeMessages.length)];
      addNotification(randomMessage, 'success');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  const addNotification = (message, type = 'info') => {
    const id = Date.now();
    setNotifications(prev => [...prev, { id, message, type }]);
    
    setTimeout(() => {
      setNotifications(prev => prev.filter(notif => notif.id !== id));
    }, 5000);
  };

  const removeNotification = (id) => {
    setNotifications(prev => prev.filter(notif => notif.id !== id));
  };

  if (notifications.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-50 space-y-3">
      {notifications.map(notification => (
        <div
          key={notification.id}
          className="bg-white bg-opacity-90 backdrop-blur-lg border border-gray-200 rounded-lg p-4 shadow-lg transform animate-slide-in-right max-w-sm"
          style={{
            animation: 'slideInRight 0.5s ease-out, fadeOut 0.5s ease-in 4.5s forwards'
          }}
        >
          <div className="flex items-center justify-between">
            <span className="text-gray-800">{notification.message}</span>
            <button
              onClick={() => removeNotification(notification.id)}
              className="ml-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              ✕
            </button>
          </div>
        </div>
      ))}
      
      <style jsx>{`
        @keyframes slideInRight {
          from {
            transform: translateX(100%);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }
        
        @keyframes fadeOut {
          from {
            opacity: 1;
            transform: translateX(0);
          }
          to {
            opacity: 0;
            transform: translateX(100%);
          }
        }
      `}</style>
    </div>
  );
};

export default NotificationSystem;
