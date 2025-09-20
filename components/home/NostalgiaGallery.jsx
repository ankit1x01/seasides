'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '@/contexts/ThemeContext';
import { useState, useCallback } from 'react';
import Image from 'next/image';

const NostalgiaGallery = () => {
  const { isDark } = useTheme();
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  // Real gallery images from Seasides conferences
  const galleryItems = [
    {
      id: 2,
      src: '/gallery/gallery-15.jpeg',
      alt: 'Workshop session in progress',
      category: 'workshops',
      year: '2024',
      title: 'Hands-on Security Workshop',
      description: 'Participants diving deep into practical security challenges'
    },
    {
      id: 3,
      src: '/gallery/gallery-25.jpeg',
      alt: 'Networking session by the seaside',
      category: 'networking',
      year: '2024',
      title: 'Seaside Networking',
      description: 'Building connections in the beautiful coastal setting'
    },
    {
      id: 4,
      src: '/gallery/gallery-35.jpeg',
      alt: 'Participants in village discussions',
      category: 'villages',
      year: '2024',
      title: 'Village Discussions',
      description: 'Deep dives into specialized security domains'
    },
    {
      id: 5,
      src: '/gallery/gallery-45.jpeg',
      alt: 'Conference venue overview',
      category: 'venue',
      year: '2024',
      title: 'Conference Venue',
      description: 'The stunning seaside location of Seasides conference'
    },
    {
      id: 6,
      src: '/gallery/gallery-55.jpeg',
      alt: 'Award ceremony moment',
      category: 'keynotes',
      year: '2024',
      title: 'Recognition Ceremony',
      description: 'Celebrating outstanding contributions to cybersecurity'
    },
    {
      id: 7,
      src: '/gallery/gallery-65.jpeg',
      alt: 'Interactive demo session',
      category: 'workshops',
      year: '2024',
      title: 'Interactive Demo',
      description: 'Live demonstrations of cutting-edge security tools'
    },
    {
      id: 8,
      src: '/gallery/gallery-75.jpeg',
      alt: 'Panel discussion with experts',
      category: 'keynotes',
      year: '2024',
      title: 'Expert Panel',
      description: 'Industry experts discussing emerging threats'
    },
    {
      id: 9,
      src: '/gallery/gallery-85.jpeg',
      alt: 'Beach networking session',
      category: 'networking',
      year: '2024',
      title: 'Beach Networking',
      description: 'Informal conversations by the shore'
    },
    {
      id: 10,
      src: '/gallery/gallery-95.jpeg',
      alt: 'Technical workshop in action',
      category: 'workshops',
      year: '2024',
      title: 'Technical Workshop',
      description: 'Hands-on learning with security tools'
    },
    {
      id: 11,
      src: '/gallery/gallery-105.jpeg',
      alt: 'Conference venue exterior',
      category: 'venue',
      year: '2024',
      title: 'Venue Exterior',
      description: 'Beautiful coastal conference location'
    },
    {
      id: 12,
      src: '/gallery/gallery-115.jpeg',
      alt: 'Audience engagement during keynote',
      category: 'keynotes',
      year: '2024',
      title: 'Engaged Audience',
      description: 'Participants actively listening to presentations'
    },
    {
      id: 13,
      src: '/gallery/gallery-125.jpeg',
      alt: 'Lunch networking by the sea',
      category: 'networking',
      year: '2024',
      title: 'Lunch Networking',
      description: 'Connecting over meals with ocean views'
    },
    {
      id: 14,
      src: '/gallery/gallery-135.jpeg',
      alt: 'Collaborative workshop session',
      category: 'workshops',
      year: '2024',
      title: 'Collaborative Learning',
      description: 'Team-based security challenges'
    },
    {
      id: 15,
      src: '/gallery/gallery-145.jpeg',
      alt: 'Conference venue at sunset',
      category: 'venue',
      year: '2024',
      title: 'Sunset Venue',
      description: 'Golden hour at the conference location'
    },
    {
      id: 16,
      src: '/gallery/gallery-10.jpeg',
      alt: 'Village meetup session',
      category: 'villages',
      year: '2024',
      title: 'Village Meetup',
      description: 'Specialized track discussions'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Memories' },
    { id: 'keynotes', label: 'Keynotes' },
    { id: 'workshops', label: 'Workshops' },
    { id: 'networking', label: 'Networking' },
    { id: 'villages', label: 'Villages' },
    { id: 'venue', label: 'Venue' }
  ];

  const filteredItems = selectedFilter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedFilter);

  const openLightbox = useCallback((item) => {
    setSelectedImage(item);
    setLightboxIndex(filteredItems.findIndex(i => i.id === item.id));
  }, [filteredItems]);

  const closeLightbox = useCallback(() => {
    setSelectedImage(null);
  }, []);

  const navigateLightbox = useCallback((direction) => {
    const newIndex = direction === 'next' 
      ? (lightboxIndex + 1) % filteredItems.length
      : (lightboxIndex - 1 + filteredItems.length) % filteredItems.length;
    
    setLightboxIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  }, [lightboxIndex, filteredItems]);

  // Masonry layout helper
  const createMasonryLayout = (items) => {
    const columns = 3;
    const columnItems = Array.from({ length: columns }, () => []);
    
    items.forEach((item, index) => {
      columnItems[index % columns].push(item);
    });
    
    return columnItems;
  };

  const masonryColumns = createMasonryLayout(filteredItems);

  return (
    <section id="nostalgia" className={`relative py-20 scroll-mt-24 overflow-hidden ${
      isDark ? 'bg-charcoal-gray' : 'bg-light-gray'
    }`}>
      {/* Animated background */}
      <div className="absolute inset-0">
        <div className={`absolute inset-0 bg-sunset-orange/10 aurora-x ${
          isDark ? 'opacity-50' : 'opacity-30'
        }`}></div>
      </div>

      <div className="relative container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block mb-6"
            >
              <span className={`text-sm font-bold tracking-wider uppercase px-4 py-2 rounded-full border ${
                isDark 
                  ? 'text-pink-400 border-pink-400/30 bg-pink-400/10' 
                  : 'text-pink-600 border-pink-600/30 bg-pink-600/10'
              }`}>
                MEMORIES
              </span>
            </motion.div>

            <h2 className={`text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight mb-6 ${
              isDark ? 'text-white soft-glow' : 'text-gray-900'
            }`}>
              Relive the{' '}
              <span className="text-sunset-orange">
                Magic
              </span>
            </h2>

            <p className={`text-xl leading-relaxed max-w-3xl mx-auto ${
              isDark ? 'text-gray-300' : 'text-gray-600'
            }`}>
              Journey through moments that defined our community. Each image tells a story of learning, connection, and growth.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filters.map((filter) => (
              <motion.button
                key={filter.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedFilter(filter.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === filter.id
                    ? isDark
                      ? 'bg-sunset-orange text-white shadow-lg'
                      : 'bg-sunset-orange text-white shadow-lg'
                    : isDark
                      ? 'bg-white/10 text-gray-300 hover:bg-white/20 border border-white/20'
                      : 'bg-white text-gray-700 hover:bg-gray-50 border border-gray-200 shadow-sm'
                }`}
              >
                {filter.label}
              </motion.button>
            ))}
          </motion.div>

          {/* Masonry Gallery */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {masonryColumns.map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-6">
                {column.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 + (columnIndex * 0.1) + (index * 0.1) }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    onClick={() => openLightbox(item)}
                    className={`group relative overflow-hidden rounded-2xl cursor-pointer backdrop-blur-sm ${
                      isDark 
                        ? 'bg-white/5 border border-white/10 hover:bg-white/10' 
                        : 'bg-white border border-gray-200 shadow-lg hover:shadow-2xl'
                    } transition-all duration-300`}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        openLightbox(item);
                      }
                    }}
                    aria-label={`View ${item.title} in full size`}
                  >
                    {/* Image */}
                    <div className="relative overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={400}
                        height={300}
                        className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                      />
                      
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                          <p className="text-sm text-gray-200 mb-2">{item.description}</p>
                          <span className="text-xs text-pink-300 font-semibold">{item.year}</span>
                        </div>
                      </div>

                      {/* Zoom icon */}
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            ))}
          </motion.div>

          {/* Gallery Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <motion.a
              href="/gallery"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`inline-flex items-center px-8 py-4 rounded-full font-bold transition-all duration-300 ${
                isDark
                  ? 'bg-sunset-orange text-white hover:bg-sunset-orange/80 shadow-lg hover:shadow-sunset-orange/25'
                  : 'bg-sunset-orange text-white hover:bg-sunset-orange/80 shadow-lg hover:shadow-sunset-orange/25'
              }`}
            >
              <svg className="w-5 h-5 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              View Complete Gallery
            </motion.a>
          </motion.div>
        </div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute -top-12 right-0 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                aria-label="Close lightbox"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              {filteredItems.length > 1 && (
                <>
                  <button
                    onClick={() => navigateLightbox('prev')}
                    className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                    aria-label="Previous image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>

                  <button
                    onClick={() => navigateLightbox('next')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors duration-200"
                    aria-label="Next image"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}

              {/* Image */}
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                width={800}
                height={600}
                className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
              />

              {/* Image Info */}
              <div className="mt-4 text-center text-white">
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300 mb-2">{selectedImage.description}</p>
                <span className="text-pink-300 font-semibold">{selectedImage.year}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default NostalgiaGallery;
