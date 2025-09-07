import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GalleryGrid from "@/components/GalleryGrid";

export const revalidate = 3600; // Revalidate once per hour

async function fetchGalleryHtml() {
  const res = await fetch("https://seasides.net/wp-json/wp/v2/pages?slug=gallery", {
    // Cache on the server and revalidate per the export above
    next: { revalidate },
  });
  if (!res.ok) throw new Error("Failed to load gallery content");
  const data = await res.json();
  const page = Array.isArray(data) ? data[0] : null;
  return page?.content?.rendered || "";
}

function extractImages(html) {
  if (!html) return [];
  const tags = html.match(/<img[^>]*>/g) || [];
  const items = tags
    .map((tag) => {
      const srcMatch = tag.match(/src="([^"]+)"/i);
      const widthMatch = tag.match(/\bwidth="(\d+)"/i);
      const heightMatch = tag.match(/\bheight="(\d+)"/i);
      const altMatch = tag.match(/\balt="([^"]*)"/i);
      const src = srcMatch?.[1];
      if (!src) return null;
      // Only images hosted on seasides.net uploads
      if (!/seasides\.net\/wp-content\/uploads\//i.test(src)) return null;
      const width = widthMatch ? parseInt(widthMatch[1], 10) : undefined;
      const height = heightMatch ? parseInt(heightMatch[1], 10) : undefined;
      const alt = altMatch?.[1] || "Seasides Gallery";
      return { src, width, height, alt };
    })
    .filter(Boolean);

  // Deduplicate by src while preserving order
  const seen = new Set();
  const unique = [];
  for (const it of items) {
    if (!seen.has(it.src)) {
      seen.add(it.src);
      unique.push(it);
    }
  }
  return unique;
}

export default async function GalleryPage() {
  let html = "";
  try {
    html = await fetchGalleryHtml();
  } catch (e) {
    // Keep html empty, will show fallback below
  }

  const images = extractImages(html);

  return (
    <main className="relative">
      <Navbar />
      {images.length ? (
        <section className="bg-black text-white">
          <div className="mx-auto max-w-7xl px-4 py-8">
            <h1 className="text-3xl font-bold text-cyan-300 mb-6">Gallery</h1>
            <GalleryGrid images={images} />
          </div>
        </section>
      ) : (
        <div className="min-h-[50vh] grid place-items-center bg-black text-cyan-300 p-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold">Gallery</h1>
            <p className="opacity-80 mt-2">No images found right now. Please try again later.</p>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
