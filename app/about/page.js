import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const AboutPage = () => {
  return (
    <main className="relative">
      <Navbar />
      <div className="min-h-screen bg-black">
        <div className="container mx-auto px-6 py-16">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-cyan-400 mb-6">About Seasides</h1>
            <div className="w-24 h-1 bg-cyan-400 mx-auto mb-8"></div>
          </div>

          <div className="max-w-4xl mx-auto">
          <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-8 shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Our Story</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Seasides InfoSec Conference was born from a simple yet powerful vision: to democratize cybersecurity education and make world-class learning accessible to everyone, regardless of their background or financial situation.
            </p>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Founded by cybersecurity enthusiasts who believe that knowledge should be free, Seasides has grown from a small gathering to India&apos;s most loved cybersecurity conference, attracting thousands of participants from around the globe.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our commitment to providing free, high-quality education while maintaining the standards of international conferences like Black Hat and DEF CON has made us a unique platform in the cybersecurity community.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-900 border-2 border-green-400 rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-green-400 mb-4">🎯 Our Mission</h3>
              <p className="text-gray-300">
                To foster a global cybersecurity community by providing free, world-class education, networking opportunities, and hands-on learning experiences that empower individuals to build a safer digital world.
              </p>
            </div>
            <div className="bg-gray-900 border-2 border-purple-400 rounded-lg p-8 shadow-md">
              <h3 className="text-xl font-semibold text-purple-400 mb-4">🔮 Our Vision</h3>
              <p className="text-gray-300">
                To be the world&apos;s leading free cybersecurity conference that bridges the knowledge gap and creates equal opportunities for learning, regardless of geographical or financial barriers.
              </p>
            </div>
          </div>

          <div className="bg-gray-900 border-2 border-yellow-400 rounded-lg p-8 shadow-md mb-12">
            <h2 className="text-2xl font-semibold text-yellow-400 mb-6">What Makes Seasides Special</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-green-900 border-2 border-green-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">💝</span>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-green-400">Completely Free</h4>
                <p className="text-gray-300 text-sm">No registration fees, no hidden costs. Education should be accessible to all.</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-900 border-2 border-blue-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🌍</span>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-blue-400">Global Community</h4>
                <p className="text-gray-300 text-sm">Participants from over 30 countries join us annually.</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-900 border-2 border-purple-400 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🏆</span>
                </div>
                <h4 className="font-semibold text-lg mb-2 text-purple-400">World-Class Content</h4>
                <p className="text-gray-300 text-sm">Quality that rivals international conferences like Black Hat and DEF CON.</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border-2 border-pink-400 rounded-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-pink-400 mb-6 text-center">By the Numbers</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-blue-400">5+</div>
                <div className="text-gray-300">Years Running</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-400">10,000+</div>
                <div className="text-gray-300">Participants</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">200+</div>
                <div className="text-gray-300">Speakers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-400">100+</div>
                <div className="text-gray-300">Sessions</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 border-2 border-cyan-400 rounded-lg p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-cyan-400 mb-6">Organized by Seasides Social Welfare Foundation</h2>
            <p className="text-gray-300 mb-4 leading-relaxed">
              Seasides is organized by the Seasides Social Welfare Foundation, a non-profit organization dedicated to advancing cybersecurity education and building a stronger, more secure digital community.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Our foundation works year-round to support cybersecurity education initiatives, provide scholarships to underprivileged students, and create platforms for knowledge sharing within the cybersecurity community.
            </p>
          </div>
        </div>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default AboutPage;
