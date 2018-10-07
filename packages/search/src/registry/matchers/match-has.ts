import * as T from "../../types";

export function matchHas(value: string): T.Matcher {
  return item => {
    switch (value) {
      case "dependencies":
        return (item.dependencies || []).length > 0;
      case "dependents":
        return (item.dependents || []).length > 0;
      case "description":
        return Boolean(item.manifest.description);
      case "displayName":
        return Boolean((item.rawManifest || {}).displayName);
      case "doc":
      case "docs":
        return item.contentType === "pattern" && Boolean(item.contents);
      case "flag":
        return Boolean((item.rawManifest || {}).flag);
      case "tag":
      case "tags":
        return (item.manifest.tags || []).length > 0;
      case "version":
        return Boolean((item.rawManifest || {}).version);
      default:
        return false;
    }
  };
}
