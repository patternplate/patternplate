export interface ValidationInput<T = unknown> {
  target: T;
  name: string;
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
