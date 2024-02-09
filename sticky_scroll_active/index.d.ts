import type { be_sig_triple_T } from 'ctx-core/rmemo'
import type { ctx_T } from 'ctx-core/be'
export declare const sticky_scroll_active$_:be_sig_triple_T<sticky_scroll_active_T>
export { sticky_scroll_active$_ as sticky_scroll_active__ }
export type sticky_scroll_active_T = Record<string, boolean>
export declare function add_sticky_scroll_active(ctx:ctx_T, key:string):void
export declare function remove_sticky_scroll_active(ctx:ctx_T, key:string):void
export declare function sticky_scroll_active_key_active_(ctx:ctx_T, key:string):boolean
export declare function sticky_scroll_active_key_match_(ctx:ctx_T, key:string, active:any):boolean
