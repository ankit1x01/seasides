'use client';
import { useRef } from 'react';

const Contact = () => {
  const contactRef = useRef(null);

  const contactMethods = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: 'Event Location',
      info: 'International Centre Goa',
      detail: 'Dr. E Borges Road, Dona Paula, Goa – 403 004',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 7.89a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      title: 'Email Us',
      info: 'support@seasides.net',
      detail: 'Response within 24 hours',
      color: 'from-purple-500 to-pink-500'
    }
  ];

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
      
      <section ref={contactRef} className="relative py-20 bg-black text-white overflow-hidden" style={{color: 'white'}}>
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#00FF7F', fontSize: '3rem', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(255,255,255,0.3)' }}>
              Reach Us
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed" style={{ color: '#87CEEB', fontSize: '1.2rem', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
              Get directions to the event hall or contact us for any queries. We are excited to see you there!
            </p>
          </div>
          
          {/* Contact Methods */}
          <div className="grid md:grid-cols-2 gap-8 mb-16 max-w-4xl mx-auto">
            {contactMethods.map((method, index) => (
              <div 
                key={index}
                className={`contact-card rounded-2xl p-8 border-2 border-cyan-400 text-center relative overflow-hidden group cursor-pointer`}
                style={{ 
                  animationDelay: `${index * 0.2}s`,
                  backgroundColor: '#000000'
                }}
              >
                <div className={`floating-icon mb-4 flex justify-center text-white`} style={{ animationDelay: `${index * 0.3}s` }}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold mb-3 group-hover:text-blue-200 transition-colors" style={{ color: '#FFD700', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>
                  {method.title}
                </h3>
                
                <p className="text-lg font-semibold mb-2" style={{ color: '#00FFFF', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  {method.info}
                </p>
                
                <p className="text-sm" style={{ color: '#98FB98', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  {method.detail}
                </p>
                
                {/* Hover Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${method.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-2xl`}></div>
              </div>
            ))}
          </div>
          
          {/* Interactive Map Section */}
          <div className="rounded-2xl p-8 border-2 border-purple-400 mb-12" style={{ backgroundColor: '#000000' }}>
            <h3 className="text-2xl font-bold text-center mb-6" style={{ color: '#FF69B4', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(255,255,255,0.3)' }}>
              Event Venue
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h4 className="text-xl font-semibold mb-4" style={{ color: '#40E0D0', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>International Centre Goa</h4>
                <p className="mb-4 leading-relaxed" style={{ color: '#F0E68C', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  A premier conference venue located in the heart of Goa, offering state-of-the-art facilities for our cybersecurity conference.
                </p>
                <div className="space-y-2 text-sm">
                  <p style={{ color: '#FFB6C1', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>✈️ 30 minutes from Goa Airport</p>
                </div>
              </div>
              
              <div className="bg-gray-800 bg-opacity-50 rounded-xl p-6 text-center">
                <div className="flex justify-center mb-4">
                  <svg className="w-16 h-16 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                </div>
                <p style={{ color: '#00FFFF', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Interactive venue map coming soon!</p>
              </div>
            </div>

            {/* Fun Interactive Element */}
            <div className="mt-12">
              <div className="inline-flex items-center gap-2 text-sm hover:text-white transition-colors cursor-pointer">
                <svg className="w-5 h-5 animate-bounce text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                <span style={{ color: '#32CD32', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  Experience the beauty of Goa while learning cybersecurity
                </span>
                <svg className="w-5 h-5 animate-bounce text-blue-400" style={{ animationDelay: '0.5s' }} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;

