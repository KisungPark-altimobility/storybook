import React from "react";
type Direction = "column" | "row";
export interface Props {
    flex?: number;
    /**
     * ignored if the `direction` prop is specified
     */
    row?: boolean;
    /**
     * [sm → md → lg]
     */
    direction?: Direction | Direction[];
    /**
     * This a multiplier, * `--geist-gap` (24px)
     */
    gap?: number;
    className?: string;
    style?: React.CSSProperties;
    /**
     * not compatible with `direction`
     */
    hcenter?: boolean;
    /**
     * not compatible with `direction`
     */
    vcenter?: boolean;
    /**
     * not compatible with `direction`
     */
    vbaseline?: boolean;
    /** specify one of: `left | center | right` */
    left?: boolean;
    /** specify one of: `left | center | right` */
    center?: boolean;
    /** specify one of: `left | center | right` */
    right?: boolean;
    noWrap?: boolean;
    /**
     * `wrapper ? "geist-wrapper" : "geist-container"`
     */
    wrapper?: boolean;
}
declare const Container: React.ComponentType<React.PropsWithChildren<Props>>;
export default Container;
