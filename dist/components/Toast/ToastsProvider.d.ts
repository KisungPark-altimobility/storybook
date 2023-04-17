import React from "react";
type ToastType = "success" | "error" | "violet";
export interface IToast {
    height: number;
    key: string;
    preserve?: boolean;
    text: string;
    type?: ToastType;
    action?: string;
    cancelAction?: string;
}
export interface IToastsContext {
    current?: {
        messages: IToast[];
        message: (message: Partial<IToast> | string) => void;
        error: (message: Partial<IToast> | string) => void;
        success: (message: Partial<IToast> | string) => void;
        removeToastByKey: (key: string) => void;
    };
}
export declare const ToastsContext: React.Context<IToastsContext>;
declare const ToastsProvider: ({ children }: {
    children: any;
}) => JSX.Element;
export default ToastsProvider;
