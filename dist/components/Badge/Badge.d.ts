import React from "react";
import { HTMLAttributes } from "react";
interface Props {
    className?: HTMLAttributes<HTMLSpanElement>["className"];
    type?: "success" | "error" | "warning" | "violet" | "secondary";
    variant?: "contrast";
    outline?: boolean;
    size?: "small" | "large";
}
declare const Badge: React.FC<React.PropsWithChildren<Props>>;
export default Badge;
