import React from "react";
export interface ShowMoreProps {
    expanded?: boolean;
    onClick?: () => void;
}
declare const ShowMore: React.ComponentType<ShowMoreProps>;
export default ShowMore;
