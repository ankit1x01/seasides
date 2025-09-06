'use client';
import { useState, useEffect } from 'react';

const SocialIntegration = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSocial, setHoveredSocial] = useState(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/company/seasides/',
      icon: 'linkedin',
      color: 'from-blue-600 to-blue-700',
      followers: '5.2K',
      action: 'Follow us for updates'
    },
    {
      name: 'Twitter/X',
      url: 'https://x.com/seasides_conf/',
      icon: 'twitter',
      color: 'from-gray-800 to-black',
      followers: '3.8K',
      action: 'Latest conference news'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/seasides_conf/',
      icon: 'instagram',
      color: 'from-pink-500 to-purple-600',
      followers: '2.1K',
      action: 'Behind the scenes'
    },
    {
      name: 'YouTube',
      url: 'https://www.youtube.com/@seasidesgoa',
      icon: 'youtube',
      color: 'from-red-500 to-red-600',
      followers: '1.5K',
      action: 'Watch past sessions'
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/seasidesconference',
      icon: 'facebook',
      color: 'from-blue-500 to-blue-600',
      followers: '4.3K',
      action: 'Community discussions'
    }
  ];

  const getIcon = (iconName) => {
    const icons = {
      linkedin: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      twitter: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      ),
      instagram: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.017 0C8.396 0 7.989.013 6.756.072 5.526.13 4.718.302 4.022.566c-.708.268-1.308.63-1.907 1.228C1.517 2.394 1.155 2.994.887 3.702.623 4.398.451 5.206.393 6.436.334 7.669.321 8.076.321 11.697c0 3.621.013 4.028.072 5.261.058 1.23.23 2.038.494 2.734.268.708.63 1.308 1.228 1.907.599.599 1.199.961 1.907 1.229.696.264 1.504.436 2.734.494 1.233.059 1.64.072 5.261.072 3.621 0 4.028-.013 5.261-.072 1.23-.058 2.038-.23 2.734-.494.708-.268 1.308-.63 1.907-1.229.599-.599.961-1.199 1.229-1.907.264-.696.436-1.504.494-2.734.059-1.233.072-1.64.072-5.261 0-3.621-.013-4.028-.072-5.261-.058-1.23-.23-2.038-.494-2.734C19.777 4.394 19.415 3.794 18.816 3.196c-.599-.599-1.199-.961-1.907-1.229-.696-.264-1.504-.436-2.734-.494C16.045.013 15.638 0 12.017 0zM12.017 2.162c3.555 0 3.978.013 5.38.072 1.297.059 2.001.275 2.469.458.621.242 1.063.531 1.527.995.464.464.753.906.995 1.527.183.468.399 1.172.458 2.469.059 1.402.072 1.825.072 5.38s-.013 3.978-.072 5.38c-.059 1.297-.275 2.001-.458 2.469-.242.621-.531 1.063-.995 1.527-.464.464-.906.753-1.527.995-.468.183-1.172.399-2.469.458-1.402.059-1.825.072-5.38.072s-3.978-.013-5.38-.072c-1.297-.059-2.001-.275-2.469-.458-.621-.242-1.063-.531-1.527-.995-.464-.464-.753-.906-.995-1.527-.183-.468-.399-1.172-.458-2.469-.059-1.402-.072-1.825-.072-5.38s.013-3.978.072-5.38c.059-1.297.275-2.001.458-2.469.242-.621.531-1.063.995-1.527.464-.464.906-.753 1.527-.995.468-.183 1.172-.399 2.469-.458 1.402-.059 1.825-.072 5.38-.072z"/>
          <path d="M12.017 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12.017 15.838a3.676 3.676 0 1 1 0-7.352 3.676 3.676 0 0 1 0 7.352z"/>
          <circle cx="18.406" cy="5.594" r="1.44"/>
        </svg>
      ),
      youtube: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      ),
      facebook: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    };
    return icons[iconName] || icons.linkedin;
  };

  return (
    <div className="py-16 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: '#00FF00', fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(255,255,255,0.3)' }}>
            Stay Connected
          </h2>
          <p className="text-lg max-w-2xl mx-auto" style={{ color: '#00FFFF', fontSize: '1.5rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>
            Follow us on social media for real-time updates, exclusive content, and behind-the-scenes glimpses
          </p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
          {socialLinks.map((social, index) => (
            <div
              key={index}
              className={`group relative bg-gray-900 rounded-2xl p-6 border-2 border-cyan-400 cursor-pointer transition-all duration-300 hover:scale-105 hover:border-yellow-400 ${
                isVisible ? 'animate-slide-up' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s`, backgroundColor: '#000000' }}
              onMouseEnter={() => setHoveredSocial(index)}
              onMouseLeave={() => setHoveredSocial(null)}
              onClick={() => window.open(social.url, '_blank')}
            >
              {/* Icon */}
              <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center text-white transition-transform duration-300 group-hover:scale-110`}>
                {getIcon(social.icon)}
              </div>

              {/* Platform Name */}
              <h3 className="font-semibold text-lg mb-2 text-center" style={{ color: '#FFFF00', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontSize: '1.3rem' }}>
                {social.name}
              </h3>

              {/* Followers Count */}
              <div className="text-center mb-3">
                <span className="text-sm" style={{ color: '#00FF00', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontSize: '1rem' }}>{social.followers} followers</span>
              </div>

              {/* Action Text */}
              <p className="text-sm text-center group-hover:text-white transition-colors" style={{ color: '#00FFFF', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontSize: '0.9rem' }}>
                {social.action}
              </p>

              {/* Hover Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${social.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}></div>

              {/* Live Indicator for Active Platforms */}
              {index < 3 && (
                <div className="absolute top-3 right-3">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Community Engagement */}
        <div className="text-center mt-12">
          <div className="rounded-2xl p-8 max-w-4xl mx-auto border-2 border-purple-400" style={{ backgroundColor: '#000000' }}>
            <h3 className="text-2xl font-bold mb-6" style={{ color: '#FF69B4', fontSize: '2.5rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(255,255,255,0.3)' }}>Join the Community</h3>
            
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💬</span>
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#87CEEB', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontSize: '1.2rem' }}>Discord Community</h4>
                <p className="text-sm" style={{ color: '#98FB98', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Join our Discord server for real-time discussions, Q&A, and networking</p>
                <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Coming Soon
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📰</span>
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#DDA0DD', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontSize: '1.2rem' }}>Newsletter</h4>
                <p className="text-sm" style={{ color: '#F0E68C', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Weekly updates on speakers, agenda, and exclusive content</p>
                <button className="mt-3 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                  Subscribe
                </button>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">📸</span>
                </div>
                <h4 className="font-semibold mb-2" style={{ color: '#FFB6C1', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)', fontSize: '1.2rem' }}>Share Experience</h4>
                <p className="text-sm" style={{ color: '#AFEEEE', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Tag us in your photos and posts using our official hashtag</p>
                <div className="mt-3 bg-green-600 text-white px-4 py-2 rounded-lg inline-block">
                  #Seasides2026
                </div>
              </div>
            </div>

            {/* Community Stats */}
            <div className="border-t border-white border-opacity-20 pt-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#40E0D0', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>5.2K+</div>
                  <div className="text-sm" style={{ color: '#98FB98', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Community Members</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#FFB6C1', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>12K+</div>
                  <div className="text-sm" style={{ color: '#DDA0DD', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Social Followers</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#00FF7F', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>500+</div>
                  <div className="text-sm" style={{ color: '#F0E68C', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Daily Discussions</div>
                </div>
                <div>
                  <div className="text-2xl font-bold" style={{ color: '#FFD700', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>24/7</div>
                  <div className="text-sm" style={{ color: '#87CEEB', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Community Support</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default SocialIntegration;