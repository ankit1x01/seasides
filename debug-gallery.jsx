'use client';
import { useState } from 'react';
import Image from 'next/image';

// Simple debug gallery to test image loading
export default function DebugGallery() {
  const [loadStatus, setLoadStatus] = useState({});

  const handleImageLoad = (id) => {
    setLoadStatus(prev => ({ ...prev, [id]: 'loaded' }));
  };

  const handleImageError = (id, src) => {
    console.error(`Failed to load image ${id}: ${src}`);
    setLoadStatus(prev => ({ ...prev, [id]: 'error' }));
  };

  return (
    <div className="p-8 bg-black text-white">
      <h1 className="text-2xl mb-8">Gallery Debug - First 10 Images</h1>
      
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {[2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((i) => {
          const src = `/gallery/gallery-${i}.jpeg`;
          const status = loadStatus[i] || 'loading';
          
          return (
            <div key={i} className="border border-gray-600 rounded p-2">
              <h3 className="text-sm mb-2">Image {i} - {status}</h3>
              <div className="relative h-40 bg-gray-800 rounded">
                <Image
                  src={src}
                  alt={`Gallery ${i}`}
                  fill
                  className="object-cover rounded"
                  sizes="200px"
                  onLoad={() => handleImageLoad(i)}
                  onError={() => handleImageError(i, src)}
                />
              </div>
              <p className="text-xs mt-1 text-gray-400">{src}</p>
            </div>
          );
        })}
      </div>
      
      <div className="mt-8 p-4 bg-gray-800 rounded">
        <h3 className="text-lg mb-2">Load Status:</h3>
        <pre className="text-sm">{JSON.stringify(loadStatus, null, 2)}</pre>
      </div>
    </div>
  );
}