import React from "react";
interface Cell<T extends any = any> extends React.FC<{
    value: any;
}> {
}
type Column = {
    Header: string;
    accessor: string | null;
    ellipsis?: boolean;
    expandable?: boolean;
    fixedWidth?: number;
    align?: "right" | "center";
    columnClassName?: string;
    /**
     * @example
     * ```tsx
     * Cell: ({ value }) => {
     *  if (!value) return ''
     *   return '$' + value
     * }
     * ```
     */
    Cell?: Cell;
};
type Data = any;
type HeaderActionParams = {
    idsChecked: string[];
    disabled: boolean;
};
type RowActionParams = {
    row: any;
    rowIdx: number;
};
interface Props {
    columns?: Column[];
    data?: Data[];
    caption?: string;
    overflow?: number;
    header?: boolean;
    sticky?: boolean;
    sortable?: boolean;
    defaultRows?: number;
    selectable?: boolean;
    fixed?: boolean;
    headerActions?: (params: HeaderActionParams) => JSX.Element;
    rowActions?: (params: RowActionParams) => JSX.Element;
    width?: React.HTMLAttributes<HTMLDivElement>["style"]["width"];
    height?: React.HTMLAttributes<HTMLDivElement>["style"]["height"];
    empty?: JSX.Element;
}
declare const Table: React.ComponentType<React.PropsWithChildren<Props>>;
export default Table;
