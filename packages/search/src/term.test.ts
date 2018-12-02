import { parse } from "./term";

test("parses 'matches' modifier as expected", () => {
  const term = parse("a*=b");

  expect(term).toEqual(expect.objectContaining({
    matches: true,
    field: "a"
  }));
});

test("parses 'matches' modifier with trailing stars", () => {
  const term = parse("a*=b/**");

  expect(term).toEqual(expect.objectContaining({
    matches: true,
    value: "b/**"
  }));
});

test("parses 'matches' modifier with leading glob stars", () => {
  const term = parse("a*=**bb");

  expect(term).toEqual(expect.objectContaining( { field: 'a',
    matches: true,
    value: '**bb',
  }));
});

