const https = require('https');
const http = require('http');
const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, 'public', 'gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const protocol = url.startsWith('https:') ? https : http;
    const file = fs.createWriteStream(path.join(galleryDir, filename));
    
    protocol.get(url, (response) => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded: ${filename}`);
        resolve();
      });
    }).on('error', (err) => {
      fs.unlink(path.join(galleryDir, filename), () => {}); // Delete the file on error
      reject(err);
    });
  });
}

// Function to fetch gallery page and extract images
async function downloadGalleryImages() {
  try {
    console.log('Fetching gallery page...');
    
    // Fetch the gallery page HTML
    const response = await fetch('https://seasides.net/gallery/');
    const html = await response.text();
    
    // Parse HTML to extract image URLs
    const dom = new JSDOM(html);
    const document = dom.window.document;
    
    // Find all img elements
    const images = document.querySelectorAll('img');
    const imageUrls = [];
    
    images.forEach((img, index) => {
      const src = img.src;
      if (src && src.includes('seasides.net') && src.includes('wp-content/uploads')) {
        // Get higher resolution version by removing size suffixes
        const cleanUrl = src.replace(/-\d+x\d+(\.(jpg|jpeg|png|gif|webp))$/i, '$1');
        const filename = `gallery-${index + 1}${path.extname(cleanUrl)}`;
        imageUrls.push({ url: cleanUrl, filename, alt: img.alt || `Gallery image ${index + 1}` });
      }
    });
    
    console.log(`Found ${imageUrls.length} images to download...`);
    
    // Download images with delay to be respectful to the server
    for (let i = 0; i < imageUrls.length; i++) {
      const { url, filename } = imageUrls[i];
      try {
        await downloadImage(url, filename);
        // Add delay between downloads
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (error) {
        console.error(`Failed to download ${filename}:`, error.message);
      }
    }
    
    // Create a JSON file with image metadata
    const metadata = imageUrls.map((img, index) => ({
      id: index + 1,
      src: `/gallery/${img.filename}`,
      alt: img.alt,
      title: `Gallery Image ${index + 1}`,
      description: `Image from Seasides conference gallery`,
      category: 'conference' // Default category, you can customize this
    }));
    
    fs.writeFileSync(
      path.join(__dirname, 'gallery-metadata.json'),
      JSON.stringify(metadata, null, 2)
    );
    
    console.log('Download complete!');
    console.log(`Images saved to: ${galleryDir}`);
    console.log(`Metadata saved to: gallery-metadata.json`);
    
  } catch (error) {
    console.error('Error downloading gallery:', error);
  }
}

// Run the download
downloadGalleryImages();