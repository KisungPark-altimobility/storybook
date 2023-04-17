import React, { PointerEventHandler } from "react";
interface MenuItemInnerProps {
    children?: any;
    Component?: any;
    href?: string;
    "aria-disabled": boolean | "true" | "false";
    "aria-labelledby"?: string;
    onPointerUp: () => void;
    onPointerMove: PointerEventHandler<HTMLLIElement>;
    "data-selected"?: "";
    className: string;
}
export declare const MenuItemInner: React.ForwardRefExoticComponent<MenuItemInnerProps & React.RefAttributes<unknown>>;
interface MenuItemProps {
    disabled?: boolean;
    onClick?: () => void;
    value?: any;
    isLink?: boolean;
    type?: "error";
    error?: boolean;
    prefix?: JSX.Element;
    suffix?: JSX.Element;
}
export declare const MenuItem: React.ComponentType<React.PropsWithChildren<MenuItemProps>>;
export declare const MenuLink: ({ href, children, disabled, type, error, onClick, }: {
    href: any;
    children: any;
    disabled: any;
    type: any;
    error: any;
    onClick: any;
}) => JSX.Element;
export {};
