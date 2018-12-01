import styled from "styled-components";
import tag from "tag-hoc";

export interface MarkdownDivProps {
  grid?: boolean;
  start?: number;
  end?: number;
}

export const MarkdownDiv = styled(tag(["grid", "start", "end"])("div"))<MarkdownDivProps>`
  @media (min-width: 480px) {
    display: ${props => props.grid ? 'grid' : 'block'};
  }
  ${props => props.grid ? 'grid-template-columns: repeat(12, 1fr);' : ''}
  ${props => props.grid ? 'grid-gap: 16px;' : ''}
  ${props => props.start ? `grid-column-start: ${props.start};` : ''}
  ${props => props.end ? `grid-column-end: ${props.end}` : ''}
`;
