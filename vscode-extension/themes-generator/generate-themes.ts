import * as fs from "fs";
import * as path from "path";
import chroma from "chroma-js";
import violetVariant from "../../colors/variants/violet.json" with { type: "json" };
import oceanVariant from "../../colors/variants/ocean.json" with { type: "json" };
import violetLightVariant from "../../colors/variants/violetLight.json" with { type: "json" };
import oceanLightVariant from "../../colors/variants/oceanLight.json" with { type: "json" };
import {
  type VscodeTokenSpec,
  type VscodeWorkbenchColors,
} from "./vscode-schema-types.ts";

// this type was generated using a JSON to Typescript generator
export interface Colors {
  dySyntaxType: string;
  dySyntaxOperator: string;
  dySyntaxKeyword: string;
  dySyntaxSpecial: string;
  dySyntaxFunction: string;
  dySyntaxString: string;
  dySyntaxNumber: string;
  dyScaleNeutral01: string;
  dyScaleNeutral02: string;
  dyScaleNeutral03: string;
  dyScaleNeutral04: string;
  dyScaleNeutral05: string;
  dyScaleNeutral06: string;
  dyScaleNeutral07: string;
  dyScaleNeutral08: string;
  dyScaleNeutral09: string;
  dyScaleNeutral10: string;
  dyScaleNeutral11: string;
  dyScaleNeutral12: string;
  dyScaleNeutral13: string;
  dyScaleNeutral14: string;
  dyScaleNeutral15: string;
  dyScaleNeutral16: string;
  dyScaleNeutral17: string;
  dyScaleNeutral18: string;
  dyScaleNeutral19: string;
  dyScaleNeutral20: string;
  dyScaleNeutral21: string;
  dyScaleNeutral22: string;
  dyScaleNeutral23: string;
  dyScaleNeutral24: string;
  dyScaleNeutral25: string;
  dyScaleNeutral26: string;
  dyScaleNeutral27: string;
  dyScaleNeutral28: string;
  dyScaleNeutral29: string;
  dyScaleNeutral30: string;
  dyScaleNeutral31: string;
  dyScaleNeutral32: string;
  dyScaleNeutral33: string;
  dyScaleNeutral34: string;
  dyScaleNeutral35: string;
  dyScaleNeutral36: string;
  dyScaleNeutral37: string;
  dyScaleNeutral38: string;
  dyScaleNeutral39: string;
  dyScaleNeutral40: string;
  dyScaleNeutral41: string;
  dyScaleNeutral42: string;
  dyScaleNeutral43: string;
  dyScaleNeutral44: string;
  dyScaleNeutral45: string;
  dyScaleNeutral46: string;
  dyScaleNeutral47: string;
  dyScaleNeutral48: string;
  dyScaleNeutral49: string;
  dyScaleNeutral50: string;
  dyScaleNeutral51: string;
  dyScaleNeutral52: string;
  dyScaleNeutral53: string;
  dyScaleNeutral54: string;
  dyScaleNeutral55: string;
  dyScaleNeutral56: string;
  dyScaleNeutral57: string;
  dyScaleNeutral58: string;
  dyScaleNeutral59: string;
  dyScaleNeutral60: string;
  dyScaleNeutral61: string;
  dyScaleNeutral62: string;
  dyScaleNeutral63: string;
  dyScaleNeutral64: string;
  dyScaleNeutral65: string;
  dyScaleNeutral66: string;
  dyScaleNeutral67: string;
  dyScaleNeutral68: string;
  dyScaleNeutral69: string;
  dyScaleNeutral70: string;
  dyScaleNeutral71: string;
  dyScaleNeutral72: string;
  dyScaleNeutral73: string;
  dyScaleNeutral74: string;
  dyScaleNeutral75: string;
  dyScaleNeutral76: string;
  dyScaleNeutral77: string;
  dyScaleNeutral78: string;
  dyScaleNeutral79: string;
  dyScaleNeutral80: string;
  dyScaleNeutral81: string;
  dyScaleNeutral82: string;
  dyScaleNeutral83: string;
  dyScaleNeutral84: string;
  dyScaleNeutral85: string;
  dyScaleNeutral86: string;
  dyScaleNeutral87: string;
  dyScaleNeutral88: string;
  dyScaleNeutral89: string;
  dyScaleNeutral90: string;
  dyScaleNeutral91: string;
  dyScaleNeutral92: string;
  dyScaleNeutral93: string;
  dyScaleNeutral94: string;
  dyScaleNeutral95: string;
  dyScaleNeutral96: string;
  dyScaleNeutral97: string;
  dyScaleNeutral98: string;
  dyScaleNeutral99: string;
  dyScalePrimary01: string;
  dyScalePrimary02: string;
  dyScalePrimary03: string;
  dyScalePrimary04: string;
  dyScalePrimary05: string;
  dyScalePrimary06: string;
  dyScalePrimary07: string;
  dyScalePrimary08: string;
  dyScalePrimary09: string;
  dyScalePrimary10: string;
  dyScalePrimary11: string;
  dyScalePrimary12: string;
  dyScalePrimary13: string;
  dyScalePrimary14: string;
  dyScalePrimary15: string;
  dyScalePrimary16: string;
  dyScalePrimary17: string;
  dyScalePrimary18: string;
  dyScalePrimary19: string;
  dyScalePrimary20: string;
  dyScalePrimary21: string;
  dyScalePrimary22: string;
  dyScalePrimary23: string;
  dyScalePrimary24: string;
  dyScalePrimary25: string;
  dyScalePrimary26: string;
  dyScalePrimary27: string;
  dyScalePrimary28: string;
  dyScalePrimary29: string;
  dyScalePrimary30: string;
  dyScalePrimary31: string;
  dyScalePrimary32: string;
  dyScalePrimary33: string;
  dyScalePrimary34: string;
  dyScalePrimary35: string;
  dyScalePrimary36: string;
  dyScalePrimary37: string;
  dyScalePrimary38: string;
  dyScalePrimary39: string;
  dyScalePrimary40: string;
  dyScalePrimary41: string;
  dyScalePrimary42: string;
  dyScalePrimary43: string;
  dyScalePrimary44: string;
  dyScalePrimary45: string;
  dyScalePrimary46: string;
  dyScalePrimary47: string;
  dyScalePrimary48: string;
  dyScalePrimary49: string;
  dyScalePrimary50: string;
  dyScalePrimary51: string;
  dyScalePrimary52: string;
  dyScalePrimary53: string;
  dyScalePrimary54: string;
  dyScalePrimary55: string;
  dyScalePrimary56: string;
  dyScalePrimary57: string;
  dyScalePrimary58: string;
  dyScalePrimary59: string;
  dyScalePrimary60: string;
  dyScalePrimary61: string;
  dyScalePrimary62: string;
  dyScalePrimary63: string;
  dyScalePrimary64: string;
  dyScalePrimary65: string;
  dyScalePrimary66: string;
  dyScalePrimary67: string;
  dyScalePrimary68: string;
  dyScalePrimary69: string;
  dyScalePrimary70: string;
  dyScalePrimary71: string;
  dyScalePrimary72: string;
  dyScalePrimary73: string;
  dyScalePrimary74: string;
  dyScalePrimary75: string;
  dyScalePrimary76: string;
  dyScalePrimary77: string;
  dyScalePrimary78: string;
  dyScalePrimary79: string;
  dyScalePrimary80: string;
  dyScalePrimary81: string;
  dyScalePrimary82: string;
  dyScalePrimary83: string;
  dyScalePrimary84: string;
  dyScalePrimary85: string;
  dyScalePrimary86: string;
  dyScalePrimary87: string;
  dyScalePrimary88: string;
  dyScalePrimary89: string;
  dyScalePrimary90: string;
  dyScalePrimary91: string;
  dyScalePrimary92: string;
  dyScalePrimary93: string;
  dyScalePrimary94: string;
  dyScalePrimary95: string;
  dyScalePrimary96: string;
  dyScalePrimary97: string;
  dyScalePrimary98: string;
  dyScalePrimary99: string;
  dyAliasSyntaxComment: string;
  dyAliasSyntaxPunctuation: string;
  dyAliasText: string;
  dyAliasTextDim: string;
  dyAliasTextWidget: string;
  dyAliasTextLink: string;
  dyAliasBorder: string;
  dyAliasBgMain: string;
  dyAliasBgMainHover: string;
  dyAliasBgAlt: string;
  dyAliasBgAltHover: string;
  dyAliasBgSub: string;
  dyAliasBgSubHover: string;
  dyAliasBgWidget: string;
  dyAliasBgWidgetHover: string;
  dyAliasFocusOutline: string;
  dyAliasSelection: string;
}

const themesPath = path.resolve(import.meta.dirname, "../themes");

const transparentColor = "#0000";
const debugColor = "#f0f";
const debugColorAlt = "#f00";

function getSemanticTokenColors(colors: Colors) {
  return {
    namespace: colors.dySyntaxType,
    class: colors.dySyntaxType,
    enum: colors.dySyntaxType,
    interface: colors.dySyntaxType,
    struct: colors.dySyntaxType,
    typeParameter: { foreground: colors.dySyntaxType, italic: true },
    type: colors.dySyntaxType,
    parameter: { italic: true },
    variable: colors.dyAliasText,
    property: colors.dyAliasText,
    enumMember: colors.dySyntaxOperator,
    decorator: colors.dySyntaxSpecial,
    event: colors.dySyntaxOperator,
    function: colors.dySyntaxFunction,
    method: colors.dySyntaxFunction,
    macro: colors.dySyntaxSpecial,
    label: colors.dySyntaxOperator,
    comment: colors.dyAliasSyntaxComment,
    string: colors.dySyntaxString,
    keyword: colors.dySyntaxKeyword,
    number: colors.dySyntaxNumber,
    regexp: colors.dySyntaxString,
    operator: colors.dySyntaxOperator,
  };
}

function getTokenColors(colors: Colors) {
  const tokenColors: VscodeTokenSpec[] = [
    {
      scope: ["markup.bold"],
      settings: { fontStyle: "bold" },
    },
    {
      scope: ["invalid", "variable.parameter", "markup.italic", "markup.quote"],
      settings: { fontStyle: "italic" },
    },
    {
      scope: ["markup.underline"],
      settings: { fontStyle: "underline" },
    },
    {
      scope: [
        "variable",
        "entity.name.variable",
        "entity.name.constant",
        // resets to default text color when entering embedded scope
        "meta.embedded",
        // for JSON and TOML keys
        "support.type.property-name",
        // for YAML keys
        "entity.name.tag.yaml",
      ],
      settings: { foreground: colors.dyAliasText },
    },
    {
      scope: [
        "punctuation",
        // JS/TS braces don't have a "punctuation" scope for some reason
        "source.js meta.brace",
        "source.ts meta.brace",
        "source.tsx meta.brace",
        // for JSON keys' quotes
        "punctuation.support.type.property-name",
        // for regex's slashes
        "string.regexp punctuation.definition.string",
      ],
      settings: { foreground: colors.dyAliasSyntaxPunctuation },
    },
    {
      scope: ["comment", "punctuation.definition.comment"],
      settings: {
        foreground: colors.dyAliasSyntaxComment,
        fontStyle: "italic",
      },
    },
    {
      scope: [
        "invalid",
        "keyword",
        "punctuation.definition.keyword",
        "variable.language",
        "constant.language",
        "constant.character",
        "constant.character punctuation.definition",
        "constant.other.placeholder",
        "storage.type",
        "storage.modifier",
        "support.constant",
        // for punctuation that enters into embedded language, e.g. `${...}` in JS
        "punctuation.section.embedded",
        "punctuation.definition.template-expression",
        "punctuation.section.interpolation",
        "punctuation.definition.interpolation",
        // for markdown code
        "markup.inline.raw",
        "markup.raw.inline",
        "markup.raw.block",
        "punctuation.definition.raw.markdown",
      ],
      settings: { foreground: colors.dySyntaxKeyword },
    },
    {
      scope: [
        "keyword.operator",
        "entity.name.label",
        "entity.other.attribute-name",
        "variable.other.enummember",
        // for C# events
        "variable.other.event",
        // for Rust attributes like `#[inline]`
        "meta.attribute.rust",
        // for CSS (e.g. the `.` in `:root`)
        "entity.other.attribute-name punctuation.definition",
      ],
      settings: { foreground: colors.dySyntaxOperator },
    },
    {
      scope: [
        "entity.name",
        "entity.other.inherited-class",
        "support.class",
        "support.type",
        "punctuation.support.type",
        "support.module",
        "variable.annotation",
        "punctuation.definition.annotation",
      ],
      settings: { foreground: colors.dySyntaxType },
    },
    {
      scope: [
        "entity.name.function",
        "variable.function",
        "support.function",
        "entity.name.command",
        "entity.name.tag",
        // for markdown headings
        "entity.name.section",
        "markup.heading",
        "punctuation.definition.heading",
      ],
      settings: { foreground: colors.dySyntaxFunction },
    },
    {
      scope: [
        "support.function.builtin",
        "entity.name.function.support.builtin",
        "entity.name.function.preprocessor",
      ],
      settings: { foreground: colors.dySyntaxSpecial },
    },
    {
      scope: ["constant.numeric"],
      settings: { foreground: colors.dySyntaxNumber },
    },
    {
      scope: ["string", "punctuation.definition.string"],
      settings: { foreground: colors.dySyntaxString },
    },
  ];

  return tokenColors;
}

function getWorkbenchColors(
  colors: Colors,
  isDark: boolean,
): VscodeWorkbenchColors {
  // these colors are used for the status bar to indicate debugging mode (or no-workspace mode)
  const orangeSurface = isDark
    ? {
        background: chroma("oklch(23.9% 0.0348 48)").hex(),
        foreground: chroma("oklch(77.4% 0.0907 48)").hex(),
        border: chroma("oklch(40% 0.0388 48)").hex(),
      }
    : {
        background: chroma("oklch(83.3% 0.0669 48)").hex(),
        foreground: chroma("oklch(27.5% 0.0717 48)").hex(),
        border: chroma("oklch(70.9% 0.0913 48)").hex(),
      };

  return {
    // GENERAL / BASE
    "foreground": colors.dyAliasText,
    "icon.foreground": colors.dyAliasText,
    "disabledForeground": colors.dyAliasTextDim,
    "selection.background": colors.dyAliasSelection,
    "descriptionForeground": colors.dyAliasTextDim,
    "errorForeground": colors.dySyntaxKeyword,
    "focusBorder": colors.dyAliasFocusOutline,

    // WEB-VIEW RENDERING
    "textBlockQuote.background": colors.dyAliasBgAlt,
    "textBlockQuote.border": colors.dyAliasBorder,
    "textCodeBlock.background": colors.dyAliasBgAlt,
    "textSeparator.foreground": colors.dyAliasBorder,
    "textLink.foreground": colors.dyAliasTextLink,
    "textLink.activeForeground": colors.dyAliasTextLink,
    "textPreformat.background": colors.dyAliasBgSub,
    "textPreformat.foreground": colors.dyAliasText,

    // EDITOR
    "editor.background": colors.dyAliasBgMain,
    "editor.foreground": colors.dyAliasText,
    "editorCursor.foreground": colors.dyAliasText,
    "editor.lineHighlightBorder": transparentColor,
    "editor.lineHighlightBackground": isDark
      ? colors.dyScaleNeutral20
      : colors.dyScaleNeutral94,
    "editor.selectionBackground": colors.dyAliasSelection,
    "editorLineNumber.foreground": isDark
      ? colors.dyScaleNeutral40
      : colors.dyScaleNeutral70,
    "editorLineNumber.activeForeground": colors.dyAliasTextDim,
    // code lens
    "editorCodeLens.foreground": isDark
      ? colors.dyScaleNeutral50
      : colors.dyScaleNeutral55,
    // ghost suggestions (e.g. inline github copilot suggestions)
    "editorGhostText.foreground": isDark
      ? colors.dyScaleNeutral50
      : colors.dyScaleNeutral55,
    // inlay hints
    "editorInlayHint.foreground": isDark
      ? colors.dyScaleNeutral50
      : colors.dyScaleNeutral55,
    // word highlights
    "editor.wordHighlightTextBackground": isDark
      ? chroma(colors.dyScaleNeutral50).alpha(0.2).hex()
      : chroma(colors.dyScaleNeutral40).alpha(0.2).hex(),
    "editor.wordHighlightBackground": isDark
      ? chroma(colors.dyScaleNeutral50).alpha(0.2).hex()
      : chroma(colors.dyScaleNeutral40).alpha(0.2).hex(),
    "editor.wordHighlightStrongBackground": isDark
      ? chroma(colors.dyScaleNeutral50).alpha(0.2).hex()
      : chroma(colors.dyScaleNeutral40).alpha(0.2).hex(),
    // find highlights
    "editor.findMatchBackground": isDark
      ? chroma("oklch(32.9% 0.0751 48)").hex()
      : chroma("oklch(83.7% 0.092 48)").hex(),
    "editor.findMatchHighlightBackground": transparentColor,
    "editor.findMatchHighlightBorder": isDark
      ? chroma("oklch(43.7% 0.1164 48)").hex()
      : chroma("oklch(78.9% 0.1276 48)").hex(),
    "editor.findRangeHighlightBackground": colors.dyAliasBgAlt,

    // DEBUG TOOLBAR
    "debugToolBar.background": colors.dyAliasBgAlt,
    "debugToolBar.border": colors.dyAliasBorder,

    // COLORED BRACKETS
    "editorBracketHighlight.foreground1": isDark
      ? chroma(colors.dySyntaxType).darken(0.5).hex()
      : chroma(colors.dySyntaxType).brighten(1).hex(),
    "editorBracketHighlight.foreground2": isDark
      ? chroma(colors.dySyntaxString).darken(0.5).hex()
      : chroma(colors.dySyntaxString).brighten(1).hex(),
    "editorBracketHighlight.foreground3": isDark
      ? chroma(colors.dySyntaxFunction).darken(0.5).hex()
      : chroma(colors.dySyntaxFunction).brighten(0.4).hex(),

    // TITLEBAR
    "titleBar.activeForeground": colors.dyAliasText,
    "titleBar.activeBackground": colors.dyAliasBgAlt,
    "titleBar.inactiveForeground": colors.dyAliasTextDim,
    "titleBar.inactiveBackground": colors.dyAliasBgMain,
    "titleBar.border": colors.dyAliasBorder,

    // SIDEBAR
    "sideBar.background": colors.dyAliasBgAlt,
    "sideBar.foreground": colors.dyAliasText,
    "sideBar.border": colors.dyAliasBorder,
    "sideBarTitle.foreground": colors.dyAliasText,
    "sideBarSectionHeader.background": colors.dyAliasBgSub,
    "sideBarSectionHeader.foreground": colors.dyAliasText,

    // INPUT
    "input.background": colors.dyAliasBgMain,
    "input.foreground": colors.dyAliasText,
    "input.border": colors.dyAliasBorder,
    "input.placeholderForeground": colors.dyAliasTextDim,
    // for the inline icons like "match case" and "match whole word" on inputs
    "inputOption.hoverBackground": colors.dyAliasBgMainHover,
    "inputOption.activeBackground": colors.dyAliasBgWidget,
    "inputOption.activeBorder": transparentColor,
    "inputOption.activeForeground": colors.dyAliasTextWidget,
    // for the icons next to the tabs, like "maximized" icon
    "actionBar.toggledBackground": isDark
      ? colors.dyScaleNeutral35
      : colors.dyScaleNeutral82,

    // QUICK INPUT / QUICK PICK
    "quickInputTitle.background": colors.dyAliasBgSub,
    "quickInput.background": colors.dyAliasBgAlt,
    "quickInput.foreground": colors.dyAliasText,
    "quickInputList.focusBackground": colors.dyAliasBgAltHover,
    "quickInputList.focusForeground": colors.dyAliasText,

    // WIDGET
    "widget.border": colors.dyAliasBorder,
    "editorWidget.background": colors.dyAliasBgAlt,
    "editorWidget.foreground": colors.dyAliasText,
    "editorWidget.border": colors.dyAliasBorder,
    "editorWidget.resizeBorder": colors.dyAliasBorder,

    // BUTTON
    "button.background": colors.dyAliasBgWidget,
    "button.hoverBackground": colors.dyAliasBgWidgetHover,
    "button.foreground": colors.dyAliasTextWidget,

    // SCROLLBAR
    "scrollbarSlider.background": isDark
      ? chroma(colors.dyScaleNeutral50).alpha(0.2).hex()
      : chroma(colors.dyScaleNeutral40).alpha(0.2).hex(),
    "scrollbarSlider.hoverBackground": isDark
      ? chroma(colors.dyScaleNeutral50).alpha(0.3).hex()
      : chroma(colors.dyScaleNeutral40).alpha(0.3).hex(),
    "scrollbarSlider.activeBackground": chroma(colors.dyAliasBgWidget)
      .alpha(0.5)
      .hex(),
    // the "sticky" shadow
    "scrollbar.shadow": isDark
      ? colors.dyScaleNeutral30
      : colors.dyScaleNeutral85,
    // when hovering over sticky line
    "editorStickyScrollHover.background": isDark
      ? colors.dyScaleNeutral22
      : colors.dyScaleNeutral92,

    // IDNENT GUIDES
    "editorIndentGuide.background1": isDark
      ? colors.dyScaleNeutral22
      : colors.dyScaleNeutral90,
    "editorIndentGuide.activeBackground1": isDark
      ? colors.dyScaleNeutral30
      : colors.dyScaleNeutral78,

    // DROPDOWN MENU
    "dropdown.background": colors.dyAliasBgAlt,
    "dropdown.foreground": colors.dyAliasText,
    "dropdown.border": colors.dyAliasBorder,

    // ACTIVITY BAR
    "activityBar.foreground": colors.dyAliasText,
    "activityBar.inactiveForeground": colors.dyAliasTextDim,
    "activityBar.background": colors.dyAliasBgAlt,
    "activityBar.border": colors.dyAliasBorder,
    "activityBarBadge.foreground": colors.dyAliasTextWidget,
    "activityBarBadge.background": colors.dyAliasBgWidget,

    // STATUS BAR
    "statusBar.background": colors.dyAliasBgAlt,
    "statusBar.foreground": colors.dyAliasText,
    "statusBar.border": colors.dyAliasBorder,
    "statusBar.noFolderBackground": orangeSurface.background,
    "statusBar.noFolderForeground": orangeSurface.foreground,
    "statusBar.noFolderBorder": orangeSurface.border,
    "statusBar.debuggingBackground": orangeSurface.background,
    "statusBar.debuggingForeground": orangeSurface.foreground,
    "statusBar.debuggingBorder": orangeSurface.border,

    // BREADCRUMBS
    "breadcrumb.foreground": colors.dyAliasTextDim,
    "breadcrumb.focusForeground": colors.dyAliasText,
    "breadcrumb.activeSelectionForeground": colors.dyAliasText,

    // SPLIT PANES SEPARATOR
    "editorGroup.border": colors.dyAliasBorder,
    "sash.hoverBorder": colors.dyAliasBgWidget,

    // TABS BAR
    "editorGroupHeader.noTabsBackground": colors.dyAliasBgMain,
    "editorGroupHeader.tabsBackground": colors.dyAliasBgAlt,
    "editorGroupHeader.tabsBorder": colors.dyAliasBorder,
    "tab.activeBackground": colors.dyAliasBgMain,
    "tab.activeForeground": colors.dyAliasText,
    "tab.activeBorderTop": isDark
      ? colors.dyScalePrimary65
      : colors.dyScalePrimary65,
    "tab.activeBorder": colors.dyAliasBgMain,
    "tab.inactiveBackground": colors.dyAliasBgAlt,
    "tab.inactiveForeground": colors.dyAliasTextDim,
    "tab.unfocusedActiveBackground": colors.dyAliasBgMain,
    "tab.unfocusedActiveForeground": colors.dyAliasText,
    "tab.unfocusedActiveBorderTop": transparentColor,
    "tab.unfocusedActiveBorder": colors.dyAliasBgMain,
    "tab.unfocusedInactiveBackground": colors.dyAliasBgAlt,
    "tab.unfocusedInactiveForeground": colors.dyAliasTextDim,
    "tab.unfocusedHoverBackground": colors.dyAliasBgAltHover,
    "tab.hoverBackground": colors.dyAliasBgAltHover,
    "tab.border": colors.dyAliasBorder,
    "tab.selectedBorderTop": isDark
      ? colors.dyScaleNeutral65
      : colors.dyScaleNeutral65,

    // TREE VIEWS
    "tree.indentGuidesStroke": colors.dyAliasBorder,

    // LIST
    "list.activeSelectionBackground": colors.dyAliasBgAltHover,
    "list.inactiveSelectionBackground": colors.dyAliasBgAltHover,
    "list.hoverBackground": colors.dyAliasBgAltHover,

    // EXPLORER
    "gitDecoration.ignoredResourceForeground": colors.dyAliasTextDim,

    // PANEL
    "panel.border": colors.dyAliasBorder,
    "panel.background": colors.dyAliasBgMain,
    "panelTitle.activeForeground": colors.dyAliasText,
    "panelTitle.inactiveForeground": colors.dyAliasTextDim,
    // for when you do a split in the panel
    "panelSectionHeader.background": colors.dyAliasBgAlt,
    "panelSectionHeader.foreground": colors.dyAliasText,
    "panelSection.border": colors.dyAliasBorder,

    // TERMINAL
    "terminal.foreground": colors.dyAliasText,
    "terminal.background": colors.dyAliasBgMain,
    "terminalCursor.foreground": colors.dyAliasText,
    "terminalCursor.background": colors.dyAliasBgMain,
  };
}

function generateTheme(colors: Colors, suffix: string, isDark: boolean) {
  const themeObj = {
    name: "Dynasty Theme", // this shouldn't change between color variants
    semanticHighlighting: true,
    semanticTokenColors: getSemanticTokenColors(colors),
    tokenColors: getTokenColors(colors),
    colors: getWorkbenchColors(colors, isDark),
  };

  const themeJson = JSON.stringify(themeObj, null, 2);

  fs.writeFileSync(
    path.resolve(themesPath, `Dynasty${suffix}-color-theme.json`),
    themeJson,
    "utf-8",
  );
}

generateTheme(oceanVariant, "Ocean", true);
generateTheme(violetVariant, "Violet", true);
generateTheme(oceanLightVariant, "OceanLight", false);
generateTheme(violetLightVariant, "VioletLight", false);
