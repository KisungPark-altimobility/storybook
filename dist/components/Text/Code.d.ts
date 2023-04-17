import React from "react";
interface Props {
    children?: React.ReactNode;
    syntax?: string;
    lite?: boolean;
    style?: React.CSSProperties;
}
declare const Code: ({ children, syntax, lite, style }: Props) => JSX.Element;
/**
 * This is the cyan/magenta style code text.
 * @returns
 */
export declare const OldCode: ({ children, noWrap, noTicks, fontSize }: any) => JSX.Element;
export default Code;
