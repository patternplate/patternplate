import { loadDoc } from "./load-doc";
import * as Fs from "fs";
import * as uuid from "uuid";

jest.mock("fs", (): Partial<typeof Fs> => {
  const MemFs = require("memfs");
  MemFs.fs.set = (data: any) => {
    MemFs.vol.reset();
    MemFs.vol.fromJSON(data)
  };
  return MemFs.fs;
});

const MockFs = Fs as typeof Fs & { set(data: any): void };

test("returns null values for empty dir", async () => {
  MockFs.set({});
  const result = await loadDoc({ cwd: "/" });

  expect(result).toEqual({
    filepath: null,
    contents: null
  });
});

test("reads content from README.md", async () => {
  const README = uuid.v4()

  MockFs.set({ "/README.md": README });

  const result = await loadDoc({ cwd: "/" });

  expect(result).toEqual({
    filepath: "/README.md",
    contents: README
  });
});

test("reads content from readme.md", async () => {
  const readme = uuid.v4()

  MockFs.set({ "/readme.md": readme });

  const result = await loadDoc({ cwd: "/" });

  expect(result).toEqual({
    filepath: "/readme.md",
    contents: readme
  });
});

test("reads content from index.md", async () => {
  const index = uuid.v4()

  MockFs.set({ "/index.md": index });

  const result = await loadDoc({ cwd: "/" });

  expect(result).toEqual({
    filepath: "/index.md",
    contents: index
  });
});

test("README.md > readme.md", async () => {
  const README = uuid.v4();
  const readme = uuid.v4();
  const index = uuid.v4();

  MockFs.set({
    "/README.md": README,
    "/readme.md": readme,
    "/index.md": index
  });

  const result = await loadDoc({ cwd: "/" });

  expect(result).toEqual({
    filepath: "/README.md",
    contents: README
  });
});

test("readme.md > index.md", async () => {
  const readme = uuid.v4();
  const index = uuid.v4();

  MockFs.set({
    "/readme.md": readme,
    "/index.md": index
  });

  const result = await loadDoc({ cwd: "/" });

  expect(result).toEqual({
    filepath: "/readme.md",
    contents: readme
  });
});
