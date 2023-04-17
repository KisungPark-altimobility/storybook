/// <reference types="react" />
interface EntityThumbnailProps {
    /** defaults to `32` */
    size?: number;
    children?: React.ReactNode;
    wrap?: boolean;
}
declare const EntityThumbnail: ({ size, children }: EntityThumbnailProps) => JSX.Element;
export default EntityThumbnail;
