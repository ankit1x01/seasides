'use client';
import { motion } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { VENUE } from '@/lib/venueConfig';
import { useState } from 'react';

const ReachUs = () => {
  const { isDark } = useTheme();
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleGetDirections = () => {
    const { lat, lng } = VENUE.coords;
    const url = `https://www.google.com/maps/dir//${lat},${lng}/@${lat},${lng},15z`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(VENUE.addressEN);
      // You could add a toast notification here
    } catch {
      // Fallback for older browsers
      const textArea = document.createElement('textarea');
      textArea.value = VENUE.addressEN;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand('copy');
      document.body.removeChild(textArea);
    }
  };

  return (
    <section 
      id="reach-us" 
      className={`relative py-20 overflow-hidden ${
        isDark 
          ? 'bg-charcoal-gray'
          : 'bg-light-gray'
      }`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl animate-pulse ${
          isDark ? 'bg-blue-500' : 'bg-blue-400'
        }`}></div>
        <div className={`absolute bottom-0 left-1/4 w-80 h-80 rounded-full opacity-15 blur-3xl animate-bounce ${
          isDark ? 'bg-purple-500' : 'bg-purple-400'
        }`} style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Grid Pattern */}
      <div 
        className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-10'}`}
        style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(59,130,246,0.3)' : 'rgba(99,102,241,0.2)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(59,130,246,0.3)' : 'rgba(99,102,241,0.2)'} 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}
      ></div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-6">
            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
              isDark
                ? 'text-white'
                : 'text-charcoal-gray'
            } drop-shadow-lg`}>
              Reach Us
            </h2>
            <div className={`w-32 h-1 mx-auto mt-4 rounded-full ${
              isDark ? 'bg-sunset-orange' : 'bg-sunset-orange'
            }`}></div>
          </div>
          <p className={`text-xl md:text-2xl font-medium ${
            isDark ? 'text-blue-200' : 'text-gray-700'
          } max-w-3xl mx-auto leading-relaxed`}>
            Join us at the premier venue in the heart of Goa
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12 items-start">
          
          {/* Venue Details - Left Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`backdrop-blur-xl rounded-2xl md:rounded-3xl p-4 sm:p-6 md:p-8 ${
              isDark 
                ? 'bg-black/20 border border-white/10' 
                : 'bg-white/30 border border-blue-200/50'
            } shadow-2xl`}
          >
            {/* Venue Icon & Name */}
            <div className="flex items-center gap-3 sm:gap-4 mb-6 md:mb-8">
              <div className={`p-3 sm:p-4 rounded-xl sm:rounded-2xl ${
                isDark 
                  ? 'bg-deep-ocean'
                  : 'bg-deep-ocean'
              } shadow-lg`}>
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h3 className={`text-lg sm:text-xl md:text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>
                  {VENUE.name}
                </h3>
                <p className={`text-sm ${
                  isDark ? 'text-blue-200' : 'text-blue-600'
                } font-medium`}>
                  Conference Venue
                </p>
              </div>
            </div>

            {/* Address */}
            <div className="mb-6 md:mb-8">
              <h4 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                📍 Address
              </h4>
              <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl ${
                isDark ? 'bg-white/5' : 'bg-white/50'
              } border border-white/20`}>
                <p className={`${
                  isDark ? 'text-gray-300' : 'text-gray-700'
                } mb-3 cursor-pointer hover:text-blue-400 transition-colors`}
                   onClick={copyAddress}
                   title="Click to copy address">
                  {VENUE.addressEN}
                </p>
                <p className={`text-sm ${
                  isDark ? 'text-blue-200' : 'text-blue-600'
                } font-medium`}>
                  {VENUE.addressHI}
                </p>
              </div>
            </div>

            {/* Timing */}
            <div className="mb-6 md:mb-8">
              <h4 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                🕘 Conference Hours
              </h4>
              <div className={`p-3 sm:p-4 rounded-lg sm:rounded-xl ${
                isDark ? 'bg-white/5' : 'bg-white/50'
              } border border-white/20`}>
                <p className={`text-lg font-medium ${
                  isDark ? 'text-green-300' : 'text-green-600'
                }`}>
                  {VENUE.hours}
                </p>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } mt-1`}>
                  All conference days
                </p>
              </div>
            </div>

            {/* Key Distances */}
            <div className="mb-6 md:mb-8">
              <h4 className={`text-base sm:text-lg font-semibold mb-3 sm:mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>
                🚗 Key Distances
              </h4>
              <div className="grid grid-cols-1 gap-2 sm:gap-3">
                {VENUE.distances.slice(0, 6).map((distance, index) => (
                  <div key={index} 
                       className={`p-3 rounded-lg ${
                         isDark ? 'bg-white/5' : 'bg-white/50'
                       } border border-white/20 transition-all duration-300 hover:scale-105`}>
                    <div className="flex justify-between items-center">
                      <span className={`text-sm ${
                        isDark ? 'text-gray-300' : 'text-gray-700'
                      }`}>
                        {distance.label}
                      </span>
                      <span className={`text-sm font-bold ${
                        isDark ? 'text-blue-300' : 'text-blue-600'
                      }`}>
                        {distance.km} km
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Show More Distances */}
              <details className="mt-4">
                <summary className={`cursor-pointer text-sm ${
                  isDark ? 'text-blue-300 hover:text-blue-200' : 'text-blue-600 hover:text-blue-500'
                } transition-colors`}>
                  Show more distances
                </summary>
                <div className="grid grid-cols-1 gap-2 sm:gap-3 mt-3">
                  {VENUE.distances.slice(6).map((distance, index) => (
                    <div key={index + 6} 
                         className={`p-3 rounded-lg ${
                           isDark ? 'bg-white/5' : 'bg-white/50'
                         } border border-white/20`}>
                      <div className="flex justify-between items-center">
                        <span className={`text-sm ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          {distance.label}
                        </span>
                        <span className={`text-sm font-bold ${
                          isDark ? 'text-blue-300' : 'text-blue-600'
                        }`}>
                          {distance.km} km
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </details>
            </div>

            {/* Get Directions Button */}
            <button
              onClick={handleGetDirections}
              className={`w-full px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl text-sm sm:text-base font-semibold transition-all duration-300 ${
                isDark 
                  ? 'bg-deep-ocean text-white hover:bg-deep-ocean/80'
                  : 'bg-deep-ocean text-white hover:bg-deep-ocean/80'
              } transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-3`}
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
              </svg>
              Get Directions
            </button>
          </motion.div>

          {/* Map - Right Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="h-full"
          >
            <div className={`backdrop-blur-xl rounded-2xl md:rounded-3xl overflow-hidden ${
              isDark 
                ? 'bg-black/20 border border-white/10' 
                : 'bg-white/30 border border-blue-200/50'
            } shadow-2xl h-full min-h-[300px] sm:min-h-[400px] lg:min-h-[600px]`}>
              
              {/* Map Header */}
              <div className="p-4 sm:p-6 border-b border-white/10">
                <h4 className={`text-lg sm:text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                } flex items-center gap-3`}>
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-1.447-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Location Map
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-gray-600'
                } mt-1`}>
                  International Centre Goa, Dona Paula
                </p>
              </div>

              {/* Map Container */}
              <div className="relative h-full aspect-video sm:aspect-auto">
                {!mapLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={`text-center ${
                      isDark ? 'text-gray-400' : 'text-gray-600'
                    }`}>
                      <div className="animate-spin w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full mx-auto mb-4"></div>
                      <p>Loading map...</p>
                    </div>
                  </div>
                )}
                
                <iframe
                  src={`https://www.google.com/maps?q=${VENUE.coords.lat},${VENUE.coords.lng}&z=15&output=embed`}
                  className="w-full h-full"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="International Centre Goa Location Map"
                  aria-label={`Map showing location of ${VENUE.name} at ${VENUE.addressEN}`}
                  onLoad={() => setMapLoaded(true)}
                  style={{ border: 0, minHeight: '250px' }}
                ></iframe>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-8 sm:mt-12 lg:mt-16 text-center"
        >
          <div className={`inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4 px-4 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl ${
            isDark 
              ? 'bg-deep-ocean/20 border border-deep-ocean/30'
              : 'bg-deep-ocean/10 border border-deep-ocean/20'
          }`}>
            <svg className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className={`text-sm sm:text-base text-center sm:text-left ${
              isDark ? 'text-blue-200' : 'text-blue-700'
            } font-medium`}>
              Free parking available • Wheelchair accessible • Public transport friendly
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ReachUs;
