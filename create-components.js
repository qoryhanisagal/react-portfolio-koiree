// create-components.js
const fs = require('fs');
const path = require('path');

const componentsDir = path.join(__dirname, 'client/src/components');

const components = [
  'AboutMe',
  'Certifications',
  'ContactForm',
  'Education',
  'Experience',
  'Footer',
  'HeroContent',
  'Navbar',
  'ProjectCard',
  'Socials',
  'TechStack',
];

components.forEach((component) => {
  const folderPath = path.join(componentsDir, component);
  const jsxFile = path.join(folderPath, `${component}.jsx`);
  const indexFile = path.join(folderPath, `index.jsx`);

  console.log(`📁 Creating: ${component}`);

  if (!fs.existsSync(folderPath)) {
    fs.mkdirSync(folderPath, { recursive: true });
  }

  const jsxContent = `export default function ${component}() {
  return <div>${component} works!</div>;
}
`;

  const indexContent = `export { default } from './${component}';\n`;

  fs.writeFileSync(jsxFile, jsxContent);
  fs.writeFileSync(indexFile, indexContent);

  console.log(`✅ ${component}.jsx`);
  console.log(`✅ index.jsx\n`);
});