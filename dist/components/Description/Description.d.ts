/// <reference types="react" />
interface Props {
    title: string;
    content: string;
    tooltip?: string;
}
/**
 * <Description
 *   title="Section Title"
 *   content="Data about this section."
 *   tooltip="Additional context about what this section refers to."
 * />
 */
declare const Description: ({ title, content, tooltip }: Props) => JSX.Element;
export default Description;
