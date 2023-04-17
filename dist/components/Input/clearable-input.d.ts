/// <reference types="react" />
import { Props as BaseProps } from "./Input";
interface Props extends Omit<BaseProps, "suffix" | "suffixStyling" | "suffixContainer"> {
}
declare const ClearableInput: import("react").ForwardRefExoticComponent<Omit<Props, "ref"> & import("react").RefAttributes<HTMLInputElement>>;
export default ClearableInput;
