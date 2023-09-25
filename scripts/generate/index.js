/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const { component, barrel, story } = require("./componentTemplates.js");

// grab component name from terminal argument
const [directory] = process.argv.slice(2);
const [name] = process.argv.slice(3);

if (!name) throw new Error("You must include a component name.");

const dir = `./src${directory}/${name}/`;
const testDir = `${dir}__tests__/`;

// throw an error if the file already exists
if (fs.existsSync(dir))
  throw new Error("A component with that name already exists.");

// create the folder
fs.mkdirSync(dir);

fs.mkdirSync(testDir);

function writeFileErrorHandler(err) {
  if (err) throw err;
}

// component.tsx
fs.writeFile(`${dir}${name}.tsx`, component(name), writeFileErrorHandler);

// component.scss
fs.writeFile(`${dir}${name}.module.scss`, "", writeFileErrorHandler);

// storybook.jsx
if (dir === "foundry-ui") {
  fs.writeFile(`${dir}${name}.stories.jsx`, story(name), writeFileErrorHandler);
}

// test.tsx
// fs.writeFile(`${testDir}${name}.test.tsx`, test(name), writeFileErrorHandler);

// index.tsx
fs.writeFile(`${dir}index.ts`, barrel(name), writeFileErrorHandler);
