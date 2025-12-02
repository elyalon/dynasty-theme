import fs from "fs";
import path from "path";
import chroma from "chroma-js";
import paletteNone from "../../_shared/palette/palette-none.json" with { type: "json" };
import {
  type VscodeTokenSpec,
  type VscodeWorkbenchColors,
} from "./vscode-schema-types.ts";
import { type Palette } from "./palette-type.ts";

const transparentColor = "#0000";
const debugColor = "#f0f";

function getSemanticTokenColors(palette: Palette) {
  return {
    namespace: palette.dySyntaxType,
    class: palette.dySyntaxType,
    enum: palette.dySyntaxType,
    interface: palette.dySyntaxType,
    struct: palette.dySyntaxType,
    typeParameter: { foreground: palette.dySyntaxType, italic: true },
    type: palette.dySyntaxType,
    parameter: { italic: true },
    variable: palette.dyNeutralTextMain,
    property: palette.dyNeutralTextMain,
    enumMember: palette.dySyntaxOperator,
    decorator: palette.dySyntaxSpecial,
    event: palette.dySyntaxOperator,
    function: palette.dySyntaxFunction,
    method: palette.dySyntaxFunction,
    macro: palette.dySyntaxSpecial,
    label: palette.dySyntaxOperator,
    comment: palette.dyNeutralTextDim,
    string: palette.dySyntaxString,
    keyword: palette.dySyntaxKeyword,
    number: palette.dySyntaxNumber,
    regexp: palette.dySyntaxString,
    operator: palette.dySyntaxOperator,
  };
}

function getTokenColors(palette: Palette) {
  const tokenColors: VscodeTokenSpec[] = [
    {
      scope: ["invalid", "invalid.illegal", "invalid.deprecated"],
      settings: {
        foreground: chroma("hsl(0 100% 62%)").hex(),
        fontStyle: "italic",
      },
    },
    {
      scope: ["markup.bold"],
      settings: { fontStyle: "bold" },
    },
    {
      scope: ["markup.italic", "markup.quote"],
      settings: { fontStyle: "italic" },
    },
    {
      scope: ["markup.underline"],
      settings: { fontStyle: "underline" },
    },
    {
      scope: [
        "comment",
        "comment.line",
        "comment.block",
        "comment.block.documentation",
        "punctuation.definition.comment",
      ],
      settings: { foreground: palette.dyNeutralTextDim, fontStyle: "italic" },
    },
    {
      scope: [
        "punctuation",
        "punctuation.separator",
        "punctuation.separator.continuation",
        "punctuation.terminator",
        "punctuation.accessor",
        // HACK
        "source.js meta.brace",
        "source.ts meta.brace",
        "source.tsx meta.brace",
      ],
      settings: { foreground: palette.dyNeutralTextAlt },
    },
    {
      scope: [
        "support.function.builtin",
        "entity.name.function.support.builtin",
        "entity.name.function.preprocessor",
      ],
      settings: { foreground: palette.dySyntaxSpecial },
    },
    {
      scope: [
        "entity.name",
        "entity.name.class",
        "entity.name.struct",
        "entity.name.enum",
        "entity.name.union",
        "entity.name.trait",
        "entity.name.interface",
        "entity.name.impl",
        "entity.name.type",
        "entity.name.type.class",
        "entity.other.inherited-class",
        "entity.name.namespace",
        "support.class",
        "entity.name.type.interface",
        "entity.name.type.enum",
        "support.type",
        "punctuation.support.type",
        "entity.name.tag.yaml",
        "support.module",
        "variable.annotation",
        "punctuation.definition.annotation",
        "markup.quote",
      ],
      settings: { foreground: palette.dySyntaxType },
    },
    {
      scope: [
        "entity.name.function",
        "variable.function",
        "entity.name.command",
        "entity.name.tag",
        "support.function",
        "entity.name.function.member",
        "markup.underline.link",
      ],
      settings: { foreground: palette.dySyntaxFunction },
    },
    {
      scope: [
        "keyword.operator",
        "keyword.operator.assignment",
        "keyword.operator.arithmetic",
        "keyword.operator.bitwise",
        "keyword.operator.logical",
        "keyword.operator.word",
        "entity.name.label",
        "entity.other.attribute-name",
        "entity.other.attribute-name punctuation.definition",
        "markup.inline.raw",
        "markup.raw.inline",
        "markup.raw.block",
        "variable.other.enummember",
        "variable.other.event",
        "meta.attribute.rust",
      ],
      settings: { foreground: palette.dySyntaxOperator },
    },
    {
      scope: [
        "variable",
        "variable.other",
        "variable.other.readwrite",
        "variable.other.constant",
        "variable.other.property",
        "variable.other.constant.property",
        "punctuation.definition.variable",
        "entity.name.variable",
        "entity.name.constant",
        "meta.embedded", // resets to default text color when entering embedded scope
      ],
      settings: { foreground: palette.dyNeutralTextMain },
    },
    {
      scope: ["variable.parameter"],
      settings: { fontStyle: "italic" },
    },
    {
      scope: [
        "constant.numeric",
        "constant.numeric.integer",
        "constant.numeric.float",
        "constant.numeric.complex",
      ],
      settings: { foreground: palette.dySyntaxNumber },
    },
    {
      scope: [
        "keyword",
        "keyword.other",
        "keyword.control",
        "keyword.control.conditional",
        "keyword.control.import",
        "keyword.declaration",
        "variable.language",
        "constant.language",
        "constant.character",
        "constant.character.escape",
        "constant.character.entity",
        "constant.character.entity punctuation.definition",
        // "constant.other",
        "constant.other.placeholder",
        "punctuation.definition.constant",
        "storage.type",
        "storage.type.function",
        "storage.type.struct",
        "storage.modifier",
        "keyword.declaration.function",
        "entity.name.section",
        "punctuation.definition.heading",
        "punctuation.definition.keyword",
        "markup.heading",
        "keyword.control punctuation.definition",
        "support.constant",
        "punctuation.section.embedded",
        "punctuation.definition.template-expression",
        "punctuation.section.interpolation",
        "punctuation.definition.interpolation",
      ],
      settings: { foreground: palette.dySyntaxKeyword },
    },
    {
      scope: ["string", "punctuation.definition.string"],
      settings: { foreground: palette.dySyntaxString },
    },
  ];

  return tokenColors;
}

function getWorkbenchColors(palette: Palette) {
  const selectionColor = chroma(palette.dyPrimary400).alpha(0.2).hex();

  const colors: VscodeWorkbenchColors = {
    // GENERAL / BASE
    "foreground": palette.dyNeutralTextAlt,
    "icon.foreground": palette.dyNeutralTextAlt,
    "disabledForeground": palette.dyNeutralTextDim,
    "selection.background": selectionColor,
    "descriptionForeground": palette.dyNeutralTextAlt,
    "errorForeground": palette.dySyntaxKeyword,
    "focusBorder": palette.dyPrimary600,

    // MARKDOWN RENDERING
    "textBlockQuote.background": palette.dyNeutralBgAlt,
    "textBlockQuote.border": palette.dyNeutralBorder,
    "textCodeBlock.background": palette.dyNeutralBgAlt,
    "textLink.activeForeground": palette.dyPrimary400,
    "textLink.foreground": palette.dyPrimary400,
    "textPreformat.background": palette.dyNeutralBgAlt,
    "textPreformat.foreground": palette.dySyntaxOperator,

    // EDITOR
    "editor.background": palette.dyNeutralBgMain,
    "editor.foreground": palette.dyNeutralTextMain,
    "editor.lineHighlightBorder": transparentColor,
    "editor.lineHighlightBackground": chroma(palette.dyNeutralBgSub)
      .alpha(0.25)
      .hex(),
    "editor.selectionBackground": selectionColor,
    "editorLineNumber.foreground": chroma(palette.dyNeutralTextDim)
      .alpha(0.7)
      .hex(),

    // COLORED BRACKETS
    "editorBracketHighlight.foreground1": chroma(palette.dySyntaxType)
      .darken(0.5)
      .hex(),
    "editorBracketHighlight.foreground2": chroma(palette.dySyntaxFunction)
      .darken(0.5)
      .hex(),
    "editorBracketHighlight.foreground3": chroma(palette.dySyntaxSpecial)
      .darken(0.5)
      .hex(),

    // TITLEBAR
    "titleBar.activeForeground": palette.dyNeutralTextAlt,
    "titleBar.activeBackground": palette.dyNeutralBgAlt,
    "titleBar.inactiveForeground": palette.dyNeutralTextDim,
    "titleBar.inactiveBackground": palette.dyNeutralBgMain,
    "titleBar.border": palette.dyNeutralBorder,

    // SIDEBAR
    "sideBar.background": palette.dyNeutralBgAlt,
    "sideBar.foreground": palette.dyNeutralTextAlt,
    "sideBar.border": palette.dyNeutralBorder,
    "sideBarTitle.foreground": palette.dyNeutralTextAlt,
    "sideBarSectionHeader.background": palette.dyNeutralBgSub,
    "sideBarSectionHeader.foreground": palette.dyNeutralTextAlt,

    // INPUT
    "input.background": palette.dyNeutralBgMain,
    "input.foreground": palette.dyNeutralTextMain,
    "input.border": palette.dyNeutralBorder,
    "input.placeholderForeground": palette.dyNeutralTextDim,
    // for the inline icons like "match case" and "match whole word" on inputs
    "inputOption.hoverBackground": chroma(palette.dyNeutralTextMain)
      .alpha(0.2)
      .hex(),
    "inputOption.activeBackground": chroma(palette.dyPrimary600)
      .alpha(0.4)
      .hex(),
    "inputOption.activeBorder": palette.dyPrimary600,
    "inputOption.activeForeground": palette.dyNeutralTextBright,
    // for the icons next to the tabs, like "maximized" icon
    "actionBar.toggledBackground": chroma(palette.dyPrimary500)
      .alpha(0.3)
      .hex(),

    // QUICK INPUT / QUICK PICK
    "quickInputTitle.background": palette.dyNeutralBgSub,
    "quickInput.background": palette.dyNeutralBgAlt,
    "quickInput.foreground": palette.dyNeutralTextAlt,
    "quickInputList.focusBackground": chroma(palette.dyNeutralTextAlt)
      .alpha(0.12)
      .hex(),
    "quickInputList.focusForeground": palette.dyNeutralTextMain,

    // WIDGET
    "widget.border": palette.dyNeutralBorder, //
    "editorWidget.background": palette.dyNeutralBgAlt,
    "editorWidget.foreground": palette.dyNeutralTextAlt,
    "editorWidget.border": palette.dyNeutralBorder,
    "editorWidget.resizeBorder": palette.dyNeutralBorder,

    // BUTTON
    "button.background": palette.dyPrimary700,
    "button.hoverBackground": palette.dyPrimary600,
    "button.foreground": palette.dyNeutralTextBright,

    // SCROLLBAR
    "scrollbarSlider.background": chroma(palette.dyNeutralTextMain)
      .alpha(0.2)
      .hex(),
    "scrollbarSlider.hoverBackground": chroma(palette.dyNeutralTextMain)
      .alpha(0.3)
      .hex(),
    "scrollbarSlider.activeBackground": chroma(palette.dyPrimary700)
      .alpha(0.6)
      .hex(),
    // the "sticky" shadow
    "scrollbar.shadow": chroma(palette.dyNeutralTextMain).alpha(0.2).hex(),
    // when hovering over sticky line
    "editorStickyScrollHover.background": chroma(palette.dyNeutralTextMain)
      .alpha(0.08)
      .hex(),

    // IDNENT GUIDES
    "editorIndentGuide.background1": chroma(palette.dyNeutralTextDim)
      .alpha(0.3)
      .hex(),
    "editorIndentGuide.activeBackground1": chroma(palette.dyNeutralTextDim)
      .alpha(0.7)
      .hex(),

    // DROPDOWN MENU
    "dropdown.background": palette.dyNeutralBgAlt,
    "dropdown.foreground": palette.dyNeutralTextMain,
    "dropdown.border": palette.dyNeutralBorder,

    // ACTIVITY BAR
    "activityBar.foreground": palette.dyNeutralTextMain,
    "activityBar.inactiveForeground": palette.dyNeutralTextDim,
    "activityBar.background": palette.dyNeutralBgAlt,
    "activityBar.border": palette.dyNeutralBorder,
    "activityBarBadge.foreground": palette.dyNeutralTextBright,
    "activityBarBadge.background": palette.dyPrimary600,

    // STATUS BAR
    "statusBar.background": palette.dyNeutralBgAlt,
    "statusBar.foreground": palette.dyNeutralTextAlt,
    "statusBar.border": palette.dyNeutralBorder,

    // BREADCRUMBS
    "breadcrumb.foreground": palette.dyNeutralTextDim,
    "breadcrumb.focusForeground": palette.dyNeutralTextMain,
    "breadcrumb.activeSelectionForeground": palette.dyNeutralTextBright,

    // split panes separator
    "editorGroup.border": palette.dyNeutralBorder,
    "sash.hoverBorder": palette.dyPrimary600,

    // TABS BAR
    "editorGroupHeader.noTabsBackground": palette.dyNeutralBgMain,
    "editorGroupHeader.tabsBackground": palette.dyNeutralBgAlt,
    "editorGroupHeader.tabsBorder": palette.dyNeutralBorder,
    "tab.activeBackground": palette.dyNeutralBgMain,
    "tab.activeForeground": palette.dyNeutralTextMain,
    "tab.activeBorderTop": palette.dyPrimary400,
    "tab.activeBorder": palette.dyNeutralBgMain,
    "tab.inactiveBackground": palette.dyNeutralBgAlt,
    "tab.inactiveForeground": palette.dyNeutralTextAlt,
    "tab.unfocusedActiveBackground": palette.dyNeutralBgMain,
    "tab.unfocusedActiveForeground": palette.dyNeutralTextMain,
    "tab.unfocusedActiveBorderTop": transparentColor,
    "tab.unfocusedActiveBorder": palette.dyNeutralBgMain,
    "tab.unfocusedInactiveBackground": palette.dyNeutralBgAlt,
    "tab.unfocusedInactiveForeground": palette.dyNeutralTextAlt,
    "tab.unfocusedHoverBackground": palette.dyNeutralBgSub,
    "tab.hoverBackground": palette.dyNeutralBgSub,
    "tab.border": palette.dyNeutralBorder,
    "tab.selectedBorderTop": palette.dyNeutralTextAlt,

    // LIST
    "list.activeSelectionBackground": palette.dyNeutralBgSub,
    "list.inactiveSelectionBackground": palette.dyNeutralBgSub,

    // PANEL
    "panel.border": palette.dyNeutralBorder,
    "panel.background": palette.dyNeutralBgMain,
    "panelTitle.activeForeground": palette.dyNeutralTextMain,
    "panelTitle.inactiveForeground": palette.dyNeutralTextDim,
    // for when you do a split in the panel
    "panelSectionHeader.background": palette.dyNeutralBgAlt,
    "panelSectionHeader.foreground": palette.dyNeutralTextAlt,
    "panelSection.border": palette.dyNeutralBorder,

    // TERMINAL
    "terminal.foreground": palette.dyNeutralTextMain,
    "terminal.background": palette.dyNeutralBgMain,
    "terminalCursor.foreground": palette.dyNeutralTextMain,
    "terminalCursor.background": palette.dyNeutralBgMain,
    // ansi colors
    "terminal.ansiBlack": palette.dyAnsiBlack,
    "terminal.ansiRed": palette.dyAnsiRed,
    "terminal.ansiGreen": palette.dyAnsiGreen,
    "terminal.ansiYellow": palette.dyAnsiYellow,
    "terminal.ansiBlue": palette.dyAnsiBlue,
    "terminal.ansiMagenta": palette.dyAnsiMagenta,
    "terminal.ansiCyan": palette.dyAnsiCyan,
    "terminal.ansiWhite": palette.dyAnsiWhite,
    "terminal.ansiBrightBlack": palette.dyAnsiBrightBlack,
    "terminal.ansiBrightRed": palette.dyAnsiBrightRed,
    "terminal.ansiBrightGreen": palette.dyAnsiBrightGreen,
    "terminal.ansiBrightYellow": palette.dyAnsiBrightYellow,
    "terminal.ansiBrightBlue": palette.dyAnsiBrightBlue,
    "terminal.ansiBrightMagenta": palette.dyAnsiBrightMagenta,
    "terminal.ansiBrightCyan": palette.dyAnsiBrightCyan,
    "terminal.ansiBrightWhite": palette.dyAnsiBrightWhite,
  };

  return colors;
}

function generateTheme(palette: Palette, suffix: string) {
  const semanticTokenColors = getSemanticTokenColors(palette);
  const tokenColors = getTokenColors(palette);
  const colors = getWorkbenchColors(palette);

  const themeObj = {
    name: "Dynasty Theme", // this doesn't need to change between pigments
    semanticHighlighting: true,
    semanticTokenColors,
    tokenColors,
    colors,
  };

  const themeJson = JSON.stringify(themeObj, null, 2);

  fs.writeFileSync(
    path.resolve(`./themes/Dynasty${suffix}-color-theme.json`),
    themeJson,
    "utf-8",
  );
}

if (!fs.existsSync("./themes")) {
  fs.mkdirSync("./themes");
}
generateTheme(paletteNone, "None");
