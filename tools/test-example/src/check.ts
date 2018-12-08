import * as puppeteer from "puppeteer";
import * as Url from "url";
import { uniq, memoize } from "lodash";
import fetch from "node-fetch";
import * as matcher from "matcher";

const throat = require("throat");
const memFetch = memoize(fetch);

export interface CheckAllResult {
  valid: boolean;
  failed: { url: string; base: string }[];
  results: CheckResult[];
}

export interface CheckResult {
  base: string;
  valid: boolean;
  results: UrlResult[];
};

export interface UrlResult {
  url: string;
  valid: boolean;
}

export async function all(bases: string[], { page, ignore }: { page: puppeteer.Page; ignore: string[] }): Promise<CheckAllResult> {
  const results: CheckResult[] = [];

  for (const base of bases) {
    results.push(await check(base, {page, ignore}));
  }

  const failed = results.reduce<{url: string; base: string}[]>((acc, result) => {
    if (result.valid) {
      return acc;
    }
    return [...acc, ...result.results.filter(r => !r.valid).map(r => ({ url: r.url, base: result.base }))]
  }, []);

  return {
    valid: results.every(r => r.valid),
    failed,
    results
  };
}

export async function check(
  base: string,
  { page, ignore }: { page: puppeteer.Page; ignore: string[] }
): Promise<CheckResult> {
  if (ignore.length > 0 && matcher([base], ignore).length > 0) {
    return {
      base,
      valid: true,
      results: []
    };
  }

  await page.goto(base);

  const pathnames = await page.evaluate(() => {
    const toArray = (i: NodeListOf<Element>): Element[] =>
      Array.prototype.slice.call(i, 0);

    return toArray(
      document.querySelectorAll("script[src], link[href], a[href], img[src]")
    )
      .map((e: Element) => e.getAttribute("src") || e.getAttribute("href"))
      .filter((href): href is string => typeof href === "string")
      .filter(
        url =>
          url &&
          !url.startsWith("data:") &&
          !url.startsWith("http://") &&
          !url.startsWith("https://")
      );
  }, base);

  if (pathnames.length === 0) {
    console.error(`Could not find urls at ${base}, that does not seem right.`);
    process.exit(1);
  }

  const urls = uniq<string>(
    pathnames
      .map((url: string) => Url.parse(url).pathname)
      .filter(
        (pathname: string | null): pathname is string =>
          typeof pathname === "string"
      )
  )
  .map((pathname: string) => Url.resolve(base, pathname === '/' ? '' : pathname))
  .filter(url => ignore.length > 0 && matcher([url], ignore).length === 0);

  const tasks = urls.map<{ url: string; valid: boolean; }>(throat(4, async (url: string) => {
    const response = await memFetch(url);
    return {
      url,
      valid: response.status === 200
    };
  }));

  const results = await Promise.all(tasks);
  await page.goto('about:blank');

  return {
    base,
    valid: results.every(r => r.valid),
    results
  };
}
