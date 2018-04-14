const React = require("react");
const {renderToString} = require("react-dom/server");
const styled = require("styled-components").default;
const ThemeProvider = require("styled-components").ThemeProvider;
const CodeMirror = require("react-codemirror2").Controlled;

if (global.document) {
  require("codemirror/mode/javascript/javascript");
}

const getThemes = require(".");
const Themer = require("../demo-themer");
const { MainNavigationDemo } = require("../main-navigation/demo");
const { MarkdownDemo } = require("../markdown/demo");
const { FlagDemo } = require("../flag/demo");
const svg = require("../svg");

const DEFAULT_CONFIG = `
// patternplate.config.js
module.exports = {
  ui: {
    logo: \`
      <svg width="30" height="30" viewBox="0 0 24 24">
        <rect width="30" height="30" fill="currentColor"/>
      </svg>
    \`,

    // Fonts
    fontDefault: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    fontHeadline: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
    fontCode: 'SFMono-Regular, Consolas, Liberation Mono, Menlo, Courier, monospace',

    // Global colors
    colorActive: "rgb(51, 153, 255)",
    colorError: "rgb(250, 63, 69)",
    colorWarning: "rgb(255, 189, 46)",
    colorInfo: "rgb(80, 179, 221)",
    colorSuccess: "rgb(74, 165, 74)",

    // Dark context colors
    colorBackgroundDark: "rgb(8, 15, 23)",
    colorBackgroundSecondaryDark: "rgb(11, 23, 34)",
    colorBackgroundSecondaryTertiaryDark: "rgb(11, 23, 34)",
    colorBorderDark: "rgb(11, 23, 34)",
    colorTextDark: "rgb(242, 242, 242)",
    colorRecessDark: "rgb(153, 153, 153)",

    // Light context colors
    colorBackgroundLight: "rgb(255, 255, 255)",
    colorBackgroundSecondaryLight: "rgb(246, 248, 250)",
    colorBackgroundTertiaryLight: "rgb(246, 248, 250)",
    colorBorderLight: "rgb(228, 228, 228)",
    colorTextLight: "rgb(68, 68, 68)",
    colorRecessLight: "rgb(106, 115, 125)"
  }
};
`;

class ThemeDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = { config: DEFAULT_CONFIG };
  }

  render() {
    const { props } = this;
    const config = getConfig(this.state.config);
    const themes = getFailsafeThemes(config.ui);

    const logo = config.ui.logo
      ? renderToString(svg.render(svg.sanitize(svg.purge([svg.parse(config.ui.logo)]))[0]))
      : "";

    return (
      <ThemeConfigurator>
        <Box>
          <NavigationBox>
            <ThemeProvider theme={themes.dark}>
              <MainNavigationDemo logo={logo} />
            </ThemeProvider>
          </NavigationBox>
          <ContentBox>
            <ThemeProvider theme={themes.light}>
              <div>
                <MarkdownDemo />
                <FlagDemo />
              </div>
            </ThemeProvider>
          </ContentBox>
        </Box>
        <CodeMirrorContainer>
          <CodeMirror
            value={this.state.config}
            options={{
              mode: "javascript",
              theme: "seti",
              lineNumbers: true,
              lineWrapping: true
            }}
            onBeforeChange={(_, __, value) => this.setState({ config: value })}
          />
        </CodeMirrorContainer>
      </ThemeConfigurator>
    );
  }
}

module.exports.default = ThemeDemo;

const getConfig = (source) => {
  try {
    const module = {exports: {}};
    return eval(source);
    return module.exports;
  } catch (err) {
    console.error(err);
    return {
      ui: {}
    };
  }
}

const getFailsafeThemes = (ui) => {
  try {
    return getThemes(ui);
  } catch (err) {
    return getThemes({});
  }
}

const ThemeConfigurator = styled.div`

`;

const Box = styled.div`
  display: flex;
  height: 100%;
  margin-bottom: 15px;
`;

const NavigationBox = styled.div`
  width: 300px;
`;

const ContentBox = styled.div`
  padding: 20px;
  max-height: 350px;
  overflow: auto;
`;

const CodeMirrorContainer = styled.div`
  min-width: 320px;
  font-family: monospace;
  height: 300px;
  color: black;
  direction: ltr;

  .CodeMirror-lines {
    padding: 4px 0; /* Vertical padding around content */
  }
  .CodeMirror pre {
    padding: 0 4px; /* Horizontal padding of content */
  }

  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    background-color: white; /* The little square between H and V scrollbars */
  }

  /* GUTTER */

  .CodeMirror-gutters {
    border-right: 1px solid #ddd;
    background-color: #f7f7f7;
    white-space: nowrap;
  }
  .CodeMirror-linenumbers {
  }
  .CodeMirror-linenumber {
    padding: 0 3px 0 5px;
    min-width: 20px;
    text-align: right;
    color: #999;
    white-space: nowrap;
  }

  .CodeMirror-guttermarker {
    color: black;
  }
  .CodeMirror-guttermarker-subtle {
    color: #999;
  }

  /* CURSOR */

  .CodeMirror-cursor {
    border-left: 1px solid black;
    border-right: none;
    width: 0;
  }
  /* Shown when moving in bi-directional text */
  .CodeMirror div.CodeMirror-secondarycursor {
    border-left: 1px solid silver;
  }
  .cm-fat-cursor .CodeMirror-cursor {
    width: auto;
    border: 0 !important;
    background: #7e7;
  }
  .cm-fat-cursor div.CodeMirror-cursors {
    z-index: 1;
  }
  .cm-fat-cursor-mark {
    background-color: rgba(20, 255, 20, 0.5);
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
  }
  .cm-animate-fat-cursor {
    width: auto;
    border: 0;
    -webkit-animation: blink 1.06s steps(1) infinite;
    -moz-animation: blink 1.06s steps(1) infinite;
    animation: blink 1.06s steps(1) infinite;
    background-color: #7e7;
  }
  @-moz-keyframes blink {
    0% {
    }
    50% {
      background-color: transparent;
    }
    100% {
    }
  }
  @-webkit-keyframes blink {
    0% {
    }
    50% {
      background-color: transparent;
    }
    100% {
    }
  }
  @keyframes blink {
    0% {
    }
    50% {
      background-color: transparent;
    }
    100% {
    }
  }

  /* Can style cursor different in overwrite (non-insert) mode */
  .CodeMirror-overwrite .CodeMirror-cursor {
  }

  .cm-tab {
    display: inline-block;
    text-decoration: inherit;
  }

  .CodeMirror-rulers {
    position: absolute;
    left: 0;
    right: 0;
    top: -50px;
    bottom: -20px;
    overflow: hidden;
  }
  .CodeMirror-ruler {
    border-left: 1px solid #ccc;
    top: 0;
    bottom: 0;
    position: absolute;
  }

  /* DEFAULT THEME */

  .cm-s-default .cm-header {
    color: blue;
  }
  .cm-s-default .cm-quote {
    color: #090;
  }
  .cm-negative {
    color: #d44;
  }
  .cm-positive {
    color: #292;
  }
  .cm-header,
  .cm-strong {
    font-weight: bold;
  }
  .cm-em {
    font-style: italic;
  }
  .cm-link {
    text-decoration: underline;
  }
  .cm-strikethrough {
    text-decoration: line-through;
  }

  .cm-s-default .cm-keyword {
    color: #708;
  }
  .cm-s-default .cm-atom {
    color: #219;
  }
  .cm-s-default .cm-number {
    color: #164;
  }
  .cm-s-default .cm-def {
    color: #00f;
  }
  .cm-s-default .cm-variable,
  .cm-s-default .cm-punctuation,
  .cm-s-default .cm-property,
  .cm-s-default .cm-operator {
  }
  .cm-s-default .cm-variable-2 {
    color: #05a;
  }
  .cm-s-default .cm-variable-3,
  .cm-s-default .cm-type {
    color: #085;
  }
  .cm-s-default .cm-comment {
    color: #a50;
  }
  .cm-s-default .cm-string {
    color: #a11;
  }
  .cm-s-default .cm-string-2 {
    color: #f50;
  }
  .cm-s-default .cm-meta {
    color: #555;
  }
  .cm-s-default .cm-qualifier {
    color: #555;
  }
  .cm-s-default .cm-builtin {
    color: #30a;
  }
  .cm-s-default .cm-bracket {
    color: #997;
  }
  .cm-s-default .cm-tag {
    color: #170;
  }
  .cm-s-default .cm-attribute {
    color: #00c;
  }
  .cm-s-default .cm-hr {
    color: #999;
  }
  .cm-s-default .cm-link {
    color: #00c;
  }

  .cm-s-default .cm-error {
    color: #f00;
  }
  .cm-invalidchar {
    color: #f00;
  }

  .CodeMirror-composing {
    border-bottom: 2px solid;
  }

  /* Default styles for common addons */

  div.CodeMirror span.CodeMirror-matchingbracket {
    color: #0b0;
  }
  div.CodeMirror span.CodeMirror-nonmatchingbracket {
    color: #a22;
  }
  .CodeMirror-matchingtag {
    background: rgba(255, 150, 0, 0.3);
  }
  .CodeMirror-activeline-background {
    background: #e8f2ff;
  }

  /* STOP */

  /* The rest of this file contains styles related to the mechanics of
   the editor. You probably shouldn't touch them. */

  .CodeMirror {
    position: relative;
    overflow: hidden;
    background: white;
  }

  .CodeMirror-scroll {
    overflow: scroll !important; /* Things will break if this is overridden */
    /* 30px is the magic margin used to hide the element's real scrollbars */
    /* See overflow: hidden in .CodeMirror */
    margin-bottom: -30px;
    margin-right: -30px;
    padding-bottom: 30px;
    height: 100%;
    outline: none; /* Prevent dragging from highlighting the element */
    position: relative;
  }
  .CodeMirror-sizer {
    position: relative;
    border-right: 30px solid transparent;
  }

  /* The fake, visible scrollbars. Used to force redraw during scrolling
   before actual scrolling happens, thus preventing shaking and
   flickering artifacts. */
  .CodeMirror-vscrollbar,
  .CodeMirror-hscrollbar,
  .CodeMirror-scrollbar-filler,
  .CodeMirror-gutter-filler {
    position: absolute;
    z-index: 6;
    display: none;
  }
  .CodeMirror-vscrollbar {
    right: 0;
    top: 0;
    overflow-x: hidden;
    overflow-y: scroll;
  }
  .CodeMirror-hscrollbar {
    bottom: 0;
    left: 0;
    overflow-y: hidden;
    overflow-x: scroll;
  }
  .CodeMirror-scrollbar-filler {
    right: 0;
    bottom: 0;
  }
  .CodeMirror-gutter-filler {
    left: 0;
    bottom: 0;
  }

  .CodeMirror-gutters {
    position: absolute;
    left: 0;
    top: 0;
    min-height: 100%;
    z-index: 3;
  }
  .CodeMirror-gutter {
    white-space: normal;
    height: 100%;
    display: inline-block;
    vertical-align: top;
    margin-bottom: -30px;
  }
  .CodeMirror-gutter-wrapper {
    position: absolute;
    z-index: 4;
    background: none !important;
    border: none !important;
  }
  .CodeMirror-gutter-background {
    position: absolute;
    top: 0;
    bottom: 0;
    z-index: 4;
  }
  .CodeMirror-gutter-elt {
    position: absolute;
    cursor: default;
    z-index: 4;
  }
  .CodeMirror-gutter-wrapper ::selection {
    background-color: transparent;
  }
  .CodeMirror-gutter-wrapper ::-moz-selection {
    background-color: transparent;
  }

  .CodeMirror-lines {
    cursor: text;
    min-height: 1px; /* prevents collapsing before first draw */
  }
  .CodeMirror pre {
    /* Reset some styles that the rest of the page might have set */
    -moz-border-radius: 0;
    -webkit-border-radius: 0;
    border-radius: 0;
    border-width: 0;
    background: transparent;
    font-family: inherit;
    font-size: inherit;
    margin: 0;
    white-space: pre;
    word-wrap: normal;
    line-height: inherit;
    color: inherit;
    z-index: 2;
    position: relative;
    overflow: visible;
    -webkit-tap-highlight-color: transparent;
    -webkit-font-variant-ligatures: contextual;
    font-variant-ligatures: contextual;
  }
  .CodeMirror-wrap pre {
    word-wrap: break-word;
    white-space: pre-wrap;
    word-break: normal;
  }

  .CodeMirror-linebackground {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 0;
  }

  .CodeMirror-linewidget {
    position: relative;
    z-index: 2;
    padding: 0.1px; /* Force widget margins to stay inside of the container */
  }

  .CodeMirror-widget {
  }

  .CodeMirror-rtl pre {
    direction: rtl;
  }

  .CodeMirror-code {
    outline: none;
  }

  /* Force content-box sizing for the elements where we expect it */
  .CodeMirror-scroll,
  .CodeMirror-sizer,
  .CodeMirror-gutter,
  .CodeMirror-gutters,
  .CodeMirror-linenumber {
    -moz-box-sizing: content-box;
    box-sizing: content-box;
  }

  .CodeMirror-measure {
    position: absolute;
    width: 100%;
    height: 0;
    overflow: hidden;
    visibility: hidden;
  }

  .CodeMirror-cursor {
    position: absolute;
    pointer-events: none;
  }
  .CodeMirror-measure pre {
    position: static;
  }

  div.CodeMirror-cursors {
    visibility: hidden;
    position: relative;
    z-index: 3;
  }
  div.CodeMirror-dragcursors {
    visibility: visible;
  }

  .CodeMirror-focused div.CodeMirror-cursors {
    visibility: visible;
  }

  .CodeMirror-selected {
    background: #d9d9d9;
  }
  .CodeMirror-focused .CodeMirror-selected {
    background: #d7d4f0;
  }
  .CodeMirror-crosshair {
    cursor: crosshair;
  }
  .CodeMirror-line::selection,
  .CodeMirror-line > span::selection,
  .CodeMirror-line > span > span::selection {
    background: #d7d4f0;
  }
  .CodeMirror-line::-moz-selection,
  .CodeMirror-line > span::-moz-selection,
  .CodeMirror-line > span > span::-moz-selection {
    background: #d7d4f0;
  }

  .cm-searching {
    background-color: #ffa;
    background-color: rgba(255, 255, 0, 0.4);
  }

  /* Used to force a border model for a node */
  .cm-force-border {
    padding-right: 0.1px;
  }

  @media print {
    /* Hide the cursor when printing */
    .CodeMirror div.CodeMirror-cursors {
      visibility: hidden;
    }
  }

  /* See issue #2901 */
  .cm-tab-wrap-hack:after {
    content: "";
  }

  /* Help users use markselection to safely style text background */
  span.CodeMirror-selectedtext {
    background: none;
  }

  .cm-s-seti.CodeMirror {
    background-color: #151718 !important;
    color: #cfd2d1 !important;
    border: none;
  }
  .cm-s-seti .CodeMirror-gutters {
    color: #404b53;
    background-color: #0e1112;
    border: none;
  }
  .cm-s-seti .CodeMirror-cursor {
    border-left: solid thin #f8f8f0;
  }
  .cm-s-seti .CodeMirror-linenumber {
    color: #6d8a88;
  }
  .cm-s-seti.CodeMirror-focused div.CodeMirror-selected {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-seti .CodeMirror-line::selection,
  .cm-s-seti .CodeMirror-line > span::selection,
  .cm-s-seti .CodeMirror-line > span > span::selection {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-seti .CodeMirror-line::-moz-selection,
  .cm-s-seti .CodeMirror-line > span::-moz-selection,
  .cm-s-seti .CodeMirror-line > span > span::-moz-selection {
    background: rgba(255, 255, 255, 0.1);
  }
  .cm-s-seti span.cm-comment {
    color: #41535b;
  }
  .cm-s-seti span.cm-string,
  .cm-s-seti span.cm-string-2 {
    color: #55b5db;
  }
  .cm-s-seti span.cm-number {
    color: #cd3f45;
  }
  .cm-s-seti span.cm-variable {
    color: #55b5db;
  }
  .cm-s-seti span.cm-variable-2 {
    color: #a074c4;
  }
  .cm-s-seti span.cm-def {
    color: #55b5db;
  }
  .cm-s-seti span.cm-keyword {
    color: #ff79c6;
  }
  .cm-s-seti span.cm-operator {
    color: #9fca56;
  }
  .cm-s-seti span.cm-keyword {
    color: #e6cd69;
  }
  .cm-s-seti span.cm-atom {
    color: #cd3f45;
  }
  .cm-s-seti span.cm-meta {
    color: #55b5db;
  }
  .cm-s-seti span.cm-tag {
    color: #55b5db;
  }
  .cm-s-seti span.cm-attribute {
    color: #9fca56;
  }
  .cm-s-seti span.cm-qualifier {
    color: #9fca56;
  }
  .cm-s-seti span.cm-property {
    color: #a074c4;
  }
  .cm-s-seti span.cm-variable-3,
  .cm-s-seti span.cm-type {
    color: #9fca56;
  }
  .cm-s-seti span.cm-builtin {
    color: #9fca56;
  }
  .cm-s-seti .CodeMirror-activeline-background {
    background: #101213;
  }
  .cm-s-seti .CodeMirror-matchingbracket {
    text-decoration: underline;
    color: white !important;
  }
`;
