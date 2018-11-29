import * as React from "react";
import * as Icons from "./icons";
declare const SIZES: {
    s: string;
    m: string;
    l: string;
    text: string;
};
export interface IconProps {
    className?: string;
    symbol: keyof typeof Icons.icons;
    size?: keyof typeof SIZES;
    title?: string;
    inline?: boolean;
}
export * from './symbol';
export declare const Icon: React.SFC<IconProps>;
export declare const symbols: string[];
//# sourceMappingURL=icon.d.ts.map