'use client';
import { useState } from 'react';

const Venue = () => {
  const [activeTab, setActiveTab] = useState('venue');

  const venueFeatures = [
    {
      icon: '🏛️',
      title: 'World-Class Facilities',
      description: 'State-of-the-art conference halls with cutting-edge AV equipment and comfortable seating for 1000+ attendees.'
    },
    {
      icon: '🌊',
      title: 'Beachside Location',
      description: 'Located just minutes from pristine Goa beaches, offering perfect networking opportunities and stunning views.'
    },
    {
      icon: '🚗',
      title: 'Easy Access',
      description: 'Just 30 minutes from Goa International Airport with ample parking and public transport connections.'
    },
    {
      icon: '🍽️',
      title: 'Dining & Catering',
      description: 'Multiple restaurants, cafes, and catering services offering local and international cuisine.'
    }
  ];

  const accommodationOptions = [
    {
      type: 'Luxury Hotels',
      distance: '0-5 km',
      priceRange: '₹5,000 - ₹15,000',
      features: ['5-star amenities', 'Spa & wellness', 'Beach access', 'Conference shuttle']
    },
    {
      type: 'Business Hotels',
      distance: '2-8 km', 
      priceRange: '₹3,000 - ₹8,000',
      features: ['Business center', 'WiFi', 'Airport shuttle', 'Meeting rooms']
    },
    {
      type: 'Budget Hotels',
      distance: '5-15 km',
      priceRange: '₹1,500 - ₹4,000',
      features: ['Clean rooms', 'Basic amenities', 'Local transport', 'Safe area']
    },
    {
      type: 'Vacation Rentals',
      distance: '3-20 km',
      priceRange: '₹2,000 - ₹10,000',
      features: ['Private space', 'Kitchen facilities', 'Group bookings', 'Local experience']
    }
  ];

  return (
    <section className="py-20 bg-black">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#00FF7F', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(255,255,255,0.3)' }}>
            Venue & Location
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: '#87CEEB', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
            Experience cybersecurity education in one of India's most beautiful destinations - 
            the International Centre Goa offers world-class facilities in a stunning beachside setting.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-black border-2 border-cyan-400 rounded-full p-2 shadow-lg">
            <button
              onClick={() => setActiveTab('venue')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'venue'
                  ? 'bg-cyan-400 text-black shadow-lg font-bold'
                  : 'text-cyan-400 hover:text-white'
              }`}
            >
              Venue Details
            </button>
            <button
              onClick={() => setActiveTab('location')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'location'
                  ? 'bg-cyan-400 text-black shadow-lg font-bold'
                  : 'text-cyan-400 hover:text-white'
              }`}
            >
              Location & Travel
            </button>
            <button
              onClick={() => setActiveTab('accommodation')}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === 'accommodation'
                  ? 'bg-cyan-400 text-black shadow-lg font-bold'
                  : 'text-cyan-400 hover:text-white'
              }`}
            >
              Accommodation
            </button>
          </div>
        </div>

        {/* Venue Details Tab */}
        {activeTab === 'venue' && (
          <div className="space-y-12">
            {/* Venue Hero */}
            <div className="bg-black border-2 border-purple-400 rounded-2xl shadow-xl overflow-hidden">
              <div className="grid md:grid-cols-2">
                <div className="relative h-64 md:h-auto bg-gradient-to-br from-blue-500 to-purple-600">
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <div className="text-center text-white">
                      <h3 className="text-3xl font-bold mb-2">International Centre Goa</h3>
                      <p className="text-lg opacity-90">Dona Paula, Goa, India</p>
                      <div className="mt-4 flex items-center justify-center gap-4">
                        <div className="text-center">
                          <div className="text-2xl font-bold">1000+</div>
                          <div className="text-sm text-white/90">Capacity</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">3</div>
                          <div className="text-sm text-white/90">Halls</div>
                        </div>
                        <div className="text-center">
                          <div className="text-2xl font-bold">5⭐</div>
                          <div className="text-sm text-white/90">Facilities</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8">
                  <h4 className="text-2xl font-bold mb-4" style={{ color: '#FFD700', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>About the Venue</h4>
                  <p className="mb-6" style={{ color: '#87CEEB', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                    The International Centre Goa is a premier conference and cultural facility located in 
                    the heart of Goa. With state-of-the-art technology, beautiful architecture, and 
                    stunning ocean views, it provides the perfect setting for our cybersecurity conference.
                  </p>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="#00FFFF" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span style={{ color: '#98FB98', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Dona Paula, Panaji, Goa 403004</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 mr-3" fill="none" stroke="#00FFFF" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <span style={{ color: '#F0E68C', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>+91 832 246 1234</span>
                    </div>
                    <div className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-blue-600 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                      </svg>
                      <span>icgoa.org</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Venue Features */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {venueFeatures.map((feature, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-3">{feature.title}</h4>
                  <p className="text-gray-700 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Location & Travel Tab */}
        {activeTab === 'location' && (
          <div className="space-y-12">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <div className="text-4xl mb-4">🗺️</div>
                  <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
                  <p className="text-lg opacity-90">Location map will be available soon</p>
                  <button className="mt-4 bg-white text-blue-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    Get Directions
                  </button>
                </div>
              </div>
            </div>

            {/* Travel Information */}
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">By Air</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Goa International Airport (Dabolim) is the nearest airport, approximately 30 minutes by car.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Direct flights from major Indian cities</li>
                  <li>• Airport shuttle service available</li>
                  <li>• Taxi/cab services 24/7</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">By Train</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Nearest major railway station is Madgaon (45 minutes) or Thivim (30 minutes).
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Well connected to all major cities</li>
                  <li>• Pre-paid taxi counters available</li>
                  <li>• Local bus services</li>
                </ul>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-4 12h.01M8 21h8a2 2 0 002-2v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold text-gray-900">By Road</h4>
                </div>
                <p className="text-gray-700 mb-3">
                  Well connected by National Highways. Ample parking available at the venue.
                </p>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• NH-66 connectivity</li>
                  <li>• GPS coordinates available</li>
                  <li>• Free parking for attendees</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Accommodation Tab */}
        {activeTab === 'accommodation' && (
          <div className="space-y-12">
            {/* Accommodation Options */}
            <div className="grid md:grid-cols-2 gap-8">
              {accommodationOptions.map((option, index) => (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold text-gray-900">{option.type}</h4>
                    <span className="text-2xl font-bold text-blue-600">{option.priceRange}</span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm">
                      📍 {option.distance} from venue
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm">
                        <svg className="w-4 h-4 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    View Options
                  </button>
                </div>
              ))}
            </div>

            {/* Booking Information */}
            <div className="bg-blue-50 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Need Help with Accommodation?</h3>
              <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                We're partnering with local hotels and travel agencies to offer special rates for conference attendees. 
                Booking details will be available once registration opens.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Special Rates</h4>
                  <p className="text-gray-700 text-sm">Discounted rates for conference attendees</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">Verified Partners</h4>
                  <p className="text-gray-700 text-sm">Only trusted and verified accommodation partners</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-1">24/7 Support</h4>
                  <p className="text-gray-700 text-sm">Assistance with booking and travel queries</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Venue;