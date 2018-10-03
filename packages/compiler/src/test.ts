const registry = new Map();

export const mockResolveFrom = (fromDir: string, moduleId: string): string => {
  const result = registry.get([fromDir, moduleId].join('<-->'));
  if (result) {
    return result;
  }
  throw new Error(`Could not resolve ${moduleId} from ${fromDir}`);
};

mockResolveFrom.silent = (fromDir: string, moduleId: string): string | null => {
  try {
    return mockResolveFrom(fromDir, moduleId);
  } catch (err) {
    return null;
  }
};

mockResolveFrom.set = (opts: {fromDir: string, moduleId: string, result: string}) => {
  registry.set([opts.fromDir, opts.moduleId].join('<-->'), opts.result);
};

mockResolveFrom.clear = () => {
  registry.clear();
};
