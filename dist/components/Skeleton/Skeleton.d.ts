import React from "react";
interface Props {
    width?: React.CSSProperties["width"];
    height?: number;
    boxHeight?: number;
    rounded?: boolean;
    squared?: boolean;
    style?: any;
    className?: string;
    autoSize?: boolean;
    vcenter?: boolean;
    show?: boolean;
}
declare const Skeleton: React.FC<React.PropsWithChildren<Props>>;
export default Skeleton;
