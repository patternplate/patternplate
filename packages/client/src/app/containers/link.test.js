import { getHref } from "./link";

test("external flag emits href as is", () => {
  const expected = "/example";
  const actual = getHref({ external: true, href: expected }, { location: "/" });

  expect(actual).toBe(expected);
});

test("empty context location emits href as is", () => {
  const expected = "/example";
  const actual = getHref({ href: expected }, {});

  expect(actual).toBe(expected);
});

test("honors legacy ./doc/ prefix", () => {
  const actual = getHref(
    { href: "./doc/example" },
    { base: "/base/", location: "/" }
  );
  const expected = "/base/doc/example.html";

  expect(actual).toBe(expected);
});

test("honors legacy ./pattern/ prefix", () => {
  const actual = getHref(
    { href: "./pattern/example" },
    { base: "/base/", location: "/" }
  );
  const expected = "/base/pattern/example.html";

  expect(actual).toBe(expected);
});

test("honors legacy ./doc/ prefix with base", () => {
  const actual = getHref(
    { href: "./base/doc/example" },
    { base: "/base/", location: "/" }
  );
  const expected = "/base/doc/example.html";

  expect(actual).toBe(expected);
});

test("honors legacy ./pattern/ prefix with base", () => {
  const actual = getHref(
    { href: "./base/pattern/example" },
    { base: "/base/", location: "/" }
  );
  const expected = "/base/pattern/example.html";

  expect(actual).toBe(expected);
});

// https://github.com/patternplate/patternplate/issues/295
test("/ is prefixed with base", () => {
  const actual = getHref({ href: "/" }, { base: "/base/", location: "/" });
  const expected = "/base/";

  expect(actual).toBe(expected);
});

test("calculates relative item => item url correctly", () => {
  const expected = "doc/docs/some/doc.html";

  const actual = getHref(
    { href: "../some/doc" },
    {
      base: "/base/",
      location: "/doc/docs/other/doc.html",
      item: { path: "docs/other/docs.md" },
      pool: [
        {
          contentType: "doc",
          path: "docs/some/doc.md",
          href: expected
        }
      ]
    }
  );

  expect(actual).toBe(expected);
});
