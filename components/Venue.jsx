'use client';
import { useState } from 'react';

const Venue = () => {
  const [activeTab, setActiveTab] = useState('venue');

  const venueFeatures = [
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>,
      title: 'World-Class Facilities',
      description: 'State-of-the-art conference halls with cutting-edge AV equipment and comfortable seating for 500+ attendees.'
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: 'Beachside Location',
      description: 'Located just minutes from pristine Goa beaches, offering perfect networking opportunities and stunning views.'
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-6 0a1 1 0 110 2h6a1 1 0 110-2M9 9h6m-6 4h6m-6 4h6m-6 4h6" /></svg>,
      title: 'Easy Access',
      description: 'Just 30 minutes from Goa International Airport with ample parking and public transport connections.'
    },
    {
      icon: <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" /></svg>,
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
            Experience cybersecurity education in one of India&apos;s most beautiful destinations - 
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
                          <div className="text-2xl font-bold">500+</div>
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
                <div key={index} className="bg-black border-2 border-cyan-400 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="text-4xl mb-4 text-center">{feature.icon}</div>
                  <h4 className="text-lg font-bold mb-3" style={{ color: '#FFD700', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>{feature.title}</h4>
                  <p className="text-sm" style={{ color: '#87CEEB', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Location & Travel Tab */}
        {activeTab === 'location' && (
          <div className="space-y-12">
            {/* Map Placeholder */}
            <div className="bg-black border-2 border-green-400 rounded-2xl shadow-xl overflow-hidden">
              <div className="h-96 bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center relative">
                <div className="text-white text-center">
                  <div className="flex justify-center mb-4">
                    <svg className="w-16 h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" /></svg>
                  </div>
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
              <div className="bg-black border-2 border-blue-400 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold" style={{ color: '#00FFFF', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>By Air</h4>
                </div>
                <p className="mb-3" style={{ color: '#98FB98', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  Goa International Airport (Dabolim) is the nearest airport, approximately 30 minutes by car.
                </p>
                <ul className="text-sm space-y-1">
                  <li style={{ color: '#F0E68C', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>• Direct flights from major Indian cities</li>
                  <li style={{ color: '#F0E68C', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>• Airport shuttle service available</li>
                  <li style={{ color: '#F0E68C', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>• Taxi/cab services 24/7</li>
                </ul>
              </div>

              <div className="bg-black border-2 border-green-400 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold" style={{ color: '#32CD32', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>By Train</h4>
                </div>
                <p className="mb-3" style={{ color: '#DDA0DD', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  Nearest major railway station is Madgaon (45 minutes) or Thivim (30 minutes).
                </p>
                <ul className="text-sm space-y-1">
                  <li style={{ color: '#87CEEB', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>• Well connected to all major cities</li>
                  <li style={{ color: '#87CEEB', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>• Pre-paid taxi counters available</li>
                  <li style={{ color: '#87CEEB', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>• Local bus services</li>
                </ul>
              </div>

              <div className="bg-black border-2 border-purple-400 rounded-xl p-6 shadow-lg">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mr-4">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4m-4 12h.01M8 21h8a2 2 0 002-2v-1a2 2 0 00-2-2H8a2 2 0 00-2 2v1a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h4 className="text-lg font-bold" style={{ color: '#DA70D6', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>By Road</h4>
                </div>
                <p className="mb-3" style={{ color: '#FFB6C1', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                  Well connected by National Highways. Ample parking available at the venue.
                </p>
                <ul className="text-sm space-y-1">
                  <li style={{ color: '#AFEEEE', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>• NH-66 connectivity</li>
                  <li style={{ color: '#AFEEEE', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>• GPS coordinates available</li>
                  <li style={{ color: '#AFEEEE', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>• Free parking for attendees</li>
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
                <div key={index} className="bg-black border-2 border-yellow-400 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-lg font-bold" style={{ color: '#FFD700', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>{option.type}</h4>
                    <span className="text-2xl font-bold" style={{ color: '#00FFFF', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>{option.priceRange}</span>
                  </div>
                  <div className="mb-4">
                    <span className="inline-block bg-purple-600 px-3 py-1 rounded-full text-sm" style={{ color: '#FFFFFF', fontWeight: 'bold' }}>
                      📍 {option.distance} from venue
                    </span>
                  </div>
                  <ul className="space-y-2 mb-6">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <svg className="w-4 h-4 mr-2" fill="none" stroke="#32CD32" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span style={{ color: '#98FB98', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 text-white py-2 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all duration-300 font-bold">
                    View Options
                  </button>
                </div>
              ))}
            </div>

            {/* Booking Information */}
            <div className="bg-black border-2 border-blue-400 rounded-2xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4" style={{ color: '#00FF7F', fontWeight: 'bold', textShadow: '2px 2px 4px rgba(255,255,255,0.3)' }}>Need Help with Accommodation?</h3>
              <p className="mb-6 max-w-2xl mx-auto" style={{ color: '#87CEEB', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>
                We&apos;re partnering with local hotels and travel agencies to offer special rates for conference attendees. 
                Booking details will be available once registration opens.
              </p>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1" style={{ color: '#FFD700', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>Special Rates</h4>
                  <p className="text-sm" style={{ color: '#98FB98', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Discounted rates for conference attendees</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1" style={{ color: '#32CD32', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>Verified Partners</h4>
                  <p className="text-sm" style={{ color: '#DDA0DD', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Only trusted and verified accommodation partners</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h4 className="font-semibold mb-1" style={{ color: '#DA70D6', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(255,255,255,0.3)' }}>24/7 Support</h4>
                  <p className="text-sm" style={{ color: '#F0E68C', fontWeight: 'bold', textShadow: '1px 1px 2px rgba(0,0,0,0.8)' }}>Assistance with booking and travel queries</p>
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