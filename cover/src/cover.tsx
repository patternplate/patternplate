import * as React from "react";
import { ThemeProvider } from "styled-components";
import Helmet from "react-helmet"
import * as Favicon from "./cover.favicon";
import * as Components from "@patternplate/components";
import { Logo } from "./cover.logo";
import * as Stage from "./cover.stage";
import * as Connection from "./cover.connection";
import * as Principles from "./cover.principles";
import * as Principle from "./cover.principle";
import * as Styles from "./cover.styles";
import { NoBr } from "./cover.util";
import { GlobalStyle } from "./cover.global-style";

export const Cover: React.SFC = function Covder() {
  const themes = Components.themes.getThemes();

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
        <GlobalStyle/>
        <Stage.StageContainer>
          <Styles.Frame>
            <div style={{ minHeight: "100vh" }}>
              <Logo />
              <Stage.Stage>
                <Stage.StageSlot>
                  <Stage.StageHeadline order={0}>
                    Create better <NoBr>Design Systems</NoBr>
                  </Stage.StageHeadline>
                  <Stage.StageText>
                    patternplate connects design and engineering to establish a
                    single source of truth for your team.
                  </Stage.StageText>
                  <ThemeProvider theme={themes.light}>
                    <Stage.StageButton variant="big" href="./doc/docs/why.html?guides-enabled=true">
                      <Stage.StageButtonText>
                        Show me how
                      </Stage.StageButtonText>
                    </Stage.StageButton>
                  </ThemeProvider>
                </Stage.StageSlot>
                <Stage.StageSlot>
                  <Stage.StageImage src="https://patternplate.github.io/media/images/screenshot-site.svg" />
                </Stage.StageSlot>
              </Stage.Stage>
            </div>
          </Styles.Frame>
        </Stage.StageContainer>
        <ThemeProvider theme={themes.light}>
          <Principles.Principles>
            <Styles.Frame width="75%">
              <Principle.Principle>
                <Principle.PrincipleTitle order={2}>Come as you are</Principle.PrincipleTitle>
                <Principle.PrincipleText>
                  <p>Not a CLI, not an app. Both.</p>
                  <p>
                    Work in the environment you are comfortable with and expend
                    your time for great design and engineering work instead of
                    struggling with tools made for other disciplines.
                  </p>
                </Principle.PrincipleText>
              </Principle.Principle>
              <Principle.Principle>
                <Principle.PrincipleTitle order={2}>
                  Establish a Single Source of Truth
                </Principle.PrincipleTitle>
                <Principle.PrincipleText>
                  <p>Your work is so much more than its parts.</p>
                  <p>
                    Meld code and documentation into something more valuable – a
                    <NoBr>single source of truth</NoBr> that is always up to date
                    by design.
                  </p>
                </Principle.PrincipleText>
              </Principle.Principle>
              <Principle.Principle>
                <Principle.PrincipleTitle order={2}>
                  Bring Order to Chaos
                </Principle.PrincipleTitle>
                <Principle.PrincipleText>
                  <p>Make sense of your design universe with meta data.</p>
                  <p>
                    Describe your tokens and components with a fixed schema to
                    help everyone to understand, use and remix your work.
                  </p>
                </Principle.PrincipleText>
              </Principle.Principle>
              <Principle.Principle>
                <Principle.PrincipleTitle order={2}>
                  Stay in touch with your work
                </Principle.PrincipleTitle>
                <Principle.PrincipleText>
                  <p>Manipulate your design system directly.</p>
                  <p>
                    Edit your components, tokens and documentation and see how patternplate
                    updates your design system without reloading.
                  </p>
                </Principle.PrincipleText>
              </Principle.Principle>
              <Principle.Principle>
                <Principle.PrincipleTitle order={2}>
                  Be as free as the web
                </Principle.PrincipleTitle>
                <Principle.PrincipleText>
                  <p> HTML, CSS and JavaScript – that's all it takes.</p>
                  <p>
                    We supports component-specific stacks,
                    so you don't have to commit to a single technology.
                    Want to integrate a Vue component into a React design system?
                    That's perfectly possible with patternplate.
                  </p>
                </Principle.PrincipleText>
              </Principle.Principle>
              <Principle.Principle>
                <Principle.PrincipleTitle order={2}>
                  Real components. Period.
                </Principle.PrincipleTitle>
                <Principle.PrincipleText>
                  <p>Show and tell with code instead of faking it.</p>
                  <p>
                    patternplate uses real-world, production-level code
                    components for demos and examples.
                    This saves you from wasting time polishing
                    components that never see the light of day and
                    makes the relation between design system and product transparent.
                  </p>
                </Principle.PrincipleText>
              </Principle.Principle>
            </Styles.Frame>
          </Principles.Principles>
        </ThemeProvider>
        <ThemeProvider theme={themes.light}>
          <Styles.ButtonRow>
            <Styles.Frame>
              <Styles.ButtonRowContent>
                <Stage.StageButton href="./doc/docs/why.html?guides-enabled=true">
                  <Stage.StageButtonText>Show me how</Stage.StageButtonText>
                </Stage.StageButton>
                <Styles.GithubButton
                  target="_blank"
                  href="https://github.com/patternplate/patternplate"
                  title="Contribute on GitHub"
                >
                  <svg role="img" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg">
                    <title>GitHub icon</title>
                    <path d="M512 0C229.25 0 0 229.25 0 512c0 226.25 146.688 418.125 350.156 485.812 25.594 4.688 34.938-11.125 34.938-24.625 0-12.188-0.469-52.562-0.719-95.312C242 908.812 211.906 817.5 211.906 817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.531-31.75 3.53-31.125 3.53-31.125 51.406 3.562 78.47 52.75 78.47 52.75 45.688 78.25 119.875 55.625 149 42.5 4.654-33 17.904-55.625 32.5-68.375C304.906 725.438 185.344 681.5 185.344 485.312c0-55.938 19.969-101.562 52.656-137.406-5.219-13-22.844-65.094 5.062-135.562 0 0 42.938-13.75 140.812 52.5 40.812-11.406 84.594-17.031 128.125-17.219 43.5 0.188 87.312 5.875 128.188 17.281 97.688-66.312 140.688-52.5 140.688-52.5 28 70.531 10.375 122.562 5.125 135.5 32.812 35.844 52.625 81.469 52.625 137.406 0 196.688-119.75 240-233.812 252.688 18.438 15.875 34.75 47 34.75 94.75 0 68.438-0.688 123.625-0.688 140.5 0 13.625 9.312 29.562 35.25 24.562C877.438 930 1024 738.125 1024 512 1024 229.25 794.75 0 512 0z" />
                  </svg>
                </Styles.GithubButton>
                <Styles.GitterButton
                  target="_blank"
                  href="https://gitter.im/patternplate/Lobby"
                  title="Join us on Gitter"
                >
                  <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <title>Gitter icon</title>
                    <path d="M8.501 4.001H10.5V24H8.501V4.001zm6.999 0V24h-2V4.001h2zM3.5 0h2.001v15H3.5V0zm15 4.001h2V15h-2V4.001z"/>
                  </svg>
                </Styles.GitterButton>
                <Styles.ButtonRowRight>
                  <Components.Text>
                    Proudly powered by <Styles.InlineLink href="https://sinnerschrader.com" target="_blank">SinnerSchrader</Styles.InlineLink>
                  </Components.Text>
                  <br/>
                  <Components.Text><Styles.InlineLink href="https://sinnerschrader.com/imprint/" target="_blank" g>Legal Notice</Styles.InlineLink></Components.Text>
                </Styles.ButtonRowRight>
              </Styles.ButtonRowContent>
            </Styles.Frame>
          </Styles.ButtonRow>
        </ThemeProvider>
        <ThemeProvider theme={themes.dark}>
          <Connection.Connection>
            <Styles.Frame>
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
                <Connection.Button href="https://medium.com/still-day-one/how-to-build-and-maintain-massive-design-systems-3ce2898ac62f">
                  Read the story on Medium
                </Connection.Button>
              </Connection.Text>
            </Styles.Frame>
          </Connection.Connection>
        </ThemeProvider>
      </React.Fragment>
    </ThemeProvider>
  );
}
