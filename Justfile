set shell := ["nu", "-c"]

# default recipe, lists all of the available recipes
default:
    just --list

# generates palettes in /colors/variants
generateColors:
    node ./colors/generate-colors.ts

# generates palettes in /colors/variants (watch mode)
generateColorsWatch:
    node --watch --watch-preserve-output ./colors/generate-colors.ts

# generates vscode themes in /vscode-extension/themes
vscodeGenerateThemes:
    cd vscode-extension/themes-generator; node ./generate-themes.ts

# generates vscode themes in /vscode-extension/themes (watch mode)
vscodeGenerateThemesWatch:
    cd vscode-extension/themes-generator; node --watch --watch-preserve-output ./generate-themes.ts

# compiles the vscode extension
vscodeCompile:
    cd vscode-extension; pnpm exec webpack

# compiles the vscode extension (watch mode)
vscodeCompileWatch:
    cd vscode-extension; pnpm exec webpack --watch

# compiles the vscode extension for production
vscodeCompileProd:
    cd vscode-extension; pnpm exec webpack --mode production --devtool hidden-source-map

# lints the vscode extension
vscodeLint:
    cd vscode-extension; pnpm exec eslint src

# create the .vsix extension package in /vscode-extension/dynasty-theme-<version>.vsix
vscodeVsixPackage: vscodeCompileProd
    cd vscode-extension; pnpm exec vsce package

# publishes the vscode extension to the official marketplace
vscodeVsixPublish: vscodeVsixPackage
    cd vscode-extension; pnpm exec vsce publish

# runs the website dev server
websiteDev:
    cd website; pnpm exec astro dev

# builds the website
websiteBuild:
    cd website; pnpm exec astro build

# preview the website
websitePreview:
    cd website; pnpm exec astro preview

# generates the tailwind theme from the palettes for the website
websiteGenerateTailwindTheme:
    cd website/tailwind-theme; node ./generate-tailwind-theme.ts

# generates the tailwind theme from the palettes for the website (watch mode)
websiteGenerateTailwindThemeWatch:
    cd website/tailwind-theme; node --watch --watch-preserve-output ./generate-tailwind-theme.ts
