import { readFileSync, writeFileSync } from "fs";
import { optimize } from "svgo";

const content = readFileSync("./assets/figma/icon-flat.svg", "utf-8");

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

writeFileSync("./assets/svgo/icon-currentColor.svg", res.data, "utf-8");
