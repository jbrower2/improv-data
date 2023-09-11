import fs from "fs";

await fs.promises.writeFile("dist/cjs/package.json", '{"type":"commonjs"}');
await fs.promises.writeFile("dist/mjs/package.json", '{"type":"module"}');
