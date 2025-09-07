'use client';
import { useState } from 'react';

const Registration = () => {
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    experience: '',
    interests: []
  });

  const ticketTypes = [
    {
      id: 'general',
      name: 'General Admission',
      price: 'FREE',
      description: 'Full access to all conference sessions, villages, and networking events',
      features: [
        'All conference sessions',
        'Access to 7 specialized villages', 
        'Networking events',
        'Welcome kit & swag',
        'Conference app access',
        'Digital certificates'
      ],
      popular: true
    },
    {
      id: 'student',
      name: 'Student Pass',
      price: 'FREE',
      description: 'Special pass for students with valid ID verification',
      features: [
        'All general admission benefits',
        'Student networking sessions',
        'Mentorship opportunities',
        'Career guidance workshops',
        'Student project showcase',
        'Special student lounge access'
      ],
      popular: false
    },
    {
      id: 'premium',
      name: 'VIP Experience',
      price: 'Coming Soon',
      description: 'Enhanced conference experience with exclusive benefits',
      features: [
        'All general admission benefits',
        'Priority seating',
        'Exclusive VIP lounge',
        'Meet & greet with speakers',
        'Premium networking dinner',
        'Special VIP swag bag'
      ],
      popular: false,
      disabled: true
    }
  ];

  const interests = [
    'AI Security', 'Cloud Security', 'Hardware Security', 'Kubernetes Security',
    'Bug Bounty', 'Social Engineering', 'Threat Hunting', 'Incident Response',
    'Penetration Testing', 'Cryptography', 'IoT Security', 'Mobile Security'
  ];

  const handleInterestToggle = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Registration logic would go here
    alert('Registration functionality coming soon! We\'ll notify you when registration opens.');
  };

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Secure Your Spot
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Join 1000+ cybersecurity professionals at India&apos;s most loved security conference. 
            Registration opens soon with limited seats available.
          </p>
          <div className="inline-flex items-center bg-green-50 border border-green-200 rounded-full px-6 py-3">
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse mr-3"></div>
            <span className="text-green-700 font-medium">Early Bird Updates Available</span>
          </div>
        </div>

        {/* Ticket Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {ticketTypes.map((ticket) => (
            <div
              key={ticket.id}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-2 ${
                ticket.popular ? 'border-blue-500' : 'border-gray-200'
              } ${ticket.disabled ? 'opacity-60' : ''}`}
            >
              {ticket.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-medium">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Ticket Header */}
                <div className="text-center mb-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{ticket.name}</h3>
                  <div className="text-4xl font-bold mb-2">
                    <span className={ticket.price === 'FREE' ? 'text-green-600' : 'text-gray-900'}>
                      {ticket.price}
                    </span>
                  </div>
                  <p className="text-gray-600">{ticket.description}</p>
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {ticket.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all duration-300 ${
                    ticket.disabled
                      ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                      : ticket.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 transform hover:scale-105'
                      : 'bg-gray-800 text-white hover:bg-gray-900 transform hover:scale-105'
                  }`}
                  onClick={() => !ticket.disabled && (setSelectedTicket(ticket), setShowForm(true))}
                  disabled={ticket.disabled}
                >
                  {ticket.disabled ? 'Coming Soon' : 'Get Notified'}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Registration Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-gray-900">
                    Early Bird Notification - {selectedTicket?.name}
                  </h3>
                  <button
                    onClick={() => setShowForm(false)}
                    className="text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.organization}
                        onChange={(e) => setFormData({...formData, organization: e.target.value})}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Role/Title
                      </label>
                      <select
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        value={formData.role}
                        onChange={(e) => setFormData({...formData, role: e.target.value})}
                      >
                        <option value="">Select Role</option>
                        <option value="security-engineer">Security Engineer</option>
                        <option value="penetration-tester">Penetration Tester</option>
                        <option value="security-analyst">Security Analyst</option>
                        <option value="ciso">CISO/Security Manager</option>
                        <option value="researcher">Security Researcher</option>
                        <option value="student">Student</option>
                        <option value="developer">Developer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Experience Level */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Level
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {['Beginner', 'Intermediate', 'Advanced', 'Expert'].map((level) => (
                        <label key={level} className="flex items-center">
                          <input
                            type="radio"
                            name="experience"
                            value={level}
                            checked={formData.experience === level}
                            onChange={(e) => setFormData({...formData, experience: e.target.value})}
                            className="mr-2"
                          />
                          <span className="text-sm text-gray-700">{level}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Interests */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Areas of Interest (Select multiple)
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                      {interests.map((interest) => (
                        <label key={interest} className="flex items-center text-sm">
                          <input
                            type="checkbox"
                            checked={formData.interests.includes(interest)}
                            onChange={() => handleInterestToggle(interest)}
                            className="mr-2"
                          />
                          <span className="text-gray-700">{interest}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-4">
                    <button
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="flex-1 py-3 border border-gray-300 text-gray-700 rounded-lg font-semibold hover:bg-gray-50 transition-colors"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      Get Early Bird Updates
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}

        {/* Early Bird Benefits */}
        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Why Register for Early Bird Updates?
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">First to Know</h4>
              <p className="text-gray-600 text-sm">Be the first to know when registration opens and secure your preferred ticket type.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Exclusive Updates</h4>
              <p className="text-gray-600 text-sm">Receive exclusive speaker announcements, agenda updates, and special offers.</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                </svg>
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Priority Access</h4>
              <p className="text-gray-600 text-sm">Get priority access to limited workshops, special events, and networking sessions.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;