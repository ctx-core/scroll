import { B, Ctx } from '@ctx-core/object'
import { WritableAtom$ } from '@ctx-core/nanostores'
export declare const sticky_scroll_active$_:B<sticky_scroll_active$_T>
export type sticky_scroll_active_T = Record<string, boolean>
export type sticky_scroll_active$_T = WritableAtom$<sticky_scroll_active_T>
export declare function add_sticky_scroll_active(ctx:Ctx, key:string):void;
export declare function remove_sticky_scroll_active(ctx:Ctx, key:string):void;
export declare function sticky_scroll_active_key_active_(ctx:Ctx, key:string):void;
export declare function sticky_scroll_active_key_match_(ctx:Ctx, key:string, active:any):void;
