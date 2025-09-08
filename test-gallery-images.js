const fs = require('fs');
const path = require('path');

// Test which gallery images exist
const galleryDir = path.join(__dirname, 'public', 'gallery');

console.log('Testing gallery images...\n');

// Check first 20 images
for (let i = 2; i <= 21; i++) {
  const imagePath = path.join(galleryDir, `gallery-${i}.jpeg`);
  const exists = fs.existsSync(imagePath);
  const stats = exists ? fs.statSync(imagePath) : null;
  
  console.log(`gallery-${i}.jpeg: ${exists ? '✓ EXISTS' : '✗ MISSING'} ${stats ? `(${Math.round(stats.size/1024)}KB)` : ''}`);
}

console.log('\nChecking for any PNG files:');
const files = fs.readdirSync(galleryDir);
const pngFiles = files.filter(f => f.endsWith('.png'));
console.log('PNG files:', pngFiles);

console.log('\nTotal files in gallery:', files.length);
console.log('JPEG files:', files.filter(f => f.endsWith('.jpeg')).length);
console.log('PNG files:', files.filter(f => f.endsWith('.png')).length);