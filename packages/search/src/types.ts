import Types from "@patternplate/types";

export { Term } from "./term";

export interface Searchable {
  id: string;
  contentType: Types.ContentType;
  contents?: string;
  dependencies?: string[];
  dependents?: string[];
  path?: string;
  rawManifest: {
    name?: string;
    displayName?: string;
    flag?: string;
    version?: string;
  }
  manifest: {
    name: string;
    displayName?: string;
    description?: string;
    flag?: 'alpha' | 'beta' | 'rc' | 'stable' | 'deprecated';
    tags: string[];
  }
}

export type Matcher = (item: Searchable) => boolean;
