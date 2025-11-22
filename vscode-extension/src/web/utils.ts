import * as vscode from "vscode";

export function Exists<T>(value: T): value is NonNullable<T> {
  return value !== null && value !== undefined;
}

export function Assert(
  cond: boolean,
  message: string = "Assertion failed"
): asserts cond {
  if (!cond) {
    throw new Error(message);
  }
}

export function daysToMs(days: number): number {
  return days * 24 * 60 * 60 * 1000;
}

export function msToDays(ms: number): number {
  return Math.ceil(ms / (1000 * 60 * 60 * 24));
}

export function isDynastyColorThemeActive(): boolean {
  const colorTheme = vscode.workspace
    .getConfiguration("workbench")
    .get<string>("colorTheme");
  if (!Exists(colorTheme)) return false;
  return colorTheme.toLowerCase().startsWith("dynasty");
}
