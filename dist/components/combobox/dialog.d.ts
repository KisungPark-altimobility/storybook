import { type FC, type PropsWithChildren } from "react";
interface DialogProps {
    active?: boolean;
    className?: string;
    onAnimationDone?: () => void;
    onClickOutside?: () => void;
    width?: string;
    height?: string;
    allowOverflow?: boolean;
    drawer?: boolean;
    overlayClassname?: string;
    drawerClassname?: string;
    verticalScroll?: boolean;
    style?: React.CSSProperties;
    enableSkip?: boolean;
}
export declare const Dialog: FC<PropsWithChildren<DialogProps>>;
export {};
