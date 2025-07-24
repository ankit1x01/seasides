'use client';
import { useState, useRef, useEffect } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const contactRef = useRef(null);

  const contactMethods = [
    {
      icon: '📍',
      title: 'Event Location',
      info: 'International Centre Goa',
      detail: 'Dona Paula, Goa 403004',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '📧',
      title: 'Email Us',
      info: 'info@seasides.net',
      detail: 'Response within 24 hours',
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: '📱',
      title: 'Call Us',
      info: '+91-XXX-XXX-XXXX',
      detail: 'Mon-Fri 9AM-6PM IST',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4); }
        }
        
        @keyframes float-contact {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        .contact-card {
          animation: slide-up 0.8s ease-out;
          transition: all 0.3s ease;
        }
        
        .contact-card:hover {
          transform: translateY(-15px) scale(1.02);
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .floating-icon {
          animation: float-contact 3s ease-in-out infinite;
        }
      `}</style>
      
      <section ref={contactRef} className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-40 h-40 bg-purple-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-pink-500 rounded-full opacity-20 blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Reach Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl opacity-80 max-w-3xl mx-auto leading-relaxed">
              Get directions to the event hall or contact us for any queries. We are excited to see you there!
            </p>
          </div>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className={`contact-card bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 text-center relative overflow-hidden group cursor-pointer`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className={`floating-icon text-5xl mb-4`} style={{ animationDelay: `${index * 0.3}s` }}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-200 transition-colors">
                  {method.title}
                </h3>
                
                <p className="text-lg font-semibold mb-2 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  {method.info}
                </p>
                
                <p className="text-sm opacity-75">
                  {method.detail}
                </p>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
              </div>
            ))}
          </div>
          
          {/* Interactive Map Section */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 mb-12">
            <h3 className="text-2xl font-bold text-center mb-6 bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
              Event Venue
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4 text-white">International Centre Goa</h4>
                <p className="text-gray-300 mb-4 leading-relaxed">
                  A premier conference venue located in the heart of Goa, offering state-of-the-art facilities for our cybersecurity conference.
                </p>
                <div className="space-y-2 text-sm text-gray-300">
                  <p>🏨 On-site accommodation available</p>
                  <p>🍽️ Multiple dining options</p>
                  <p>🚗 Ample parking space</p>
                  <p>✈️ 30 minutes from Goa Airport</p>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 text-center">
                <div className="text-6xl mb-4">🗺️</div>
                <p className="text-gray-300 mb-4">Interactive venue map coming soon!</p>
                <button className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105">
                  View on Maps
                </button>
              </div>
            </div>
          </div>
          
          {/* Action Buttons */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-6">
              <button 
                className="group px-10 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden"
                onMouseEnter={() => setHoveredButton('directions')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-bounce">🧭</span>
                  Get Directions
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button 
                className="group px-10 py-4 border-2 border-white text-white font-bold rounded-2xl hover:bg-white hover:text-purple-600 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-white/25 relative overflow-hidden"
                onMouseEnter={() => setHoveredButton('download')}
                onMouseLeave={() => setHoveredButton(null)}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-pulse">📱</span>
                  Download Venue App
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
            </div>
            
            {/* Fun Interactive Element */}
            <div className="mt-12">
              <div className="inline-flex items-center gap-2 text-sm opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                <span className="animate-bounce">🌴</span>
                <span className="bg-gradient-to-r from-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Experience the beauty of Goa while learning cybersecurity
                </span>
                <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🏖️</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

