import type { MutableRefObject } from "react";
/**
 * For now, this hook will trigger once, setting
 * `isIntersecting` to `true` and disconnect.
 */
export default function useIntersectionObserver(options?: IntersectionObserverInit): [boolean, {
    ref: MutableRefObject<undefined>;
}];
