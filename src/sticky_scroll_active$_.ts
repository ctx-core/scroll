import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
import { b_, Ctx } from '@ctx-core/object'
export const sticky_scroll_active$_ = b_<sticky_scroll_active$_T>('sticky_scroll_active$', ()=>
	atom$<sticky_scroll_active_T>({}))
export function add_sticky_scroll_active(ctx:Ctx, key:string) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	sticky_scroll_active[key] = true
	sticky_scroll_active$.$ = sticky_scroll_active
}
export function remove_sticky_scroll_active(ctx:Ctx, key:string) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	sticky_scroll_active[key] = false
	sticky_scroll_active$.$ = sticky_scroll_active
}
export function sticky_scroll_active_key_active_(ctx:Ctx, key:string) {
	const sticky_scroll_active$ = sticky_scroll_active$_(ctx)
	const sticky_scroll_active = sticky_scroll_active$.$
	return sticky_scroll_active ? sticky_scroll_active[key] : false
}
export function sticky_scroll_active_key_match_(ctx:Ctx, key:string, active:boolean) {
	return !!(active) == !!(sticky_scroll_active_key_active_(ctx, key))
}
export type sticky_scroll_active_T = Record<string, boolean>
export type sticky_scroll_active$_T = WritableAtom$<sticky_scroll_active_T>
