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
}
export declare const TextField: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export {};
