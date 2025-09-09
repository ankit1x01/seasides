import Link from 'next/link';

const About = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-800 mb-6">About The Conference</h2>
          <div className="w-24 h-1 bg-blue-600 mx-auto mb-8"></div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-center mb-8 leading-relaxed" style={{ color: '#1e40af' }}>
            To stay ahead in the ever-evolving security landscape, continuous learning and networking are essential. As attacks grow more complex, sharpening our skills is crucial. Cybersecurity conferences are a powerful way to keep up with this fast-changing domain.
          </p>
          
          <p className="text-lg text-center mb-12 leading-relaxed" style={{ color: '#1e40af' }}>
            Join us from <strong className="text-blue-600">February 19th to 21st</strong> for the Seasides InfoSec Conference 2026, where you&apos;ll gain valuable insights into cybersecurity. We&apos;re proud to offer top-notch courses and sessions for <strong className="text-green-600">free</strong>, bringing a community-driven experience that mirrors major global events like Blackhat and Defcon—ensuring equal learning opportunities for all.
          </p>

          <div className="text-center mb-12">
            <h3 className="text-2xl font-semibold text-purple-800 mb-6">Why Join Conference</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🎯</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Expert Insights</h4>
                <p style={{ color: '#7c3aed' }}>Learn from industry leaders and cybersecurity experts</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">🤝</span>
                </div>
                <h4 className="font-semibold text-lg mb-2">Networking</h4>
                <p style={{ color: '#059669' }}>Connect with like-minded professionals and build lasting relationships</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                </div>
                <h4 className="font-semibold text-lg mb-2">Hands-on Learning</h4>
                <p style={{ color: '#dc2626' }}>Participate in workshops and villages for practical experience</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <blockquote className="text-xl italic text-gray-700 mb-8">
              &quot;Shift your perspective on Security - How do you adapt as a technology enthusiast, security engineer, or developer amidst industry changes? Discover insights from those leading the way&quot;
            </blockquote>
            <Link href="/about">
              <button className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors">
                Learn More About Seasides
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
