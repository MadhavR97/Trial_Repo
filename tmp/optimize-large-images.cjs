const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Target files that are too large (>1MB)
const largeFiles = [
  'src/assets/scenic-vs-silversea-antarctica/scenisilver3.jpg',
  'src/assets/scenic-vs-silversea-antarctica/scenisilver5.jpg',
  'src/assets/antarctica-cruise-cost/anta2.jpg',
  'src/assets/antarctica-cruise-cost/anta4.jpg',
  'src/assets/SecondPage/SecondPage2.jpg',
  'src/assets/SecondPage/SecondPage11.jpg',
  'src/assets/FourthPage/FourthPage3.jpg',
  'src/assets/FourthPage/FourthPage5.jpg',
];

async function optimizeLargeImages() {
  for (const filePath of largeFiles) {
    const fullPath = path.join(__dirname, '..', filePath);
    const dir = path.dirname(fullPath);
    const name = path.basename(filePath, path.extname(filePath));
    const outputPath = path.join(dir, `${name}.webp`);
    
    if (fs.existsSync(fullPath)) {
      try {
        // Get original dimensions
        const metadata = await sharp(fullPath).metadata();
        
        // Calculate new dimensions (max 1920px width)
        let newWidth = metadata.width;
        let newHeight = metadata.height;
        
        if (metadata.width > 1920) {
          newWidth = 1920;
          newHeight = Math.round((metadata.height * 1920) / metadata.width);
        }
        
        console.log(`\nOptimizing: ${filePath}`);
        console.log(`Original: ${metadata.width}x${metadata.height}, ${(fs.statSync(fullPath).size / 1024).toFixed(1)}KB`);
        console.log(`Resizing to: ${newWidth}x${newHeight}`);
        
        await sharp(fullPath)
          .resize(newWidth, newHeight, { 
            fit: 'inside',
            withoutEnlargement: true
          })
          .webp({ quality: 75, effort: 6 })
          .toFile(outputPath);
        
        const newSize = fs.statSync(outputPath).size;
        const savings = ((fs.statSync(fullPath).size - newSize) / fs.statSync(fullPath).size * 100).toFixed(1);
        
        console.log(`✓ WebP: ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller than original)`);
      } catch (err) {
        console.error(`✗ Error:`, err.message);
      }
    } else {
      console.log(`✗ Not found: ${filePath}`);
    }
  }
}

optimizeLargeImages();
