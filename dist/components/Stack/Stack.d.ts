import type { Property } from "csstype";
import * as React from "react";
type ResponsiveProp<T extends any> = T | {
    sm?: T;
    md?: T;
    lg?: T;
};
type Direction = Property.FlexDirection;
type Align = Property.AlignItems;
type Justify = Property.JustifyContent;
export interface StackProps {
    as?: React.ElementType;
    gap?: ResponsiveProp<0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18>;
    direction?: ResponsiveProp<Direction>;
    align?: ResponsiveProp<Align>;
    justify?: ResponsiveProp<Justify>;
    flex?: string | number;
    debug?: boolean;
    className?: string;
    style?: React.CSSProperties;
}
declare const Stack: React.FC<React.PropsWithChildren<StackProps>>;
export default Stack;
