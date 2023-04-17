import React from "react";
import { FC } from "react";
interface RadioGroupProps {
    label: string;
    name?: string;
    value: string | null;
    onChange?: (value: string | null) => void;
    required?: boolean;
    disabled?: boolean;
}
export declare const RadioGroup: FC<React.PropsWithChildren<RadioGroupProps>>;
interface RadioItemProps {
    value: string;
    label?: boolean;
    disabled?: boolean;
}
export declare const RadioItem: FC<React.PropsWithChildren<RadioItemProps>>;
export {};
