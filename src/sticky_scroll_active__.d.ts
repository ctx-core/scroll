import { WritableAtom_ } from '@ctx-core/nanostores'
import { B, Ctx } from '@ctx-core/object'
export declare const sticky_scroll_active__:B<sticky_scroll_active__T>
export type sticky_scroll_active_T = Record<string, boolean>
export type sticky_scroll_active__T = WritableAtom_<sticky_scroll_active_T>
export declare function add_sticky_scroll_active(ctx:Ctx, key:string):void;
export declare function remove_sticky_scroll_active(ctx:Ctx, key:string):void;
export declare function sticky_scroll_active_key_active_(ctx:Ctx, key:string):boolean;
export declare function sticky_scroll_active_key_match_(ctx:Ctx, key:string, active:any):boolean;
export { sticky_scroll_active__ as sticky_scroll_active$_ }
