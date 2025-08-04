'use client';
import { useState, useRef, useEffect } from 'react';

const Workshops = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [typedCommands, setTypedCommands] = useState({});
  const [loadedWorkshops, setLoadedWorkshops] = useState([]);
  const [selectedWorkshop, setSelectedWorkshop] = useState(null);
  const workshopsRef = useRef(null);

  const workshops = [
    {
      id: 'pentest',
      command: 'docker run --rm -it workshop:pentest-advanced',
      name: 'Advanced Penetration Testing',
      instructor: 'Sarah Chen',
      duration: '4 hours',
      level: 'Advanced',
      participants: '25 max',
      description: 'Deep dive into advanced penetration testing techniques',
      topics: ['Custom Exploits', 'Red Team Ops', 'Network Pivoting', 'Post-Exploitation'],
      schedule: 'Day 1 | 9:00 AM - 1:00 PM',
      prereq: 'Basic penetration testing knowledge',
      tools: ['Metasploit', 'Burp Suite', 'Custom Scripts', 'Kali Linux'],
      color: 'text-red-400'
    },
    {
      id: 'forensics',
      command: 'cd /opt/workshops && ./incident-response.sh --start',
      name: 'Incident Response & Forensics',
      instructor: 'Marcus Rodriguez',
      duration: '3.5 hours',
      level: 'Intermediate',
      participants: '30 max',
      description: 'Comprehensive incident response procedures and digital forensics',
      topics: ['Threat Hunting', 'Memory Analysis', 'Network Forensics', 'Malware Analysis'],
      schedule: 'Day 1 | 2:00 PM - 5:30 PM',
      prereq: 'Basic cybersecurity knowledge',
      tools: ['Volatility', 'Wireshark', 'YARA', 'Autopsy'],
      color: 'text-blue-400'
    },
    {
      id: 'cloud-sec',
      command: 'kubectl apply -f /workshops/cloud-security/lab-env.yaml',
      name: 'Cloud Security Architecture',
      instructor: 'Dr. Aisha Patel',
      duration: '4 hours',
      level: 'Intermediate',
      participants: '35 max',
      description: 'Secure cloud infrastructure design patterns',
      topics: ['Zero Trust', 'Container Security', 'IAM Best Practices', 'Compliance'],
      schedule: 'Day 2 | 9:00 AM - 1:00 PM',
      prereq: 'Cloud platform experience',
      tools: ['AWS/Azure CLI', 'Terraform', 'Docker', 'Kubernetes'],
      color: 'text-purple-400'
    },
    {
      id: 'ai-threat',
      command: 'python3 /labs/ml-security/threat-detection.py --interactive',
      name: 'AI-Powered Threat Detection',
      instructor: 'James Park',
      duration: '3 hours',
      level: 'Advanced',
      participants: '20 max',
      description: 'Build ML models for cybersecurity threat detection',
      topics: ['ML Algorithms', 'Anomaly Detection', 'Behavioral Analysis', 'Automated Response'],
      schedule: 'Day 2 | 2:00 PM - 5:00 PM',
      prereq: 'Python and ML basics',
      tools: ['Python', 'TensorFlow', 'Scikit-learn', 'Jupyter'],
      color: 'text-green-400'
    },
    {
      id: 'web-sec',
      command: 'burpsuite --project-file=/workshops/web-security/lab.burp',
      name: 'Web Application Security',
      instructor: 'Lisa Zhang',
      duration: '3.5 hours',
      level: 'Beginner',
      participants: '40 max',
      description: 'Comprehensive web application security testing',
      topics: ['OWASP Top 10', 'SQL Injection', 'XSS', 'Security Testing'],
      schedule: 'Day 2 | 6:00 PM - 9:30 PM',
      prereq: 'Basic web development knowledge',
      tools: ['Burp Suite', 'OWASP ZAP', 'SQLMap', 'Custom Tools'],
      color: 'text-orange-400'
    },
    {
      id: 'blockchain',
      command: 'truffle migrate --network workshop && npm run audit',
      name: 'Blockchain Security',
      instructor: 'Alex Kumar',
      duration: '3 hours',
      level: 'Advanced',
      participants: '25 max',
      description: 'Smart contract auditing and DeFi security',
      topics: ['Smart Contracts', 'DeFi Security', 'Consensus Attacks', 'Wallet Security'],
      schedule: 'Day 1 | 6:00 PM - 9:00 PM',
      prereq: 'Blockchain basics',
      tools: ['Solidity', 'Truffle', 'Mythril', 'Slither'],
      color: 'text-cyan-400'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          loadWorkshops();
        }
      },
      { threshold: 0.3 }
    );

    if (workshopsRef.current) {
      observer.observe(workshopsRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const loadWorkshops = async () => {
    for (let i = 0; i < workshops.length; i++) {
      const workshop = workshops[i];
      await typeCommand(workshop.id, workshop.command);
      await new Promise(resolve => setTimeout(resolve, 500));
      setLoadedWorkshops(prev => [...prev, workshop.id]);
      await new Promise(resolve => setTimeout(resolve, 800));
    }
  };

  const typeCommand = async (id, command) => {
    for (let i = 0; i <= command.length; i++) {
      setTypedCommands(prev => ({
        ...prev,
        [id]: command.slice(0, i)
      }));
      await new Promise(resolve => setTimeout(resolve, 40));
    }
  };

  const getDifficultyColor = (level) => {
    switch(level) {
      case 'Beginner': return 'text-green-400';
      case 'Intermediate': return 'text-yellow-400';
      case 'Advanced': return 'text-red-400';
      default: return 'text-blue-400';
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
        
        @keyframes workshop-load {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
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
        
        .workshop-card {
          animation: workshop-load 0.5s ease-out;
        }
      `}</style>

      <section ref={workshopsRef} className="relative py-20 bg-black text-green-400 overflow-hidden">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 50 }).map((_, i) => (
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
          <div className="bg-gray-900 border border-green-400 rounded-lg p-6 terminal-window max-w-7xl mx-auto">
            <div className="terminal-text">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-sm text-gray-400">workshop-lab-manager.sh - Hands-on Training Environment</span>
              </div>

              {/* Header */}
              <div className="text-center mb-8">
                <div className="text-2xl font-bold glow-text text-green-400 mb-4">
                  === HANDS-ON CYBER WORKSHOPS ===
                </div>
                <div className="text-green-300 text-sm mb-4">
                  Interactive cybersecurity training labs - Choose your skill path
                </div>
                <div className="flex items-center gap-2 justify-center text-sm">
                  <span className="text-cyan-400">admin@lab-manager:</span>
                  <span className="text-white">~$</span>
                  <span className="text-green-400 ml-2">./initialize-workshop-environment.sh</span>
                </div>
                <div className="text-green-300 text-xs mt-2">
                  Loading workshop containers and lab environments...
                </div>
              </div>

              {/* Workshop Grid */}
              <div className="grid lg:grid-cols-2 gap-6">
                {workshops.map((workshop, index) => (
                  <div key={workshop.id} className="bg-black bg-opacity-50 border border-green-600 rounded p-6 workshop-card">
                    {/* Command */}
                    <div className="mb-4">
                      <div className="flex items-center gap-2 text-xs mb-2">
                        <span className="text-cyan-400">lab@workshop-{workshop.id}:</span>
                        <span className="text-white">~$</span>
                      </div>
                      <div className="text-green-400 text-xs min-h-[20px]">
                        {typedCommands[workshop.id] || ''}
                        {typedCommands[workshop.id] && typedCommands[workshop.id].length < workshop.command.length && (
                          <span className="cursor-blink">|</span>
                        )}
                      </div>
                    </div>

                    {/* Workshop Details */}
                    {loadedWorkshops.includes(workshop.id) && (
                      <div className="border-t border-green-600 pt-4">
                        {/* Header */}
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <div className={`text-lg font-bold ${workshop.color} glow-text`}>
                              {workshop.name}
                            </div>
                            <div className="text-green-300 text-sm">
                              by {workshop.instructor}
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded text-xs font-semibold border ${getDifficultyColor(workshop.level)}`}>
                            {workshop.level}
                          </div>
                        </div>

                        {/* Workshop Info Grid */}
                        <div className="grid grid-cols-2 gap-4 mb-4 text-xs">
                          <div className="space-y-1">
                            <div className="text-cyan-400">⏱️ Duration: {workshop.duration}</div>
                            <div className="text-yellow-400">👥 Max: {workshop.participants}</div>
                          </div>
                          <div className="space-y-1">
                            <div className="text-purple-400">📅 {workshop.schedule}</div>
                            <div className="text-pink-400">📋 {workshop.prereq}</div>
                          </div>
                        </div>

                        {/* Description */}
                        <div className="text-green-300 text-sm mb-4">
                          {workshop.description}
                        </div>

                        {/* Expandable Details */}
                        <div className="space-y-3">
                          <button 
                            className="text-cyan-400 text-sm hover:text-cyan-300 transition-colors"
                            onClick={() => setSelectedWorkshop(selectedWorkshop === workshop.id ? null : workshop.id)}
                          >
                            {selectedWorkshop === workshop.id ? '▼' : '►'} View Lab Details
                          </button>

                          {selectedWorkshop === workshop.id && (
                            <div className="bg-gray-800 p-4 rounded border border-gray-600 space-y-3">
                              {/* Topics */}
                              <div>
                                <div className="text-green-400 text-sm font-semibold mb-2">Key Topics:</div>
                                <div className="flex flex-wrap gap-2">
                                  {workshop.topics.map((topic, topicIndex) => (
                                    <span
                                      key={topicIndex}
                                      className="px-2 py-1 bg-green-900 bg-opacity-50 text-green-300 text-xs rounded border border-green-600"
                                    >
                                      {topic}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Tools */}
                              <div>
                                <div className="text-cyan-400 text-sm font-semibold mb-2">Tools & Technologies:</div>
                                <div className="flex flex-wrap gap-2">
                                  {workshop.tools.map((tool, toolIndex) => (
                                    <span
                                      key={toolIndex}
                                      className="px-2 py-1 bg-cyan-900 bg-opacity-50 text-cyan-300 text-xs rounded border border-cyan-600"
                                    >
                                      {tool}
                                    </span>
                                  ))}
                                </div>
                              </div>

                              {/* Lab Environment */}
                              <div className="bg-black p-3 rounded border border-yellow-600">
                                <div className="text-yellow-400 text-sm font-semibold mb-2">Lab Environment:</div>
                                <div className="text-green-300 text-xs space-y-1">
                                  <div>► Isolated virtual machines provided</div>
                                  <div>► Pre-configured tools and datasets</div>
                                  <div>► Hands-on practical exercises</div>
                                  <div>► Take-home lab access for 30 days</div>
                                </div>
                              </div>
                            </div>
                          )}
                        </div>

                        {/* Action Button */}
                        <button className={`w-full mt-4 py-2 border ${workshop.color} hover:bg-opacity-20 transition-all duration-300 text-sm`}>
                          ./register-workshop.sh --id={workshop.id}
                        </button>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* System Status */}
              {loadedWorkshops.length === workshops.length && (
                <div className="mt-8 border-t border-green-600 pt-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="text-cyan-400">admin@lab-manager:</span>
                      <span className="text-white">~$</span>
                      <span className="text-green-400 ml-2">./workshop-summary.sh</span>
                    </div>
                    
                    <div className="ml-6 grid md:grid-cols-3 gap-6 text-sm">
                      <div className="bg-black p-4 rounded border border-green-600">
                        <div className="text-green-400 glow-text font-semibold mb-2">WORKSHOP STATS:</div>
                        <div className="space-y-1 text-green-300">
                          <div>► Total Workshops: 6</div>
                          <div>► Training Hours: 20+</div>
                          <div>► Max Participants: 175</div>
                          <div>► Skill Levels: All</div>
                        </div>
                      </div>
                      
                      <div className="bg-black p-4 rounded border border-cyan-600">
                        <div className="text-cyan-400 glow-text font-semibold mb-2">LAB FEATURES:</div>
                        <div className="space-y-1 text-cyan-300">
                          <div>► Virtual Environments</div>
                          <div>► Real-world Scenarios</div>
                          <div>► Expert Instructors</div>
                          <div>► Certification Ready</div>
                        </div>
                      </div>
                      
                      <div className="bg-black p-4 rounded border border-yellow-600">
                        <div className="text-yellow-400 glow-text font-semibold mb-2">REGISTRATION:</div>
                        <div className="space-y-1 text-yellow-300">
                          <div>► First Come, First Served</div>
                          <div>► Free with Conference</div>
                          <div>► Limited Seats</div>
                          <div>► Pre-registration Required</div>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 mt-6">
                      <span className="text-cyan-400">admin@lab-manager:</span>
                      <span className="text-white">~$</span>
                      <span className="cursor-blink text-green-400 ml-2">|</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Workshops;
