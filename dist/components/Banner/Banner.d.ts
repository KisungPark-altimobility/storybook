import React from "react";
interface Props {
    title: string;
    subtitle?: string;
    linkText: string;
    href: string;
    localStorageKey?: string;
}
declare const Banner: React.ComponentType<Props>;
export default Banner;
