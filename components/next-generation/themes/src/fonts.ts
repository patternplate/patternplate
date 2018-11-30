const EMOJI = [
  "\"Apple Color Emoji\"",
  "\"Segoe UI Emoji\"",
  "\"Segoe UI Symbol\""
];

const SYSTEM_FONTS = [
  "-apple-system",
  "BlinkMacSystemFont",
  "\"Segoe UI\"",
  "Helvetica",
  "Arial",
  "sans-serif",
  ...EMOJI
];

const CODE_FONTS = [
  "SFMono-Regular",
  "Consolas",
  "Liberation Mono",
  "Menlo",
  "Courier",
  "monospace",
  ...EMOJI
];

export function fonts(): { default: string; code: string; } {
  return {
    default: SYSTEM_FONTS.join(", "),
    code: CODE_FONTS.join(", ")
  };
}
