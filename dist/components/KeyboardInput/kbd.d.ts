import React from "react";
interface KBDProps {
    meta?: boolean;
    shift?: boolean;
    alt?: boolean;
    ctrl?: boolean;
    small?: boolean;
}
declare const KBD: React.FC<React.PropsWithChildren<KBDProps>>;
export default KBD;
