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
      title: "Born from Necessity",
      subtitle: "What's our Story ?",
      icon: "origin",
      content: "In 2019, a group of passionate cybersecurity enthusiasts recognized a critical gap in the industry – quality security education was becoming a privilege, not a right. Too many brilliant minds were being left behind due to financial barriers.",
      fullStory: "Seasides emerged from the null security community in India, inspired by a simple yet revolutionary idea: what if world-class cybersecurity education was completely free? What if anyone, regardless of their background or financial situation, could access the same high-quality training that was previously available only to the privileged few?",
      highlights: [
        { stat: "2019", label: "Founded", description: "Born from the null security community" },
        { stat: "100%", label: "Free Education", description: "No barriers, just learning" },
        { stat: "5000+", label: "Students Impacted", description: "Across India and beyond" }
      ],
      quote: "We believe that cybersecurity knowledge should be a fundamental right, not a luxury."
    },
    mission: {
      title: "Democratizing Digital Defense",
      subtitle: "What's our Mission ?",
      icon: "mission", 
      content: "Our mission transcends traditional conference boundaries. We're building a movement that transforms how cybersecurity education is delivered, consumed, and scaled across communities.",
      vision: "To create a world where anyone with passion and curiosity can become a cybersecurity expert, regardless of their socioeconomic background.",
      pillars: [
        {
          title: "Free Quality Education",
          description: "World-class workshops and training sessions led by industry pioneers",
          icon: "education"
        },
        {
          title: "Community First",
          description: "Building lasting connections between students, professionals, and mentors",
          icon: "community"
        },
        {
          title: "Hands-on Learning",
          description: "Practical, real-world skills that matter in today's threat landscape",
          icon: "practice"
        },
        {
          title: "Industry Connection",
          description: "Bridging the gap between academia and the professional world",
          icon: "bridge"
        }
      ],
      impact: "Three days of transformation: keynotes, technical deep-dives, hands-on labs, career guidance, and yes – legendary networking parties that forge lifelong professional relationships."
    },
    achievements: {
      title: "Redefining Success",
      subtitle: "What we Achieved ?",
      icon: "achievements",
      content: "Success isn't measured in revenue – it's measured in lives changed, careers launched, and communities strengthened.",
      keyAchievements: [
        {
          title: "5000+ Lives Transformed",
          description: "Students and professionals whose careers were accelerated through our programs",
          metric: "5000+",
          icon: "people"
        },
        {
          title: "Zero-Cost Education Model",
          description: "Proving that quality doesn't require a premium price tag",
          metric: "₹0",
          icon: "free"
        },
        {
          title: "50+ Industry Experts",
          description: "Top-tier speakers and trainers who believe in our mission",
          metric: "50+",
          icon: "experts"
        },
        {
          title: "15+ Fortune 500 Partners",
          description: "Leading companies supporting our vision of accessible education",
          metric: "15+",
          icon: "partners"
        },
        {
          title: "100+ Job Placements",
          description: "Direct career opportunities created through our network",
          metric: "100+",
          icon: "jobs"
        }
      ],
      testimonial: {
        text: "Seasides didn't just teach me cybersecurity – it gave me a career, a community, and a purpose.",
        author: "Former Student, Now Security Architect at Microsoft"
      }
    },
    attend: {
      title: "Your Cyber Journey Awaits",
      subtitle: "Who should Attend ?",
      icon: "audience",
      description: "Whether you're defending your first network or leading enterprise security, Seasides is designed for every stage of your cybersecurity journey.",
      targetAudience: [
        {
          title: "Students & New Graduates",
          description: "Launch your career with hands-on training from industry legends",
          benefits: ["Free certification paths", "Direct mentorship", "Job placement assistance"],
          icon: "student"
        },
        {
          title: "Cybersecurity Professionals", 
          description: "Stay ahead of emerging threats and advance your expertise",
          benefits: ["Advanced threat hunting", "Zero-day research insights", "C-suite networking"],
          icon: "professional"
        },
        {
          title: "Business Leaders & CTOs",
          description: "Understand the strategic implications of cybersecurity",
          benefits: ["Risk management strategies", "Compliance frameworks", "Executive briefings"],
          icon: "executive"
        },
        {
          title: "Government & Policy Makers",
          description: "Shape the future of national cybersecurity policy",
          benefits: ["Policy workshops", "Threat landscape briefings", "International cooperation"],
          icon: "government"
        }
      ],
      experienceHighlights: [
        { 
          title: "Capture The Flag (CTF)", 
          description: "Real-world hacking challenges with cash prizes",
          intensity: "High",
          color: "red"
        },
        { 
          title: "Zero-Day Showcase", 
          description: "Exclusive reveals of cutting-edge research",
          intensity: "Elite",
          color: "purple" 
        },
        { 
          title: "Career Lab", 
          description: "Resume reviews, mock interviews, job matching",
          intensity: "Practical",
          color: "green"
        },
        { 
          title: "Hardware Hacking Village", 
          description: "Break things, learn how they break, fix them",
          intensity: "Hands-on",
          color: "blue"
        },
        { 
          title: "Networking Gala", 
          description: "Epic parties that build lasting professional bonds",
          intensity: "Legendary",
          color: "gold"
        }
      ],
      callToAction: "Ready to level up your cybersecurity game? Join 2000+ professionals for India's most impactful security conference.",
      partyNote: "Fair warning: Our networking parties are so good, they're practically mandatory. 🎉"
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
      "image": "Karteek.jpeg",
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
                <p className={`text-lg ${isDark ? 'text-deep-ocean' : 'text-blue-600'}`}>
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
      className="py-20 relative overflow-hidden transition-colors duration-300 bg-light-gray"
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
            <span className="font-medium text-lg text-deep-ocean">
              About Seasides
            </span>
          </div>
          <h2 className={`text-5xl md:text-6xl font-bold mb-6 ${
            isDark
              ? 'text-white'
              : 'text-deep-ocean'
          }`}>
            India&apos;s Premier FREE
            <span className={`block ${
              isDark
                ? 'text-sunset-orange'
                : 'text-sunset-orange'
            }`}>
              Cybersecurity Conference
            </span>
          </h2>
          <div className="w-24 h-1 bg-sunset-orange mx-auto rounded-full"></div>
        </div>

        {/* Section Navigation */}
        <div className={`mb-12 transform transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Desktop: centered layout */}
          <div className="hidden md:flex justify-center">
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
                        ? 'bg-sunset-orange text-black shadow-lg shadow-sunset-orange/25'
                        : 'bg-deep-ocean text-white shadow-lg shadow-deep-ocean-blue/25'
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

          {/* Mobile: horizontal scrollable layout */}
          <div className="md:hidden overflow-x-auto scrollbar-hide">
            <div className={`flex gap-2 p-2 rounded-2xl min-w-max mx-2 ${
              isDark ? 'bg-slate-800/60' : 'bg-white/60'
            } backdrop-blur-sm`}>
              {Object.entries(sections).map(([key, section]) => (
                <button
                  key={key}
                  onClick={() => setActiveSection(key)}
                  className={`px-4 py-2.5 rounded-xl font-medium whitespace-nowrap transition-all duration-300 ${
                    activeSection === key
                      ? isDark
                        ? 'bg-sunset-orange text-black shadow-lg shadow-sunset-orange/25'
                        : 'bg-deep-ocean text-white shadow-lg shadow-deep-ocean-blue/25'
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
                  ? 'text-deep-ocean' 
                  : 'text-deep-ocean'
              }`}>
                {sections[activeSection].title}
              </h3>
              
              <div className="w-16 h-0.5 bg-sunset-orange mx-auto"></div>
              
              {/* Modern Section Graphics */}
              <div className="mb-8 flex justify-center relative">
                {activeSection === 'story' && (
                  <div className="relative group">
                    <div className={`w-48 h-48 rounded-3xl relative overflow-hidden ${
                      isDark ? 'bg-deep-ocean/20' : 'bg-deep-ocean/10'
                    }`} style={{ animation: 'modernFloat 6s ease-in-out infinite' }}>
                      {/* Premium shimmer effect */}
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                      
                      {/* Central icon with modern design */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-2xl ${isDark ? 'bg-deep-ocean/40' : 'bg-deep-ocean/40'} flex items-center justify-center backdrop-blur-sm border ${isDark ? 'border-deep-ocean/30' : 'border-deep-ocean/30'}`}>
                          <svg className={`w-10 h-10 ${isDark ? 'text-deep-ocean' : 'text-deep-ocean'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                          </svg>
                        </div>
                      </div>
                      
                      {/* Floating origin particles */}
                      <div className="absolute top-6 left-10 w-3 h-3 bg-sunset-orange rounded-full opacity-60" style={{ animation: 'particleFloat 4s ease-in-out infinite' }}></div>
                      <div className="absolute bottom-8 right-8 w-2 h-2 bg-deep-ocean rounded-full opacity-70" style={{ animation: 'particleFloat 3s ease-in-out infinite 0.5s' }}></div>
                      <div className="absolute top-16 right-6 w-1.5 h-1.5 bg-sunny-yellow rounded-full opacity-80" style={{ animation: 'particleFloat 5s ease-in-out infinite 1s' }}></div>
                    </div>
                  </div>
                )}
                
                {activeSection === 'mission' && (
                  <div className="relative group">
                    <div className={`w-48 h-48 rounded-3xl relative overflow-hidden ${
                      isDark ? 'bg-sunset-orange/20' : 'bg-sunset-orange/10'
                    }`} style={{ animation: 'modernFloat 6s ease-in-out infinite 1s' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-2xl ${isDark ? 'bg-sunset-orange/40' : 'bg-sunset-orange/40'} flex items-center justify-center backdrop-blur-sm border ${isDark ? 'border-sunset-orange/30' : 'border-sunset-orange/30'}`}>
                          <svg className={`w-10 h-10 ${isDark ? 'text-sunset-orange' : 'text-sunset-orange'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute top-4 left-8 w-3 h-3 bg-sunset-orange rounded-full opacity-60" style={{ animation: 'particleFloat 3.5s ease-in-out infinite 0.8s' }}></div>
                      <div className="absolute bottom-10 right-10 w-2 h-2 bg-sunny-yellow rounded-full opacity-70" style={{ animation: 'particleFloat 4.5s ease-in-out infinite 0.3s' }}></div>
                      <div className="absolute top-20 right-4 w-1.5 h-1.5 bg-deep-ocean rounded-full opacity-80" style={{ animation: 'particleFloat 4s ease-in-out infinite 1.2s' }}></div>
                    </div>
                  </div>
                )}
                
                {activeSection === 'achievements' && (
                  <div className="relative group">
                    <div className={`w-48 h-48 rounded-3xl relative overflow-hidden ${
                      isDark ? 'bg-sunny-yellow/20' : 'bg-sunny-yellow/10'
                    }`} style={{ animation: 'modernFloat 6s ease-in-out infinite 2s' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-2xl ${isDark ? 'bg-sunny-yellow/40' : 'bg-sunny-yellow/40'} flex items-center justify-center backdrop-blur-sm border ${isDark ? 'border-sunny-yellow/30' : 'border-sunny-yellow/30'}`}>
                          <svg className={`w-10 h-10 ${isDark ? 'text-sunny-yellow' : 'text-sunny-yellow'}`} fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute top-7 left-6 w-3 h-3 bg-sunny-yellow rounded-full opacity-60" style={{ animation: 'particleFloat 3s ease-in-out infinite 0.4s' }}></div>
                      <div className="absolute bottom-6 right-7 w-2 h-2 bg-sunset-orange rounded-full opacity-70" style={{ animation: 'particleFloat 4s ease-in-out infinite 0.9s' }}></div>
                      <div className="absolute top-18 right-8 w-1.5 h-1.5 bg-deep-ocean rounded-full opacity-80" style={{ animation: 'particleFloat 3.5s ease-in-out infinite 0.6s' }}></div>
                    </div>
                  </div>
                )}
                
                {activeSection === 'attend' && (
                  <div className="relative group">
                    <div className={`w-48 h-48 rounded-3xl relative overflow-hidden ${
                      isDark ? 'bg-deep-ocean/20' : 'bg-deep-ocean/10'
                    }`} style={{ animation: 'modernFloat 6s ease-in-out infinite 0.5s' }}>
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-2000"></div>
                      
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className={`w-20 h-20 rounded-2xl ${isDark ? 'bg-deep-ocean/40' : 'bg-deep-ocean/40'} flex items-center justify-center backdrop-blur-sm border ${isDark ? 'border-deep-ocean/30' : 'border-deep-ocean/30'}`}>
                          <svg className={`w-10 h-10 ${isDark ? 'text-deep-ocean' : 'text-deep-ocean'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        </div>
                      </div>
                      
                      <div className="absolute top-8 left-7 w-3 h-3 bg-sunset-orange rounded-full opacity-60" style={{ animation: 'particleFloat 4.2s ease-in-out infinite 0.2s' }}></div>
                      <div className="absolute bottom-7 right-6 w-2 h-2 bg-sunny-yellow rounded-full opacity-70" style={{ animation: 'particleFloat 3.8s ease-in-out infinite 0.7s' }}></div>
                      <div className="absolute top-12 right-9 w-1.5 h-1.5 bg-deep-ocean rounded-full opacity-80" style={{ animation: 'particleFloat 4.5s ease-in-out infinite 1.1s' }}></div>
                    </div>
                  </div>
                )}
              </div>

              <div className={`text-lg md:text-xl leading-relaxed ${
                isDark ? 'text-slate-200' : 'text-slate-700'
              }`}>
                <p className="mb-6">
                  {sections[activeSection].content}
                </p>
                {sections[activeSection].fullStory && (
                  <p className="mb-6 italic">
                    {sections[activeSection].fullStory}
                  </p>
                )}
                {sections[activeSection].vision && (
                  <div className={`p-6 rounded-xl border-l-4 mb-6 ${
                    isDark 
                      ? 'bg-slate-700/30 border-cyan-400 text-cyan-100' 
                      : 'bg-blue-50 border-blue-400 text-blue-800'
                  }`}>
                    <h4 className="font-semibold mb-2">Our Vision</h4>
                    <p>{sections[activeSection].vision}</p>
                  </div>
                )}
                {sections[activeSection].impact && (
                  <p className="mb-6">
                    {sections[activeSection].impact}
                  </p>
                )}
                {sections[activeSection].description && (
                  <p className="mb-6">
                    {sections[activeSection].description}
                  </p>
                )}
              </div>

              {/* Story Highlights */}
              {activeSection === 'story' && sections[activeSection].highlights && (
                <div className="mt-8">
                  <div className="grid md:grid-cols-3 gap-6">
                    {sections[activeSection].highlights.map((highlight, index) => (
                      <div key={index} className={`text-center p-6 rounded-2xl border-2 relative overflow-hidden ${
                        isDark 
                          ? 'bg-slate-700/30 border-cyan-500/20 hover:border-cyan-400/40' 
                          : 'bg-white/70 border-blue-200 hover:border-blue-300'
                      } transition-all duration-300 group hover:scale-105`}>
                        <div className="absolute inset-0 shimmer-effect bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-x-12"></div>
                        <div className={`text-4xl font-bold mb-2 ${
                          isDark ? 'text-sunset-orange' : 'text-deep-ocean'
                        }`}>
                          {highlight.stat}
                        </div>
                        <h5 className={`font-semibold mb-2 ${
                          isDark ? 'text-white' : 'text-slate-800'
                        }`}>
                          {highlight.label}
                        </h5>
                        <p className={`text-sm ${
                          isDark ? 'text-slate-300' : 'text-slate-600'
                        }`}>
                          {highlight.description}
                        </p>
                      </div>
                    ))}
                  </div>
                  {sections[activeSection].quote && (
                    <div className={`mt-8 p-6 rounded-2xl text-center ${
                      isDark
                        ? 'bg-deep-ocean/30 border border-deep-ocean/30'
                        : 'bg-deep-ocean/10 border border-deep-ocean/20'
                    }`}>
                      <p className={`text-xl font-medium italic ${
                        isDark ? 'text-sunset-orange' : 'text-deep-ocean'
                      }`}>
                        "{sections[activeSection].quote}"
                      </p>
                    </div>
                  )}
                </div>
              )}

              {/* Mission Pillars */}
              {activeSection === 'mission' && sections[activeSection].pillars && (
                <div className="mt-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    {sections[activeSection].pillars.map((pillar, index) => (
                      <div key={index} className={`p-6 rounded-2xl border ${
                        isDark
                          ? 'bg-slate-700/30 border-sunset-orange/20 hover:border-sunset-orange/40'
                          : 'bg-white/70 border-sunset-orange/20 hover:border-sunset-orange/30'
                      } transition-all duration-300 group hover:scale-102`}>
                        <div className="flex items-start gap-4">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                            isDark ? 'bg-sunset-orange/30' : 'bg-sunset-orange/10'
                          }`}>
                            {pillar.icon === 'education' && (
                              <svg className={`w-6 h-6 ${isDark ? 'text-sunset-orange' : 'text-sunset-orange'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                              </svg>
                            )}
                            {pillar.icon === 'community' && (
                              <svg className={`w-6 h-6 ${isDark ? 'text-sunset-orange' : 'text-sunset-orange'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                              </svg>
                            )}
                            {pillar.icon === 'practice' && (
                              <svg className={`w-6 h-6 ${isDark ? 'text-sunset-orange' : 'text-sunset-orange'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                              </svg>
                            )}
                            {pillar.icon === 'bridge' && (
                              <svg className={`w-6 h-6 ${isDark ? 'text-sunset-orange' : 'text-sunset-orange'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                              </svg>
                            )}
                          </div>
                          <div>
                            <h5 className={`font-semibold mb-2 ${
                              isDark ? 'text-white' : 'text-slate-800'
                            }`}>
                              {pillar.title}
                            </h5>
                            <p className={`text-sm ${
                              isDark ? 'text-slate-300' : 'text-slate-600'
                            }`}>
                              {pillar.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Enhanced Achievements List */}
              {activeSection === 'achievements' && sections[activeSection].keyAchievements && (
                <div className="mt-8 space-y-8">
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {sections[activeSection].keyAchievements.map((achievement, index) => (
                      <div key={index} className={`relative p-6 rounded-2xl border-2 group hover:scale-105 transition-all duration-300 ${
                        isDark
                          ? 'bg-slate-700/30 border-sunny-yellow/20 hover:border-sunny-yellow/40'
                          : 'bg-white/70 border-sunny-yellow/30 hover:border-sunny-yellow/40'
                      }`}>
                        <div className="text-center">
                          <div className={`text-3xl font-bold mb-2 metric-animate ${
                            isDark ? 'text-sunny-yellow' : 'text-sunset-orange'
                          }`}>
                            {achievement.metric}
                          </div>
                          <h5 className={`font-semibold mb-3 ${
                            isDark ? 'text-white' : 'text-slate-800'
                          }`}>
                            {achievement.title}
                          </h5>
                          <p className={`text-sm ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}>
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {sections[activeSection].testimonial && (
                    <div className={`p-8 rounded-2xl text-center ${
                      isDark
                        ? 'bg-sunny-yellow/30 border border-sunny-yellow/30'
                        : 'bg-sunny-yellow/10 border border-sunny-yellow/20'
                    }`}>
                      <blockquote className={`text-xl font-medium italic mb-4 ${
                        isDark ? 'text-sunny-yellow' : 'text-sunset-orange'
                      }`}>
                        "{sections[activeSection].testimonial.text}"
                      </blockquote>
                      <cite className={`text-sm ${
                        isDark ? 'text-sunset-orange' : 'text-deep-ocean'
                      }`}>
                        — {sections[activeSection].testimonial.author}
                      </cite>
                    </div>
                  )}
                </div>
              )}

              {/* Enhanced Audience & Experience */}
              {activeSection === 'attend' && (
                <div className="mt-8 space-y-12">
                  {/* Target Audience Cards */}
                  <div>
                    <h4 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-slate-800'}`}>
                      Who Should Join This Revolution?
                    </h4>
                    <div className="grid md:grid-cols-2 gap-6">
                      {sections[activeSection].targetAudience.map((audience, index) => (
                        <div key={index} className={`p-6 rounded-2xl border-2 ${
                          isDark 
                            ? 'bg-slate-700/30 border-green-500/20 hover:border-green-400/40' 
                            : 'bg-white/70 border-green-200 hover:border-green-300'
                        } transition-all duration-300 group hover:scale-102`}>
                          <div className="flex items-start gap-4 mb-4">
                            <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                              isDark ? 'bg-green-500/30' : 'bg-green-100'
                            }`}>
                              <svg className={`w-6 h-6 ${isDark ? 'text-green-300' : 'text-green-600'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg>
                            </div>
                            <div>
                              <h5 className={`font-bold text-lg mb-2 ${
                                isDark ? 'text-white' : 'text-slate-800'
                              }`}>
                                {audience.title}
                              </h5>
                              <p className={`text-sm mb-3 ${
                                isDark ? 'text-slate-300' : 'text-slate-600'
                              }`}>
                                {audience.description}
                              </p>
                            </div>
                          </div>
                          <div className="space-y-2">
                            {audience.benefits.map((benefit, benefitIndex) => (
                              <div key={benefitIndex} className="flex items-center gap-2">
                                <svg className="w-4 h-4 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                                <span className={`text-sm ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                                  {benefit}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Experience Highlights */}
                  <div>
                    <h4 className={`text-2xl font-bold mb-6 text-center ${isDark ? 'text-white' : 'text-slate-800'}`}>
                      What Awaits You
                    </h4>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {sections[activeSection].experienceHighlights.map((experience, index) => (
                        <div key={index} className={`p-5 rounded-xl border text-center group hover:scale-105 transition-all duration-300 ${
                          experience.color === 'red' 
                            ? isDark ? 'bg-red-900/20 border-red-500/30 hover:border-red-400/50' : 'bg-red-50 border-red-200 hover:border-red-300'
                          : experience.color === 'purple'
                            ? isDark ? 'bg-purple-900/20 border-purple-500/30 hover:border-purple-400/50' : 'bg-purple-50 border-purple-200 hover:border-purple-300'
                          : experience.color === 'green'
                            ? isDark ? 'bg-green-900/20 border-green-500/30 hover:border-green-400/50' : 'bg-green-50 border-green-200 hover:border-green-300'
                          : experience.color === 'blue'
                            ? isDark ? 'bg-blue-900/20 border-blue-500/30 hover:border-blue-400/50' : 'bg-blue-50 border-blue-200 hover:border-blue-300'
                          : isDark ? 'bg-yellow-900/20 border-yellow-500/30 hover:border-yellow-400/50' : 'bg-yellow-50 border-yellow-200 hover:border-yellow-300'
                        }`}>
                          <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium mb-3 ${
                            experience.color === 'red' 
                              ? isDark ? 'bg-red-500/30 text-red-300' : 'bg-red-500 text-white'
                            : experience.color === 'purple'
                              ? isDark ? 'bg-purple-500/30 text-purple-300' : 'bg-purple-500 text-white'
                            : experience.color === 'green'
                              ? isDark ? 'bg-green-500/30 text-green-300' : 'bg-green-500 text-white'
                            : experience.color === 'blue'
                              ? isDark ? 'bg-blue-500/30 text-blue-300' : 'bg-blue-500 text-white'
                            : isDark ? 'bg-yellow-500/30 text-yellow-300' : 'bg-yellow-500 text-white'
                          }`}>
                            {experience.intensity}
                          </div>
                          <h5 className={`font-bold mb-2 ${
                            isDark ? 'text-white' : 'text-slate-800'
                          }`}>
                            {experience.title}
                          </h5>
                          <p className={`text-sm ${
                            isDark ? 'text-slate-300' : 'text-slate-600'
                          }`}>
                            {experience.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Call to Action */}
                  {sections[activeSection].callToAction && (
                    <div className={`p-8 rounded-2xl text-center ${
                      isDark
                        ? 'bg-deep-ocean/30 border-2 border-deep-ocean/30'
                        : 'bg-deep-ocean/10 border-2 border-deep-ocean/30'
                    }`}>
                      <p className={`text-xl font-semibold mb-4 ${
                        isDark ? 'text-sunset-orange' : 'text-deep-ocean'
                      }`}>
                        {sections[activeSection].callToAction}
                      </p>
                      <button className={`px-8 py-3 rounded-xl font-medium transition-all duration-300 pulse-button ${
                        isDark
                          ? 'bg-sunset-orange hover:bg-sunset-orange/80 text-white'
                          : 'bg-deep-ocean hover:bg-deep-ocean/80 text-white'
                      } hover:scale-105 shadow-lg hover:shadow-xl`}>
                        Join the Revolution →
                      </button>
                    </div>
                  )}

                  {sections[activeSection].partyNote && (
                    <div className={`p-6 rounded-2xl text-center ${
                      isDark
                        ? 'bg-sunset-orange/30 border border-sunset-orange/30'
                        : 'bg-sunset-orange/10 border border-sunset-orange/20'
                    }`}>
                      <p className={`text-xl font-medium ${
                        isDark ? 'text-sunset-orange' : 'text-deep-ocean'
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
                : 'text-charcoal-gray'
            }`}>
              Meet Our Team
            </h3>
            <p className={`text-lg ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              The passionate individuals making Seasides possible
            </p>
            <div className="w-16 h-1 bg-sunset-orange mx-auto rounded-full mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 max-w-7xl mx-auto">{teamMembers.map((member, index) => (
              <div 
                key={index}
                onClick={() => setSelectedMember(member)}
                className={`group text-center transform hover:scale-105 transition-all duration-300 cursor-pointer relative ${
                  isDark 
                    ? 'hover:bg-slate-800/50' 
                    : 'hover:bg-white/50'
                } p-6 rounded-2xl backdrop-blur-sm ${
                  member.nickname === 'Sardaar Khan' ? 'sardaar-card' : 
                  member.nickname === 'Munna Bhaiya' ? 'munna-card' : ''
                }`}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: isVisible ? 'fadeInUp 0.8s ease-out forwards' : ''
                }}
              >
                {/* Modern gradient overlays for special members */}
                {member.nickname === 'Sardaar Khan' && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {/* Golden gradient overlay */}
                    <div className="absolute inset-0 bg-sunset-orange/10 rounded-2xl"></div>
                  </div>
                )}

                {member.nickname === 'Munna Bhaiya' && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {/* Red gradient overlay */}
                    <div className="absolute inset-0 bg-sunset-orange/10 rounded-2xl"></div>
                  </div>
                )}

                {member.name === 'Abhinav Khanna' && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {/* Security blue gradient */}
                    <div className="absolute inset-0 bg-deep-ocean/10 rounded-2xl"></div>
                  </div>
                )}

                {member.name === 'Seedon Adlin D\'souza' && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {/* Hardware green gradient */}
                    <div className="absolute inset-0 bg-sunny-yellow/10 rounded-2xl"></div>
                  </div>
                )}

                {member.name === 'Kartheek Lade' && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {/* IoV purple gradient */}
                    <div className="absolute inset-0 bg-sunset-orange/10 rounded-2xl"></div>
                  </div>
                )}

                {(member.role === 'Core Team Member' && !member.nickname && !['Abhinav Khanna', 'Seedon Adlin D\'souza', 'Kartheek Lade'].includes(member.name)) && (
                  <div className="absolute inset-0 pointer-events-none overflow-hidden rounded-2xl">
                    {/* Team gradient */}
                    <div className="absolute inset-0 bg-charcoal-gray/5 rounded-2xl"></div>
                  </div>
                )}

                <div className={`relative mb-6 mx-auto w-32 h-32 overflow-hidden rounded-full ring-4 transition-all duration-300 ${
                  member.nickname === 'Sardaar Khan' 
                    ? 'ring-yellow-500/30 group-hover:ring-yellow-500/70' 
                    : member.nickname === 'Munna Bhaiya' 
                    ? 'ring-red-500/30 group-hover:ring-red-500/70'
                    : 'ring-blue-500/20 group-hover:ring-blue-500/50'
                }`}>
                  {member.image ? (
                    <Image
                      src={`/team-photos/${member.image}`}
                      alt={member.name}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-300"
                      sizes="128px"
                    />
                  ) : (
                    <div className={`w-full h-full flex items-center justify-center text-3xl font-bold ${
                      isDark ? 'bg-slate-700 text-slate-300' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {member.name.split(' ').map(n => n[0]).join('')}
                    </div>
                  )}
                </div>
                <h4 className={`font-semibold text-base mb-2 transition-colors duration-300 ${
                  member.nickname === 'Sardaar Khan' 
                    ? isDark ? 'text-yellow-300 group-hover:text-yellow-200' : 'text-yellow-600 group-hover:text-yellow-700'
                    : member.nickname === 'Munna Bhaiya' 
                    ? isDark ? 'text-red-300 group-hover:text-red-200' : 'text-red-600 group-hover:text-red-700'
                    : isDark 
                    ? 'text-white group-hover:text-deep-ocean' 
                    : 'text-slate-800 group-hover:text-blue-600'
                }`}>
                  {member.name}
                  {member.nickname && (
                    <span className={`block text-sm font-normal ${
                      member.nickname === 'Sardaar Khan' 
                        ? 'text-yellow-500' 
                        : member.nickname === 'Munna Bhaiya' 
                        ? 'text-red-500'
                        : 'text-blue-500'
                    }`}>
                      &quot;{member.nickname}&quot;
                    </span>
                  )}
                </h4>
                <p className={`text-sm transition-colors duration-300 ${
                  isDark 
                    ? 'text-slate-400 group-hover:text-slate-300' 
                    : 'text-slate-500 group-hover:text-slate-700'
                }`}>
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
        
        /* Enhanced modern section graphics animations */
        @keyframes modernFloat {
          0%, 100% {
            transform: translateY(0px) scale(1) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) scale(1.05) rotate(3deg);
          }
        }
        
        @keyframes particleFloat {
          0%, 100% {
            transform: translateY(0px) translateX(0px) scale(1);
            opacity: 0.4;
          }
          50% {
            transform: translateY(-20px) translateX(8px) scale(1.5);
            opacity: 1;
          }
        }
        
        /* Premium shimmer effect */
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-15deg);
          }
          100% {
            transform: translateX(200%) skewX(-15deg);
          }
        }
        
        /* Hover scale animations */
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
        
        /* Premium gradient animations */
        @keyframes gradientShift {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        /* Enhanced card hover effects */
        .group:hover .shimmer-effect {
          animation: shimmer 2s ease-in-out infinite;
        }
        
        /* Story highlights animation */
        @keyframes statPulse {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(1.05);
            opacity: 0.9;
          }
        }
        
        /* Metrics animation */
        .metric-animate {
          animation: statPulse 2s ease-in-out infinite;
        }
        
        /* Enhanced team member animations */
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        
        /* Interactive button effects */
        @keyframes buttonPulse {
          0% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.7);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
          }
        }
        
        .pulse-button:hover {
          animation: buttonPulse 2s infinite;
        }
        
        /* Smooth transitions for all interactive elements */
        * {
          transition-property: transform, opacity, box-shadow, background-color, border-color;
          transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        /* Enhanced scrollbar for mobile navigation */
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        
        /* Custom focus states for accessibility */
        .custom-focus:focus {
          outline: 2px solid rgba(59, 130, 246, 0.5);
          outline-offset: 2px;
        }
        
        /* Premium loading states */
        @keyframes skeleton {
          0% {
            opacity: 1;
          }
          50% {
            opacity: 0.4;
          }
          100% {
            opacity: 1;
          }
        }
        
        .skeleton-loader {
          animation: skeleton 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default About;