import React from "react";
interface TabsProps extends React.PropsWithChildren {
    tabs: {
        title: string;
        value: string;
        icon?: JSX.Element;
    }[];
    selected?: string;
    setSelected?: (value: string) => void;
    disabled?: boolean;
}
declare const Tabs: React.ComponentType<TabsProps>;
export default Tabs;
