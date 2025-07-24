const SponsorsPage = () => {
  const sponsorTiers = [
    {
      tier: "Diamond Sponsors",
      color: "from-blue-400 to-blue-600",
      amount: "₹5,00,000",
      benefits: [
        "Prime booth location",
        "30-minute keynote slot",
        "Logo on all conference materials",
        "5 complimentary passes",
        "Social media promotion",
        "Website homepage placement"
      ],
      sponsors: ["HackerOne", "Bugcrowd", "Checkmarx", "DNIF"]
    },
    {
      tier: "Platinum Sponsors", 
      color: "from-gray-400 to-gray-600",
      amount: "₹3,00,000",
      benefits: [
        "Premium booth location",
        "15-minute presentation slot",
        "Logo on conference materials",
        "3 complimentary passes",
        "Social media mentions",
        "Website placement"
      ],
      sponsors: ["ArmorCode", "CloudSEK", "Cobalt.io", "SecureLayer7"]
    },
    {
      tier: "Gold Sponsors",
      color: "from-yellow-400 to-yellow-600", 
      amount: "₹2,00,000",
      benefits: [
        "Standard booth space",
        "5-minute demo slot",
        "Logo on select materials",
        "2 complimentary passes",
        "Website listing",
        "LinkedIn promotion"
      ],
      sponsors: ["RiskProfiler", "Enciphers", "ComplianceCow", "Kloudle"]
    },
    {
      tier: "Silver Sponsors",
      color: "from-gray-300 to-gray-500",
      amount: "₹1,00,000", 
      benefits: [
        "Exhibition space",
        "Logo on website",
        "1 complimentary pass",
        "Digital materials inclusion",
        "Social media mentions"
      ],
      sponsors: ["Prowler", "Fortive", "PureID", "Evren"]
    }
  ];

  const communitySponsors = [
    "High Radius", "X-Biz Ventures", "Altered Security", 
    "Network Intelligence", "Arch0", "More sponsors..."
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">Our Sponsors</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We are grateful to our amazing sponsors who make this free conference possible and support the cybersecurity community's growth.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {sponsorTiers.map((tier, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className={`bg-gradient-to-r ${tier.color} text-white p-6`}>
                <h2 className="text-2xl font-bold mb-2">{tier.tier}</h2>
                <p className="text-3xl font-bold">{tier.amount}</p>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Benefits Include:</h3>
                <ul className="text-gray-600 space-y-2 mb-6">
                  {tier.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex}>• {benefit}</li>
                  ))}
                </ul>
                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">Current Sponsors:</h4>
                  <div className="flex flex-wrap gap-2">
                    {tier.sponsors.map((sponsor, sponsorIndex) => (
                      <span key={sponsorIndex} className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                        {sponsor}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Community Sponsors</h2>
          <p className="text-center text-gray-600 mb-8">
            Special thanks to our community sponsors who support specific aspects of the conference.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {communitySponsors.map((sponsor, index) => (
              <div key={index} className="bg-gray-100 px-6 py-3 rounded-lg">
                <span className="text-gray-700 font-medium">{sponsor}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Why Sponsor Seasides?</h2>
            <ul className="text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-blue-600 mr-2">🎯</span>
                Reach 2,500+ cybersecurity professionals and enthusiasts
              </li>
              <li className="flex items-start">
                <span className="text-green-600 mr-2">🌍</span>
                Global audience with participants from 30+ countries
              </li>
              <li className="flex items-start">
                <span className="text-purple-600 mr-2">💡</span>
                Associate your brand with cutting-edge security innovation
              </li>
              <li className="flex items-start">
                <span className="text-red-600 mr-2">🤝</span>
                Support the cybersecurity community's education and growth
              </li>
              <li className="flex items-start">
                <span className="text-yellow-600 mr-2">📈</span>
                Generate leads and build meaningful business relationships
              </li>
            </ul>
          </div>
          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Sponsorship Impact</h2>
            <div className="space-y-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">2,500+</div>
                <div className="text-gray-600">Expected Attendees</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">50+</div>
                <div className="text-gray-600">Industry Leaders</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">100+</div>
                <div className="text-gray-600">Technical Sessions</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-red-600">3</div>
                <div className="text-gray-600">Days of Networking</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-md text-center">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Become a Sponsor</h2>
          <p className="text-gray-600 mb-8 max-w-3xl mx-auto">
            Join us in making cybersecurity education accessible to all. Partner with Seasides 2026 and be part of something meaningful.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
              Download Sponsorship Brochure
            </button>
            <button className="px-8 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors">
              Contact Sponsorship Team
            </button>
          </div>
          <div className="mt-6 text-sm text-gray-500">
            <p>For custom sponsorship packages, please reach out to our team.</p>
            <p className="mt-2">Email: sponsors@seasides.net | Phone: +91-XXX-XXX-XXXX</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SponsorsPage;
