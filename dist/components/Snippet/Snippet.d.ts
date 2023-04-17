import React from "react";
interface Props {
    prompt?: boolean;
    text: string | string[];
    width?: React.CSSProperties["width"];
    display?: string;
    type?: "success" | "error" | "warning" | "secondary" | "lite";
    fill?: boolean;
}
declare const Snippet: React.ComponentType<Props>;
export default Snippet;
