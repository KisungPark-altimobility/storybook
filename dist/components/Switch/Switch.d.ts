import React from "react";
interface SwitchProps {
    items: {
        /** @example 'Source' or <Icon /> */
        name: JSX.Element;
        /** @example 'source' */
        value: string;
        /** ignored if using `icon` */
        width?: React.CSSProperties["minWidth"];
        disabled?: boolean;
        /** Useful if using `icon` */
        ariaLabel?: string;
    }[];
    active?: string;
    onChange?: (value: string) => void;
    size?: "small" | "large";
    icon?: boolean;
}
declare const Switch: ({ items, onChange, active, size, icon }: SwitchProps) => JSX.Element;
export default Switch;
