import Link from 'next/link';

const WorkshopsEnhanced = () => {
  const workshopCategories = [
    {
      title: "Penetration Testing",
      description: "Hands-on workshops on web application and network penetration testing",
      icon: "🔍",
      topics: ["Web App Pentesting", "Network Security", "Mobile Security"]
    },
    {
      title: "Malware Analysis",
      description: "Deep dive into malware analysis techniques and reverse engineering",
      icon: "🦠",
      topics: ["Static Analysis", "Dynamic Analysis", "Reverse Engineering"]
    },
    {
      title: "Cloud Security",
      description: "Secure cloud infrastructure and container security workshops",
      icon: "☁️",
      topics: ["AWS Security", "Container Security", "DevSecOps"]
    },
    {
      title: "Digital Forensics",
      description: "Learn digital forensics investigation techniques",
      icon: "🔬",
      topics: ["Memory Forensics", "Network Forensics", "Mobile Forensics"]
    },
    {
      title: "Red Team Operations",
      description: "Advanced red team tactics and adversary simulation",
      icon: "⚔️",
      topics: ["OSINT", "Social Engineering", "C2 Infrastructure"]
    },
    {
      title: "AI/ML Security",
      description: "Security challenges in artificial intelligence and machine learning",
      icon: "🤖",
      topics: ["AI Attacks", "Model Security", "Adversarial ML"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-purple-800 mb-6">Check the Awesome Workshops</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg max-w-3xl mx-auto" style={{ color: '#7c3aed' }}>
            One of the most important things is choosing the workshop that aligns with your interests. Select the one that matters most to you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {workshopCategories.map((workshop, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="text-4xl mb-4">{workshop.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-3">{workshop.title}</h3>
              <p className="mb-4" style={{ color: '#1e40af' }}>{workshop.description}</p>
              <div className="space-y-2">
                {workshop.topics.map((topic, topicIndex) => (
                  <span key={topicIndex} className="inline-block bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full mr-2 mb-2">
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h3 className="text-2xl font-semibold text-teal-800 mb-4">Workshop Schedule</h3>
            <p className="mb-6" style={{ color: '#0f766e' }}>All workshops are free and designed for different skill levels - from beginners to advanced practitioners.</p>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div style={{ color: '#7c3aed' }}>Workshops</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">3</div>
                <div style={{ color: '#059669' }}>Days</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">500+</div>
                <div style={{ color: '#dc2626' }}>Participants</div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-semibold text-emerald-800 mb-6">Villages & Hands-on Labs</h3>
          <p className="mb-8 max-w-3xl mx-auto" style={{ color: '#0d9488' }}>
            Experience immersive learning environments designed to simulate real-world scenarios. Our villages provide continuous hands-on experience throughout the conference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/workshops">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                View Full Schedule
              </button>
            </Link>
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              Register for Workshops
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkshopsEnhanced;
