import * as Path from "path";
import { webpackEntry, webpackEntrySync } from "./webpack-entry";

test('should create expected async output', async () => {
  await expect(Path.basename(await webpackEntry(['a'], { cwd: 'b' }))).toBe("loader.ts?entry=a&cwd=b!")
});

test('should create expected sync output', () => {
  expect(Path.basename(webpackEntrySync(['a'], { cwd: 'b' }))).toBe("loader.ts?entry=a&cwd=b!")
});

test('should pass multiple entries', () => {
  expect(Path.basename(webpackEntrySync(['a', 'b', 'c'], { cwd: 'b' }))).toBe("loader.ts?entry=a&entry=b&entry=c&cwd=b!")
});
