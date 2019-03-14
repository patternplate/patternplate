import * as React from "react";
import styled from "styled-components";

export interface WidgetDemoErrorProps {
  message: string;
  snippet?: string;
}

export const WidgetDemoError: React.SFC<WidgetDemoErrorProps> = function WidgetDemoError(props) {
  return (
    <StyledPatternDemoError>
      <div>{props.message}</div>
      {props.snippet &&
        <pre>
          {props.snippet}
        </pre>
      }
    </StyledPatternDemoError>
  );
}

const StyledPatternDemoError = styled.div`
  background: ${props => props.theme.colors.error};
  color: #fff;
  padding: 10px 15px;
  font-family: monospace;
`;
