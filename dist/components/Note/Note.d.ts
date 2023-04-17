import React from "react";
interface Props {
    size?: "small" | "large";
    /**
     * action={<Button size="small">Upgrade</Button>}
     */
    action?: React.ReactNode;
    type?: "secondary" | "success" | "error" | "warning";
    label?: false | string;
    small?: boolean;
    fill?: boolean;
    variant?: "contrast";
    style?: React.CSSProperties;
}
declare const Note: React.FC<React.PropsWithChildren<Props>>;
export default Note;
