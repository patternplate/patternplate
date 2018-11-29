import * as Types from "@patternplate/types";
export interface Theme {
    colors: {
        active: string;
        error: string;
        warning: string;
        info: string;
        success: string;
        background: string;
        backgroundSecondary: string;
        backgroundTertiary: string;
        border: string;
        color: string;
        colorNegated: string;
        recess: string;
    };
    fonts: {
        fontWeight: number;
        fontSize: number;
        default: string;
        code: string;
        headline: string;
    };
}
export declare function getThemes(ui?: Types.PatternplateUiConfig): {
    dark: Theme;
    light: Theme;
};
//# sourceMappingURL=themes.d.ts.map