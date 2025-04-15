import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const filepath = path.join(__dirname, 'binaryData.bin');
const binaryData = Buffer.from('Hello binary world!');

fs.writeFileSync(filepath, binaryData);

const readData = fs.readFileSync(filepath);

console.log('Buffer content:', readData);
