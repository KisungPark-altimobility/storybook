import React from "react";
interface Props extends React.DetailedHTMLProps<React.LabelHTMLAttributes<HTMLLabelElement>, HTMLLabelElement> {
    label?: React.ReactNode;
    capitalize?: boolean;
    withInput?: boolean;
}
declare const Label: React.ComponentType<Props>;
export default Label;
