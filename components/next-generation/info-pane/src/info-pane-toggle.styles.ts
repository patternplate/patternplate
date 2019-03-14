import styled from "styled-components";

export const StyledToggle = styled.div`
  position: relative;
  z-index: 1;
  flex: 1 1 auto;
  min-height: 30px;
`;

export const StyledToggleBody = styled.div`
  display: flex;
  color: ${props => props.theme.colors.color};
  box-sizing: border-box;
  width: 100%;
  padding: 5px 15px 5px 20px;
  box-sizing: border-box;
  background: ${props => props.theme.colors.background};
`;
