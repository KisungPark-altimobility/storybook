import React from "react";
/**
 *
 * @example
 * <MenuWrapper>
 *   <MenuButton>Actions</MenuButton>
 *   <Menu width={200}>
 *     <MenuItem onClick={() => alert('One')}>One</MenuItem>
 *     <MenuItem onClick={() => alert('Two')}>Two</MenuItem>
 *     <MenuItem onClick={() => alert('Three')}>Three</MenuItem>
 *     <MenuItem onClick={() => alert('Delete')} type="error">Delete</MenuItem>
 *   </Menu>
 * </MenuWrapper>
 */
export declare const MenuWrapper: ({ children }: {
    children: any;
}) => JSX.Element;
interface MenuProps {
    /** default: 150 */
    width?: number;
    divide?: boolean;
}
/**
 * @see {@link MenuWrapper} for code sample usage
 */
export declare const Menu: React.FC<React.PropsWithChildren<MenuProps>>;
export {};
