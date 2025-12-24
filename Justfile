set shell := ["nu", "-c"]

default:
    just --list

generatePalettes:
    node ./color-palette/generate-palettes.ts

generatePalettesWatch:
    node --watch --watch-preserve-output ./color-palette/generate-palettes.ts

# make currentColor variation of the icon from figma
svgoMakeCurrentColorIcon:
    cd svgo-generation; node ./make-currentColor.ts

vscodeGenerateThemes:
    cd vscode-extension; node ./generate-themes/generate-themes.ts

vscodeGenerateThemesWatch:
    cd vscode-extension; node --watch --watch-preserve-output ./generate-themes/generate-themes.ts

vscodeCompile:
    cd vscode-extension; pnpm exec webpack

vscodeCompileWatch:
    cd vscode-extension; pnpm exec webpack --watch

vscodeCompileProd:
    cd vscode-extension; pnpm exec webpack --mode production --devtool hidden-source-map

vscodeLint:
    cd vscode-extension; pnpm exec eslint src

# create the .vsix extension package
vscodeVsixPackage: vscodeCompileProd
    cd vscode-extension; pnpm exec vsce package

# publishes the .vsix extension package
vscodeVsixPublish: vscodeVsixPackage
    cd vscode-extension; pnpm exec vsce publish

websiteDev:
    cd website; pnpm exec astro dev

websiteBuild:
    cd website; pnpm exec astro build

websitePreview:
    cd website; pnpm exec astro preview

# generates the tailwind theme from the palettes
websiteGenerateTailwindColors:
    cd website/generate-tailwind-colors; node ./generate-tailwind-colors.ts

websiteGenerateTailwindColorsWatch:
    cd website/generate-tailwind-colors; node --watch --watch-preserve-output ./generate-tailwind-colors.ts
