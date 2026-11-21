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

import { copyFileSync, mkdirSync, readFileSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Validate before copying: VIDEO.json must parse and name a full
// https TikTok video URL (short links and placeholders are refused
// by the bounty, so fail loudly here instead of copying them).
const video = JSON.parse(readFileSync(join(botDir, "VIDEO.json"), "utf8"));
if (typeof video.url !== "string" || !/^https:\/\/www\.tiktok\.com\/@[^/]+\/video\/\d+$/.test(video.url)) {
  throw new Error("VIDEO.json does not name a full TikTok video URL");
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(join(botDir, "VIDEO.json"), join(outputDir, "VIDEO.json"));
