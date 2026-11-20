import * as fs from 'node:fs';
import { join } from 'node:path';
import { fileURLToPath } from 'node:url';

const deliveryFolder = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const imageName = 'entry.png';

// Create any missing parent folders before copying the rendered image.
fs.mkdirSync(deliveryFolder, { recursive: true });
fs.copyFileSync(fileURLToPath(new URL(`./${imageName}`, import.meta.url)), join(deliveryFolder, imageName));
