import fs from "node:fs/promises";
import sharp from "sharp";
const manifest = JSON.parse(
  await fs.readFile("assets/services/manifest.json", "utf8"),
);
await fs.mkdir("public/images/services", { recursive: true });
for (const asset of manifest.assets) {
  const source = `assets/services/${asset.slug}.png`;
  const metadata = await sharp(source).metadata();
  const stats = await sharp(source).stats();
  if (!metadata.hasAlpha || stats.channels[3]?.min !== 0)
    throw new Error(`Missing transparent background: ${asset.slug}`);
  await sharp(source)
    .resize(800, 800, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: 86, alphaQuality: 100 })
    .toFile(`public/images/services/${asset.slug}.webp`);
  const file = await fs.stat(`public/images/services/${asset.slug}.webp`);
  console.log(
    `${asset.slug}: alpha verified, ${Math.round(file.size / 1024)} KB`,
  );
}
