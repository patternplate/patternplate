const Helmet = require("react-helmet").default;
const React = require("react");
const styled = require("styled-components").default;
const injectGlobal = require("styled-components").injectGlobal;
const ThemeProvider = require("styled-components").ThemeProvider;

const Headline = require("../headline");
const Favicon = require("./favicon");
const Link = require("../link");
const Text = require("../text");
const getThemes = require("../themes");

module.exports.canary = '1';
module.exports.default = Cover;
module.exports.head = () => Helmet.rewind();

function Cover() {
  const themes = getThemes();

  return (
    <ThemeProvider theme={themes.dark}>
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
                "width=device-width, initial-scale=1.0, viewport-fit=cover, user-scalable=yes"
            }
          ]}
        />
        <StageContainer>
          <Frame>
            <div style={{ minHeight: "200vh" }}>
              <Logo />
              <Stage>
                <StageSlot>
                  <StageHeadline>
                    Create better <nobr>Design Systems.</nobr>
                  </StageHeadline>
                  <StageText>
                    patternplate connects design and engineering to establish a
                    single source of truth for your team.
                  </StageText>
                  <ThemeProvider theme={themes.light}>
                    <StageButton variant="big" href="./doc/docs/why?guides-enabled=true">
                      <StageButtonText>
                        Show me how
                      </StageButtonText>
                    </StageButton>
                  </ThemeProvider>
                </StageSlot>
                <StageSlot>
                  <StageImage src="https://patternplate.github.io/media/images/screenshot-site.svg" />
                </StageSlot>
              </Stage>
            </div>
          </Frame>
        </StageContainer>
        <ThemeProvider theme={themes.light}>
          <Principles>
            <Frame width="75%">
              <Principle>
                <Principle.Title order={2}>Come as you are</Principle.Title>
                <Principle.Text>
                  <p>Not a CLI, not an app. Both...</p>
                  <p>
                    Work in the environment you are comfortable with and expend
                    your time for great design and engineering work instead of
                    struggling with tools made for other disciplines.
                  </p>
                </Principle.Text>
              </Principle>
              <Principle>
                <Principle.Title order={2}>
                  Establish a Single Source of Truth
                </Principle.Title>
                <Principle.Text>
                  <p>Your work is so much more than its parts.</p>
                  <p>
                    Meld code and documentation into something more valuable – a
                    <nobr>single source of truth</nobr> that is always up to date
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
                    help everyone to understand, use and remix your work.
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
                    Edit your components, tokens and documentation and see how patternplate
                    updates your design system without reloading.
                  </p>
                </Principle.Text>
              </Principle>
              <Principle>
                <Principle.Title order={2}>
                  Be as free as the web
                </Principle.Title>
                <Principle.Text>
                  <p> HTML, CSS and JavaScript – that's all it takes.</p>
                  <p>
                    We supports component-specific stacks,
                    so you don't have to commit to a single technology.
                    Want to integrate a Vue component into a React design system?
                    That's perfectly possible with patternplate.
                  </p>
                </Principle.Text>
              </Principle>
              <Principle>
                <Principle.Title order={2}>
                  Real components. Period.
                </Principle.Title>
                <Principle.Text>
                  <p>Show and tell with code instead of faking it.</p>
                  <p>
                    patternplate uses real-world, production-level code
                    components for demos and examples.
                    This saves you from wasting time polishing
                    components that never see the light of day and
                    makes the relation between design system and product transparent.
                  </p>
                </Principle.Text>
              </Principle>
            </Frame>
          </Principles>
        </ThemeProvider>
        <ThemeProvider theme={themes.light}>
          <ButtonRow>
            <Frame>
              <ButtonRowContent>
                <StageButton href="./doc/docs/why?guides-enabled=true">
                  <StageButtonText>Show me how</StageButtonText>
                </StageButton>
                <GithubButton
                  target="_blank"
                  href="https://github.com/patternplate/patternplate"
                >
                  <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z" />
                  </svg>
                </GithubButton>
                <ButtonRowRight>
                  <Text>
                    Proudly powered by <InlineLink href="https://sinnerschrader.com" target="_blank">SinnerSchrader</InlineLink>
                  </Text>
                  <br/>
                  <Text><InlineLink href="https://sinnerschrader.com/imprint/" target="_blank" g>Legal Notice</InlineLink></Text>
                </ButtonRowRight>
              </ButtonRowContent>
            </Frame>
          </ButtonRow>
        </ThemeProvider>
        <ThemeProvider theme={themes.dark}>
          <Connection>
            <Frame>
              <Connection.Title>
                Built to connect
              </Connection.Title>
              <Connection.Text>
                <p>
                We created patternplate to connect things and people
                that belong together. Reaching out and understanding each
                other is the best way to improve.
                </p>
                <Connection.List>
                  <li>The Abstract and The Concrete</li>
                  <li>Documentation and Implementation</li>
                  <li>Principles and Examples</li>
                  <li>Designers and Engineers</li>
                </Connection.List>
                <p>
                  Learn how we use patternplate to create better
                  design systems and products at SinnerSchrader.
                </p>
                <Connection.Button href="#">
                  Read the story on Medium
                </Connection.Button>
              </Connection.Text>
            </Frame>
          </Connection>
        </ThemeProvider>
      </React.Fragment>
    </ThemeProvider>
  );
}

injectGlobal`
  body {
    margin: 0 0 100px 0;
    width: 100vw;
    overflow-x: hidden;
  }
`;

const InlineLink = styled(Link)`
  color: ${props => props.theme.colors.active};
  text-decoration: underline;
  text-decoration-style: dotted;
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

  @supports (padding: env(safe-area-inset-left)) {
    padding-left: calc(env(safe-area-inset-left) + 10px);
  }
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
  display: flex;
  flex-wrap: wrap;
  position: sticky;
  z-index: 2;
  top: calc(100vh - 100px);
  background: ${props => props.theme.colors.background};
  box-shadow: 0 -1px 2px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
`;

const ButtonRowContent = styled.div`
  display: flex;
  flex-shrink: 0;
  align-items: center;
`;

const ButtonRowRight = styled.div`
  display: none;
  flex-direction: column;
  align-items: flex-end;
  flex-shrink: 0;
  margin-left: auto;
  padding-left: 15px;
  @media screen and (min-width: 550px) {
    display: flex;
  }
`;

const StageButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: ${props => props.variant === "big" ? 34 : 24}px;
  line-height: auto;
  padding: 0.6em;
  text-decoration: none;
  background: #100133;
  color: ${props => props.theme.colors.background};
  border-radius: 3px;
  margin-right: 20px;
  white-space: nowrap;
`;

const StageButtonText = styled(Text)`
  color: ${props => props.theme.colors.background};
`;

const GithubButton = styled(Link)`
  flex-shrink: 0;
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
    grid-auto-rows: 1fr;
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
  margin: 0 10px;

  &:not(:last-child) {
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media screen and (min-width: 700px) {
    &:not(:last-child) {
      border: 1px solid rgba(0, 0, 0, 0.1);
      margin: 0;
      padding: 15px 20px;
    }
    border: 1px solid rgba(0, 0, 0, 0.1);
    margin: 0;
    padding: 15px 20px;
  }
`;

const Connection = styled.div`
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
  padding: 20px 60px 120px 60px;
  background: ${props => props.theme.colors.background};
`;

Connection.Title = styled(Headline)`
  font-size: 12vw;
  max-width: 60ch;
  @media screen and (min-width: 500px) {
    font-size: 60px;
  }
`;

Connection.Text = styled(Text)`
  font-size: 6vw;
  text-align: left;
  max-width: 40ch;
  line-height: 1.5;
  @media screen and (min-width: 500px) {
    font-size: ${props => props.theme.fonts.fontSize * 2}px;
  }
`;

Connection.List = styled.ul`
  list-style: none;
  text-align: left;
  line-height: 2;
  font-weight: 100;
  white-space: nowrap;
  opacity: .75;
  margin-bottom: 1em;
  margin-left: -.75em;
  padding: 0;
  font-size: ${props => props.theme.fonts.fontSize * 2.5}px;

  @media screen and (min-width: 480px) {
    font-size: ${props => props.theme.fonts.fontSize * 3}px;
  }

  @media screen and (min-width: 1024px) {
    font-size: ${props => props.theme.fonts.fontSize * 4}px;
    margin-left: 50%;
  }
`;

Connection.Button = styled(Link)`
  display: inline-block;
  color: ${props => props.theme.colors.background};
  background: ${props => props.theme.colors.color};
  padding: 15px 20px;
  border-radius: 2px;
  cursor: pointer;
`;
