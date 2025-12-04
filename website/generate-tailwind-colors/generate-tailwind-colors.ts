import paletteNone from "../../_shared/palettes/palette-none.json" with { type: "json" };
import * as path from "path";
import * as fs from "fs";

const outPath = path.resolve(import.meta.dirname, "dynasty-tw-colors.css");

const colorProps = Object.entries(paletteNone).map(
  ([key, value]) => `--color-${key}: ${value};`,
);

const cssText = `\
@theme {
  --color-*: initial;

${colorProps.map((p) => `  ${p}`).join("\n")}
}
`;

if (!fs.existsSync(outPath)) {
  fs.mkdirSync(outPath);
}
fs.writeFileSync(outPath, cssText, "utf-8");
