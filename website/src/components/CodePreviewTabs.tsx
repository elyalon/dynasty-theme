import { useState, type MouseEventHandler, type ReactNode } from "react";
import { cn } from "../lib/cn";
import * as Icons from "./CodePreviewTabsIcons";
import {
  goCodePreview,
  htmlCodePreview,
  rustCodePreview,
  typescriptCodePreview,
} from "../lib/code-previews";

type Lang = "typescript" | "go" | "rust" | "html";

function TabButton({
  text,
  selected,
  icon,
  onClick,
}: {
  text: string;
  icon: ReactNode;
  selected: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex h-full items-center gap-2 px-4",
        selected
          ? "bg-dyAliasBgMain text-dyAliasText"
          : "hover:bg-dyAliasBgMainHover",
      )}
    >
      <div>{icon}</div>
      <div>{text}</div>
    </button>
  );
}

export function CodePreview() {
  const [lang, setLang] = useState<Lang>("typescript");

  let preview: string;

  switch (lang) {
    case "typescript":
      preview = typescriptCodePreview;
      break;
    case "go":
      preview = goCodePreview;
      break;
    case "rust":
      preview = rustCodePreview;
      break;
    case "html":
      preview = htmlCodePreview;
      break;
  }

  return (
    <div className="border-t border-dyAliasBorder bg-dyAliasBgMain text-dyAliasText">
      <div className="flex h-10 overflow-x-auto bg-dyAliasBgAlt text-dyAliasText">
        <TabButton
          text="Typescript"
          icon={<Icons.TypeScript className="size-5" />}
          selected={lang === "typescript"}
          onClick={() => setLang("typescript")}
        />
        <TabButton
          text="Go"
          icon={<Icons.Go className="size-6" />}
          selected={lang === "go"}
          onClick={() => setLang("go")}
        />
        <TabButton
          text="Rust"
          icon={<Icons.Rust className="size-5" />}
          selected={lang === "rust"}
          onClick={() => setLang("rust")}
        />
        <TabButton
          text="HTML"
          icon={<Icons.HTML5 className="size-5" />}
          selected={lang === "html"}
          onClick={() => setLang("html")}
        />
      </div>
      <pre
        dangerouslySetInnerHTML={{ __html: preview }}
        className="mx-auto max-w-230 overflow-x-auto px-4 py-4"
      />
    </div>
  );
}
