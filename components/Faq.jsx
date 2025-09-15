'use client';
import { useState, useRef, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';

const Faq = () => {
  const [open, setOpen] = useState(null);
  const [, setIsVisible] = useState(false);
  const faqRef = useRef(null);
  const { isDark } = useTheme();

  const faqs = [
    {
      question: 'What is Seasides 2026?',
      answer: "Seasides 2026 is India's premier FREE cybersecurity conference taking place at International Centre Goa from February 19-21, 2026. It's a community-driven event designed to bring together cybersecurity professionals, students, and enthusiasts for learning, networking, and knowledge sharing.",
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      question: 'Is it really completely free to attend?',
      answer: 'Yes! Seasides 2026 is 100% FREE for all attendees. This includes access to all sessions, meals, and networking events. Our mission is to make high-quality cybersecurity education accessible to everyone, regardless of their financial situation.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>,
      color: 'from-green-500 to-emerald-500'
    },
    {
      question: 'Do I need to register in advance?',
      answer: 'Yes, registration is required and will open soon. Follow our social media channels for updates on when registration opens. Spots are limited, so we recommend registering early once it\'s available.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>,
      color: 'from-purple-500 to-pink-500'
    },
    {
      question: 'Who can attend Seasides 2026?',
      answer: 'Everyone! Whether you\'re a cybersecurity professional, student, developer, IT administrator, or simply curious about cybersecurity, you\'re welcome. We cater to all skill levels from beginners to experts.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>,
      color: 'from-orange-500 to-red-500'
    },
    {
      question: 'Where exactly is the venue located?',
      answer: 'The conference takes place at International Centre Goa, a premier conference facility located in the heart of Goa. Detailed address and directions will be provided to registered attendees.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      question: 'Is food provided during the conference?',
      answer: 'We aim to provide meals during the conference days — including lunch, tea/snacks and refreshment breaks. While we\'ll do our best to accommodate dietary preferences and restrictions, please note that we may not be able to support all requirements. In such cases, we encourage you to explore nearby eateries or order online through services like Swiggy or Zomato.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /></svg>,
      color: 'from-pink-500 to-rose-500'
    },
    {
      question: 'Can I attend the conference online?',
      answer: 'The conference is designed as an in-person experience to maximize networking and hands-on learning. However, we may live stream selected sessions - updates will be shared on our social channels.',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
      color: 'from-indigo-500 to-purple-500'
    },
    {
      question: 'What should I bring to the conference?',
      answer: 'Bring your laptop, chargers, notebooks, and an eagerness to learn! We\'ll provide WiFi, power outlets, meals, and all conference materials. Don\'t forget comfortable clothes for the Goa weather!',
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0H8m8 0v5a2 2 0 01-2 2H10a2 2 0 01-2-2V6m8 0H8" /></svg>,
      color: 'from-emerald-500 to-teal-500'
    }
  ];

  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    }
    setOpen(index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style jsx>{`
        @keyframes slide-in {
          0% { transform: translateX(-50px); opacity: 0; }
          100% { transform: translateX(0); opacity: 1; }
        }
        
        @keyframes glow-border {
          0%, 100% { border-color: rgba(59, 130, 246, 0.3); }
          50% { border-color: rgba(59, 130, 246, 0.8); }
        }
        
        @keyframes float-icon {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-5px) rotate(5deg); }
        }
        
        .faq-item {
          animation: slide-in 0.6s ease-out;
          transition: all 0.3s ease;
        }
        
        .faq-item:hover {
          transform: translateX(10px);
        }
        
        .faq-icon {
          animation: float-icon 3s ease-in-out infinite;
        }
        
        .faq-answer {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.5s ease-in-out;
        }
        
        .faq-answer.open {
          max-height: 200px;
        }
      `}</style>
      
      <section ref={faqRef} className={`relative py-20 overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 text-slate-800'
      }`}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-40 h-40 bg-blue-500 rounded-full opacity-10 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-pink-500 rounded-full opacity-10 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Cyber Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}
        ></div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-medium text-lg">
                Have Questions?
              </span>
            </div>
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 ${
              isDark 
                ? 'bg-gradient-to-r from-white to-slate-300 bg-clip-text text-transparent' 
                : 'bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'
            }`}>
              Frequently Asked Questions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className={`text-lg max-w-2xl mx-auto ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Everything you need to know about Seasides
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item backdrop-blur-sm rounded-2xl border overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                  isDark 
                    ? 'bg-slate-800/80 border-slate-700/50 hover:bg-slate-700/80' 
                    : 'bg-white/80 border-white/20 hover:bg-white/90'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  onClick={() => toggle(index)} 
                  className="w-full text-left p-6 focus:outline-none group relative overflow-hidden"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className={`faq-icon ${
                        isDark ? 'text-slate-300' : 'text-slate-600'
                      }`} style={{ animationDelay: `${index * 0.2}s` }}>
                        {faq.icon}
                      </div>
                      <span className={`text-lg md:text-xl font-semibold transition-colors ${
                        isDark 
                          ? 'text-white group-hover:text-cyan-400' 
                          : 'text-slate-800 group-hover:text-blue-600'
                      }`}>
                        {faq.question}
                      </span>
                    </div>
                    <div className={`transform transition-transform duration-300 ${open === index ? 'rotate-180' : ''}`}>
                      <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-lg">
                          {open === index ? '−' : '+'}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover effect overlay */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-cyan-500/10 to-purple-500/10' 
                      : 'bg-gradient-to-r from-blue-500/10 to-purple-500/10'
                  }`}></div>
                </button>
                
                <div className={`faq-answer ${open === index ? 'open' : ''}`}>
                  <div className="px-6 pb-6">
                    <div className={`w-full h-px mb-4 ${
                      isDark 
                        ? 'bg-gradient-to-r from-slate-600 to-slate-700' 
                        : 'bg-gradient-to-r from-blue-200 to-purple-200'
                    }`}></div>
                    <div className={`bg-gradient-to-r ${faq.color} p-4 rounded-xl`}>
                      <p className="text-white leading-relaxed text-base md:text-lg">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
