const React = require("react");
const styled = require("styled-components").default;
const { ThemeProvider } = require("styled-components");
const getThemes = require("./themes");

const themes = getThemes();

module.exports = Themer;

function Themer(props) {
  return (
    <StyledThemer>
      <ThemeProvider key="dark" theme={themes.dark}>
        <StyledThemeContainer spacing={props.spacing}>
          {props.children}
        </StyledThemeContainer>
      </ThemeProvider>
      <ThemeProvider key="light" theme={themes.light}>
        <StyledThemeContainer spacing={props.spacing}>
          {props.children}
        </StyledThemeContainer>
      </ThemeProvider>
    </StyledThemer>
  );
}

const StyledThemeContainer = styled.div`
  background: ${props => props.theme.colors.background};
  padding: ${props => props.spacing ? 15 : 0}px;
`;


const StyledThemer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
