const SpeakersPage = () => {
  const speakerCategories = [
    {
      title: "Keynote Speakers",
      description: "Industry leaders sharing their vision for the future of cybersecurity",
      count: "5+ Speakers"
    },
    {
      title: "Technical Experts", 
      description: "Deep technical presentations on cutting-edge security research",
      count: "20+ Speakers"
    },
    {
      title: "Industry Veterans",
      description: "Experienced professionals sharing real-world insights",
      count: "15+ Speakers"
    },
    {
      title: "Rising Stars",
      description: "Emerging talent presenting innovative security solutions",
      count: "10+ Speakers"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Visionary Speakers</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Meet the industry experts, researchers, and thought leaders who will be sharing their knowledge at Seasides 2026.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {speakerCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">{category.title}</h3>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="text-blue-600 font-semibold">{category.count}</div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Speaker Tracks & Topics</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-semibold text-lg text-blue-600 mb-3">🛡️ Defensive Security</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Threat Hunting</li>
                <li>• Incident Response</li>
                <li>• SOC Operations</li>
                <li>• SIEM & Analytics</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-red-600 mb-3">⚔️ Offensive Security</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Red Team Operations</li>
                <li>• Penetration Testing</li>
                <li>• Vulnerability Research</li>
                <li>• Exploit Development</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold text-lg text-green-600 mb-3">🚀 Emerging Technologies</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• AI/ML Security</li>
                <li>• Cloud Security</li>
                <li>• IoT Security</li>
                <li>• Blockchain Security</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Call for Speakers</h2>
          <p className="text-gray-600 mb-6">
            Are you a cybersecurity expert with insights to share? We&apos;re still accepting speaker proposals for Seasides 2026.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Submit Proposal
            </button>
            <button className="px-8 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors">
              Speaker Guidelines
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpeakersPage;
