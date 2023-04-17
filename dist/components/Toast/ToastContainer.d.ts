import React from "react";
import type { IToast } from "./ToastsProvider";
interface ToastContainerProps extends IToast {
    height: number;
    heights?: number[];
    hovering: boolean;
    onMount?: () => void;
    position?: number;
    preserve?: boolean;
    remove?: () => void;
    text: string;
    id: string;
}
declare const ToastContainer: React.ComponentType<ToastContainerProps>;
export default ToastContainer;
