import * as React from "react";
export interface LinkProps {
    className?: string;
    href: string;
    title?: string;
    grow?: boolean;
    external?: boolean;
    hint?: boolean;
    iconSize: "s" | "m" | "l";
    onClick?: React.MouseEventHandler<HTMLElement>;
    onHover?: React.MouseEventHandler<HTMLElement>;
}
export declare class RawLink extends React.Component<LinkProps> {
    render(): JSX.Element | null;
}
export declare const Link: {
    (props: any, context: any): JSX.Element;
    RawComponent: any;
    contextTypes: {
        injections: import("prop-types").Requireable<import("prop-types").InferProps<{
            target: import("prop-types").Requireable<any>;
            source: import("prop-types").Requireable<any>;
        }>[]>;
    };
};
//# sourceMappingURL=link.d.ts.map