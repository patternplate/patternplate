const { validate } = require("..");
const TJS = require("typescript-json-schema");

jest.mock("typescript-json-schema");

test("should fail as expected with built json schema", () => {
  const [, valid] = validate({
    name: "test",
    target: {}
  });

  expect(valid).toBe(false);
});

test("should not call TJS", () => {
  expect(TJS.generateSchema).not.toHaveBeenCalled();
});

test("should succeed as expected with built json schema", () => {
  const [err, valid] = validate({
    name: "test",
    target: {
      name: "A",
      version: "1.0.0"
    }
  });

  expect(err).toBeNull();
  expect(valid).toBe(true);
});
