"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

export default function GalleryGrid({ images = [] }) {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [mounted, setMounted] = useState(false);
  const [animIn, setAnimIn] = useState(false);

  useEffect(() => setMounted(true), []);

  const openAt = useCallback((idx) => {
    setActiveIndex(idx);
    // next tick to trigger transition
    requestAnimationFrame(() => setAnimIn(true));
  }, []);

  const close = useCallback(() => {
    setAnimIn(false);
    // wait for transition end
    setTimeout(() => setActiveIndex(-1), 200);
  }, []);

  // Keyboard controls when modal open
  useEffect(() => {
    if (activeIndex < 0) return;
    const onKey = (e) => {
      if (e.key === "Escape") return close();
      if (e.key === "ArrowRight")
        setActiveIndex((i) => (i + 1) % images.length);
      if (e.key === "ArrowLeft")
        setActiveIndex((i) => (i - 1 + images.length) % images.length);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [activeIndex, images.length, close]);

  return (
    <>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
        {images.map((img, idx) => (
          <button
            key={idx}
            type="button"
            onClick={() => openAt(idx)}
            className="group relative overflow-hidden rounded-lg bg-neutral-900 focus:outline-none focus:ring-2 focus:ring-cyan-400"
            aria-label="Open image"
          >
            {img.width && img.height ? (
              <Image
                src={img.src}
                alt={img.alt || "Image"}
                width={img.width}
                height={img.height}
                className="h-auto w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
              />
            ) : (
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt || "Image"}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 20vw"
                  className="object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                />
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Lightbox Modal */}
      {mounted && activeIndex >= 0 && (
        <div className="fixed inset-0 z-[60]" role="dialog" aria-modal="true">
          <div
            className={`absolute inset-0 bg-black/80 transition-opacity duration-200 ${
              animIn ? "opacity-100" : "opacity-0"
            }`}
            onClick={close}
          />
          <div className="absolute inset-0 grid place-items-center p-4">
            <div
              className={`relative w-full max-w-6xl transition-all duration-200 ${
                animIn ? "opacity-100 scale-100" : "opacity-0 scale-95"
              }`}
            >
              <div className="relative w-full max-h-[80vh]">
                <div className="relative w-full h-[60vh] md:h-[70vh]">
                  <Image
                    src={images[activeIndex].src}
                    alt={images[activeIndex].alt || "Expanded image"}
                    fill
                    sizes="100vw"
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Controls */}
              <div className="mt-3 flex items-center justify-between text-white/80">
                <div className="text-sm">
                  {activeIndex + 1} / {images.length}
                </div>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() =>
                      setActiveIndex((i) => (i - 1 + images.length) % images.length)
                    }
                    className="rounded bg-white/10 px-3 py-1.5 hover:bg-white/20"
                  >
                    Prev
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveIndex((i) => (i + 1) % images.length)}
                    className="rounded bg-white/10 px-3 py-1.5 hover:bg-white/20"
                  >
                    Next
                  </button>
                  <button
                    type="button"
                    onClick={close}
                    className="rounded bg-cyan-500 px-3 py-1.5 text-black hover:bg-cyan-400"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
