import { Writable$ } from '@ctx-core/store';
export interface sticky_scroll_active_Ctx {
    sticky_scroll_active?: sticky_scroll_active_T;
}
export declare const sticky_scroll_active_b: import("@ctx-core/object").Be<sticky_scroll_active_Ctx, "sticky_scroll_active">;
export interface $sticky_scroll_active_T extends Record<string, boolean> {
}
export interface sticky_scroll_active_T extends Writable$<$sticky_scroll_active_T> {
    add_sticky_scroll_active: (key: string) => void;
    remove_sticky_scroll_active: (key: string) => void;
    _sticky_scroll_active_key_active: (key: string) => void;
    _sticky_scroll_active_key_match: (key: string, active: any) => void;
}
export { sticky_scroll_active_b as b__active__Sticky__Scroll, };
