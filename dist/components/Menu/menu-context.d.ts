import React from "react";
export interface IMenuContext {
    popperRef: React.RefObject<HTMLDivElement>;
    buttonRef: React.RefObject<HTMLButtonElement>;
    listElement: HTMLUListElement | null;
    setListElement: React.Dispatch<React.SetStateAction<HTMLUListElement>>;
    menuId: string;
    buttonId: string;
    open: boolean;
    setOpen: (val: boolean) => void;
    selected: number;
    setSelected: React.Dispatch<React.SetStateAction<number>>;
    typeahead: string;
    afterSelect: () => void;
    selectFirstNonDisabled: () => void;
    handleKey: () => void;
    closeAndRestoreFocus: () => void;
}
declare const MenuContext: React.Context<IMenuContext>;
export default MenuContext;
export declare const useMenu: () => IMenuContext;
