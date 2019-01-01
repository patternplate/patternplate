import styled from "styled-components";
import { Frame } from "./cover.styles";

export const Principles = styled.div`
  background: #fff;
  color: #000;
  padding: 40px 0;
  @media screen and (min-width: 600px) {
    padding-top: 125px;
  }

  ${Frame} {
    box-sizing: border-box;
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;
