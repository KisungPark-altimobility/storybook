import React from "react";
interface DetailsProps {
    animate?: boolean;
    heightClosed?: number;
    heightOpened?: number;
    open?: boolean;
    summary?: React.ReactNode | string;
}
declare const Details: React.FC<React.PropsWithChildren<DetailsProps>>;
export default Details;
