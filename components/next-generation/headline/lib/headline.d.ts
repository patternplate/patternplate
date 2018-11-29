import * as React from "react";
export interface TextProps {
    is?: string;
    className?: string;
}
declare const ORDERS: {
    0: number;
    1: number;
    2: number;
    3: number;
    4: number;
};
interface InnerHeadlineProps {
    id?: string;
    is?: string;
    className?: string;
}
export interface HeadlineProps {
    id?: string;
    is?: string;
    className?: string;
    order: keyof typeof ORDERS;
}
export declare const Headline: import("styled-components").StyledComponent<React.FunctionComponent<InnerHeadlineProps>, any, HeadlineProps & {
    theme?: any;
}, never>;
export {};
//# sourceMappingURL=headline.d.ts.map