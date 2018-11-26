import * as React from "react";
import styled from "styled-components";
import { icons } from "./icons";
import { Symbol } from "./symbol";

export interface IconRegistryProps {
  symbols: (keyof typeof icons)[];
}

export const IconRegistry: React.SFC<IconRegistryProps> = (props) => {
  return (
    <StyledRegistry>
      {(props.symbols || []).map(symbol => {
        const creator =
          typeof icons[symbol] === "function"
            ? icons[symbol]
            : icons.placeholder;

        const paths = creator();
        return <Symbol key={symbol} id={symbol} definition={paths} />;
      })}
    </StyledRegistry>
  );
}

const StyledRegistry = styled.svg`
  position: fixed;
  height: 0;
  width: 0;
  overflow: hidden;
  padding: 0;
  visibility: hidden;
`;
