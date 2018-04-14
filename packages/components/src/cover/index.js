const Helmet = require("react-helmet").default;
const React = require("react");
const styled = require("styled-components").default;
const injectGlobal = require("styled-components").injectGlobal;
const ThemeProvider = require("styled-components").ThemeProvider;

const Headline = require("../headline");
const Favicon = require("./favicon");
const Link = require("../link");
const Text = require("../text");
const themes = require("../themes");

module.exports.default = Cover;
module.exports.head = () => Helmet.rewind();

function Cover() {
  return (
    <ThemeProvider theme={themes().dark}>
      <React.Fragment>
        <Helmet
          title="patternplate"
          link={[
            {
              rel: "icon",
              type: "text/svg",
              href: Favicon.svg
            },
            {
              rel: "icon",
              type: "image/png",
              href: Favicon.png
            }
          ]}
          meta={[
            {
              name: "viewport",
              content:
                "width=device-width, initial-scale=1.0, user-scalable=yes"
            }
          ]}
        />
        <StageContainer>
          <Frame>
            <div style={{ minHeight: "100vh" }}>
              <Logo />
              <Stage>
                <StageSlot>
                  <StageHeadline>
                    Create better <nobr>Design Systems</nobr>
                  </StageHeadline>
                  <StageText>
                    patternplate connects Design and Engineering to establish a
                    real Source of Truth for your team.
                  </StageText>
                </StageSlot>
                <StageSlot>
                  <StageImage src="https://patternplate.github.io/media/images/screenshot-site.svg" />
                </StageSlot>
              </Stage>
            </div>
          </Frame>
        </StageContainer>
        <ThemeProvider theme={themes().light}>
          <Principles>
            <Frame width="75%">
              <Principle>
                <Principle.Title order={2}>Come as you are</Principle.Title>
                <Principle.Text>
                  <p>Not a CLI, not an app. Both.</p>
                  <p>
                    Work in the environment you are comfortable with and expend
                    your time for great design and engineering work instead of
                    struggling with tools made for other disciplines.
                  </p>
                </Principle.Text>
              </Principle>
              <Principle>
                <Principle.Title order={2}>
                  A Living <nobr>Single Source of Truth</nobr>
                </Principle.Title>
                <Principle.Text>
                  <p>Your work is so much more than its parts.</p>
                  <p>
                    Meld code and documentation into something more valuable – a
                    real <nobr>Source of Truth</nobr> that is always up to date
                    by design.
                  </p>
                </Principle.Text>
              </Principle>
              <Principle>
                <Principle.Title order={2}>
                  Bring Order to Chaos
                </Principle.Title>
                <Principle.Text>
                  <p>Make sense of your design universe with meta data.</p>
                  <p>
                    Describe your tokens and components with a fixed schema to
                    help everyone to find, evaluate and understand your work.
                  </p>
                </Principle.Text>
              </Principle>
              <Principle>
                <Principle.Title order={2}>
                  Stay in touch with your work
                </Principle.Title>
                <Principle.Text>
                  <p>Manipulate your design system directly.</p>
                  <p>
                    Edit your components, tokens and documentation and see your
                    changes reflected directly in patternplate interface.
                  </p>
                </Principle.Text>
              </Principle>
            </Frame>
          </Principles>
        </ThemeProvider>
        <ButtonRow>
          <Frame>
            <ButtonRowContent>
              <StageButton href="./doc/docs/why?guides-enabled=true">
                <Text>Show me how</Text>
              </StageButton>
              <GithubButton
                target="_blank"
                href="https://github.com/patternplate/patternplate"
              >
                <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                  <path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z" />
                </svg>
              </GithubButton>
            </ButtonRowContent>
          </Frame>
        </ButtonRow>
      </React.Fragment>
    </ThemeProvider>
  );
}

injectGlobal`
  body {
    margin: 0 0 100px 0;
    overflow-x: hidden;
  }
`;

const Frame = styled.div`
  box-sizing: border-box;
  width: ${props => props.width || "100%"};
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
`;

const Stage = styled.div`
  display: grid;
  grid-column-gap: 15px;
  position: relative;
  @media screen and (min-width: 720px) {
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 5vw;
  }
  @media screen and (min-width: 840px) {
    grid-template-columns: 1.5fr 1.3fr;
  }
`;

const StageSlot = styled.div`
  position: relative;
  padding: 20px 30px;
`;

const StageContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(-45deg, #4504da, #ff0353);
  min-height: calc(100vh + 100px);
  color: #ffffff;
  overflow: hidden;
`;

const Logo = styled.svg.attrs({
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
  margin-bottom: 40px;
  fill: currentColor;
  color: inherit;
`;

const StageHeadline = styled(Headline)`
  font-size: 40px;
  margin: 0 0 1em 0;

  @media screen and (min-width: 480px) {
    font-size: 60px;
    max-width: 15ch;
  }

  @media screen and (min-width: 1240px) {
    font-size: 72px;
  }
`;

const StageText = styled(Text)`
  max-width: 25ch;
  font-weight: 200;
  line-height: 1.3em;
  margin-bottom: 2em;
  font-size: 25px;
  @media screen and (min-width: 1240px) {
    font-size: 35px;
  }
`;

const StageImage = styled.img`
  width: 150%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -10px -10px 20px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 720px) {
    bottom: -20px;
    top: 0;
    width: auto;
  }
`;

const ButtonRow = styled.div`
  position: fixed;
  z-index: 1;
  right: 0;
  left: 0;
  bottom: 0;
  background: #fff;
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
`;

const ButtonRowContent = styled.div`
  display: flex;
  align-items: center;
`;

const StageButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 24px;
  line-height: auto;
  padding: 0.6em;
  border: 1px solid currentColor;
  text-decoration: none;
  background: #100133;
  color: #fff;
  border-radius: 3px;
  margin-right: 20px;
`;

const GithubButton = styled(Link)`
  height: 40px;
  width: 40px;
  fill: color;
  color: #100133;
  svg {
    width: 100%;
    pointer-events: none;
  }
`;

const Principles = styled.div`
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
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const Principle = props => (
  <PrincipleContainer>{props.children}</PrincipleContainer>
);

Principle.Title = styled(Headline)`
  margin: 0;
  grid-row: headline;
`;

Principle.Text = styled(Text)`
  grid-row: text;
`;

const PrincipleContainer = styled.div`
  box-sizing: border-box;
  border: 1px solid rgba(0, 0, 0, 0.1);
  padding: 20px 15px;
  /* &::before {
    content: '';
    grid-row-start: headline;
    grid-row-end: text;
  } */
`;
