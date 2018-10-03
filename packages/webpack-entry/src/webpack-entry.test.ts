import * as Path from "path";
import * as entry from "./webpack-entry";

test('should create expected async output', async () => {
  await expect(Path.basename(await entry(['a'], { cwd: 'b' }))).toBe("loader.ts?entry=a&cwd=b!")
});

test('should create expected sync output', () => {
  expect(Path.basename(entry.sync(['a'], { cwd: 'b' }))).toBe("loader.ts?entry=a&cwd=b!")
});
