import * as Querystring from "querystring";

export type Nodeback = (err: null | Error, result: string) => void;

export class WebpackLoaderContext {
  public async: Nodeback;
  public addContextDependency = jest.fn();
  public query = "";

  public constructor(options: any, ctx: { async: Nodeback }) {
    this.query = `?${Querystring.stringify(options || {})}`;
    this.async = ctx.async;
  }
}

export const load = async function load(impl: any, options: any): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const ctx = new WebpackLoaderContext(options, {
      async: () => {
        return (err, result) => {
          if (err) {
            return reject(err);
          }
          resolve(result);
        };
      }
    });

    impl.call(ctx);
  });
}
