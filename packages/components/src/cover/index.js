const Helmet = require("react-helmet").default;
const React = require("react");
const styled = require("styled-components").default;
const injectGlobal = require("styled-components").injectGlobal;

const Headline = require("../headline");
const Favicon = require("./favicon");
const Link = require("../link");
const Text = require("../text");

module.exports.default = Cover;

function Cover () {
  return (
    <React.Fragment>
      <Helmet
        title="patternplate"
        link={[
          {
            name: "viewport",
            content: "width=device-width, initial-scale=1.0, user-scalable=yes"
          },
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
        />
        <Frame>
          <Stage>
            <div>
              <StageHeadline>
                Draw a map for your
                design adventures
              </StageHeadline>
              <StageText>
                Connect the dots with patternplate and stop wasting time
                getting lost in inconsistency, today.
              </StageText>

              <StageButton href="./doc/docs/guides/getting-started?guides-enabled=true">
                <Text>Show me how</Text>
              </StageButton>
            </div>
            <div>
              <StageImage/>
            </div>
          </Stage>
        </Frame>
    </React.Fragment>
  );
}

injectGlobal`
  body {
    margin: 0;
  }
`;

const Frame = styled.div`
  display: grid;
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

  @media screen and (min-width: 720px) {
    grid-template-columns: 1.5fr 1fr;
    grid-column-gap: 5vw;
  }
  @media screen and (min-width: 840px) {
    grid-template-columns: 1fr 1.3fr;
  }
`;

const StageHeadline = styled(Headline)`
  font-size: 32px;
  margin-bottom: 1em;

  @media screen and (min-width: 480px) {
    font-size: 72px;
  }
`;

const StageText = styled(Text)`
  font-size: 24px;
  line-height: 1.3em;
  margin-bottom: 3em;
`;

const StageImage = styled.div`
  background: #eee;
`;

const StageButton = styled(Link)`
  display: inline-flex;
  align-items: center;
  font-size: 24px;
  line-height: auto;
  padding: 0.6em;
  border: 1px solid currentColor;
  text-decoration: none;
`;

{/*
patternplate brings together
design and engineering,
components and screens,
documentation and implementation.
*/}
