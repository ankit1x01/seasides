const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const GALLERY_DIR = './public/gallery';

async function compressImage(inputPath, outputPath) {
  try {
    // Check if file is actually an image
    const buffer = fs.readFileSync(inputPath);
    const isImage = buffer[0] === 0xFF || buffer[0] === 0x89 || buffer[0] === 0x47 || buffer.toString('ascii', 0, 4) === 'RIFF';
    
    if (!isImage) {
      console.log(`⚠ Skipping ${path.basename(inputPath)}: Not a valid image file`);
      return null;
    }
    
    const ext = path.extname(inputPath).toLowerCase();
    let sharpInstance = sharp(inputPath);
    
    if (ext === '.png') {
      sharpInstance = sharpInstance.png({ quality: 70, compressionLevel: 8 });
    } else if (ext === '.jpg' || ext === '.jpeg') {
      sharpInstance = sharpInstance.jpeg({ quality: 60, progressive: true });
    } else if (ext === '.webp') {
      sharpInstance = sharpInstance.webp({ quality: 60 });
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

async function compressGallery() {
  if (!fs.existsSync(GALLERY_DIR)) {
    console.error('Gallery directory not found:', GALLERY_DIR);
    return;
  }

  const files = fs.readdirSync(GALLERY_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png|webp)$/i.test(file)
  );

  console.log(`Found ${imageFiles.length} images to compress...`);
  
  let totalOriginalSize = 0;
  let totalCompressedSize = 0;
  let successCount = 0;

  for (const file of imageFiles) {
    const inputPath = path.join(GALLERY_DIR, file);
    const tempPath = path.join(GALLERY_DIR, `temp_${file}`);
    
    const originalSize = fs.statSync(inputPath).size;
    totalOriginalSize += originalSize;
    
    const result = await compressImage(inputPath, tempPath);
    
    if (result) {
      const compressedSize = fs.statSync(tempPath).size;
      totalCompressedSize += compressedSize;
      
      // Replace original with compressed version
      fs.unlinkSync(inputPath);
      fs.renameSync(tempPath, inputPath);
      successCount++;
    } else {
      // Clean up temp file if compression failed
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
      totalCompressedSize += originalSize; // Count original size for failed compressions
    }
  }

  const totalReduction = Math.round((1 - totalCompressedSize/totalOriginalSize) * 100);
  console.log(`\n🎉 Compression complete!`);
  console.log(`Successfully compressed: ${successCount}/${imageFiles.length} images`);
  console.log(`Total size reduction: ${totalReduction}%`);
  console.log(`Original size: ${Math.round(totalOriginalSize/1024)} KB`);
  console.log(`Compressed size: ${Math.round(totalCompressedSize/1024)} KB`);
  console.log(`Space saved: ${Math.round((totalOriginalSize-totalCompressedSize)/1024)} KB`);
}

// Run the compression
compressGallery().catch(console.error);