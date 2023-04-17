/// <reference types="react" />
interface EntityFieldProps {
    children?: React.ReactNode;
    description?: React.ReactNode;
    label?: boolean;
    right?: boolean;
    active?: boolean;
    thumbnail?: React.ReactNode;
    thumbnailSize?: number;
    thumbnailWrapOnMobile?: boolean;
    title?: React.ReactNode;
    width?: React.CSSProperties["width"];
    isFirstItem?: boolean;
    isLastItem?: boolean;
    actions?: React.ReactNode;
    avatar?: React.ReactNode;
    menuItems?: React.ReactNode;
    checkbox?: React.ReactNode;
    checkboxSize?: number;
    titleSkeletonWidth?: string;
    descriptionSkeletonWidth?: string;
}
declare const EntityField: ({ thumbnail, thumbnailSize, thumbnailWrapOnMobile, actions, active, description, label, right, title, width, isLastItem, isFirstItem, avatar, menuItems, checkbox, titleSkeletonWidth, descriptionSkeletonWidth, }: EntityFieldProps) => JSX.Element;
export default EntityField;
