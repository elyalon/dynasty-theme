import chroma from "chroma-js";
import * as fs from "fs";
import * as path from "path";

const syntaxType = chroma("oklch(91% 0.119 91)").hex();
const syntaxOperator = chroma("oklch(80% 0.11 59)").hex();
const syntaxKeyword = chroma("oklch(72.4% 0.1715 18)").hex();
const syntaxSpecial = chroma("oklch(75% 0.12 300)").hex();
const syntaxFunction = chroma("oklch(77% 0.11 250)").hex();
const syntaxString = chroma("oklch(85% 0.075 220)").hex();
const syntaxNumber = chroma("oklch(87% 0.1118 135)").hex();

const n050 = chroma("oklch(96% 0.002 270)").hex(); // fg on primary-color bg
const n100 = chroma("oklch(91% 0.005 270)").hex(); // base fg
const n200 = chroma("oklch(79% 0.007 270)").hex(); // dim fg
const n300 = chroma("oklch(60% 0.01 270)").hex(); // dimmer fg

const n700 = chroma("oklch(40% 0.014 270)").hex(); // border
const n800 = chroma("oklch(30% 0.013 270)").hex(); // header bg
const n900 = chroma("oklch(22.5% 0.012 270)").hex(); // alt bg
const n950 = chroma("oklch(15% 0.01 270)").hex(); // bg

const dyPrimary = chroma("oklch(72% 0.14 248)").hex();
const dyPrimaryDark = chroma("oklch(56% 0.13 249.2)").hex();

const tAnsiBlack = n950;
const tAnsiRed = chroma("oklch(64.3% 0.2346 25.8)").hex();
const tAnsiGreen = chroma("oklch(71.9% 0.2097 139.1)").hex();
const tAnsiYellow = chroma("oklch(79.5% 0.1536 64.5)").hex();
const tAnsiBlue = chroma("oklch(60.7% 0.2123 263.2)").hex();
const tAnsiMagenta = chroma("oklch(64.5% 0.238 304.8)").hex();
const tAnsiCyan = chroma("oklch(70.7% 0.1533 162.8)").hex();
const tAnsiWhite = n100;
const tAnsiBrightBlack = n300;
const tAnsiBrightRed = chroma("oklch(68.8% 0.2012 22.9)").hex();
const tAnsiBrightGreen = chroma("oklch(86.3% 0.2005 141.3)").hex();
const tAnsiBrightYellow = chroma("oklch(88.4% 0.1275 85.3)").hex();
const tAnsiBrightBlue = chroma("oklch(74% 0.1413 228)").hex();
const tAnsiBrightMagenta = chroma("oklch(77.9% 0.1709 319.8)").hex();
const tAnsiBrightCyan = chroma("oklch(85.1% 0.1428 184.3)").hex();
const tAnsiBrightWhite = n050;

const colors = {
  syntaxType,
  syntaxOperator,
  syntaxKeyword,
  syntaxSpecial,
  syntaxFunction,
  syntaxString,
  syntaxNumber,

  n050,
  n100,
  n200,
  n300,

  n700,
  n800,
  n900,
  n950,

  dyPrimary,
  dyPrimaryDark,

  tAnsiBlack,
  tAnsiRed,
  tAnsiGreen,
  tAnsiYellow,
  tAnsiBlue,
  tAnsiMagenta,
  tAnsiCyan,
  tAnsiWhite,
  tAnsiBrightBlack,
  tAnsiBrightRed,
  tAnsiBrightGreen,
  tAnsiBrightYellow,
  tAnsiBrightBlue,
  tAnsiBrightMagenta,
  tAnsiBrightCyan,
  tAnsiBrightWhite,
};

const outPath = path.resolve("./palette.json");
fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, JSON.stringify(colors, null, 2) + "\n", "utf8");
