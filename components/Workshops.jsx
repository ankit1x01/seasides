'use client';
import { useState, useRef, useEffect } from 'react';

const Workshops = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  const workshopsRef = useRef(null);

  const workshops = [
    {
      id: 1,
      title: "Advanced Penetration Testing",
      instructor: "Sarah Chen",
      duration: "4 hours",
      level: "Advanced",
      participants: "25 max",
      description: "Deep dive into advanced penetration testing techniques including custom exploit development and red team operations.",
      topics: ["Custom Exploits", "Red Team Ops", "Network Pivoting", "Post-Exploitation"],
      time: "Day 1 | 9:00 AM - 1:00 PM",
      icon: "🔓",
      color: "from-red-500 to-pink-500",
      difficulty: "Expert"
    },
    {
      id: 2,
      title: "Incident Response & Forensics",
      instructor: "Marcus Rodriguez",
      duration: "3.5 hours",
      level: "Intermediate",
      participants: "30 max",
      description: "Learn comprehensive incident response procedures and digital forensics techniques for enterprise environments.",
      topics: ["Threat Hunting", "Memory Analysis", "Network Forensics", "Malware Analysis"],
      time: "Day 1 | 2:00 PM - 5:30 PM",
      icon: "🕵️",
      color: "from-blue-500 to-cyan-500",
      difficulty: "Intermediate"
    },
    {
      id: 3,
      title: "Cloud Security Architecture",
      instructor: "Dr. Aisha Patel",
      duration: "4 hours",
      level: "Intermediate",
      participants: "35 max",
      description: "Secure cloud infrastructure design patterns and implementation strategies for modern enterprises.",
      topics: ["Zero Trust", "Container Security", "IAM Best Practices", "Compliance"],
      time: "Day 2 | 9:00 AM - 1:00 PM",
      icon: "☁️",
      color: "from-purple-500 to-indigo-500",
      difficulty: "Intermediate"
    },
    {
      id: 4,
      title: "AI-Powered Threat Detection",
      instructor: "James Park",
      duration: "3 hours",
      level: "Advanced",
      participants: "20 max",
      description: "Build machine learning models for cybersecurity threat detection and automated response systems.",
      topics: ["ML Algorithms", "Anomaly Detection", "Behavioral Analysis", "Automated Response"],
      time: "Day 2 | 2:00 PM - 5:00 PM",
      icon: "🤖",
      color: "from-green-500 to-emerald-500",
      difficulty: "Expert"
    },
    {
      id: 5,
      title: "Web Application Security",
      instructor: "Lisa Zhang",
      duration: "3.5 hours",
      level: "Beginner",
      participants: "40 max",
      description: "Comprehensive web application security testing methodology from basics to advanced techniques.",
      topics: ["OWASP Top 10", "SQL Injection", "XSS", "Security Testing"],
      time: "Day 2 | 6:00 PM - 9:30 PM",
      icon: "🌐",
      color: "from-orange-500 to-yellow-500",
      difficulty: "Beginner"
    },
    {
      id: 6,
      title: "Blockchain Security",
      instructor: "Alex Kumar",
      duration: "3 hours",
      level: "Advanced",
      participants: "25 max",
      description: "Smart contract auditing, DeFi security, and blockchain vulnerability assessment techniques.",
      topics: ["Smart Contracts", "DeFi Security", "Consensus Attacks", "Wallet Security"],
      time: "Day 1 | 6:00 PM - 9:00 PM",
      icon: "🔗",
      color: "from-teal-500 to-blue-500",
      difficulty: "Expert"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (workshopsRef.current) {
      observer.observe(workshopsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getDifficultyColor = (difficulty) => {
    switch(difficulty) {
      case 'Beginner': return 'text-green-400 bg-green-500/20';
      case 'Intermediate': return 'text-yellow-400 bg-yellow-500/20';
      case 'Expert': return 'text-red-400 bg-red-500/20';
      default: return 'text-blue-400 bg-blue-500/20';
    }
  };

  return (
    <>
      <style jsx>{`
        @keyframes slide-up {
          0% { transform: translateY(50px); opacity: 0; }
          100% { transform: translateY(0); opacity: 1; }
        }
        
        @keyframes float-workshop {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4); }
        }
        
        @keyframes rotate-icon {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .workshop-card {
          animation: slide-up 0.8s ease-out;
          transition: all 0.3s ease;
        }
        
        .workshop-card:hover {
          transform: translateY(-15px) scale(1.02);
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .workshop-icon:hover {
          animation: rotate-icon 1s ease-in-out;
        }
      `}</style>
      
      <section ref={workshopsRef} className="relative py-20 bg-gradient-to-br from-gray-900 via-purple-900 to-blue-900 text-white overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 w-40 h-40 bg-purple-500 rounded-full opacity-15 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 right-1/3 w-32 h-32 bg-cyan-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/3 left-1/2 w-36 h-36 bg-pink-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
        </div>
        
        {/* Animated Grid */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0,255,255,0.2) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0,255,255,0.2) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
        
        <div className="relative container mx-auto px-6 z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-200 via-blue-200 to-cyan-200 bg-clip-text text-transparent">
              Hands-On Cyber Workshops
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl opacity-80 max-w-4xl mx-auto leading-relaxed">
              One of the most important things is choosing the workshop that aligns with your interests. 
              Select the one that matters most to you and dive deep into practical cybersecurity skills.
            </p>
          </div>
          
          {/* Workshops Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-16">
            {workshops.map((workshop, index) => (
              <div
                key={workshop.id}
                className={`workshop-card bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 relative overflow-hidden group cursor-pointer`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredCard(workshop.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setSelectedWorkshop(selectedWorkshop === workshop.id ? null : workshop.id)}
              >
                {/* Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="workshop-icon text-4xl transition-transform duration-300">
                      {workshop.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white group-hover:text-blue-200 transition-colors">
                        {workshop.title}
                      </h3>
                      <p className="text-sm text-gray-300">by {workshop.instructor}</p>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(workshop.difficulty)}`}>
                    {workshop.difficulty}
                  </div>
                </div>
                
                {/* Workshop Info */}
                <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>⏱️</span>
                    <span>{workshop.duration}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300">
                    <span>👥</span>
                    <span>{workshop.participants}</span>
                  </div>
                  <div className="flex items-center gap-2 text-gray-300 col-span-2">
                    <span>📅</span>
                    <span>{workshop.time}</span>
                  </div>
                </div>
                
                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  {workshop.description}
                </p>
                
                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-blue-200 mb-3">Key Topics:</h4>
                  <div className="flex flex-wrap gap-2">
                    {workshop.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-200 text-xs rounded-full border border-blue-500/30"
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Action Button */}
                <button className={`w-full py-3 bg-gradient-to-r ${workshop.color} text-white font-semibold rounded-lg hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl`}>
                  Register for Workshop
                </button>
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${workshop.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Selection Indicator */}
                {selectedWorkshop === workshop.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center animate-pulse">
                    <span className="text-gray-900 text-xs">✓</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl p-12 border border-white border-opacity-10">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 text-4xl mb-4">
                <span className="animate-bounce">🎯</span>
                <span className="animate-pulse">⚡</span>
                <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🚀</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                Level Up Your Cybersecurity Skills
              </h3>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto mb-8 leading-relaxed">
                Don't miss out on these intensive hands-on workshops led by industry experts. 
                Limited seats available - secure your spot now!
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group px-10 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:from-cyan-600 hover:to-blue-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-500/25 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-bounce">📋</span>
                  View All Workshops
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button className="group px-10 py-4 border-2 border-purple-400 text-purple-400 font-bold rounded-2xl hover:bg-purple-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-purple-400/25 relative overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-pulse">💬</span>
                  Contact Workshop Team
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
            </div>
            
            {/* Workshop Stats */}
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
              <div className="text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer">
                <div className="text-2xl font-bold">6</div>
                <div>Specialized Workshops</div>
              </div>
              <div className="text-purple-400 hover:text-purple-300 transition-colors cursor-pointer">
                <div className="text-2xl font-bold">24+</div>
                <div>Total Hours of Learning</div>
              </div>
              <div className="text-pink-400 hover:text-pink-300 transition-colors cursor-pointer">
                <div className="text-2xl font-bold">185</div>
                <div>Maximum Participants</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workshops;

export default Workshops;
