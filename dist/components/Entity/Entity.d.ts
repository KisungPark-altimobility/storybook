/// <reference types="react" />
interface Props {
    placeholder?: boolean;
    thumbnail?: React.ReactElement;
    checkbox?: React.ReactElement;
    actions?: React.ReactElement;
    menuItems?: React.ReactElement;
    footer?: React.ReactElement;
}
declare const Entity: React.FC<React.PropsWithChildren<Props>>;
export default Entity;
