// create-pages.js
const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'client/src/pages');

// List of actual pages for your portfolio project
const pages = [
  'HomePage',
  'AboutPage',
  'TechPage',
  'ProjectPage',
  'ContactPage'
];

pages.forEach((page) => {
  const pageFolder = path.join(pagesDir, page);
  const jsxFile = path.join(pageFolder, `${page}.jsx`);
  const indexFile = path.join(pageFolder, `index.jsx`);

  console.log(`Creating folder and files for: ${page}`);

  // Create folder if it doesn't exist
  if (!fs.existsSync(pageFolder)) {
    fs.mkdirSync(pageFolder, { recursive: true });
  }

  // Create JSX file with default component
  const jsxContent = `export default function ${page}() {
  return (
    <section className="p-8">
      <h1 className="text-4xl font-bold text-center">${page.replace('Page', '')}</h1>
    </section>
  );
}
`;
  fs.writeFileSync(jsxFile, jsxContent);

  // Create index file for cleaner imports
  const indexContent = `export { default } from './${page}';\n`;
  fs.writeFileSync(indexFile, indexContent);

  console.log(`✅ Created: client/src/pages/${page}/${page}.jsx`);
  console.log(`✅ Created: client/src/pages/${page}/index.jsx\n`);
});