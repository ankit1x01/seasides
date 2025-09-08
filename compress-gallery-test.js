const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GALLERY_DIR = './public/gallery';

async function compressImage(inputPath, outputPath) {
  try {
    const ext = path.extname(inputPath).toLowerCase();
    let sharpInstance = sharp(inputPath);
    
    if (ext === '.png') {
      sharpInstance = sharpInstance.png({ quality: 75, compressionLevel: 8 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      sharpInstance = sharpInstance.jpeg({ quality: 75, progressive: true });
    } else if (ext === '.webp') {
      sharpInstance = sharpInstance.webp({ quality: 75 });
    }
    
    const info = await sharpInstance.toFile(outputPath);
    
    const inputStats = fs.statSync(inputPath);
    const outputStats = fs.statSync(outputPath);
    
    console.log(`✓ ${path.basename(inputPath)}: ${inputStats.size} → ${outputStats.size} bytes (${Math.round((1 - outputStats.size/inputStats.size) * 100)}% reduction)`);
    
    return info;
  } catch (error) {
    console.error(`✗ Error compressing ${inputPath}:`, error.message);
    return null;
  }
}

async function testCompression() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error('Gallery directory not found:', GALLERY_DIR);
    return;
  }

  const files = fs.readdirSync(GALLERY_DIR);
  const testFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  ).slice(0, 5); // Test only first 5 images

  console.log(`Testing compression on ${testFiles.length} images...`);
  
  for (const file of testFiles) {
    const inputPath = path.join(GALLERY_DIR, file);
    const testPath = path.join(GALLERY_DIR, `test_${file}`);
    
    await compressImage(inputPath, testPath);
    
    // Clean up test file
    if (fs.existsSync(testPath)) {
      fs.unlinkSync(testPath);
    }
  }
}

// Run the test
testCompression().catch(console.error);