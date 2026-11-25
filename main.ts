import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The Meeting That Should Have Been One Line — v2
// One sentence that could have replaced an entire pointless meeting.
// Calibrated against the 90 verified top-10 winning lines:
// a real micro-scene — a named person, two exact times — stated deadpan,
// no explanation, no punchline, no metaphor. The meeting dies on a fact.
const LINE =
  "At 10:03, Pak Budi read the email out loud that everyone in this room had already read at 9:47.";
// Gate: /output/entry.txt must be 1–200 characters of UTF-8 text.
if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`entry line is ${LINE.length} chars; gate needs 1–200`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`wrote ${LINE.length} chars to ${join(outDir, "entry.txt")}`);
