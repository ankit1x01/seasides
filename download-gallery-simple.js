const https = require('https');
const fs = require('fs');
const path = require('path');

// Create gallery directory if it doesn't exist
const galleryDir = path.join(__dirname, 'public', 'gallery');
if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

// Predefined list of known gallery images from seasides.net
// These are common images found on their gallery page
const knownImages = [
  'https://seasides.net/wp-content/uploads/2024/09/DSF3913-Large.jpeg',
  'https://seasides.net/wp-content/uploads/2024/09/DSF3914-Large.jpeg',
  'https://seasides.net/wp-content/uploads/2024/09/DSF3915-Large.jpeg',
  'https://seasides.net/wp-content/uploads/2024/09/DSF3916-Large.jpeg',
  'https://seasides.net/wp-content/uploads/2024/09/DSF3917-Large.jpeg',
  'https://seasides.net/wp-content/uploads/2024/09/DSF3918-Large.jpeg',
  'https://seasides.net/wp-content/uploads/2024/09/DSF3919-Large.jpeg',
  'https://seasides.net/wp-content/uploads/2024/09/DSF3920-Large.jpeg',
  // Add more URLs as needed
];

// Function to download image
function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(path.join(galleryDir, filename));
    
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`✓ Downloaded: ${filename}`);
          resolve();
        });
      } else {
        file.close();
        fs.unlink(path.join(galleryDir, filename), () => {});
        reject(new Error(`HTTP ${response.statusCode}`));
      }
    }).on('error', (err) => {
      file.close();
      fs.unlink(path.join(galleryDir, filename), () => {});
      reject(err);
    });
  });
}

// Function to get filename from URL
function getFilenameFromUrl(url, index) {
  const urlPath = new URL(url).pathname;
  const originalName = path.basename(urlPath);
  const ext = path.extname(originalName);
  return `seasides-${index + 1}${ext}`;
}

// Download all images
async function downloadGalleryImages() {
  console.log(`Starting download of ${knownImages.length} gallery images...`);
  console.log(`Saving to: ${galleryDir}\n`);
  
  const metadata = [];
  
  for (let i = 0; i < knownImages.length; i++) {
    const url = knownImages[i];
    const filename = getFilenameFromUrl(url, i);
    
    try {
      await downloadImage(url, filename);
      
      // Add to metadata
      metadata.push({
        id: i + 1,
        src: `/gallery/${filename}`,
        alt: `Seasides Conference Image ${i + 1}`,
        title: `Conference Moment ${i + 1}`,
        description: `Highlights from Seasides cybersecurity conference`,
        category: i % 4 === 0 ? 'conference' : 
                 i % 4 === 1 ? 'workshops' : 
                 i % 4 === 2 ? 'networking' : 'presentations'
      });
      
      // Delay between downloads to be respectful
      await new Promise(resolve => setTimeout(resolve, 2000));
      
    } catch (error) {
      console.error(`✗ Failed to download ${filename}: ${error.message}`);
    }
  }
  
  // Save metadata
  fs.writeFileSync(
    path.join(__dirname, 'gallery-metadata.json'),
    JSON.stringify(metadata, null, 2)
  );
  
  console.log(`\n✓ Download completed!`);
  console.log(`✓ Images saved to: ${galleryDir}`);
  console.log(`✓ Metadata saved to: gallery-metadata.json`);
  console.log(`\nDownloaded ${metadata.length} images successfully.`);
}

// Run the download
downloadGalleryImages().catch(console.error);