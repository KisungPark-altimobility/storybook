import React from "react";
export declare const CollapseGroup: ({ children }: {
    children: any;
}) => JSX.Element;
interface Props {
    title?: string | React.ReactNode;
    subtitle?: string | React.ReactNode;
    defaultExpanded?: boolean;
    size?: "small";
    card?: boolean;
}
declare const Collapse: React.ComponentType<React.PropsWithChildren<Props>>;
export default Collapse;
