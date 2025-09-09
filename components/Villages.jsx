'use client';
import { useState, useRef, useEffect } from 'react';

const Villages = () => {
  const [hoveredVillage, setHoveredVillage] = useState(null);
  const villagesRef = useRef(null);

  const villages = [
    {
      id: 1,
      name: "AI Security Village",
      icon: "🤖",
      description: "Explore the intersection of artificial intelligence and cybersecurity. Learn about AI-powered threats, defenses, and ethical implications.",
      color: "from-blue-500 to-cyan-500",
      topics: ["ML Security", "AI Ethics", "Adversarial AI", "AI Governance"]
    },
    {
      id: 2,
      name: "BugBounty Village",
      icon: "🐛",
      description: "Dive into the world of bug bounty hunting with hands-on challenges, methodologies, and real-world scenarios.",
      color: "from-green-500 to-emerald-500",
      topics: ["Web Hacking", "Mobile Security", "API Testing", "Reconnaissance"]
    },
    {
      id: 3,
      name: "Cloud Village",
      icon: "☁️",
      description: "Master cloud security across AWS, Azure, and GCP platforms. Learn cloud-native security tools and practices.",
      color: "from-purple-500 to-indigo-500",
      topics: ["AWS Security", "Container Security", "Serverless", "IAM"]
    },
    {
      id: 4,
      name: "Hardware Village",
      icon: "🔧",
      description: "Get hands-on with hardware security, IoT devices, embedded systems, and physical security assessments.",
      color: "from-orange-500 to-red-500",
      topics: ["IoT Security", "Firmware Analysis", "RFID/NFC", "Physical Security"]
    },
    {
      id: 5,
      name: "Kubernetes Village",
      icon: "⚙️",
      description: "Secure your container orchestration with Kubernetes security best practices, tools, and configurations.",
      color: "from-teal-500 to-blue-500",
      topics: ["K8s Security", "Container Runtime", "Network Policies", "RBAC"]
    },
    {
      id: 6,
      name: "Social Engineering Village",
      icon: "🎭",
      description: "Understand the human element of cybersecurity through psychological manipulation techniques and defenses.",
      color: "from-pink-500 to-rose-500",
      topics: ["Phishing", "OSINT", "Pretexting", "Awareness Training"]
    },
    {
      id: 7,
      name: "Threat Hunting Village",
      icon: "🔍",
      description: "Learn proactive threat detection techniques, threat intelligence analysis, and incident response strategies.",
      color: "from-indigo-500 to-purple-500",
      topics: ["SIEM/SOAR", "Threat Intel", "Digital Forensics", "Incident Response"]
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

    if (villagesRef.current) {
      observer.observe(villagesRef.current);
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
        
        @keyframes float-village {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3); }
          50% { box-shadow: 0 0 40px rgba(59, 130, 246, 0.6), 0 0 60px rgba(147, 51, 234, 0.4); }
        }
        
        .village-card {
          animation: slide-up 0.8s ease-out;
          transition: all 0.3s ease;
        }
        
        .village-card:hover {
          transform: translateY(-15px) scale(1.02);
          animation: pulse-glow 2s ease-in-out infinite;
        }
        
        .village-icon {
          animation: float-village 3s ease-in-out infinite;
        }
      `}</style>
      
      <section ref={villagesRef} className="relative py-20 bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900 text-white overflow-hidden" style={{color: 'white'}}>
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-40 h-40 bg-indigo-500 rounded-full opacity-15 blur-3xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-48 h-48 bg-purple-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-cyan-500 rounded-full opacity-15 blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        {/* Cyber Grid */}
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
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Cybersecurity Villages
            </h2>
            <div className="w-32 h-1 bg-gradient-to-r from-indigo-500 to-purple-500 mx-auto rounded-full mb-6"></div>
            <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-white">
              Dive deep into specialized cybersecurity domains with our expert-led villages. Each village offers hands-on learning, 
              practical challenges, and real-world scenarios in focused security disciplines.
            </p>
          </div>
          
          {/* Villages Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {villages.map((village, index) => (
              <div
                key={village.id}
                className={`village-card bg-gray-800 bg-opacity-90 backdrop-blur-lg rounded-2xl p-8 border border-white border-opacity-20 relative overflow-hidden group cursor-pointer text-center`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onMouseEnter={() => setHoveredVillage(village.id)}
                onMouseLeave={() => setHoveredVillage(null)}
              >
                {/* Village Icon */}
                <div className="village-icon text-5xl mb-4" style={{ animationDelay: `${index * 0.2}s` }}>
                  {village.icon}
                </div>
                
                {/* Village Name */}
                <h3 className="text-xl font-bold mb-4 transition-colors" style={{color: 'white'}}>
                  {village.name}
                </h3>
                
                {/* Description */}
                <p className="leading-relaxed mb-6" style={{color: 'white'}}>
                  {village.description}
                </p>
                
                {/* Topics */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold mb-3" style={{color: '#bfdbfe'}}>Key Topics:</h4>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {village.topics.map((topic, topicIndex) => (
                      <span
                        key={topicIndex}
                        className="px-3 py-1 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-xs rounded-full border border-indigo-500/30"
                        style={{color: '#c7d2fe'}}
                      >
                        {topic}
                      </span>
                    ))}
                  </div>
                </div>
                
                
                {/* Hover Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${village.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl`}></div>
                
                {/* Selection Indicator */}
                {hoveredVillage === village.id && (
                  <div className="absolute top-4 right-4 w-6 h-6 bg-purple-400 rounded-full flex items-center justify-center animate-pulse">
                    <span style={{color: '#111827'}} className="text-xs">✨</span>
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {/* Call to Action */}
          <div className="text-center bg-white bg-opacity-5 backdrop-blur-lg rounded-3xl p-12 border border-white border-opacity-10">
            <div className="mb-6">
              <div className="inline-flex items-center gap-3 text-4xl mb-4">
                <span className="animate-bounce">🏘️</span>
                <span className="animate-pulse">⚡</span>
                <span className="animate-bounce" style={{ animationDelay: '0.5s' }}>🎯</span>
              </div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
                Join Multiple Villages
              </h3>
              <p className="text-lg max-w-3xl mx-auto mb-8 leading-relaxed text-white">
                Mix and match villages based on your interests and career goals. Each village runs multiple sessions 
                throughout the conference, giving you flexibility to explore different domains.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <button className="group px-10 py-4 bg-gradient-to-r from-indigo-500 to-purple-600 font-bold rounded-2xl hover:from-indigo-600 hover:to-purple-700 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-indigo-500/25 relative overflow-hidden" style={{color: 'white'}}>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-bounce">🗺️</span>
                  View Village Map
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
              </button>
              
              <button className="group px-10 py-4 border-2 border-cyan-400 font-bold rounded-2xl hover:bg-cyan-400 hover:text-gray-900 transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-cyan-400/25 relative overflow-hidden" style={{color: 'white'}}>
                <span className="relative z-10 flex items-center gap-2">
                  <span className="animate-pulse">📋</span>
                  Village Schedule
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-400/10 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-500"></div>
              </button>
            </div>
            
            {/* Village Stats */}
            <div className="mt-8 grid md:grid-cols-3 gap-6 text-sm">
              <div className="hover:text-indigo-300 transition-colors cursor-pointer" style={{color: '#a5b4fc'}}>
                <div className="text-2xl font-bold">7</div>
                <div>Specialized Villages</div>
              </div>
              <div className="hover:text-purple-300 transition-colors cursor-pointer" style={{color: '#c084fc'}}>
                <div className="text-2xl font-bold">50+</div>
                <div>Village Sessions</div>
              </div>
              <div className="hover:text-pink-300 transition-colors cursor-pointer" style={{color: '#f472b6'}}>
                <div className="text-2xl font-bold">100+</div>
                <div>Hands-on Challenges</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Villages;