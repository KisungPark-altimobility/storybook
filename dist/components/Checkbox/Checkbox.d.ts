import React from "react";
import { InputHTMLAttributes } from "react";
interface Props {
    id?: string;
    checked?: boolean;
    disabled?: boolean;
    indeterminate?: boolean;
    children?: string | JSX.Element;
    onChange?: InputHTMLAttributes<HTMLInputElement>["onChange"];
    style?: React.CSSProperties;
}
declare const Checkbox: React.ComponentType<Props>;
export default Checkbox;
