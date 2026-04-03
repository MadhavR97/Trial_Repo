const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (/\.(jpg|jpeg|png)$/i.test(name)) {
        files.push(name);
      }
    }
  }
  return files;
}

async function optimize() {
  const images = getFiles('src/assets');
  console.log(`Found ${images.length} images to optimize.`);

  for (const imgPath of images) {
    const fullPath = path.resolve(imgPath);
    const extension = path.extname(fullPath);
    const outputPath = fullPath.replace(new RegExp(`\\${extension}$`), '.webp');

    if (fs.existsSync(outputPath)) {
      console.log(`Skipping ${imgPath} (WebP already exists)`);
      continue;
    }

    console.log(`Optimizing ${imgPath}...`);
    try {
      const image = sharp(fullPath);
      const metadata = await image.metadata();
      
      let pipeline = image;
      if (metadata.width > 1920) {
        pipeline = pipeline.resize({ width: 1920, withoutEnlargement: true });
      }

      await pipeline
        .webp({ quality: 80 })
        .toFile(outputPath);
      console.log(`Success: ${outputPath}`);
    } catch (err) {
      console.error(`Error optimizing ${fullPath}: ${err.message}`);
    }
  }
}

optimize();
