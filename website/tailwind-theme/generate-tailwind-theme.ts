import oceanVariant from "../../colors/variants/ocean.json" with { type: "json" };
import violetVariant from "../../colors/variants/violet.json" with { type: "json" };
import * as path from "path";
import * as fs from "fs";

const outFile = path.resolve(import.meta.dirname, "./tailwind-theme.css");

const oceanVariantProps = Object.entries(oceanVariant).map(
  ([key, value]) => `--color-${key}: ${value};`,
);
const violetVariantProps = Object.entries(violetVariant).map(
  ([key, value]) => `--color-${key}: ${value};`,
);

const cssText = `\
@theme {
${oceanVariantProps.map((p) => `  ${p}`).join("\n")}
}

@layer theme {
  :root {
    @variant violet {
${violetVariantProps.map((p) => `      ${p}`).join("\n")}
    }
  }
}
`;

fs.writeFileSync(outFile, cssText, "utf-8");
