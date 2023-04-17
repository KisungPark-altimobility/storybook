import React from "react";
type InputProps = Partial<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>>;
export interface Props extends Omit<InputProps, "size" | "prefix" | "suffix"> {
    size?: "small" | "large";
    prefix?: JSX.Element | string;
    suffix?: JSX.Element | string;
    prefixStyling?: boolean;
    /** if false, omits a wrapper span */
    prefixContainer?: boolean;
    suffixStyling?: boolean;
    /** if false, omits a wrapper span */
    suffixContainer?: boolean;
    label?: string;
    error?: boolean;
    type?: "error" | "success" | "warning";
    width?: React.CSSProperties["width"];
    typeName?: InputProps["type"];
}
declare const Input: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default Input;
