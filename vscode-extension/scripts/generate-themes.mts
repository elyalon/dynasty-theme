import fs from "fs";
import path from "path";
import chroma from "chroma-js";
import dynasty from "../assets/palette/dark.json" with { type: "json" };
import { type VscodeWorkbenchColors } from "./vscode-schema-types.ts";

const transparent = "#0000";
const debugColor = "#f0f";

function asHex(color: string): string {
  return chroma(color).hex();
}

function generateTheme() {
  const semanticTokenColors = {
    namespace: dynasty.syntaxType,
    class: dynasty.syntaxType,
    enum: dynasty.syntaxType,
    interface: dynasty.syntaxType,
    struct: dynasty.syntaxType,
    typeParameter: { foreground: dynasty.syntaxType, italic: true },
    type: dynasty.syntaxType,
    parameter: { italic: true },
    variable: dynasty.n100,
    property: dynasty.n100,
    enumMember: dynasty.syntaxOperator,
    decorator: dynasty.syntaxSpecial,
    event: dynasty.syntaxOperator,
    function: dynasty.syntaxFunction,
    method: dynasty.syntaxFunction,
    macro: dynasty.syntaxSpecial,
    label: dynasty.syntaxOperator,
    comment: dynasty.n300,
    string: dynasty.syntaxString,
    keyword: dynasty.syntaxKeyword,
    number: dynasty.syntaxNumber,
    regexp: dynasty.syntaxString,
    operator: dynasty.syntaxOperator,
  };

  const tokenColors = [
    {
      scope: [],
      settings: { foreground: debugColor },
    },
    // {
    //   scope: ["markup.deleted"],
    //   settings: { foreground: asHex("hsl(0 100% 50%)") }, // CHANGE
    // },
    // {
    //   scope: ["markup.inserted"],
    //   settings: { foreground: asHex("hsl(120 100% 50%)") }, // CHANGE
    // },
    {
      scope: ["markup.bold"],
      settings: { fontStyle: "bold" },
    },
    {
      scope: ["markup.italic"],
      settings: { fontStyle: "italic" },
    },
    {
      scope: ["markup.underline"],
      settings: { fontStyle: "underline" },
    },
    {
      scope: "markup.underline.link",
      settings: { foreground: dynasty.syntaxFunction, fontStyle: "underline" },
    },
    {
      scope: ["markup.quote"],
      settings: { foreground: dynasty.syntaxType, fontStyle: "italic" },
    },
    {
      scope: [
        "support.function.builtin",
        "entity.name.function.support.builtin",
        "entity.name.function.preprocessor",
      ],
      settings: { foreground: dynasty.syntaxSpecial },
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
      settings: { foreground: dynasty.n200 },
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
      ],
      settings: { foreground: dynasty.syntaxType },
    },
    {
      scope: [
        "entity.name.function",
        "variable.function",
        "entity.name.command",
        "entity.name.tag",
        "support.function",
        "entity.name.function.member",
      ],
      settings: { foreground: dynasty.syntaxFunction },
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
      settings: { foreground: dynasty.syntaxOperator },
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
      ],
      settings: { foreground: dynasty.n100 },
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
      settings: { foreground: dynasty.syntaxNumber },
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
      settings: { foreground: dynasty.syntaxKeyword },
    },
    {
      scope: ["string", "punctuation.definition.string"],
      settings: { foreground: dynasty.syntaxString },
    },
    {
      scope: [
        "comment",
        "comment.line",
        "comment.block",
        "comment.block.documentation",
        "punctuation.definition.comment",
      ],
      settings: { foreground: dynasty.n300, fontStyle: "italic" },
    },
    {
      scope: ["invalid", "invalid.illegal", "invalid.deprecated"],
      settings: {
        foreground: asHex("hsl(0 100% 62%)"),
        fontStyle: "italic",
      },
    },
  ];

  const colors: VscodeWorkbenchColors = {
    "textBlockQuote.background": dynasty.n900,
    "textBlockQuote.border": dynasty.n700,
    "textCodeBlock.background": dynasty.n900,
    "textLink.activeForeground": dynasty.syntaxFunction,
    "textLink.foreground": dynasty.syntaxFunction,
    "textPreformat.background": dynasty.n900,
    "textPreformat.foreground": dynasty.syntaxOperator,

    "editor.lineHighlightBorder": transparent,
    "editor.lineHighlightBackground": chroma(dynasty.n900).alpha(0.8).hex(),
    "editor.selectionBackground": asHex("hsla(207.17 100% 68.82% / 0.25)"),

    "editorBracketHighlight.foreground1": chroma(dynasty.syntaxType)
      .darken(0.5)
      .hex(),
    "editorBracketHighlight.foreground2": chroma(dynasty.syntaxFunction)
      .darken(0.5)
      .hex(),
    "editorBracketHighlight.foreground3": chroma(dynasty.syntaxSpecial)
      .darken(0.5)
      .hex(),

    "titleBar.activeForeground": dynasty.n200,
    "titleBar.activeBackground": dynasty.n900,
    "titleBar.inactiveForeground": dynasty.n200,
    "titleBar.inactiveBackground": dynasty.n950,
    "titleBar.border": dynasty.n700,

    "panel.border": dynasty.n700,
    "panel.background": dynasty.n900,
    "panelTitle.border": dynasty.n700,

    "sideBar.background": dynasty.n900,
    "sideBar.foreground": dynasty.n200,
    "sideBar.border": dynasty.n700,

    "input.background": dynasty.n950,
    "input.foreground": dynasty.n100,
    "input.border": dynasty.n700,
    "input.placeholderForeground": chroma(dynasty.n200).alpha(0.7).hex(),

    "inputOption.activeBackground": chroma(dynasty.dyPrimaryDark)
      .alpha(0.4)
      .hex(),
    "inputOption.activeBorder": dynasty.dyPrimary,
    "inputOption.activeForeground": dynasty.n050,

    "scrollbar.shadow": chroma(dynasty.n900).brighten(0.5).hex(),
    "scrollbarSlider.activeBackground": chroma(dynasty.dyPrimary)
      .alpha(0.6)
      .hex(),
    "scrollbarSlider.background": chroma("white").alpha(0.1).hex(),
    "scrollbarSlider.hoverBackground": chroma("white").alpha(0.2).hex(),

    "editorWidget.background": dynasty.n900,

    "toolbar.hoverBackground": asHex("hsla(0 0% 100% / 0.1)"),

    "button.background": dynasty.dyPrimaryDark,
    "button.hoverBackground": chroma(dynasty.dyPrimaryDark).darken(0.15).hex(),
    "button.foreground": dynasty.n050,
    "button.border": dynasty.n700,

    "editorIndentGuide.background": chroma(dynasty.n300).alpha(0.3).hex(),
    "editorIndentGuide.activeBackground": chroma(dynasty.n300).alpha(0.7).hex(),

    "dropdown.background": dynasty.n900,
    "dropdown.foreground": dynasty.n100,
    "dropdown.border": dynasty.n700,

    "activityBar.foreground": dynasty.n050,
    "activityBarBadge.background": dynasty.dyPrimaryDark,

    "statusBar.background": dynasty.n900,
    "statusBar.foreground": dynasty.n200,
    "statusBar.border": dynasty.n700,

    "editorGroup.border": dynasty.n700,
    "editorGroupHeader.noTabsBackground": dynasty.n950,
    "editorGroupHeader.tabsBackground": dynasty.n900,
    "editorGroupHeader.tabsBorder": dynasty.n700,

    "tab.activeBackground": dynasty.n950,
    "tab.inactiveBackground": dynasty.n900,
    "tab.unfocusedActiveBackground": dynasty.n950,
    "tab.unfocusedInactiveBackground": dynasty.n900,
    "tab.border": dynasty.n700,
    "tab.activeBorder": dynasty.n950,
    "tab.unfocusedActiveBorder": dynasty.n950,
    "tab.activeForeground": dynasty.n100,
    "tab.inactiveForeground": dynasty.n200,
    "tab.unfocusedActiveForeground": dynasty.n100,
    "tab.unfocusedInactiveForeground": dynasty.n200,
    "tab.activeBorderTop": dynasty.dyPrimary,
    "tab.unfocusedActiveBorderTop": transparent,
    "tab.hoverBackground": chroma(dynasty.n950).mix(dynasty.n900, 0.4).hex(),
    "tab.unfocusedHoverBackground": chroma(dynasty.n950)
      .mix(dynasty.n900, 0.4)
      .hex(),

    "editor.background": dynasty.n950,
    "editor.foreground": dynasty.n100,
    "editorLineNumber.foreground": chroma(dynasty.n300).alpha(0.7).hex(),

    "list.activeSelectionBackground": dynasty.n800,
    "list.inactiveSelectionBackground": dynasty.n800,

    "sideBarSectionHeader.background": dynasty.n800,
    "sideBarSectionHeader.foreground": dynasty.n200,

    "terminal.foreground": dynasty.n100,
    "terminal.background": dynasty.n950,
    "terminalCursor.foreground": dynasty.n100,
    "terminalCursor.background": dynasty.n950,

    "terminal.ansiBlack": dynasty.tAnsiBlack,
    "terminal.ansiRed": dynasty.tAnsiRed,
    "terminal.ansiGreen": dynasty.tAnsiGreen,
    "terminal.ansiYellow": dynasty.tAnsiYellow,
    "terminal.ansiBlue": dynasty.tAnsiBlue,
    "terminal.ansiMagenta": dynasty.tAnsiMagenta,
    "terminal.ansiCyan": dynasty.tAnsiCyan,
    "terminal.ansiWhite": dynasty.tAnsiWhite,
    "terminal.ansiBrightBlack": dynasty.tAnsiBrightBlack,
    "terminal.ansiBrightRed": dynasty.tAnsiBrightRed,
    "terminal.ansiBrightGreen": dynasty.tAnsiBrightGreen,
    "terminal.ansiBrightYellow": dynasty.tAnsiBrightYellow,
    "terminal.ansiBrightBlue": dynasty.tAnsiBrightBlue,
    "terminal.ansiBrightMagenta": dynasty.tAnsiBrightMagenta,
    "terminal.ansiBrightCyan": dynasty.tAnsiBrightCyan,
    "terminal.ansiBrightWhite": dynasty.tAnsiBrightWhite,

    "borderFocus": dynasty.dyPrimary,
    "foreground": dynasty.n100,
    "disabledForeground": dynasty.n300,
    "widget.border": dynasty.n700,
    "selection.background": asHex("hsla(207.17 100% 68.82% / 0.44)"),
    "descriptionForeground": dynasty.n200,
    "errorForeground": dynasty.syntaxKeyword,
    "icon.foreground": dynasty.n100,
    "sash.hoverBorder": dynasty.dyPrimaryDark,
  };

  const themeJson = {
    name: "Dynasty Dark",
    semanticHighlighting: true,
    semanticTokenColors,
    tokenColors,
    colors,
  };

  return themeJson;
}

const themeJson = generateTheme();

if (!fs.existsSync("./_themes")) {
  fs.mkdirSync("./_themes");
}

fs.writeFileSync(
  path.resolve("./_themes/Dynasty-dark-color-theme.json"),
  JSON.stringify(themeJson, null, 2),
  "utf-8"
);
