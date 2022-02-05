import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import { writeFile, mkdir } from 'fs/promises';

const modulePath = process.argv[2];
const moduleName = process.argv[3];

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const pathToCreate = resolve(__dirname, `${modulePath}/${moduleName}`);
const tsxFilePath = `${pathToCreate}/${moduleName}.tsx`;
const indexFilePath = `${pathToCreate}/index.ts`;
const stylesFilePath = `${pathToCreate}/${moduleName}.module.scss`;

const contentForComponentFile = `import React from 'react';\n
const ${moduleName} = () => {
  return <div>${moduleName}</div>;
}\n
export default ${moduleName};`;

const contentForIndexFile = `import ${moduleName} from './${moduleName}';\n
export { ${moduleName} };`;

const generateModuleFiles = async () => {
  const mkdirPromise = await mkdir(pathToCreate);
  const writeIndexPromise = await writeFile(indexFilePath, contentForIndexFile);
  const writeComponentPromise = await writeFile(
    tsxFilePath,
    contentForComponentFile
  );
  const writeStylePromise = await writeFile(stylesFilePath, '');
};

generateModuleFiles();
