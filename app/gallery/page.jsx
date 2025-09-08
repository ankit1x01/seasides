'use client';
import { useState } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from 'next/image';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const { isDark } = useTheme();

  // Generate gallery data from downloaded images (skip first image as it's likely a logo)
  const generateGalleryImages = () => {
    const images = [];
    const categories = ['conference', 'workshops', 'presentations', 'networking', 'activities'];
    const titles = [
      'Opening Ceremony', 'Workshop Session', 'Expert Keynote', 'Community Networking', 'Team Building',
      'Technical Demo', 'Panel Discussion', 'Award Ceremony', 'Security Training', 'Hands-on Labs',
      'Industry Insights', 'Professional Networking', 'Innovation Showcase', 'Collaboration Hub', 'Knowledge Sharing',
      'Technology Exhibition', 'Expert Roundtable', 'Community Engagement', 'Future of Security', 'Best Practices'
    ];
    
    // Start from gallery-2.jpeg since gallery-1.png appears to be a logo
    for (let i = 2; i <= 153; i++) {
      images.push({
        id: i - 1, // Adjust ID to start from 1
        src: `/gallery/gallery-${i}.jpeg`,
        alt: `Seasides Conference Moment ${i - 1}`,
        category: categories[(i - 2) % categories.length],
        title: titles[(i - 2) % titles.length] + ` ${Math.ceil((i - 1) / titles.length)}`,
        description: `Memorable moments from Seasides cybersecurity conference - capturing the essence of community, learning, and innovation in cybersecurity`
      });
    }
    return images;
  };

  const galleryImages = generateGalleryImages();

  const categories = [
    { id: 'all', name: 'All Photos', count: galleryImages.length },
    { id: 'conference', name: 'Conference', count: galleryImages.filter(img => img.category === 'conference').length },
    { id: 'workshops', name: 'Workshops', count: galleryImages.filter(img => img.category === 'workshops').length },
    { id: 'presentations', name: 'Presentations', count: galleryImages.filter(img => img.category === 'presentations').length },
    { id: 'networking', name: 'Networking', count: galleryImages.filter(img => img.category === 'networking').length },
    { id: 'activities', name: 'Activities', count: galleryImages.filter(img => img.category === 'activities').length }
  ];

  const filteredImages = activeCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  const openModal = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const prevImage = () => {
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + filteredImages.length) % filteredImages.length;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <main className="relative">
      <Navbar />
      <section className={`py-20 min-h-screen transition-colors duration-300 ${
        isDark 
          ? 'bg-gradient-to-br from-slate-900 via-slate-800 to-gray-900' 
          : 'bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50'
      }`}>
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        <div className="container mx-auto px-6 relative">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-block mb-4">
              <span className={`font-medium text-lg ${
                isDark 
                  ? 'text-cyan-400' 
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent'
              }`}>
                Seasides Gallery
              </span>
            </div>
            <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${
              isDark 
                ? 'text-white' 
                : 'bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent'
            }`}>
              Conference Memories
            </h1>
            <p className={`text-xl max-w-2xl mx-auto mb-8 ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}>
              Explore highlights from our cybersecurity conferences, workshops, and community events
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full"></div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-3 rounded-2xl font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? isDark
                      ? 'bg-cyan-500 text-black shadow-lg shadow-cyan-500/25'
                      : 'bg-blue-500 text-white shadow-lg shadow-blue-500/25'
                    : isDark
                      ? 'bg-slate-800/60 text-slate-300 hover:text-white hover:bg-slate-700/50 backdrop-blur-sm'
                      : 'bg-white/60 text-slate-600 hover:text-slate-800 hover:bg-white/80 backdrop-blur-sm'
                }`}
              >
                {category.name}
                <span className={`ml-2 px-2 py-1 rounded-full text-xs ${
                  activeCategory === category.id
                    ? isDark ? 'bg-black/20' : 'bg-white/20'
                    : isDark ? 'bg-slate-700' : 'bg-slate-200'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {filteredImages.map((image, index) => (
              <div 
                key={image.id}
                className={`group cursor-pointer transform hover:scale-105 transition-all duration-300 ${
                  isDark 
                    ? 'hover:shadow-2xl hover:shadow-cyan-500/10' 
                    : 'hover:shadow-2xl hover:shadow-blue-500/10'
                }`}
                onClick={() => openModal(image)}
                style={{
                  animationDelay: `${index * 100}ms`,
                  animation: 'fadeInUp 0.8s ease-out forwards'
                }}
              >
                <div className={`overflow-hidden rounded-2xl ${
                  isDark 
                    ? 'bg-slate-800/80 border border-slate-700/50' 
                    : 'bg-white/80 border border-white/20'
                } backdrop-blur-sm`}>
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                      onError={(e) => {
                        console.log(`Failed to load image: ${image.src}`);
                        e.target.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                      <h3 className="font-semibold text-sm mb-1">{image.title}</h3>
                      <p className="text-xs text-gray-300 line-clamp-2">{image.description}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Empty State */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className={`text-xl ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
                No images found in this category.
              </p>
            </div>
          )}
        </div>

        {/* Modal */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="relative max-w-5xl w-full max-h-[90vh] bg-black/50 rounded-2xl overflow-hidden">
              <div className="relative h-[70vh]">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>
              
              {/* Modal Controls */}
              <div className="absolute top-4 right-4 flex gap-2">
                <button
                  onClick={prevImage}
                  className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                <button
                  onClick={nextImage}
                  className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-full backdrop-blur-sm transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
                <button
                  onClick={closeModal}
                  className="p-2 bg-red-500/80 hover:bg-red-500 text-white rounded-full backdrop-blur-sm transition-all duration-200"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Image Info */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-xl font-bold mb-2">{selectedImage.title}</h3>
                <p className="text-gray-300">{selectedImage.description}</p>
                <div className="flex justify-between items-center mt-4">
                  <span className="text-sm text-gray-400">
                    {filteredImages.findIndex(img => img.id === selectedImage.id) + 1} of {filteredImages.length}
                  </span>
                  <span className="text-sm text-cyan-400 capitalize">{selectedImage.category}</span>
                </div>
              </div>
            </div>
          </div>
        )}

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
          .line-clamp-2 {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        `}</style>
      </section>
      <Footer />
    </main>
  );
};

export default Gallery;
