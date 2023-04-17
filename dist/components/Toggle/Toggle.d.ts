/// <reference types="react" />
interface Props {
    checked?: boolean;
    onChange?: (checked: boolean) => void;
    onFocus?: () => void;
    onBlur?: () => void;
    disabled?: boolean;
    size?: "large";
    id?: string;
}
declare const Toggle: ({ checked, disabled, onChange, onFocus, onBlur, size, id, }: Props) => JSX.Element;
export default Toggle;
