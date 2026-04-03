const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\itsad\\.gemini\\antigravity\\brain\\9e27fa7b-2507-4857-9222-38216fd2e424';
const destDir = 'c:\\Users\\itsad\\Desktop\\UniCompare\\college-counsel\\public\\homePage\\landingCrausel';

const files = [
  { src: 'hero_carousel_1_1768141627646.png', dest: 'hero-1.png' },
  { src: 'hero_carousel_2_1768141647513.png', dest: 'hero-2.png' },
  { src: 'hero_carousel_3_1768141667462.png', dest: 'hero-3.png' },
  { src: 'hero_carousel_4_1768141687125.png', dest: 'hero-4.png' }
];

console.log('Starting copy...');
files.forEach(file => {
  try {
    const srcPath = path.join(srcDir, file.src);
    const destPath = path.join(destDir, file.dest);
    fs.copyFileSync(srcPath, destPath);
    console.log(`Success: Copied to ${destPath}`);
  } catch (err) {
    console.error(`Error copying ${file.dest}:`, err.message);
  }
});
console.log('Done.');
