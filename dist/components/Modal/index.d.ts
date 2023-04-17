/// <reference types="react" />
declare const _default: {
    Modal: (props: any) => JSX.Element;
    Body: (props: any) => JSX.Element;
    Header: ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }) => JSX.Element;
    Title: ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }) => JSX.Element;
    Subtitle: ({ children, ...props }: {
        [x: string]: any;
        children: any;
    }) => JSX.Element;
    Actions: ({ children, ...props }: import("./Modal").ActionsProps) => JSX.Element;
    Action: ({ children, type, ...props }: import("./Modal").ActionProps) => JSX.Element;
};
export default _default;
