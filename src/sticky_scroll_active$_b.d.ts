import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { scroll_Ctx } from './scroll_Ctx';
declare const key = "sticky_scroll_active$";
export declare const sticky_scroll_active$_b: B<scroll_Ctx, typeof key>;
export interface sticky_scroll_active_T extends Record<string, boolean> {
}
export interface sticky_scroll_active$_T extends Writable$<sticky_scroll_active_T> {
    add_sticky_scroll_active: (key: string) => void;
    remove_sticky_scroll_active: (key: string) => void;
    sticky_scroll_active_key_active_: (key: string) => void;
    sticky_scroll_active_key_match_: (key: string, active: any) => void;
}
export { sticky_scroll_active$_b as b__active__Sticky__Scroll, };
