const {box} = require("./box");

test("throws for missing input", () => {
  expect(() => box()).toThrow("must be a function");
});

test("returns a function", () => {
  expect(typeof box(() => "result")).toBe("function");
});

test("returns an async function", () => {
  const fn = box(() => "result");
  expect(fn()).toHaveProperty("then")
});

test("async function returns expected box", async () => {
  const result = "result";
  const fn = box(() => result);

  expect(await fn()).toEqual(expect.objectContaining({
    error: null,
    result
  }))
});

test("await async function", async () => {
  const result = "result";
  const fn = box(async () => result);

  expect(await fn()).toEqual(expect.objectContaining({
    error: null,
    result
  }))
});

test("async function does not throw", async () => {
  const error = new Error("error");

  const fn = box(() => {
    throw error;
  });

  expect(await fn()).toEqual(expect.objectContaining({
    error,
    result: null
  }))
});
