import React from "react";
interface Props {
    children?: React.ReactNode;
    className?: string;
    noWrap?: boolean;
    title?: string;
    style?: React.CSSProperties;
}
declare const InlineCode: ({ children, className, noWrap, title, style }: Props) => JSX.Element;
export default InlineCode;
