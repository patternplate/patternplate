export interface ValidationInput<T = unknown> {
  target: T;
  name: string;
}

export type PatternManifest =
  | PatternJson
  | PackageJson;

export interface PatternJson {
  /**
   * The pattern's unique name
   * @minLength 1
   * @maxLength 214
   * @pattern ^(?:\.[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$
   */
  name: string;

  /**
   * The semver version of the pattern
   * @minLength 1
   * @maxLength 214
   * @pattern ^\d+\.\d+\.\d+(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?
   */
  version?: string;

  /**
   * The name used for display of the pattern
   * @minLength 1
   * @maxLength 214
   */
  displayName?: string;

  /**
   * Short description of the pattern
   * @maxLength 512
   */
  description?: string;

  /**
   * List of querieable tags
   */
  tags?: string[];
}

export interface PackageJson {
  /**
   * The pattern's unique name
   * @minLength 1
   * @maxLength 214
   * @pattern ^(?:\.[a-z0-9-~][a-z0-9-._~]*\/)?[a-z0-9-~][a-z0-9-._~]*$
   */
  name: string;

  /**
   * The semver version of the pattern
   * @minLength 1
   * @maxLength 214
   * @pattern ^\d+\.\d+\.\d+(?:-[\da-z\-]+(?:\.[\da-z\-]+)*)?(?:\+[\da-z\-]+(?:\.[\da-z\-]+)*)?
   */
  version?: string;

  /**
   * The name used for display of the pattern
   * @minLength 1
   * @maxLength 214
   */
  displayName?: string;

  /**
   * Short description of the pattern
   * @maxLength 512
   */
  description?: string;

  /**
   * Fields specific for patternplate
   */
  patternplate: Partial<PatternJson>;
}
