'use client';
import { useState, useRef, useEffect } from 'react';

const Faq = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);
  const [typedQuestions, setTypedQuestions] = useState({});
  const [showAnswers, setShowAnswers] = useState({});
  const faqRef = useRef(null);

  const faqs = [
    {
      id: 'registration',
      question: 'cat /faq/registration.txt',
      displayQuestion: 'How do I register for SEASIDES 2026?',
      answer: [
        '📝 Registration is completely FREE!',
        '🌐 Visit: https://seasides.net/register',
        '📧 Fill out the registration form',
        '✅ Confirmation email will be sent',
        '🎟️ Bring confirmation email to venue',
        '⚡ Early bird gets premium seating!'
      ]
    },
    {
      id: 'accommodation',
      question: 'grep -i "accommodation" /venue/info.log',
      displayQuestion: 'What accommodation options are available?',
      answer: [
        '🏨 On-site rooms at International Centre Goa',
        '💰 Discounted rates for conference attendees',
        '🏖️ Beachside hotels within 5km radius',
        '🚗 Free shuttle service from partner hotels',
        '📞 Contact: accommodation@seasides.net',
        '📅 Book early for best rates!'
      ]
    },
    {
      id: 'workshops',
      question: 'ls -la /workshops/available/',
      displayQuestion: 'What workshops and villages are included?',
      answer: [
        '🛠️ 12+ hands-on cybersecurity workshops',
        '🏘️ 8 specialized security villages',
        '👨‍💻 Beginner to advanced levels',
        '🎯 Limited seats - first come, first served',
        '📋 Pre-registration required for workshops',
        '🏆 Certificates provided for completion'
      ]
    },
    {
      id: 'schedule',
      question: 'cat /schedule/agenda.json | jq .',
      displayQuestion: 'What is the conference schedule?',
      answer: [
        '📅 Day 1 (Jan 26): Keynotes & Technical Talks',
        '🛠️ Day 1 Evening: Workshops & Villages',
        '📅 Day 2 (Jan 27): Advanced Sessions',
        '🎉 Day 2 Evening: Networking & Closing Party',
        '⏰ Daily: 9:00 AM - 9:00 PM',
        '📱 Mobile app with live schedule updates'
      ]
    },
    {
      id: 'travel',
      question: 'curl -s https://api.travel.seasides/info',
      displayQuestion: 'How do I reach the venue?',
      answer: [
        '✈️ Fly to Goa Airport (GOI)',
        '🚗 30-minute drive to International Centre',
        '🚕 Taxi/Uber readily available',
        '🚌 Conference shuttle from airport',
        '🚗 Ample parking at venue',
        '🗺️ GPS: Dona Paula, Goa 403004'
      ]
    },
    {
      id: 'cost',
      question: 'echo $CONFERENCE_COST',
      displayQuestion: 'Is there any cost to attend?',
      answer: [
        '🆓 Conference attendance is COMPLETELY FREE',
        '🍽️ Meals and refreshments included',
        '📦 Conference swag bag included',
        '🏨 Only accommodation costs extra',
        '🚗 Parking is free',
        '💡 Sponsored by amazing cybersecurity companies'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          // Start typing questions sequentially
          faqs.forEach((faq, index) => {
            setTimeout(() => {
              typeQuestion(faq.id, faq.question);
            }, index * 500);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (faqRef.current) {
      observer.observe(faqRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const typeQuestion = async (id, question) => {
    for (let i = 0; i <= question.length; i++) {
      setTypedQuestions(prev => ({
        ...prev,
        [id]: question.slice(0, i)
      }));
      await new Promise(resolve => setTimeout(resolve, 30));
    }
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
    if (openFaq !== id) {
      setTimeout(() => {
        setShowAnswers(prev => ({
          ...prev,
          [id]: true
        }));
      }, 200);
    } else {
      setShowAnswers(prev => ({
        ...prev,
        [id]: false
      }));
    }
  };

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
          0%, 100% { text-shadow: 0 0 5px currentColor, 0 0 10px currentColor; }
          50% { text-shadow: 0 0 10px currentColor, 0 0 20px currentColor, 0 0 30px currentColor; }
        }
        
        @keyframes matrix-rain {
          0% { transform: translateY(-100vh); opacity: 0; }
          10% { opacity: 1; }
          90% { opacity: 1; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
        
        @keyframes slide-down {
          0% { opacity: 0; max-height: 0; }
          100% { opacity: 1; max-height: 300px; }
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
        
        .matrix-digit {
          animation: matrix-rain 3s linear infinite;
        }
        
        .cursor-blink {
          animation: blink 1s infinite;
        }
        
        .answer-slide {
          animation: slide-down 0.3s ease-out;
        }
      `}</style>

      <section ref={faqRef} className="relative py-20 bg-black text-green-400 overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 30 }).map((_, i) => (
            <div
              key={i}
              className="matrix-digit absolute text-green-500 text-xs"
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

        {/* Terminal Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="w-full h-full" 
               style={{
                 backgroundImage: `
                   repeating-linear-gradient(
                     0deg,
                     transparent,
                     transparent 2px,
                     rgba(0, 255, 0, 0.1) 2px,
                     rgba(0, 255, 0, 0.1) 4px
                   )
                 `
               }}>
          </div>
        </div>

        <div className="relative container mx-auto px-6 z-10">
          {/* Main Terminal Window */}
          <div className="bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window max-w-5xl mx-auto">
            <div className="terminal-text">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">faq-system.sh - Frequently Asked Questions</span>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="text-2xl font-bold glow-text text-green-400 mb-4">
                  === SEASIDES 2026 FAQ DATABASE ===
                </div>
                <div className="text-green-300 text-sm mb-4">
                  Interactive help system - Click on any question for detailed information
                </div>
                <div className="text-cyan-400 text-xs">
                  Type './help.sh --list' to see all available questions
                </div>
              </div>

              {/* FAQ Items */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={faq.id} className="bg-black bg-opacity-50 border border-green-600 rounded p-4">
                    {/* Question Command */}
                    <div 
                      className="cursor-pointer"
                      onClick={() => toggleFaq(faq.id)}
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-cyan-400">user@seasides:</span>
                        <span className="text-white">~$</span>
                        <span className="text-green-400 text-sm">
                          {typedQuestions[faq.id] || ''}
                          {typedQuestions[faq.id] && typedQuestions[faq.id].length < faq.question.length && (
                            <span className="cursor-blink">|</span>
                          )}
                        </span>
                      </div>
                      
                      {typedQuestions[faq.id] && typedQuestions[faq.id].length === faq.question.length && (
                        <div className="flex items-center gap-2 ml-6 hover:bg-green-900 hover:bg-opacity-20 p-2 rounded transition-colors">
                          <span className="text-yellow-400">
                            {openFaq === faq.id ? '▼' : '►'}
                          </span>
                          <span className="text-green-300 text-sm">
                            {faq.displayQuestion}
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Answer Output */}
                    {openFaq === faq.id && (
                      <div className="answer-slide ml-6 mt-4 border-l-2 border-green-600 pl-4">
                        <div className="text-cyan-400 text-xs mb-2">OUTPUT:</div>
                        <div className="space-y-1">
                          {faq.answer.map((line, lineIndex) => (
                            <div 
                              key={lineIndex} 
                              className="text-green-300 text-sm"
                              style={{
                                animationDelay: `${lineIndex * 100}ms`
                              }}
                            >
                              {line}
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Command Help Section */}
              <div className="mt-8 border-t border-green-600 pt-6">
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">user@seasides:</span>
                    <span className="text-white">~$</span>
                    <span className="text-green-400 ml-2">./help.sh --more-questions</span>
                  </div>
                  <div className="text-green-300 ml-6">
                    Still have questions? Contact us at info@seasides.net
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-cyan-400">user@seasides:</span>
                    <span className="text-white">~$</span>
                    <span className="cursor-blink text-green-400 ml-2">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Side Help Terminals */}
          <div className="grid md:grid-cols-2 gap-6 mt-8 max-w-4xl mx-auto">
            {/* Quick Help */}
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 terminal-window">
              <div className="terminal-text">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-xs text-gray-400">quick-help.sh</span>
                </div>
                <div className="text-xs space-y-1">
                  <div className="text-cyan-400 glow-text">QUICK HELP:</div>
                  <div className="text-green-400">► Registration: FREE!</div>
                  <div className="text-yellow-400">► Date: Jan 26-27, 2026</div>
                  <div className="text-purple-400">► Location: Goa, India</div>
                  <div className="text-pink-400">► Contact: info@seasides.net</div>
                </div>
              </div>
            </div>

            {/* System Status */}
            <div className="bg-gray-900 border border-green-400 rounded-lg p-4 terminal-window">
              <div className="terminal-text">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="ml-2 text-xs text-gray-400">system-status.sh</span>
                </div>
                <div className="text-xs space-y-1">
                  <div className="text-cyan-400 glow-text">FAQ SYSTEM STATUS:</div>
                  <div className="text-green-400">► Database: ONLINE</div>
                  <div className="text-green-400">► Help Desk: ACTIVE</div>
                  <div className="text-green-400">► Response Time: &lt; 1ms</div>
                  <div className="text-yellow-400">► Last Update: Real-time</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Faq;
