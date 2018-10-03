import * as Test from "./test";
import { cascadeResolve } from "./cascade-resolve";

jest.mock("resolve-from", () => Test.mockResolveFrom);

beforeEach(() => {
  Test.mockResolveFrom.clear();
});

test("should throw for missing relative file", () => {
  expect(() =>
    cascadeResolve("./thing", { bases: ["/"], cwd: "/" })
  ).toThrowError(/Relatively required file ".\/thing"/);
});

test("should resolve relative file", () => {
  Test.mockResolveFrom.set({
    fromDir: '/',
    moduleId: './thing',
    result: '/thing.js'
  });

  expect(cascadeResolve("./thing", { bases: ["/"], cwd: "/" })).toBe("/thing.js");
});

test("should throw for missing absolute file", () => {
  expect(() => {
    cascadeResolve("/thing", { bases: ["/"], cwd: "/a" })
  }).toThrowError(/Absolutely required file/);
});

test("should resolve absolute file", () => {
  Test.mockResolveFrom.set({
    fromDir: '/',
    moduleId: '/thing',
    result: '/thing.js'
  });

  expect(cascadeResolve("/thing", { bases: ["/"], cwd: "/" })).toBe("/thing.js");
});

