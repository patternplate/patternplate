import * as React from "react";
import * as rangeParser from "parse-numeric-range";
import { MarkdownWidget } from "./markdown-widget";
import { MarkdownCodeBlock } from "./markdown-code-block";
import * as ReactAddonsTextContent from "react-addons-text-content";

export class MarkdownPre extends React.Component {
  public render() {
    const { props } = this;
    const [language] = getLanguages(props);
    const [highlights] = getHighlights(props);

    if (language === "widget") {
      return (
        <MarkdownWidget
          code={ReactAddonsTextContent(props.children)}
        />
      );
    }

    return (
      <MarkdownCodeBlock
        language={language}
        highlights={highlights}
      >
        {props.children}
      </MarkdownCodeBlock>
    );
  }
}

function getLanguagePayload({ children }: { children?: React.ReactNode }): string[] {
  const child = children[0];

  if (!child) {
    return [];
  }

  const className = child.props.className;

  if (!className) {
    return [];
  }

  return className.split(" ").map(n => n.replace("language-", ""));
}

function getLanguages({ children }: { children?: React.ReactNode }): string[] {
  const payload = getLanguagePayload({ children })
    .map(n => n.replace(/\{[\d\-,\s]*\}$/, ""))
    .find(n => typeof n === "string" && n.length > 0);

  if (!payload) {
    return [];
  }

  return payload.split(":");
}

function getHighlights({ children }: { children?: React.ReactNode }): number[][] {
  return getLanguagePayload({ children })
    .map(n => n.match(/\{([\d\-,\s]*)\}$/))
    .map(n => (n !== null ? n[1] : ""))
    .map(n => rangeParser.parse(n));
}
