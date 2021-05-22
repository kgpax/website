require('@babel/register');

const fs = require('fs');
const path = require('path');
const { navigation } = require('../src/site');

let redirectsFile = '';
redirectsFile = `# generated at build time on ${new Date().toLocaleDateString()}\n`;
navigation.forEach((page) => {
  redirectsFile += `${page.path} /index.html 200\n`;
});
redirectsFile += `/* /index.html 404`;

console.log('Writing _redirects file:');
console.log(redirectsFile);

const filePath = path.join(__dirname, '../public', '_redirects');
fs.writeFileSync(filePath, redirectsFile, 'UTF-8');
