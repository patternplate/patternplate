const color = require('color');
const React = require('react');
const styled = require('styled-components').default;
const {entries, omit} = require('lodash');
const getThemes = require('Pattern');

module.exports = ThemesDemo;

function ThemesDemo() {
  const themes = getThemes();
  return (
	<div>
		<Theme name="Light" theme={themes.light}/>
		<Theme name="Dark" theme={themes.dark}/>
	</div>
  );
}

const StyledName = styled.div`
  font-family: sans-serif;
  font-weight: bold;
  margin-bottom 10px;
`;

const StyledGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 30px;
`;

function Theme(props) {
  return (
	<div>
		<StyledName>{props.name}</StyledName>
		<StyledGrid>
			{entries(
          omit(props.theme, ['name', 'fontWeight', 'fontSize'])
        ).map(entry => (
	<Tile key={entry.join('-')} color={entry[1]} name={entry[0]}/>
        ))}
		</StyledGrid>
	</div>
  );
}

const BACKGROUND = props => props.color;
const COLOR = props =>
  color(props.color).dark() ? 'rgb(250, 250, 250)' : 'rgb(10, 10, 10)';

const StyledTile = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${BACKGROUND};
  color: ${COLOR};
  min-width: 200px;
  min-height: 200px;
  margin: 0 10px 10px 0;
  font-family: sans-serif;
`;

function Tile(props) {
  return <StyledTile color={props.color}>{props.name}</StyledTile>;
}
