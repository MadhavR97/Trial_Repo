const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const folders = [
  'src/assets/FourthPage',
  'src/assets/SecondPage',
  'src/assets/DrakePassage',
  'src/assets/antarctica-cruise-cost',
  'src/assets/scenic-vs-silversea-antarctica'
];

async function convertFolder(folder) {
  const folderPath = path.join(__dirname, '..', folder);
  
  if (!fs.existsSync(folderPath)) {
    console.log(`✗ Folder not found: ${folder}`);
    return;
  }
  
  const files = fs.readdirSync(folderPath);
  
  for (const file of files) {
    const ext = path.extname(file).toLowerCase();
    const name = path.basename(file, ext);
    
    // Skip if already webp
    if (ext === '.webp') continue;
    
    // Convert jpg, jpeg, png to webp
    if (['.jpg', '.jpeg', '.png'].includes(ext)) {
      const inputPath = path.join(folderPath, file);
      const outputPath = path.join(folderPath, `${name}.webp`);
      
      try {
        await sharp(inputPath)
          .webp({ quality: 80, effort: 6 })
          .toFile(outputPath);
        
        const originalSize = fs.statSync(inputPath).size;
        const newSize = fs.statSync(outputPath).size;
        const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);
        
        console.log(`✓ ${folder}/${file} -> ${name}.webp`);
        console.log(`  ${(originalSize / 1024).toFixed(1)}KB -> ${(newSize / 1024).toFixed(1)}KB (${savings}% smaller)`);
      } catch (err) {
        console.error(`✗ Error converting ${file}:`, err.message);
      }
    }
  }
}

async function convertAll() {
  for (const folder of folders) {
    await convertFolder(folder);
  }
}

convertAll();
