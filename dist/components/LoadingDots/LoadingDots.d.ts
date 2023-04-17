import React from "react";
interface Props {
    /**
     * Pixel size of Dots;
     * - defaults to "2px"
     */
    size?: number;
}
/**
 * @usage
 * - `size`: pixel size of dots
 * ```tsx
 * <LoadingDots size={2}/>
 * ```
 */
declare const LoadingDots: React.ComponentType<React.PropsWithChildren<Props>>;
export default LoadingDots;
