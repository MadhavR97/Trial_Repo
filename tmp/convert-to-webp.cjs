const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const conversions = [
  { input: 'src/assets/LuxuryTravel/Hero1.jpeg', output: 'src/assets/LuxuryTravel/Hero1.webp' },
  { input: 'src/assets/LuxuryTravel/Hero2.png', output: 'src/assets/LuxuryTravel/Hero2.webp' },
  { input: 'src/assets/LuxuryTravel/Hero3.jpeg', output: 'src/assets/LuxuryTravel/Hero3.webp' },
  { input: 'src/assets/LuxuryTravel/section2_image1.jpeg', output: 'src/assets/LuxuryTravel/section2_image1.webp' },
  { input: 'src/assets/LuxuryTravel/section6_bg.jpeg', output: 'src/assets/LuxuryTravel/section6_bg.webp' },
  { input: 'src/assets/LuxuryTravel/section6_image2.jpeg', output: 'src/assets/LuxuryTravel/section6_image2.webp' },
  { input: 'src/assets/LuxuryTravel/section7_image.png', output: 'src/assets/LuxuryTravel/section7_image.webp' },
  { input: 'src/assets/LuxuryTravel/section11_bg.png', output: 'src/assets/LuxuryTravel/section11_bg.webp' },
];

async function convertImages() {
  for (const { input, output } of conversions) {
    const inputPath = path.join(__dirname, '..', input);
    const outputPath = path.join(__dirname, '..', output);
    
    if (fs.existsSync(inputPath)) {
      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        
        console.log(`✓ ${input} -> ${output}`);
        console.log(`  Original: ${(originalSize / 1024).toFixed(1)}KB, WebP: ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
      } catch (err) {
        console.error(`✗ Error converting ${input}:`, err.message);
      }
    } else {
      console.log(`✗ ${input} NOT FOUND`);
    }
  }
}

convertImages();
