import React from "react";
declare const Status: React.FC<React.PropsWithChildren>;
declare const Actions: React.FC<React.PropsWithChildren>;
interface FooterProps {
    style?: React.CSSProperties;
    disabled?: boolean;
    highlight?: boolean;
}
interface IFooter extends React.FC<React.PropsWithChildren<FooterProps>> {
    Status: typeof Status;
    Actions: typeof Actions;
}
declare const Footer: IFooter;
interface Fs {
    Tabs: React.FC<React.PropsWithChildren<{
        tabs: string[];
    }> & React.HTMLAttributes<HTMLDivElement>>;
    Fieldset: React.FC<React.PropsWithChildren<{
        disabled?: boolean;
    }> & React.HTMLAttributes<HTMLDivElement>>;
    Content: React.FC<React.PropsWithChildren<{
        disabled?: boolean;
    }> & React.HTMLAttributes<HTMLDivElement>>;
    Title: React.FC<React.PropsWithChildren>;
    Subtitle: React.FC<React.PropsWithChildren>;
    ErrorText: React.FC<React.PropsWithChildren>;
    Footer: typeof Footer;
}
/**
 * # fs
 * @example
 * ```tsx
 * <fs.Fieldset>
 *   <fs.Content>
 *     <fs.Title>fs.Title</fs.Title>
 *     <fs.Subtitle>fs.Subtitle</fs.Subtitle>
 *   </fs.Content>
 *   <fs.Footer>
 *     <fs.Footer.Status>fs.Footer.Status</fs.Footer.Status>
 *     <fs.Footer.Actions>
 *       <button>fs.Footer.Action</button>
 *     </fs.Footer.Actions>
 *   </fs.Footer>
 * </fs.Fieldset>
 * ```
 */
declare const fs: Fs;
export default fs;
