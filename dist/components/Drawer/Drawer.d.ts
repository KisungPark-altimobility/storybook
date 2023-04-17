import React from "react";
interface Props {
    show: boolean;
    onDismiss?: () => void;
}
declare const Drawer: React.ComponentType<React.PropsWithChildren<Props>>;
export default Drawer;
