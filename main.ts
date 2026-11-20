import * as fs from 'node:fs';
import { join } from 'node:path';

const deliveryFolder = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const imageName = 'entry.png';

// Create any missing parent folders before copying the rendered image.
fs.mkdirSync(deliveryFolder, { recursive: true });
fs.copyFileSync(`./${imageName}`, join(deliveryFolder, imageName));
