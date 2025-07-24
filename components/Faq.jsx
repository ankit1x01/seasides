'use client';
import { useState, useRef, useEffect } from 'react';

const Faq = () => {
  const [open, setOpen] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const faqRef = useRef(null);

  const faqs = [
    {
      question: 'Is Seasides Free ?',
      answer: 'Yes, absolutely! The event is completely free of charge. However, attendees are responsible for covering their own travel, accommodation, and meals. While we do our best to provide refreshments and lunch, availability is limited to a certain number of participants.',
      icon: '💰',
      color: 'from-green-500 to-emerald-500'
    },
    {
      question: 'Does every one get scholarship ?',
      answer: 'Information about scholarships will be provided closer to the event date.',
      icon: '🎓',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      question: 'Will my seat be secured ?',
      answer: 'Seats are available on a first-come, first-served basis. We recommend registering early to secure your spot.',
      icon: '🪑',
      color: 'from-purple-500 to-pink-500'
    },
    {
      question: 'How I can help Seasides ?',
      answer: 'You can help by sponsoring us, volunteering, or spreading the word about the conference.',
      icon: '🤝',
      color: 'from-orange-500 to-red-500'
    },
    {
      question: 'Can I attend the conference online?',
      answer: 'This is an in-person event. We do not have plans for online attendance at this time.',
      icon: '💻',
      color: 'from-indigo-500 to-purple-500'
    },
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
      
      <section ref={faqRef} className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden">
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              Frequently Asked Questions
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Got questions? We've got answers! Check out the most common queries about Seasides 2026.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`faq-item bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl border border-white border-opacity-20 overflow-hidden shadow-2xl hover:shadow-blue-500/20 transition-all duration-300`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <button 
                  onClick={() => toggle(index)} 
                  className="w-full text-left p-6 focus:outline-none group relative overflow-hidden"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-4">
                      <div className={`faq-icon text-3xl`} style={{ animationDelay: `${index * 0.2}s` }}>
                        {faq.icon}
                      </div>
                      <span className="text-lg md:text-xl font-semibold text-white group-hover:text-blue-200 transition-colors">
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
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
                
                <div className={`faq-answer ${open === index ? 'open' : ''}`}>
                  <div className="px-6 pb-6">
                    <div className={`bg-gradient-to-r ${faq.color} p-4 rounded-xl`}>
                      <p className="text-white leading-relaxed">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <div className="inline-flex flex-col items-center gap-4">
              <p className="text-lg opacity-80">Still have questions?</p>
              <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold rounded-2xl hover:from-blue-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-bounce">📧</span>
                  Contact Support
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
