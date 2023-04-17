import React, { type ReactNode } from "react";
interface Item {
    callback(): void;
    disabled?: boolean;
    displayValue?: string;
    isMenu?: boolean;
    label: string;
    prefix?: ReactNode;
    value: string;
    _internalId: string;
}
interface ComboboxProps {
    value?: string | null;
    className?: string;
    noNegativeIndex?: boolean;
    onChange?: (value: string | null) => void;
    filter?: <T extends Item[]>(list: T, inputValue: string) => T;
    size?: "small" | "large";
    width?: number | string;
    errored?: boolean;
    disabled?: boolean;
    clearable?: boolean;
    placeholder?: string;
    "aria-label"?: string;
    onChangeOpen?: (open: boolean) => void;
    noTextSelection?: boolean;
    noInputPrefix?: boolean;
    onClear?: () => void;
    prefixIcon?: ReactNode;
    allowTab?: boolean;
    shouldContinue?: boolean;
    showMenuButton?: boolean;
}
interface InputProps {
    className?: string;
    onChange?: (e: any) => void;
    loading?: boolean;
    onKeyDown?: (e: any) => void;
    onBlur?: (e: any) => void;
    onFocus?: (e: any) => void;
}
interface ListProps {
    className?: string;
    emptyMessage?: string;
    ListFooterComponent?: ReactNode;
    align?: "center" | "start" | "end";
    side?: "top" | "bottom" | "left" | "right";
    alignOffset?: number;
    width?: number | string;
    avoidCollisions?: boolean;
}
interface OptionProps extends React.PropsWithChildren {
    value: string;
    prefix?: JSX.Element;
    suffix?: JSX.Element;
    className?: string;
    truncatePrefix?: boolean;
    truncateSuffix?: boolean;
    displayValue?: string;
    isMenu?: boolean;
    "data-testid"?: string;
    disabled?: boolean;
    ignoreDefaultHeight?: boolean;
}
declare const _default: React.ForwardRefExoticComponent<ComboboxProps & {
    children?: React.ReactNode;
} & React.RefAttributes<unknown>> & {
    Input: React.FC<React.PropsWithChildren<InputProps>>;
    List: React.FC<React.PropsWithChildren<ListProps>>;
    Option: React.FC<React.PropsWithChildren<OptionProps>>;
};
export default _default;
