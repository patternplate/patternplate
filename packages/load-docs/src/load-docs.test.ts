import * as Fs from "fs";
import * as uuid from "uuid";
import { loadDocs } from "./load-docs";

jest.mock("fs", (): Partial<typeof Fs> => {
  const MemFs = require("memfs");
  MemFs.fs.set = (data: any) => {
    MemFs.vol.reset();
    MemFs.vol.fromJSON(data);
  };
  return MemFs.fs;
});

const MockFs = Fs as typeof Fs & { set(data: any): void };

test("returns empty lists for empty dir", async () => {
  MockFs.set({});
  const result = await loadDocs({ docs: ["**/*"], cwd: "/" });
  expect(result).toEqual([]);
});

test("returns entries for matching files", async () => {
  MockFs.set({
    "/a.md": "",
    "/b.md": ""
  });

  const result = await loadDocs({ docs: ["**/*"], cwd: "/" });

  expect(result).toEqual([
    expect.objectContaining({ id: "a" }),
    expect.objectContaining({ id: "b" })
  ]);
});

test("respects cwd", async () => {
  MockFs.set({
    "/c.md": "",
    "/a/a.md": "",
    "/a/b.md": ""
  });

  const result = await loadDocs({ docs: ["**/*.md"], cwd: "/a" });

  expect(result).toEqual([
    expect.objectContaining({ id: "a" }),
    expect.objectContaining({ id: "b" })
  ]);
});

test('parses frontmatter', async () => {
  MockFs.set({
    "/a.md": `---\nname: "a-doc"\n---`
  });

  const [result] = await loadDocs({ docs: ["a.md"], cwd: "/" });

  expect(result).toEqual(expect.objectContaining({
    manifest: expect.objectContaining({
      name: "a-doc"
    })
  }));
});

test('normalizes frontmatter data', async () => {
  MockFs.set({
    "/a.md": `---\nfoo: "bar"\n---`
  });

  const [result] = await loadDocs({ docs: ["a.md"], cwd: "/" });

  expect(result).not.toEqual(expect.objectContaining({
    manifest: expect.objectContaining({
      foo: "bar"
    })
  }));
});

test('uses first first-level heading as name', async () => {
  MockFs.set({
    "/a.md": `## C Name\n # A Name\n # B Name`
  });

  const [result] = await loadDocs({ docs: ["a.md"], cwd: "/" });

  expect(result).toEqual(expect.objectContaining({
    manifest: expect.objectContaining({
      name: "a-name"
    })
  }));
});

test('frontmatter name takes precedence', async () => {
  MockFs.set({
    "/a.md": `---\nname: "frontmatter-name"\n---\n# headline-name\n`
  });

  const [result] = await loadDocs({ docs: ["a.md"], cwd: "/" });

  expect(result).toEqual(expect.objectContaining({
    manifest: expect.objectContaining({
      name: "frontmatter-name"
    })
  }));
});
