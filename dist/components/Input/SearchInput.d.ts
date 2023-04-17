import React from "react";
import { Props as BaseProps } from "./Input";
interface Props extends Omit<BaseProps, "prefix" | "prefixStyling" | "prefixContainer" | "suffix" | "suffixStyling" | "suffixContainer"> {
    loading?: boolean;
}
declare const SearchInput: React.ForwardRefExoticComponent<Omit<Props, "ref"> & React.RefAttributes<HTMLInputElement>>;
export default SearchInput;
