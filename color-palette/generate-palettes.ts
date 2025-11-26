import chroma from "chroma-js";
import * as fs from "fs";

type Pigment = "none" | "red";

function generatePalette(pigment: Pigment): void {
  let dyNeutralFgBright;
  let dyNeutralFgMain;
  let dyNeutralFgAlt;
  let dyNeutralFgDim;

  let dyNeutralBorder;
  let dyNeutralBgSub;
  let dyNeutralBgAlt;
  let dyNeutralBgMain;

  let dyPrimary050;
  let dyPrimary100;
  let dyPrimary200;
  let dyPrimary300;
  let dyPrimary400;
  let dyPrimary500;
  let dyPrimary600;
  let dyPrimary700;
  let dyPrimary800;
  let dyPrimary900;
  let dyPrimary950;

  switch (pigment) {
    case "none":
      dyNeutralFgBright = chroma("oklch(96% 0.002 270)").hex();
      dyNeutralFgMain = chroma("oklch(91% 0.005 270)").hex();
      dyNeutralFgAlt = chroma("oklch(79% 0.007 270)").hex();
      dyNeutralFgDim = chroma("oklch(60% 0.01 270)").hex();

      dyNeutralBorder = chroma("oklch(40% 0.014 270)").hex();
      dyNeutralBgSub = chroma("oklch(28.4% 0.013 270)").hex();
      dyNeutralBgAlt = chroma("oklch(22.5% 0.012 270)").hex();
      dyNeutralBgMain = chroma("oklch(15% 0.01 270)").hex();

      dyPrimary050 = chroma("oklch(97.1% 0.0131 251)").hex();
      dyPrimary100 = chroma("oklch(94% 0.0296 251)").hex();
      dyPrimary200 = chroma("oklch(88.5% 0.0565 251)").hex();
      dyPrimary300 = chroma("oklch(78.4% 0.1124 251)").hex();
      dyPrimary400 = chroma("oklch(71.7% 0.1499 251)").hex();
      dyPrimary500 = chroma("oklch(63.3% 0.1611 251)").hex();
      dyPrimary600 = chroma("oklch(56.9% 0.1558 251)").hex();
      dyPrimary700 = chroma("oklch(50.5% 0.1348 251)").hex();
      dyPrimary800 = chroma("oklch(44.3% 0.115 251)").hex();
      dyPrimary900 = chroma("oklch(38.8% 0.0973 251)").hex();
      dyPrimary950 = chroma("oklch(29.3% 0.0848 251)").hex();
      break;
    case "red":
      throw new Error("TODO");
  }

  const dySyntaxType = chroma("oklch(91% 0.119 91)").hex();
  const dySyntaxOperator = chroma("oklch(80% 0.11 59)").hex();
  const dySyntaxKeyword = chroma("oklch(72.4% 0.1715 18)").hex();
  const dySyntaxSpecial = chroma("oklch(75% 0.12 300)").hex();
  const dySyntaxFunction = chroma("oklch(77% 0.11 250)").hex();
  const dySyntaxString = chroma("oklch(85% 0.075 208.7)").hex();
  const dySyntaxNumber = chroma("oklch(87% 0.1118 135)").hex();

  const dyAnsiBlack = dyNeutralBgMain;
  const dyAnsiRed = chroma("oklch(64.3% 0.2346 25.8)").hex();
  const dyAnsiGreen = chroma("oklch(71.9% 0.2097 139.1)").hex();
  const dyAnsiYellow = chroma("oklch(79.5% 0.1536 64.5)").hex();
  const dyAnsiBlue = chroma("oklch(60.7% 0.2123 263.2)").hex();
  const dyAnsiMagenta = chroma("oklch(64.5% 0.238 304.8)").hex();
  const dyAnsiCyan = chroma("oklch(70.7% 0.1533 162.8)").hex();
  const dyAnsiWhite = dyNeutralFgMain;

  const dyAnsiBrightBlack = dyNeutralFgDim;
  const dyAnsiBrightRed = chroma("oklch(68.8% 0.2012 22.9)").hex();
  const dyAnsiBrightGreen = chroma("oklch(86.3% 0.2005 141.3)").hex();
  const dyAnsiBrightYellow = chroma("oklch(88.4% 0.1275 85.3)").hex();
  const dyAnsiBrightBlue = chroma("oklch(74% 0.1413 228)").hex();
  const dyAnsiBrightMagenta = chroma("oklch(77.9% 0.1709 319.8)").hex();
  const dyAnsiBrightCyan = chroma("oklch(85.1% 0.1428 184.3)").hex();
  const dyAnsiBrightWhite = dyNeutralFgBright;

  const paletteObj: Record<string, string> = {
    dyNeutralFgBright,
    dyNeutralFgMain,
    dyNeutralFgAlt,
    dyNeutralFgDim,

    dyNeutralBorder,
    dyNeutralBgSub,
    dyNeutralBgAlt,
    dyNeutralBgMain,

    dyPrimary050,
    dyPrimary100,
    dyPrimary200,
    dyPrimary300,
    dyPrimary400,
    dyPrimary500,
    dyPrimary600,
    dyPrimary700,
    dyPrimary800,
    dyPrimary900,
    dyPrimary950,

    dySyntaxType,
    dySyntaxOperator,
    dySyntaxKeyword,
    dySyntaxSpecial,
    dySyntaxFunction,
    dySyntaxString,
    dySyntaxNumber,

    dyAnsiBlack,
    dyAnsiRed,
    dyAnsiGreen,
    dyAnsiYellow,
    dyAnsiBlue,
    dyAnsiMagenta,
    dyAnsiCyan,
    dyAnsiWhite,

    dyAnsiBrightBlack,
    dyAnsiBrightRed,
    dyAnsiBrightGreen,
    dyAnsiBrightYellow,
    dyAnsiBrightBlue,
    dyAnsiBrightMagenta,
    dyAnsiBrightCyan,
    dyAnsiBrightWhite,
  };

  const paletteJson = JSON.stringify(paletteObj, null, 2);
  fs.writeFileSync(
    `./assets/palette/palette-${pigment}.json`,
    paletteJson,
    "utf8"
  );
}

generatePalette("none");
