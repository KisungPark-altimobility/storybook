import React from "react";
export interface ModalProps {
    isOpen: boolean;
    active: boolean;
    onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void;
    disableBackdropClick?: boolean;
    isDismissable?: boolean;
}
export interface BodyProps extends React.HTMLAttributes<HTMLDivElement> {
}
export interface HeaderProps extends React.HTMLAttributes<HTMLElement> {
}
export interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
export interface SubtitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
}
export interface ActionsProps extends React.HTMLAttributes<HTMLElement> {
}
export interface ActionProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
}
/**
 * https://vercel.com/design/modal
 * https://react-spectrum.adobe.com/react-aria/useDialog.html#example
 */
export declare const Modal: (props: any) => JSX.Element;
export declare const Body: (props: any) => JSX.Element;
export declare const Header: ({ children, ...props }: {
    [x: string]: any;
    children: any;
}) => JSX.Element;
export declare const Title: ({ children, ...props }: {
    [x: string]: any;
    children: any;
}) => JSX.Element;
export declare const Subtitle: ({ children, ...props }: {
    [x: string]: any;
    children: any;
}) => JSX.Element;
export declare const Actions: ({ children, ...props }: ActionsProps) => JSX.Element;
export declare const Action: ({ children, type, ...props }: ActionProps) => JSX.Element;
