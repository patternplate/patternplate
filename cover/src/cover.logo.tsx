import * as React from "react";
import styled from "styled-components";

export const Logo = styled.svg.attrs({
  viewBox: "0 0 100 100",
  children: [
    <path
      key="1"
      d="M50 75a3.75 3.75 0 0 1-2-.56l-26.85-16.7a2.55 2.55 0 1 1 2.69-4.32L50 69.72l26.15-16.3a2.55 2.55 0 1 1 2.69 4.32L52 74.48a3.76 3.76 0 0 1-2 .52z"
    />,
    <path
      key="2"
      d="M50 65a3.69 3.69 0 0 1-1.95-.55L21.69 48a3.54 3.54 0 0 1 0-6l26.36-16.44a3.71 3.71 0 0 1 3.9 0L78.31 42a3.54 3.54 0 0 1 0 6L51.95 64.44A3.68 3.68 0 0 1 50 65zM26.3 45L50 59.77 73.7 45 50 30.23z"
    />
  ]
})`
  width: 10vw;
  height: 10vw;
  min-width: 80px;
  max-width: 240px;
  min-height: 80px;
  max-height: 240px;
  fill: currentColor;
  color: inherit;
  margin: 15px 0 0 15px;
  @supports (margin: env(safe-area-inset-top)) {
    margin-left: calc(env(safe-area-inset-top) + 10px);
  }
  @supports (margin: env(safe-area-inset-left)) {
    margin-left: calc(env(safe-area-inset-left) + 5px);
  }
  @media screen and (min-width: 1024px) {
    margin: 15px 0 0 5px;
  }
`;
