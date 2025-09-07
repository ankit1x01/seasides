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

          {/* Team Members Section */}
          <div className="mb-12">
            {/* Team Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-cyan-400 mb-4">Meet Our Team</h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The passionate cybersecurity professionals who make Seasides possible
              </p>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto mt-4 rounded-full"></div>
            </div>

            {/* Founders Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Founders</h3>
              <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {/* Prashant KV */}
                <div className="bg-gray-900 border-2 border-blue-400 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 p-1">
                      <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-slate-700">
                        PK
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-white">Prashant KV</h4>
                    <p className="text-sm font-medium mb-3 text-cyan-400">Co-Founder Seasides</p>
                    <p className="text-sm leading-relaxed mb-4 text-gray-300">
                      Over 20 years of experience in security domain, mentored countless cybersecurity enthusiasts
                    </p>
                    <div className="flex justify-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Parveen Yadav */}
                <div className="bg-gray-900 border-2 border-purple-400 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-purple-500 to-pink-600 p-1">
                      <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-2xl font-bold text-slate-700">
                        PY
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-2 text-white">Parveen Yadav</h4>
                    <p className="text-sm font-medium mb-3 text-cyan-400">Co-Founder Seasides</p>
                    <p className="text-sm leading-relaxed mb-4 text-gray-300">
                      Expertise in cybersecurity, bug hunter on Hackerone & Bugcrowd
                    </p>
                    <div className="flex justify-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Team Section */}
            <div>
              <h3 className="text-2xl font-bold text-center mb-8 text-cyan-400">Core Team Members</h3>
              <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
                {[
                  { name: "Pankaj Upadhyay", initials: "PU", color: "from-green-500 to-emerald-600" },
                  { name: "Arun Mishra", initials: "AM", color: "from-orange-500 to-red-600" },
                  { name: "Honey Merrin Sam", initials: "HS", color: "from-pink-500 to-rose-600" },
                  { name: "Narendra", initials: "N", color: "from-indigo-500 to-blue-600" },
                  { name: "Abhinav Khanna", initials: "AK", color: "from-teal-500 to-cyan-600", description: "Information Security Professional with 6+ years experience, spoken at BlackHat Asia, BlackHat MEA" },
                  { name: "Parag Dave", initials: "PD", color: "from-violet-500 to-purple-600" },
                  { name: "Sunita Sharma", initials: "SS", color: "from-yellow-500 to-orange-600" },
                  { name: "Ashish Huria", initials: "AH", color: "from-lime-500 to-green-600" },
                  { name: "Seedon Adlin D'souza", initials: "SD", color: "from-sky-500 to-blue-600" }
                ].map((member, index) => (
                  <div 
                    key={index}
                    className="bg-gray-900 border-2 border-gray-600 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:border-cyan-400"
                  >
                    <div className="text-center">
                      <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${member.color} p-1`}>
                        <div className="w-full h-full rounded-full bg-gray-200 flex items-center justify-center text-lg font-bold text-slate-700">
                          {member.initials}
                        </div>
                      </div>
                      <h4 className="text-lg font-semibold mb-2 text-white">{member.name}</h4>
                      {member.description && (
                        <p className="text-xs leading-relaxed mb-3 text-gray-300">{member.description}</p>
                      )}
                      <div className="flex justify-center gap-2">
                        <div className="w-7 h-7 rounded-full bg-blue-500 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                        </div>
                        <div className="w-7 h-7 rounded-full bg-blue-700 flex items-center justify-center text-white hover:scale-110 transition-transform cursor-pointer">
                          <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
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
