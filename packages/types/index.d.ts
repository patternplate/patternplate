export type PatternManifest =
  | PatternJson
  | PackageJson;

export interface PatternJson {
  /**
   * The pattern's unique name
   * @minLength 1
   * @maxLength 214
   * @pattern ^(?:\.[a-zA-Z0-9-~][a-z0-9-._~]*\/)?[a-zA-Z0-9-~][a-zA-Z0-9-._~]*$
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
   * @pattern ^(?:\.[a-zA-Z0-9-~][a-z0-9-._~]*\/)?[a-zA-Z0-9-~][a-zA-Z0-9-._~]*$
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

export interface PatternplateUiConfig {
  logo?: string;
  favicon?: string;
  fontDefault?: string;
  fontHeadline?: string;
  fontCode?: string;
  colorActive?: string;
  colorError?: string;
  colorWarning?: string;
  colorInfo?: string;
  colorSuccess?: string;
  colorBackgroundDark?: string;
  colorBackgroundSecondaryDark?: string;
  colorBackgroundTertiaryDark?: string;
  colorBorderDark?: string;
  colorTextDark?: string;
  colorTextNegatedDark?: string;
  colorRecessDark?: string;
  colorBackgroundLight?: string;
  colorBackgroundSecondaryLight?: string;
  colorBackgroundTertiaryLight?: string;
  colorBorderLight?: string;
  colorTextLight?: string;
  colorTextNegatedLight?: string;
  colorRecessLight?: string;
}

export interface PatternplateConfig {
  docs: string[];
  entry: string[];
  mount: string;
  render: string;
  cover?: string;
  ui?: PatternplateUiConfig;
}

export interface ValidationInput<T = unknown> {
  target: T;
  name: string;
}
