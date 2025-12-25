import chroma from "chroma-js";
import * as fs from "fs";
import * as path from "path";

type Variant = "ocean" | "violet";

const variantsPath = path.resolve(import.meta.dirname, "./variants");

function generatePalette(variant: Variant): void {
  let dyNeutralTextBright;
  let dyNeutralTextMain;
  let dyNeutralTextAlt;
  let dyNeutralTextDim;

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

  let dySyntaxType;
  let dySyntaxOperator;
  let dySyntaxKeyword;
  let dySyntaxSpecial;
  let dySyntaxFunction;
  let dySyntaxString;
  let dySyntaxNumber;

  switch (variant) {
    case "ocean":
      dyNeutralTextBright = chroma("oklch(92% 0.0139 260)").hex();
      dyNeutralTextMain = chroma("oklch(81.5% 0.0302 260)").hex();
      dyNeutralTextAlt = chroma("oklch(71% 0.0467 260)").hex();
      dyNeutralTextDim = chroma("oklch(53.1% 0.0497 260)").hex();

      dyNeutralBorder = chroma("oklch(33.1% 0.0517 260)").hex();
      dyNeutralBgSub = chroma("oklch(26.7% 0.0417 260)").hex();
      dyNeutralBgAlt = chroma("oklch(22.5% 0.0378 260)").hex();
      dyNeutralBgMain = chroma("oklch(17.5% 0.0298 260)").hex();

      dyPrimary050 = chroma("oklch(97.1% 0.0131 260)").hex();
      dyPrimary100 = chroma("oklch(94% 0.0296 260)").hex();
      dyPrimary200 = chroma("oklch(88.5% 0.0565 260)").hex();
      dyPrimary300 = chroma("oklch(78.4% 0.1124 260)").hex();
      dyPrimary400 = chroma("oklch(71.7% 0.1499 260)").hex();
      dyPrimary500 = chroma("oklch(63.3% 0.1611 260)").hex();
      dyPrimary600 = chroma("oklch(56.9% 0.1558 260)").hex();
      dyPrimary700 = chroma("oklch(50.5% 0.1348 260)").hex();
      dyPrimary800 = chroma("oklch(44.3% 0.115 260)").hex();
      dyPrimary900 = chroma("oklch(38.8% 0.0973 260)").hex();
      dyPrimary950 = chroma("oklch(29.3% 0.0848 260)").hex();

      dySyntaxType = chroma("oklch(77.2% 0.1203 76.7)").hex();
      dySyntaxOperator = chroma("oklch(69.5% 0.1352 48.8)").hex();
      dySyntaxKeyword = chroma("oklch(65.9% 0.1799 20.1)").hex();
      dySyntaxSpecial = chroma("oklch(63.7% 0.1322 300)").hex();
      dySyntaxFunction = chroma("oklch(64.6% 0.1406 259.2)").hex();
      dySyntaxString = chroma("oklch(69.5% 0.1183 135)").hex();
      dySyntaxNumber = chroma("oklch(71% 0.1128 329.6)").hex();
      break;
    case "violet":
      dyNeutralTextBright = chroma("oklch(92% 0.0139 290)").hex();
      dyNeutralTextMain = chroma("oklch(81.5% 0.0302 290)").hex();
      dyNeutralTextAlt = chroma("oklch(71% 0.0467 290)").hex();
      dyNeutralTextDim = chroma("oklch(53.1% 0.0497 290)").hex();

      dyNeutralBorder = chroma("oklch(33.1% 0.0328 290)").hex();
      dyNeutralBgSub = chroma("oklch(26.7% 0.0302 290)").hex();
      dyNeutralBgAlt = chroma("oklch(22.5% 0.0276 290)").hex();
      dyNeutralBgMain = chroma("oklch(17.5% 0.0243 290)").hex();

      dyPrimary050 = chroma("oklch(97.1% 0.0131 290)").hex();
      dyPrimary100 = chroma("oklch(94% 0.0296 290)").hex();
      dyPrimary200 = chroma("oklch(88.5% 0.0565 290)").hex();
      dyPrimary300 = chroma("oklch(78.4% 0.1124 290)").hex();
      dyPrimary400 = chroma("oklch(71.7% 0.1499 290)").hex();
      dyPrimary500 = chroma("oklch(63.3% 0.1611 290)").hex();
      dyPrimary600 = chroma("oklch(56.9% 0.1558 290)").hex();
      dyPrimary700 = chroma("oklch(50.5% 0.1348 290)").hex();
      dyPrimary800 = chroma("oklch(44.3% 0.115 290)").hex();
      dyPrimary900 = chroma("oklch(38.8% 0.0973 290)").hex();
      dyPrimary950 = chroma("oklch(29.3% 0.0848 290)").hex();

      dySyntaxType = chroma("oklch(77.2% 0.1203 76.7)").hex();
      dySyntaxOperator = chroma("oklch(71.4% 0.1352 48.8)").hex();
      dySyntaxKeyword = chroma("oklch(65.9% 0.1889 20.1)").hex();
      dySyntaxSpecial = chroma("oklch(63.7% 0.1322 300)").hex();
      dySyntaxFunction = chroma("oklch(63.9% 0.1103 259.2)").hex();
      dySyntaxString = chroma("oklch(71% 0.1183 135)").hex();
      dySyntaxNumber = chroma("oklch(71% 0.1128 329.6)").hex();
      break;
  }

  const paletteObj: Record<string, string> = {
    dyNeutralTextBright,
    dyNeutralTextMain,
    dyNeutralTextAlt,
    dyNeutralTextDim,

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
  };

  const paletteJson = JSON.stringify(paletteObj, null, 2);

  fs.writeFileSync(
    path.resolve(variantsPath, `${variant}.json`),
    paletteJson,
    "utf8",
  );
}

generatePalette("ocean");
generatePalette("violet");
