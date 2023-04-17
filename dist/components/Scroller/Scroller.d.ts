import React from "react";
interface Props {
    width?: React.HTMLAttributes<HTMLDivElement>["style"]["width"];
    height?: React.HTMLAttributes<HTMLDivElement>["style"]["height"];
}
declare const Scroller: React.ComponentType<React.PropsWithChildren<Props>>;
export default Scroller;
