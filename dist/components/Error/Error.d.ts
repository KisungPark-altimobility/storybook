import React from "react";
interface ErrorProps {
    label?: string;
    size?: "small" | "large";
    style?: React.CSSProperties;
    id?: string;
}
declare const Error: React.ComponentType<React.PropsWithChildren<ErrorProps>>;
export default Error;
