import chroma from "chroma-js";
import * as fs from "fs";
import * as path from "path";
import { sampleScale } from "./scales.ts";

type Variant = "ocean" | "violet" | "oceanLight" | "violetLight";

const variantsPath = path.resolve(import.meta.dirname, "./variants");

const variantsColors: Record<Variant, Record<string, string>> = {
  ocean: {
    dySyntaxType: chroma("oklch(77.2% 0.1203 76.7)").hex(),
    dySyntaxOperator: chroma("oklch(69.5% 0.1352 48.8)").hex(),
    dySyntaxKeyword: chroma("oklch(65.9% 0.1799 20.1)").hex(),
    dySyntaxSpecial: chroma("oklch(63.7% 0.1322 300)").hex(),
    dySyntaxFunction: chroma("oklch(64.6% 0.1406 259.2)").hex(),
    dySyntaxString: chroma("oklch(69.5% 0.1183 135)").hex(),
    dySyntaxNumber: chroma("oklch(71% 0.1128 329.6)").hex(),
    ...sampleScale(
      {
        hue: 260,
        points: [
          { l: 0, c: 0 },
          { l: 25, c: 0.04 },
          { l: 55, c: 0.05 },
          { l: 100, c: 0 },
        ],
      },
      "dyScaleNeutral",
    ),
    ...sampleScale(
      {
        hue: 260,
        points: [
          { l: 0, c: 0 },
          { l: 62, c: 0.2 },
          { l: 100, c: 0 },
        ],
      },
      "dyScalePrimary",
    ),
  },
  violet: {
    dySyntaxType: chroma("oklch(77.2% 0.1203 76.7)").hex(),
    dySyntaxOperator: chroma("oklch(71.4% 0.1352 48.8)").hex(),
    dySyntaxKeyword: chroma("oklch(65.9% 0.1889 20.1)").hex(),
    dySyntaxSpecial: chroma("oklch(63.7% 0.1488 300)").hex(),
    dySyntaxFunction: chroma("oklch(63.9% 0.1217 259.2)").hex(),
    dySyntaxString: chroma("oklch(71% 0.1183 135)").hex(),
    dySyntaxNumber: chroma("oklch(71% 0.1128 329.6)").hex(),
    ...sampleScale(
      {
        hue: 290,
        points: [
          { l: 0, c: 0 },
          { l: 25, c: 0.03 },
          { l: 55, c: 0.04 },
          { l: 100, c: 0 },
        ],
      },
      "dyScaleNeutral",
    ),
    ...sampleScale(
      {
        hue: 290,
        points: [
          { l: 0, c: 0 },
          { l: 62, c: 0.2 },
          { l: 100, c: 0 },
        ],
      },
      "dyScalePrimary",
    ),
  },
  oceanLight: {
    dySyntaxType: chroma("oklch(45% 0.1203 76.7)").hex(),
    dySyntaxOperator: chroma("oklch(40% 0.1352 48.8)").hex(),
    dySyntaxKeyword: chroma("oklch(45% 0.1799 20.1)").hex(),
    dySyntaxSpecial: chroma("oklch(45% 0.1322 300)").hex(),
    dySyntaxFunction: chroma("oklch(40% 0.1406 259.2)").hex(),
    dySyntaxString: chroma("oklch(45% 0.1183 135)").hex(),
    dySyntaxNumber: chroma("oklch(45% 0.1128 329.6)").hex(),
    ...sampleScale(
      {
        hue: 260,
        points: [
          { l: 0, c: 0 },
          { l: 40, c: 0.047 },
          { l: 35, c: 0.055 },
          { l: 85, c: 0.032 },
          { l: 100, c: 0 },
        ],
      },
      "dyScaleNeutral",
    ),
    ...sampleScale(
      {
        hue: 260,
        points: [
          { l: 0, c: 0 },
          { l: 62, c: 0.2 },
          { l: 100, c: 0 },
        ],
      },
      "dyScalePrimary",
    ),
  },
  violetLight: {
    dySyntaxType: chroma("oklch(45% 0.1203 76.7)").hex(),
    dySyntaxOperator: chroma("oklch(40% 0.1352 48.8)").hex(),
    dySyntaxKeyword: chroma("oklch(45% 0.1889 20.1)").hex(),
    dySyntaxSpecial: chroma("oklch(45% 0.1322 300)").hex(),
    dySyntaxFunction: chroma("oklch(40% 0.1103 259.2)").hex(),
    dySyntaxString: chroma("oklch(45% 0.1183 135)").hex(),
    dySyntaxNumber: chroma("oklch(45% 0.1128 329.6)").hex(),
    ...sampleScale(
      {
        hue: 290,
        points: [
          { l: 0, c: 0 },
          { l: 20, c: 0.04 },
          { l: 35, c: 0.055 },
          { l: 70, c: 0.04 },
          { l: 100, c: 0 },
        ],
      },
      "dyScaleNeutral",
    ),
    ...sampleScale(
      {
        hue: 290,
        points: [
          { l: 0, c: 0 },
          { l: 62, c: 0.2 },
          { l: 100, c: 0 },
        ],
      },
      "dyScalePrimary",
    ),
  },
};

// prettier-ignore
function applyAliases(colors: Record<string, string>, isDark: boolean): void {
  //                                         DARK                      LIGHT
  colors.dyAliasSyntaxComment     = isDark ? colors.dyScaleNeutral53 : colors.dyScaleNeutral50;
  colors.dyAliasSyntaxPunctuation = isDark ? colors.dyScaleNeutral71 : colors.dyScaleNeutral35;
  colors.dyAliasText              = isDark ? colors.dyScaleNeutral81 : colors.dyScaleNeutral20;
  colors.dyAliasTextDim           = isDark ? colors.dyScaleNeutral66 : colors.dyScaleNeutral50;
  colors.dyAliasTextWidget        = isDark ? colors.dyScaleNeutral92 : colors.dyScaleNeutral98;
  colors.dyAliasTextLink          = isDark ? colors.dyScalePrimary71 : colors.dyScalePrimary40;
  colors.dyAliasBorder            = isDark ? colors.dyScaleNeutral33 : colors.dyScaleNeutral82;
  colors.dyAliasBgMain            = isDark ? colors.dyScaleNeutral17 : colors.dyScaleNeutral98;
  colors.dyAliasBgMainHover       = isDark ? colors.dyScaleNeutral21 : colors.dyScaleNeutral95;
  colors.dyAliasBgAlt             = isDark ? colors.dyScaleNeutral21 : colors.dyScaleNeutral92;
  colors.dyAliasBgAltHover        = isDark ? colors.dyScaleNeutral25 : colors.dyScaleNeutral88;
  colors.dyAliasBgSub             = isDark ? colors.dyScaleNeutral26 : colors.dyScaleNeutral87;
  colors.dyAliasBgSubHover        = isDark ? colors.dyScaleNeutral29 : colors.dyScaleNeutral84;
  colors.dyAliasBgWidget          = isDark ? colors.dyScalePrimary50 : colors.dyScalePrimary50;
  colors.dyAliasBgWidgetHover     = isDark ? colors.dyScalePrimary45 : colors.dyScalePrimary45;
  colors.dyAliasFocusOutline      = isDark ? colors.dyScalePrimary63 : colors.dyScalePrimary63;

  colors.dyAliasSelection         = isDark ? chroma(colors.dyScalePrimary71).alpha(0.2).hex() : chroma(colors.dyScalePrimary71).alpha(0.2).hex();
}

function generateVariant(variant: Variant, isDark: boolean): void {
  const colors = variantsColors[variant];

  applyAliases(colors, isDark);

  const variantJson = JSON.stringify(colors, null, 2);

  fs.writeFileSync(
    path.resolve(variantsPath, `${variant}.json`),
    variantJson,
    "utf8",
  );
}

generateVariant("ocean", true);
generateVariant("violet", true);
generateVariant("oceanLight", false);
generateVariant("violetLight", false);
