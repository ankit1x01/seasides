const WorkshopsPage = () => {
  const workshopSchedule = [
    {
      day: "Day 1 - Feb 20",
      workshops: [
        { time: "09:00-12:00", title: "Web Application Penetration Testing", level: "Beginner", instructor: "Security Expert 1" },
        { time: "13:00-16:00", title: "Malware Analysis Fundamentals", level: "Intermediate", instructor: "Security Expert 2" },
        { time: "17:00-19:00", title: "OSINT for Security Professionals", level: "Beginner", instructor: "Security Expert 3" }
      ]
    },
    {
      day: "Day 2 - Feb 21", 
      workshops: [
        { time: "09:00-12:00", title: "Advanced Red Team Operations", level: "Advanced", instructor: "Security Expert 4" },
        { time: "13:00-16:00", title: "Cloud Security Best Practices", level: "Intermediate", instructor: "Security Expert 5" },
        { time: "17:00-19:00", title: "Digital Forensics Investigation", level: "Intermediate", instructor: "Security Expert 6" }
      ]
    },
    {
      day: "Day 3 - Feb 22",
      workshops: [
        { time: "09:00-12:00", title: "AI/ML Security Challenges", level: "Advanced", instructor: "Security Expert 7" },
        { time: "13:00-16:00", title: "Mobile Application Security", level: "Intermediate", instructor: "Security Expert 8" },
        { time: "17:00-19:00", title: "Incident Response Workshop", level: "Beginner", instructor: "Security Expert 9" }
      ]
    }
  ];

  const villages = [
    {
      name: "Lock Pick Village",
      description: "Learn physical security techniques and lock picking skills",
      icon: "🔐",
      difficulty: "All Levels"
    },
    {
      name: "Social Engineering Village", 
      description: "Understand human psychology in cybersecurity contexts",
      icon: "🧠",
      difficulty: "All Levels"
    },
    {
      name: "Car Hacking Village",
      description: "Explore automotive cybersecurity and vehicle vulnerabilities",
      icon: "🚗",
      difficulty: "Advanced"
    },
    {
      name: "IoT Village",
      description: "Hands-on with Internet of Things security challenges",
      icon: "📱",
      difficulty: "Intermediate"
    },
    {
      name: "Wireless Village",
      description: "Wi-Fi, Bluetooth, and radio frequency security testing",
      icon: "📡",
      difficulty: "Intermediate"
    },
    {
      name: "Hardware Hacking Village",
      description: "Circuit analysis, firmware extraction, and hardware exploitation",
      icon: "🔧",
      difficulty: "Advanced"
    }
  ];

  const getLevelColor = (level) => {
    switch(level) {
      case 'Beginner': return 'bg-green-100 text-green-800';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800';
      case 'Advanced': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Workshops & Villages</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in hands-on learning experiences designed to enhance your cybersecurity skills through practical workshops and interactive villages.
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Workshop Schedule</h2>
          <div className="grid lg:grid-cols-3 gap-8">
            {workshopSchedule.map((day, dayIndex) => (
              <div key={dayIndex} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="bg-blue-600 text-white p-4">
                  <h3 className="text-xl font-semibold">{day.day}</h3>
                </div>
                <div className="p-6">
                  {day.workshops.map((workshop, workshopIndex) => (
                    <div key={workshopIndex} className="mb-6 last:mb-0">
                      <div className="flex justify-between items-start mb-2">
                        <span className="text-sm font-medium text-blue-600">{workshop.time}</span>
                        <span className={`text-xs px-2 py-1 rounded-full ${getLevelColor(workshop.level)}`}>
                          {workshop.level}
                        </span>
                      </div>
                      <h4 className="font-semibold text-gray-800 mb-1">{workshop.title}</h4>
                      <p className="text-sm text-gray-600">by {workshop.instructor}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-800 mb-8 text-center">Interactive Villages</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Our villages provide continuous, hands-on learning experiences throughout the conference. Drop in anytime and learn at your own pace.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {villages.map((village, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{village.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{village.name}</h3>
                <p className="text-gray-600 mb-4">{village.description}</p>
                <span className={`text-sm px-3 py-1 rounded-full ${getLevelColor(village.difficulty)}`}>
                  {village.difficulty}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
          <div className="text-center">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Workshop Registration</h2>
            <p className="text-gray-600 mb-6 max-w-3xl mx-auto">
              All workshops and villages are completely free! However, space is limited for workshops, so early registration is recommended.
            </p>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">25+</div>
                <div className="text-gray-600">Workshops</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">6</div>
                <div className="text-gray-600">Villages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">72</div>
                <div className="text-gray-600">Hours of Learning</div>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Register for Workshops
              </button>
              <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
                Download Schedule PDF
              </button>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">What to Bring</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Required</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• Laptop with administrative privileges</li>
                <li>• Power adapter and extension cord</li>
                <li>• Valid ID for registration</li>
                <li>• Notebook and pen for taking notes</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">Recommended</h3>
              <ul className="text-gray-600 space-y-2">
                <li>• USB-C to USB-A adapter</li>
                <li>• Ethernet cable</li>
                <li>• Portable battery pack</li>
                <li>• Business cards for networking</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkshopsPage;
