import * as vscode from "vscode";
import { Exists, isDynastyColorThemeActive, msToDays } from "./utils";
import * as ls from "./lemonSqueezy";

const globalStateKeys = [
  "dynasty-theme.trialStartDateMs",
  "dynasty-theme.isLicenseActivated",
] as const;

const commandKeys = [
  "dynasty-theme.activateLicense",
  "dynasty-theme.showLicenseStatus",
] as const;

const KEY = {
  global: (k: (typeof globalStateKeys)[number]) => k,
  command: (k: (typeof commandKeys)[number]) => k,
};

const TRIAL_DAYS = 14;
const PURCHASE_URL = "https://dynasty.ely.al/purchase";

export async function activate(context: vscode.ExtensionContext) {
  // Make sure these globalState keys are synced
  context.globalState.setKeysForSync([
    KEY.global("dynasty-theme.isLicenseActivated"),
    KEY.global("dynasty-theme.trialStartDateMs"),
  ]);

  // Register the commands
  context.subscriptions.push(
    vscode.commands.registerCommand(
      KEY.command("dynasty-theme.activateLicense"),
      () => activateLicenseFlow(context),
    ),
    vscode.commands.registerCommand(
      KEY.command("dynasty-theme.showLicenseStatus"),
      () => showLicenseStatus(context),
    ),
  );

  // Return if the user is licensed
  if (isLicenseActivated(context)) return;

  // If the free trial hasn't started, start it now
  if (!Exists(trialStartDateMs(context))) {
    await context.globalState.update(
      KEY.global("dynasty-theme.trialStartDateMs"),
      Date.now(),
    );
  }

  // Return if the trial isn't over
  if (trialRemainingMs(context)! > 0) {
    return;
  }

  // At this point, the user is both unlicensed and
  // has used up their trial
  handleUnlicensedUser(context);
}

function handleUnlicensedUser(context: vscode.ExtensionContext) {
  // If the theme isn't active, do nothing
  if (!isDynastyColorThemeActive()) return;

  // Show warning message that the free trial has run
  // out and offer buttons to activate or purchase it
  vscode.window
    .showWarningMessage(
      "Dynasty Theme: Your free trial has run out.",
      "Activate License",
      "Purchase License",
    )
    .then((choice) => {
      if (choice === "Activate License") {
        activateLicenseFlow(context);
      } else if (choice === "Purchase License") {
        vscode.env.openExternal(vscode.Uri.parse(PURCHASE_URL));
      }
    });
}

// Typed `globalState` getter
function trialStartDateMs(context: vscode.ExtensionContext) {
  return context.globalState.get<number>(
    KEY.global("dynasty-theme.trialStartDateMs"),
  );
}

// Typed `globalState` getter
//* Note that this returns `true | undefined`
function isLicenseActivated(context: vscode.ExtensionContext) {
  return context.globalState.get<true>(
    KEY.global("dynasty-theme.isLicenseActivated"),
  );
}

function trialRemainingMs(context: vscode.ExtensionContext) {
  const _trialStateDateMs = trialStartDateMs(context);
  if (!Exists(_trialStateDateMs)) return _trialStateDateMs;

  const msElapsed = Date.now() - _trialStateDateMs;
  const msTotal = TRIAL_DAYS * 24 * 60 * 60 * 1000;
  return Math.max(0, msTotal - msElapsed);
}

async function showLicenseStatus(context: vscode.ExtensionContext) {
  if (isLicenseActivated(context)) {
    vscode.window.showInformationMessage("Dynasty Theme: License is active.");
    return;
  }

  const remainingMs = trialRemainingMs(context)!;
  vscode.window.showInformationMessage(
    remainingMs > 0
      ? `Dynasty Theme: (Unlicensed) Trial active — ${msToDays(
          remainingMs,
        )} day(s) remaining.`
      : "Dynasty Theme: (Unlicensed) Trial ended.",
  );
}

async function activateLicenseFlow(context: vscode.ExtensionContext) {
  const inputLicenseKey = await vscode.window
    .showInputBox({
      title: "Dynasty Theme: Activate License",
      placeHolder: "XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX",
      prompt: "Enter your license key.",
      ignoreFocusOut: true,
    })
    .then((val) => val?.trim());
  if (!Exists(inputLicenseKey)) return;

  ls.activateLicenseKey(inputLicenseKey)
    .then((data) => {
      context.globalState.update(
        KEY.global("dynasty-theme.isLicenseActivated"),
        true,
      );
      vscode.window.showInformationMessage(
        `Dynasty Theme: License key activated for ${data.customer_email}.`,
      );
    })
    .catch((err) => {
      vscode.window.showErrorMessage(`Dynasty Theme: ${err.message}`);
    });
}
