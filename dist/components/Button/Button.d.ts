import type { PressEvent } from "@react-types/shared";
import React from "react";
type IntrinsicProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;
export interface Props extends Omit<IntrinsicProps, "prefix" | "type" | "onClick"> {
    size?: "small" | "large";
    prefix?: JSX.Element | string;
    suffix?: JSX.Element | string;
    align?: "start" | "grow";
    type?: "secondary" | "success" | "error" | "warning" | "alert" | "violet";
    shape?: "square" | "circle";
    variant?: "shadow" | "ghost" | "unstyled";
    loading?: boolean;
    onClick?: (e: PressEvent) => void;
    svgOnly?: boolean;
    typeName?: IntrinsicProps["type"];
}
declare const Button: React.ComponentType<Props>;
export default Button;
