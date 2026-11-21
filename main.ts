// Entry program for the make.fun "bring-the-humans-03" bounty.
//
// What it does: copies VIDEO.json from the repository root (the bot
// directory) into the output directory, so the house can read which
// TikTok video this entry names. Nothing else.
//
// Environment:
//   MAKEFUN_BOT_DIR     - where the repository is checked out (default: /bot)
//   MAKEFUN_OUTPUT_DIR  - where VIDEO.json must be written (default: /output)
//
// Runs on Node 22, standard library only. No network, no wall clock,
// no files outside the repository. Two runs write the same bytes.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
