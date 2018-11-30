import styled from "styled-components";

export interface MarkdownDivProps {
  grid?: boolean;
  ['column-start']?: number;
  ['column-end']?: number;
  span?: number;
}

export const MarkdownDiv = styled.div<MarkdownDivProps>`
  display: ${props => props.grid ? 'grid' : 'block'};
  ${props => props.grid ? 'grid-template-columns: repeat(12, 1fr);' : ''}
  ${props => props.grid ? 'grid-gap: 16px;' : ''}
  ${props => props['column-start'] ? `grid-column-start: ${props['column-start']};` : ''}
  ${props => props['column-end'] ? `grid-column-end: ${props['column-end']}` : ''}
`;
