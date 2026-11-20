import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outputDir, { recursive: true });
const source = new URL('./entry.png', import.meta.url);
const destination = join(outputDir, 'entry.png');
// Copy the repository's entry.png without changing its bytes to
// $MAKEFUN_OUTPUT_DIR/entry.png, or /output/entry.png when unset.
// Setting MAKEFUN_OUTPUT_DIR overrides the default /output destination.
// copyFileSync preserves bytes in one synchronous call; atomic replacement is not guaranteed.
copyFileSync(source, destination);
