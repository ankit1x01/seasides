'use client';
import { useState, useEffect, useRef } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Image from 'next/image';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeSection, setActiveSection] = useState('mission');
  const sectionRef = useRef(null);
  const { isDark } = useTheme();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const sections = {
    story: {
      title: "How are we?",
      subtitle: "Our Story",
      content: "Seasides Information Security Conference is a leading conference dedicated to empowering students and professionals in the field of information security and ethical hacking.\n\nOur conference is designed to provide high-quality educational experiences and hands-on training at no cost, ensuring that everyone, regardless of their financial background, has the opportunity to enhance their skills and knowledge in cybersecurity."
    },
    mission: {
      title: "Democratizing Cybersecurity",
      subtitle: "Our Mission", 
      content: "Our mission is to democratize access to top-tier cybersecurity education by offering free workshops and training sessions led by industry experts along with fun and parties.\n\nWe strive to create an inclusive environment where students and aspiring professionals can learn, collaborate, and grow together, equipping them with the tools they need to succeed in the rapidly evolving cybersecurity landscape.\n\nJoin us for three days of insightful keynote speeches, technical sessions, hands-on workshops, and networking opportunities, as we address the most critical challenges in cybersecurity today."
    },
    achievements: {
      title: "Empowering the Future",
      subtitle: "What We Achieved",
      content: "Since our inception, Seasides's commitment to providing free, high-quality education has made a significant impact on the cybersecurity community, particularly among students.\n\nHere's a look at the key achievements from past conferences:",
      keyAchievements: [
        "Record-breaking Attendance",
        "Cutting-edge Workshops and Training", 
        "Advancing Cybersecurity Education",
        "Scholarships and Awards",
        "Community Building and Networking"
      ],
      conclusion: "We take pride in fostering a supportive environment where talent can flourish and where attendees leave inspired and equipped to tackle the challenges of the cybersecurity field."
    },
    attend: {
      title: "Join the Cyber Revolution",
      subtitle: "Who's In and What's On",
      description: "Whether you're a professional or just starting your journey in cybersecurity, this conference is designed for everyone passionate about protecting the digital world.",
      targetAudience: [
        "IT & Cybersecurity Professionals",
        "Government officials & policy makers",
        "Business leaders & entrepreneurs", 
        "Students & researchers interested in cybersecurity"
      ],
      eventHighlights: [
        { title: "Free Workshops", description: "Hands-on sessions by top experts." },
        { title: "Networking", description: "Connect with peers and mentors." },
        { title: "Career Growth", description: "Discover opportunities and insights." },
        { title: "Community", description: "Join a collaborative learning space." },
        { title: "Trends & Threats", description: "Stay updated on latest cyber issues." },
        { title: "After Party", description: "Relax, network, and celebrate!" }
      ],
      partyNote: "Guilty as charged—we throw epic parties! 😉"
    }
  };

  const teamMembers = [
    {
      "name": "Prashant KV",
      "image": "Prashant_KV.jpeg",
      "role": "Co-Founder Seasides",
      "nickname": "Sardaar Khan",
      "quote": "Guilty as charged—we throw epic parties! 😉",
      "fullDescription": "He is the Co-Founder of the Seasides Community, known for his passion for helping others and, guilty as charged, for throwing amazing parties. With over 20 years of experience in the security domain, he has mentored countless cybersecurity enthusiasts and is like family to many. The team lovingly calls him the 'Sardaar Khan.'",
      "experience": "20+ years",
      "socialMedia": {
        "twitter": "https://twitter.com/goodbestguy",
        "linkedin": "https://www.linkedin.com/in/prashant-venkatesh-99018999"
      },
      "keyTraits": [
        "Passionate about helping others",
        "Amazing party organizer",
        "Mentor to countless cybersecurity enthusiasts",
        "Like family to many in the community"
      ]
    },
    {
      "name": "Parveen Yadav",
      "image": "Parveen_Yadav.jpeg",
      "role": "Co-Founder Seasides",
      "nickname": "Munna Bhaiya",
      "fullDescription": "As the Co-Founder of Seasides, he embodies the essence of leadership through his genuine care for the team, fostering an environment where every member feels valued and supported—like family. His leadership style is characterized by empathy and accessibility, making him approachable for team members seeking guidance or mentorship. With extensive expertise in cybersecurity, he not only stays at the forefront of industry trends but also actively engages in the community through bug hunting on major platforms like Hackerone & Bugcrowd. This hands-on involvement not only keeps his skills sharp but also serves as an inspiring example for the team, demonstrating the importance of continuous learning and innovation. His commitment to nurturing newcomers in cybersecurity reflects his passion for mentorship. He takes the time to guide them through the complexities of the field, sharing insights and resources that empower them to thrive. This investment in their growth helps cultivate a culture of knowledge-sharing and collaboration within the team. Affectionately referred to as \"Munna Bhaiya,\" he has created an undeniable presence that resonates with the team.",
      "expertise": ["Bug Hunting", "Vulnerability Research", "Team Leadership", "Mentorship"],
      "platforms": ["Hackerone", "Bugcrowd"],
      "socialMedia": {
        "twitter": "https://twitter.com/parveen1015"
      },
      "keyTraits": [
        "Leadership through genuine care",
        "Empathy and accessibility", 
        "Active bug hunter",
        "Passionate mentor for newcomers",
        "Culture of knowledge-sharing"
      ]
    },
    {
      "name": "Abhinav Khanna",
      "image": "Abhinav_Khanna.jpeg",
      "role": "Information Security Professional",
      "fullDescription": "Abhinav Khanna is an Information Security Professional with 6+ years of experience. His areas of expertise include web apps, mobile apps, APIs and cloud. He has spoken at conferences like BlackHat Asia, BlackHat MEA, BSides Vancouver etc. He is always eager to help and guide others in the field, sharing his knowledge and experience to support the growth of fellow security enthusiasts. His dedication to both advancing security practices and nurturing the next generation of professionals is widely recognized within the community.",
      "experience": "6+ years",
      "expertise": ["Web Applications", "Mobile Applications", "APIs", "Cloud Security"],
      "conferences": ["BlackHat Asia", "BlackHat MEA", "BSides Vancouver"],
      "socialMedia": {
        "linkedin": "https://www.linkedin.com/in/abhinav-khanna-a2633b114/"
      },
      "keyTraits": [
        "Eager to help and guide others",
        "Knowledge sharing advocate",
        "Supports growth of security enthusiasts",
        "Recognized community contributor"
      ]
    },
    {
      "name": "Seedon Adlin D'souza",
      "image": "seedon.jpeg",
      "role": "Hardware Security Expert",
      "fullDescription": "He is a distinguished hardware security expert with over seven years of experience in the field of information security. Since 2019, he has been a prominent speaker at various conferences, where he shares his expertise in drone security, RF hacking and hardware exploitation. Currently employed at Sony, Seedon is recognised for his collaborative spirit, having contributed to the design of conference badges and the village at Seasides. His dedication to advancing the cybersecurity community is evident in his continuous effort to share knowledge and foster innovation.",
      "experience": "7+ years",
      "currentCompany": "Sony",
      "expertise": ["Hardware Security", "Drone Security", "RF Hacking", "Hardware Exploitation"],
      "speakingExperience": "Since 2019",
      "contributions": ["Conference Badge Design", "Village Design"],
      "socialMedia": {
        "twitter": "https://x.com/SeedonD",
        "linkedin": "https://www.linkedin.com/in/seedon/"
      },
      "keyTraits": [
        "Distinguished hardware security expert",
        "Prominent conference speaker",
        "Collaborative spirit",
        "Continuous knowledge sharing",
        "Innovation fostering"
      ]
    },
    {
      "name": "Kartheek Lade",
      "image": "Karteek.webp",
      "role": "Security Researcher",
      "fullDescription": "Kartheek Lade is a passionate security researcher with a strong focus on enhancing the security landscape of the Internet of Vehicles (IoV). He actively contributes to the Seasides community and serves as a technical committee member of the ASRG Vulnerability Management team, focusing on fortifying vehicle and embedded security. Kartheek is also a regular speaker and trainer at renowned international security conferences, including Seasides, DEFCON Car Hacking Village, BlackHat Arsenal, Secure Our Streets (SOS), C0c0n, and NullCon. Whether it's breaking down security barriers or sparking insightful discussions, he's always up for the challenge. 😉",
      "expertise": ["Internet of Vehicles (IoV)", "Vehicle Security", "Embedded Security", "Vulnerability Management"],
      "roles": ["ASRG Technical Committee Member"],
      "conferences": ["Seasides", "DEFCON Car Hacking Village", "BlackHat Arsenal", "Secure Our Streets (SOS)", "C0c0n", "NullCon"],
      "socialMedia": {
        "twitter": "https://twitter.com/0xh3nry",
        "linkedin": "https://www.linkedin.com/in/kartheeklade/"
      },
      "keyTraits": [
        "Passionate security researcher",
        "IoV security focus",
        "Regular international speaker",
        "Always up for challenges"
      ]
    },
    {
      "name": "Pankaj Upadhyay",
      "image": "Pankaj_Upadhyay.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/lazyhack3r",
        "linkedin": "https://www.linkedin.com/in/p4nk4j/"
      }
    },
    {
      "name": "Arun Mishra",
      "image": "Arun_Mishra.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/arun_2512",
        "linkedin": "https://www.linkedin.com/in/arun-k-mishra-049836163/"
      }
    },
    {
      "name": "Honey Merrin Sam",
      "image": "Honey_Merrin_Sam.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/missaug27",
        "linkedin": "https://www.linkedin.com/in/honey-merrin-sam/"
      }
    },
    {
      "name": "Narendra",
      "image": "Narendra_Team.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/0ddhawk",
        "linkedin": "https://www.linkedin.com/in/narendra-k-0981b7104/"
      }
    },
    {
      "name": "Parag Dave",
      "image": "Parag_Dave.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/parag_dave",
        "linkedin": "https://www.linkedin.com/in/daveparag/"
      }
    },
    {
      "name": "Sunita Sharma",
      "image": "sunita.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/0ddblade",
        "linkedin": "https://www.linkedin.com/in/sunita-sharma-681bbba2/"
      }
    },
    {
      "name": "Ashish Huria",
      "image": "ashish.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/AshishHuria",
        "linkedin": "https://www.linkedin.com/in/ashish-huria-219b49111/"
      }
    },
    {
      "name": "Devendra Kumar Sinha",
      "image": "Devendra_Kumar_Sinha.jpeg",
      "role": "Core Team Member",
      "socialMedia": {
        "twitter": "https://twitter.com/Debuhkzr",
        "linkedin": "https://www.linkedin.com/in/devendrakumarsinha/"
      }
    }
  ];

  const TeamMemberModal = ({ member, onClose }) => {
    if (!member) return null;

    return (
      <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 flex items-center justify-center p-4" onClick={onClose}>
        <div className={`max-w-2xl w-full max-h-[80vh] overflow-y-auto rounded-2xl shadow-2xl ${
          isDark ? 'bg-slate-800 border border-slate-700' : 'bg-white border border-gray-200'
        }`} onClick={(e) => e.stopPropagation()}>
          <div className="p-6">
            {/* Header */}
            <div className="flex items-start gap-4 mb-6">
              {member.image && (
                <div className="relative w-20 h-20 rounded-full overflow-hidden ring-4 ring-blue-500/30">
                  <Image
                    src={`/team-photos/${member.image}`}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
              )}
              <div className="flex-1">
                <h2 className={`text-2xl font-bold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  {member.name}
                  {member.nickname && (
                    <span className="text-lg font-medium text-blue-500 ml-2">&quot;{member.nickname}&quot;</span>
                  )}
                </h2>
                <p className={`text-lg ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>
                  {member.role}
                </p>
                {member.experience && (
                  <p className={`text-sm ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                    {member.experience} experience
                  </p>
                )}
              </div>
              <button
                onClick={onClose}
                className={`p-2 rounded-full transition-colors ${
                  isDark ? 'hover:bg-slate-700 text-slate-400' : 'hover:bg-gray-100 text-gray-500'
                }`}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Quote */}
            {member.quote && (
              <blockquote className={`mb-6 p-4 rounded-lg border-l-4 ${
                isDark 
                  ? 'bg-slate-700/50 border-cyan-400 text-cyan-100' 
                  : 'bg-blue-50 border-blue-400 text-blue-800'
              }`}>
                <p className="italic text-lg">&quot;{member.quote}&quot;</p>
              </blockquote>
            )}

            {/* Description */}
            {member.fullDescription && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  About
                </h3>
                <p className={`leading-relaxed ${isDark ? 'text-slate-200' : 'text-gray-700'}`}>
                  {member.fullDescription}
                </p>
              </div>
            )}

            {/* Expertise */}
            {member.expertise && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Expertise
                </h3>
                <div className="flex flex-wrap gap-2">
                  {member.expertise.map((skill, index) => (
                    <span
                      key={index}
                      className={`px-3 py-1 rounded-full text-sm ${
                        isDark 
                          ? 'bg-blue-900/50 text-blue-300 border border-blue-700' 
                          : 'bg-blue-100 text-blue-800 border border-blue-200'
                      }`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Key Traits */}
            {member.keyTraits && (
              <div className="mb-6">
                <h3 className={`text-lg font-semibold mb-3 ${isDark ? 'text-white' : 'text-gray-900'}`}>
                  Key Traits
                </h3>
                <ul className="space-y-2">
                  {member.keyTraits.map((trait, index) => (
                    <li key={index} className={`flex items-center gap-2 ${isDark ? 'text-slate-200' : 'text-gray-700'}`}>
                      <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {trait}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Social Media */}
            {member.socialMedia && (
              <div className="flex gap-4 pt-4 border-t border-gray-200 dark:border-slate-600">
                {member.socialMedia.twitter && (
                  <a
                    href={member.socialMedia.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-500 hover:text-blue-600 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                    Twitter
                  </a>
                )}
                {member.socialMedia.linkedin && (
                  <a
                    href={member.socialMedia.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-blue-700 hover:text-blue-800 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    LinkedIn
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  return (
    <section 
      ref={sectionRef}
      className={`py-20 relative overflow-hidden transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
      }`}
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className={`text-center mb-16 transform transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-4">
            <span className={`font-medium text-lg ${
              isDark 
                ? 'text-cyan-400' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
            }`}>
              About Seasides 2026
            </span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
            isDark 
              ? 'text-white' 
              : 'bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'
          }`}>
            India&apos;s Premier FREE
            <span className={`block ${
              isDark 
                ? 'text-cyan-400' 
                : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
            }`}>
              Cybersecurity Conference
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
        </div>

        {/* Section Navigation */}
        <div className={`flex justify-center mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`flex flex-wrap gap-2 p-2 rounded-2xl ${
            isDark ? 'bg-slate-800/60' : 'bg-white/60'
          } backdrop-blur-sm`}>
            {Object.entries(sections).map(([key, section]) => (
              <button
                key={key}
                onClick={() => setActiveSection(key)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeSection === key
                    ? isDark
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : isDark
                      ? 'text-slate-300 hover:text-white hover:bg-slate-700/50'
                      : 'text-slate-600 hover:text-slate-800 hover:bg-white/50'
                }`}
              >
                {section.subtitle}
              </button>
            ))}
          </div>
        </div>

        {/* Active Section Content */}
        <div className={`max-w-6xl mx-auto mb-20 transform transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className={`backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-xl transition-all duration-300 ${
            isDark 
              ? 'bg-slate-800/80 border border-slate-700/50' 
              : 'bg-white/80 border border-white/20'
          }`}>
            <div className="text-center space-y-6">
              <h3 className={`text-3xl md:text-4xl font-bold ${
                isDark 
                  ? 'text-cyan-400' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
              }`}>
                {sections[activeSection].title}
              </h3>
              
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 mx-auto"></div>
              
              <div className={`text-lg md:text-xl leading-relaxed ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}>
                {(sections[activeSection].content || sections[activeSection].description || '').split('\n\n').map((paragraph, index) => (
                  <p key={index} className={index > 0 ? 'mt-4' : ''}>
                    {paragraph}
                  </p>
                ))}
              </div>

              {/* Achievements List */}
              {activeSection === 'achievements' && sections[activeSection].keyAchievements && (
                <div className="mt-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {sections[activeSection].keyAchievements.map((achievement, index) => (
                      <div key={index} className={`p-4 rounded-xl border ${
                        isDark 
                          ? 'bg-slate-700/50 border-slate-600 text-slate-200' 
                          : 'bg-blue-50/50 border-blue-200 text-blue-800'
                      }`}>
                        <div className="flex items-center gap-3">
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold ${
                            isDark ? 'bg-cyan-500 text-black' : 'bg-blue-500 text-white'
                          }`}>
                            {index + 1}
                          </div>
                          <span className="font-medium">{achievement}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                  {sections[activeSection].conclusion && (
                    <p className={`mt-6 text-lg italic ${
                      isDark ? 'text-slate-300' : 'text-slate-600'
                    }`}>
                      {sections[activeSection].conclusion}
                    </p>
                  )}
                </div>
              )}

              {/* Event Highlights */}
              {activeSection === 'attend' && (
                <div className="mt-8 space-y-8">
                  <div>
                    <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                      Who Should Attend?
                    </h4>
                    <div className="grid md:grid-cols-2 gap-3">
                      {sections[activeSection].targetAudience.map((audience, index) => (
                        <div key={index} className={`flex items-center gap-3 p-3 rounded-lg ${
                          isDark ? 'bg-slate-700/30' : 'bg-white/50'
                        }`}>
                          <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{audience}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h4 className={`text-xl font-semibold mb-4 ${isDark ? 'text-white' : 'text-slate-800'}`}>
                      Event Highlights
                    </h4>
                    <div className="grid md:grid-cols-3 gap-4">
                      {sections[activeSection].eventHighlights.map((highlight, index) => (
                        <div key={index} className={`p-4 rounded-xl border text-center ${
                          isDark 
                            ? 'bg-slate-700/30 border-slate-600' 
                            : 'bg-white/70 border-blue-200'
                        }`}>
                          <h5 className={`font-semibold mb-2 ${
                            isDark ? 'text-cyan-400' : 'text-blue-600'
                          }`}>
                            {highlight.title}
                          </h5>
                          <p className={`text-sm ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}>
                            {highlight.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {sections[activeSection].partyNote && (
                    <div className={`p-6 rounded-2xl text-center ${
                      isDark 
                        ? 'bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-700/50' 
                        : 'bg-gradient-to-r from-purple-100 to-pink-100 border border-purple-200'
                    }`}>
                      <p className={`text-xl font-medium ${
                        isDark ? 'text-purple-300' : 'text-purple-700'
                      }`}>
                        {sections[activeSection].partyNote}
                      </p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className={`mt-20 transform transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-12">
            <h3 className={`text-4xl md:text-5xl font-bold mb-4 ${
              isDark 
                ? 'text-white' 
                : 'bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'
            }`}>
              Meet Our Team
            </h3>
            <p className={`text-lg ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              The passionate individuals making Seasides 2026 possible
            </p>
            <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {teamMembers.map((member, index) => (
              <div 
                key={index}
                onClick={() => setSelectedMember(member)}
                className={`group text-center transform hover:scale-105 transition-all duration-300 cursor-pointer ${
                  isDark 
                    ? 'hover:bg-slate-800/50' 
                    : 'hover:bg-white/50'
                } p-4 rounded-2xl backdrop-blur-sm`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : ''
                }}
              >
                <div className="relative mb-4 mx-auto w-24 h-24 overflow-hidden rounded-full ring-4 ring-blue-500/20 group-hover:ring-blue-500/50 transition-all duration-300">
                  {member.image ? (
                    <Image
                      src={`/team-photos/${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="96px"
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center text-2xl font-bold ${
                      isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h4 className={`font-semibold text-sm mb-1 ${
                  isDark 
                    ? 'text-white group-hover:text-cyan-400' 
                    : 'text-slate-800 group-hover:text-blue-600'
                } transition-colors duration-300`}>
                  {member.name}
                  {member.nickname && (
                    <span className="block text-xs text-blue-500 font-normal">
                      &quot;{member.nickname}&quot;
                    </span>
                  )}
                </h4>
                <p className={`text-xs ${
                  isDark 
                    ? 'text-slate-400 group-hover:text-slate-300' 
                    : 'text-slate-500 group-hover:text-slate-700'
                } transition-colors duration-300`}>
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Member Modal */}
      <TeamMemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default About;