const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const images = [
  'src/assets/HomePage/HomePage1.webp',
  'src/assets/HomePage/HomePage2.webp',
  'src/assets/HomePage/HomePage3.webp',
  'src/assets/HomePage/HomePage4.webp',
  'src/assets/image.webp'
];

async function getImageDimensions() {
  for (const imgPath of images) {
    const fullPath = path.join(__dirname, '..', imgPath);
    if (fs.existsSync(fullPath)) {
      try {
        const metadata = await sharp(fullPath).metadata();
        console.log(`${imgPath}: ${metadata.width}x${metadata.height}`);
      } catch (err) {
        console.error(`Error reading ${imgPath}:`, err.message);
      }
    } else {
      console.log(`${imgPath}: NOT FOUND`);
    }
  }
}

getImageDimensions();
