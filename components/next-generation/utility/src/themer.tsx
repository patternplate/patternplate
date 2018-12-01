import * as React from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { getThemes, Theme } from "@patternplate/component-themes";
import tag from "tag-hoc";
import { Global } from "./global";

export interface ThemerProps {
  spacing?: boolean;
  full?: boolean;
}

interface StyledThemerProps {
  spacing: boolean;
  full: boolean;
}

export interface WithTheme {
  theme: Theme;
}

export const Themer: React.SFC<ThemerProps> = props => {
  const themes = getThemes();

  return (
    <StyledThemer>
      <Global/>
      <ThemeProvider key="dark" theme={themes.dark}>
        <StyledThemeContainer spacing={Boolean(props.spacing)} full={props.full ? "true" : undefined}>
          {props.children}
        </StyledThemeContainer>
      </ThemeProvider>
      <ThemeProvider key="light" theme={themes.light}>
        <StyledThemeContainer spacing={Boolean(props.spacing)} full={props.full ? "true" : undefined}>
          {props.children}
        </StyledThemeContainer>
      </ThemeProvider>
    </StyledThemer>
  );
}

const StyledThemeContainer = styled(tag("spacing", "full")("div"))`
  background: ${(props: StyledThemerProps & WithTheme) => props.theme.colors.background};
  padding: ${(props: StyledThemerProps & WithTheme) => props.spacing ? 15 : 0}px;
  width: ${(props: StyledThemerProps & WithTheme) => props.full ? "100%" : "auto"};
`;


const StyledThemer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
