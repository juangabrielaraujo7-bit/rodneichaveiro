import { readFile, writeFile } from "node:fs/promises";
// Keep the supplied artwork intact. Only remove empty canvas around horizontal logos.
for (const variant of ["grafite", "marfim"]) {
  const svg = await readFile(
    `public/brand/logo-horizontal-${variant}.svg`,
    "utf8",
  );
  await writeFile(
    `public/brand/logo-horizontal-${variant}-web.svg`,
    svg.replace(
      'width="905" height="250" viewBox="0 0 905 250"',
      'width="560" height="200" viewBox="50 55 560 200"',
    ),
  );
}
