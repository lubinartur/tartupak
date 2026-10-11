// Converts site photos / FEFCO diagrams to WebP.
// Usage: node scripts/optimize-images.mjs <file.png> [more.png ...]
// Writes <file>.webp next to each input (photos are capped at 1600 px wide).
// Source PNGs should then be deleted from public/ and not committed.
import { readFileSync, writeFileSync } from "node:fs";
import sharp from "sharp";

const files = process.argv.slice(2);
if (files.length === 0) {
  console.error("Usage: node scripts/optimize-images.mjs <file.png> [...]");
  process.exit(1);
}

for (const file of files) {
  const out = file.replace(/\.(png|jpe?g)$/i, ".webp");
  const input = readFileSync(file);
  const webp = await sharp(input)
    .resize({ width: 1600, withoutEnlargement: true })
    .webp({ quality: 82, alphaQuality: 100, effort: 6 })
    .toBuffer();
  writeFileSync(out, webp);
  console.log(`${file} (${Math.round(input.length / 1024)} KB) -> ${out} (${Math.round(webp.length / 1024)} KB)`);
}
