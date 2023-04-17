import React from "react";
type BaseProps = Omit<React.DetailedHTMLProps<React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>, "size" | "prefix" | "suffix">;
interface Props extends BaseProps {
    size?: "small" | "large";
    disabled?: boolean;
    placeholder?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    label?: string;
}
declare const Select: React.FC<Props>;
export default Select;
