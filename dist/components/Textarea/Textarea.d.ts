import React from "react";
interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
    disabled?: boolean;
    errored?: boolean;
}
declare const Textarea: React.ForwardRefExoticComponent<Props & React.RefAttributes<HTMLTextAreaElement>>;
export default Textarea;
