const Helmet = require("react-helmet").default;
const React = require("react");
const styled = require("styled-components").default;
const injectGlobal = require("styled-components").injectGlobal;

const Headline = require("../headline");
const Favicon = require("./favicon");
const Link = require("../link");
const Text = require("../text");

module.exports.default = Cover;
module.exports.head = () => Helmet.rewind();

function Cover () {
  return (
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
            content: "width=device-width, initial-scale=1.0, user-scalable=yes"
          }
        ]}
        />
        <StageContainer>
          <Frame>
            <div>
              <Logo/>
              <Stage>
                <div>
                  <StageHeadline>
                    A shared space for system
                    design and engineering.
                  </StageHeadline>
                  <StageText>
                    Connect the dots with patternplate and stop
                    getting lost in inconsistency.
                  </StageText>
                  <ButtonRow>
                    <Frame>
                      <ButtonRowContent>
                        <StageButton href="./doc/docs/guides/getting-started?guides-enabled=true">
                          <Text>Show me how</Text>
                        </StageButton>
                        <GithubButton target="_blank" href="https://github.com/patternplate/patternplate">
                          <svg viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                            <path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z"/>
                          </svg>
                        </GithubButton>
                      </ButtonRowContent>
                    </Frame>
                  </ButtonRow>
                </div>
                <div>
                  <StageImage src="https://patternplate.github.io/media/images/screenshot-site.svg"/>
                </div>
              </Stage>
            </div>
          </Frame>
      </StageContainer>
    </React.Fragment>
  );
}

injectGlobal`
  body {
    margin: 0;
    overflow-x: hidden;
  }
`;

const Frame = styled.div`
  box-sizing: border-box;
  width: 100%;
  min-width: 320px;
  max-width: 1440px;
  margin: 0 auto;
  padding: 20px 30px;
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
    grid-template-columns: 1fr 1.3fr;
  }
`;

const StageContainer = styled.div`
  width: 100%;
  background-image: linear-gradient(-45deg, #4504DA, #FF0353);
  min-height: calc(100vh + 100px);
  color: #FFFFFF;
  overflow: hidden;
`;

const Logo = styled.svg.attrs({
  viewBox: "0 0 100 100",
  children: [
    <path key="1" d="M50 75a3.75 3.75 0 0 1-2-.56l-26.85-16.7a2.55 2.55 0 1 1 2.69-4.32L50 69.72l26.15-16.3a2.55 2.55 0 1 1 2.69 4.32L52 74.48a3.76 3.76 0 0 1-2 .52z"/>,
    <path key="2" d="M50 65a3.69 3.69 0 0 1-1.95-.55L21.69 48a3.54 3.54 0 0 1 0-6l26.36-16.44a3.71 3.71 0 0 1 3.9 0L78.31 42a3.54 3.54 0 0 1 0 6L51.95 64.44A3.68 3.68 0 0 1 50 65zM26.3 45L50 59.77 73.7 45 50 30.23z"/>
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
  font-size: 32px;
  margin: 0 0 1em 0;

  @media screen and (min-width: 480px) {
    font-size: 72px;
    max-width: 15ch;
  }
`;

const StageText = styled(Text)`
  max-width: 25ch;
  font-size: 20px;
  font-weight: 200;
  line-height: 1.3em;
  margin-bottom: 3em;

  @media screen and (min-width: 480px) {
    font-size: 48px;
  }
`;

const StageImage = styled.img`
  position: absolute;
  top: auto;
  width: 600px;
  top: 100%;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: -10px -10px 20px rgba(0, 0, 0, .15);

  @media screen and (min-width: 480px) {
    top: 85%;
  }

  @media screen and (min-width: 750px) {
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
  > svg {
    pointer-events: none;
  }
`;

{/*
patternplate brings together
design and engineering,
components and screens,
documentation and implementation.
*/}
