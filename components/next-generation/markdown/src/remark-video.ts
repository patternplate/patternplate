export function remarkVideo() {
  const Parser = this.Parser

  // Inject blockTokenizer
  const blockTokenizers = Parser.prototype.blockTokenizers
  const blockMethods = Parser.prototype.blockMethods
  blockTokenizers.videos = videoBlockTokenizer
  blockMethods.splice(blockMethods.indexOf('blockquote') + 1, 0, 'videos')

  if (this.Compiler) {
    const visitors = this.Compiler.prototype.visitors
    if (!visitors) return;
    visitors.video = (node) => `!(${node.provider}:${node.src})`
  }
}

function videoBlockTokenizer (eat, value: string) {
  const parsed = parse(value);

  if (parsed.type !== 'success') {
    return;
  }

  eat(parsed.matched)({
    type: 'video',
    ...parsed.payload
  });
}

const MATCHER = /^!\((video|youtube|vimeo):(?:(\{.*\}):)?(.*)\)\s*?/;

type ParseResult =
  | ParseResultSucess
  | ParseResultError;

interface ParseResultSucess {
  type: 'success';
  matched: string;
  position: {
    start: number;
    end: number;
  },
  payload: {
    provider: string;
    config: any;
    src: string;
  };
}

interface ParseResultError {
  type: 'error';
  error?: Error;
}

function parse(input: string): ParseResult {
  try {
    const matches = MATCHER.exec(input);

    if (matches === null) {
      return {
        type: 'error',
      };
    }

    const [all, provider, two, three] = matches;

    const config = two !== null && three !== null ? tryParse(two) : {};
    const src = two !== null && three !== null ? three : two;

    if (!provider || !src) {
      return {
        type: 'error',
      };
    }

    return {
      type: 'success',
      matched: matches[0],
      position: {
        start: matches.index,
        end: all.length - 1
      },
      payload: {
        provider,
        config,
        src
      }
    };
  } catch (err) {
    return {
      type: 'error',
      error:err
    };
  }
}

function tryParse(input: string): any {
  try {
    return JSON.parse(input);
  } catch (err) {
    return {};
  }
}
