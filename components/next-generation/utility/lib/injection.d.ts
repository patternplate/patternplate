import * as React from "react";
import * as PropTypes from "prop-types";
export interface InjectionProviderProps {
    injections: {
        target: React.Component;
        source: React.Component;
    };
}
export declare class InjectionProvider extends React.Component<InjectionProviderProps> {
    static childContextTypes: {
        injections: PropTypes.Requireable<PropTypes.InferProps<{
            target: PropTypes.Requireable<any>;
            source: PropTypes.Requireable<any>;
        }>[]>;
    };
    getChildContext(): {
        injections: {
            target: React.Component<{}, {}, any>;
            source: React.Component<{}, {}, any>;
        };
    };
    render(): React.ReactElement<any>;
}
export declare function inject(RawComponent: any): {
    (props: any, context: any): JSX.Element;
    RawComponent: any;
    contextTypes: {
        injections: PropTypes.Requireable<PropTypes.InferProps<{
            target: PropTypes.Requireable<any>;
            source: PropTypes.Requireable<any>;
        }>[]>;
    };
};
//# sourceMappingURL=injection.d.ts.map