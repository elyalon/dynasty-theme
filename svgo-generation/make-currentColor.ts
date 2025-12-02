import { readFileSync, writeFileSync } from "fs";
import { optimize } from "svgo";

const content = readFileSync("../_shared/figma/icon-flat.svg", "utf-8");

const res = optimize(content, {
  plugins: [
    {
      name: "convertColors",
      params: {
        currentColor: true,
      },
    },
  ],
});

writeFileSync("../_shared/svgo/icon-currentColor.svg", res.data, "utf-8");
