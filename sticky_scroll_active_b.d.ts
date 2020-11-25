import { Writable } from '@ctx-core/store';
export declare const sticky_scroll_active_b: (ctx: object, opts?: import("@ctx-core/object")._be_opts_type | undefined) => sticky_scroll_active_type;
export declare type $sticky_scroll_active_type = Record<string, boolean>;
export interface active_Sticky_Scroll_interface {
    add_sticky_scroll_active: (key: string) => void;
    remove_sticky_scroll_active: (key: string) => void;
    _sticky_scroll_active_key_active: (key: string) => void;
    _sticky_scroll_active_key_match: (key: string, active: any) => void;
}
export declare type sticky_scroll_active_type = Writable<$sticky_scroll_active_type> & active_Sticky_Scroll_interface;
export { sticky_scroll_active_b as b__active__Sticky__Scroll, };
