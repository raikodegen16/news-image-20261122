// news-image-20261122 entry (Node 22, standard library only).
// The image is entry.png beside this file; the program copies it to
// /output/entry.png. It runs twice and both runs write the same bytes,
// because the copy is byte-for-byte and the source never changes.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const dest = join(outDir, "entry.png");
copyFileSync(new URL("./entry.png", import.meta.url), dest);
