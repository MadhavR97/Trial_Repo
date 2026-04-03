const fs = require('fs');
const path = require('path');

function getFiles(dir, files = []) {
  const fileList = fs.readdirSync(dir);
  for (const file of fileList) {
    const name = path.join(dir, file);
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, files);
    } else {
      if (name.endsWith('.jsx')) {
        files.push(name);
      }
    }
  }
  return files;
}

const pages = getFiles('src/pages');
pages.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  content = content.replace(/\.(jpg|jpeg|png)\b/g, '.webp');
  fs.writeFileSync(file, content);
  console.log(`Updated ${file}`);
});
