const AboutPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-gray-800 mb-6">About Seasides</h1>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg p-8 shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Our Story</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Seasides InfoSec Conference was born from a simple yet powerful vision: to democratize cybersecurity education and make world-class learning accessible to everyone, regardless of their background or financial situation.
            </p>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Founded by cybersecurity enthusiasts who believe that knowledge should be free, Seasides has grown from a small gathering to India's most loved cybersecurity conference, attracting thousands of participants from around the globe.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our commitment to providing free, high-quality education while maintaining the standards of international conferences like Black Hat and DEF CON has made us a unique platform in the cybersecurity community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🎯 Our Mission</h3>
              <p className="text-gray-600">
                To foster a global cybersecurity community by providing free, world-class education, networking opportunities, and hands-on learning experiences that empower individuals to build a safer digital world.
              </p>
            </div>
            <div className="bg-white rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">🔮 Our Vision</h3>
              <p className="text-gray-600">
                To be the world's leading free cybersecurity conference that bridges the knowledge gap and creates equal opportunities for learning, regardless of geographical or financial barriers.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">What Makes Seasides Special</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Completely Free</h4>
                <p className="text-gray-600 text-sm">No registration fees, no hidden costs. Education should be accessible to all.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Global Community</h4>
                <p className="text-gray-600 text-sm">Participants from over 30 countries join us annually.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">World-Class Content</h4>
                <p className="text-gray-600 text-sm">Quality that rivals international conferences like Black Hat and DEF CON.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-600">5+</div>
                <div className="text-gray-600">Years Running</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600">10,000+</div>
                <div className="text-gray-600">Participants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600">200+</div>
                <div className="text-gray-600">Speakers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-600">100+</div>
                <div className="text-gray-600">Sessions</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Organized by Seasides Social Welfare Foundation</h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Seasides is organized by the Seasides Social Welfare Foundation, a non-profit organization dedicated to advancing cybersecurity education and building a stronger, more secure digital community.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Our foundation works year-round to support cybersecurity education initiatives, provide scholarships to underprivileged students, and create platforms for knowledge sharing within the cybersecurity community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
