import * as readPkg from "read-pkg";

export const getPkg = (path: string): readPkg.Package | null => {
  try {
    return readPkg.sync(path);
  } catch (err) {
    return null;
  }
}
