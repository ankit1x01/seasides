const About = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-blue-900 mb-8">About The Conference</h2>
        <div className="max-w-4xl mx-auto">
          <p className="mt-6 text-lg text-blue-700 text-center leading-relaxed">
            To stay ahead in the ever-evolving security landscape, continuous learning and networking are essential. As attacks grow more complex, sharpening our skills is crucial. Cybersecurity conferences are a powerful way to keep up with this fast-changing domain.
          </p>
          <p className="mt-6 text-lg text-purple-700 text-center leading-relaxed">
            Join us from <strong className="text-blue-600">February 19th to 21st</strong> for the Seasides InfoSec Conference 2026, where you'll gain valuable insights into cybersecurity. We're proud to offer top-notch courses and sessions for <strong className="text-green-600">free</strong>, bringing a community-driven experience that mirrors major global events like Blackhat and Defcon—ensuring equal learning opportunities for all.
          </p>
        </div>
        
        {/* Key highlights */}
        <div className="mt-12 grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🎓</div>
            <h3 className="text-xl font-semibold text-indigo-900 mb-2">Learn & Grow</h3>
            <p className="text-blue-800">Cutting-edge cybersecurity knowledge from industry experts</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold text-purple-900 mb-2">Network</h3>
            <p className="text-purple-800">Connect with like-minded professionals and build lasting relationships</p>
          </div>
          <div className="text-center p-6 bg-white rounded-xl shadow-lg">
            <div className="text-4xl mb-4">🆓</div>
            <h3 className="text-xl font-semibold text-emerald-900 mb-2">Completely Free</h3>
            <p className="text-emerald-800">All sessions, workshops, and networking events at zero cost</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
