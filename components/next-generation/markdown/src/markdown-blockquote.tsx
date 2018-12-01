import * as React from "react";
import * as reactAddonsTextContent from "react-addons-text-content";
import styled from "styled-components";
import { withTheme, ThemeProvider } from "styled-components";
import { Text } from "@patternplate/component-text";
import { Theme, getThemes } from "@patternplate/component-themes";
import * as Color from "color";

export interface MarkdownBlockquoteProps {
  className?: string;
}

export interface MarkdownNoteProps {
  symbol: string;
}

const symbols = ["❔", "ℹ️", "✅", "❌", "⚠️"];

const InnerMarkdownBlockquote: React.SFC<MarkdownBlockquoteProps> = props => {
  return (
    <Text className={props.className} as="blockquote">
      {props.children}
    </Text>
  );
};

const PlainMarkdownBlockquote = styled(InnerMarkdownBlockquote)`
  grid-column: first / span 12;
  margin: 0 0 16px 0;
  font-size: 18px;
  line-height: 27px;
  padding-left: 18px;
  border-left: 4.5px solid ${props => props.theme.colors.recess};
  color: ${props => props.theme.colors.recess};
`;

const NOTE_BACKGROUND = (props: MarkdownNoteProps & { theme?: Theme }) => {
  switch (props.symbol) {
    case "❔":
      return (
        props.theme.colors.border ||
        props.theme.colors.colorBackgroundNote
      );
    case "ℹ️":
      return (
        props.theme.colors.colorBackgroundInfoNote || props.theme.colors.info
      );
    case "✅":
      return (
        props.theme.colors.colorBackgroundSuccessNote ||
        props.theme.colors.success
      );
    case "❌":
      return (
        props.theme.colors.colorBackgroundErrorNote || props.theme.colors.error
      );
    case "⚠️":
      return (
        props.theme.colors.colorBackgroundWarningNote ||
        props.theme.colors.warning
      );
  }
};

const MarkdownNote = styled.div<MarkdownNoteProps & { theme: Theme}>`
  box-sizing: border-box;
  padding: 16px;
  margin-bottom: 32px;
  background: ${NOTE_BACKGROUND};
  > :last-child {
    margin: 0;
  }
  a,
  a:link,
  a:visited,
  a span,
  a:link span,
  a:visited span {
    color: inherit;
    text-decoration: underline dotted;
  }
`;

export const MarkdownBlockquote: React.SFC<
  MarkdownBlockquoteProps & { theme: Theme }
> = withTheme(props => {
  const textContent = reactAddonsTextContent(props.children);
  const [_, symbol] = textContent.split("\n");

  if (symbols.indexOf(symbol) > -1) {
    const ps = React.Children
      .toArray(props.children)
      .map(p => remove(p, symbol));

    const isDark =
      Color.hsl(NOTE_BACKGROUND({ symbol, theme: props.theme })).luminosity() >
      0.4;

    const themes = getThemes();

    return (
      <MarkdownNote symbol={symbol}>
        <ThemeProvider theme={isDark ? themes.light : themes.dark}>
          <>
            {ps}
          </>
        </ThemeProvider>
      </MarkdownNote>
    );
  }

  return <PlainMarkdownBlockquote {...props} />;
});

function remove(node: React.ReactNode, symbol: string): React.ReactNode {
  if (Array.isArray(node)) {
    return node.map(n => remove(n, symbol));
  }

  const n = node as any;
  if (typeof node === "object" && n.props && n.props.children) {
    return {
      ...n,
      props: {
        ...n.props,
        children: React.Children
          .toArray(n.props.children)
          .map(c => remove(c, symbol))
      }
    };
  }

  if (typeof node == "string") {
    return node.split(symbol).join("");
  }

  return node;
}
