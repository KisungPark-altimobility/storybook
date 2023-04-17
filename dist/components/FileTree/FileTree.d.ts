import React from "react";
import type { CSSProperties } from "react";
export declare const Tree: ({ children, style }: {
    children: any;
    style: any;
}) => JSX.Element;
interface Props {
    style?: CSSProperties;
    name: string;
}
interface FolderProps extends Props {
    open?: boolean;
    defaultOpen?: boolean;
    onToggle?: () => void;
}
export declare const Folder: React.FC<React.PropsWithChildren<FolderProps>>;
interface FileProps extends Props {
    active?: boolean;
    type?: "lambda";
}
export declare const File: React.ComponentType<FileProps>;
export {};
