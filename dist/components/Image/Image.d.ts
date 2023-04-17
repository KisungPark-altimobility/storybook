import React from "react";
interface ImageProps {
    alt?: string;
    src: string;
    width: number;
    height: number;
}
/**
 * used for local preview
 */
declare const Image: React.MemoExoticComponent<({ src, alt, width, height }: ImageProps) => JSX.Element>;
export default Image;
