import { assign, b_, B } from '@ctx-core/object'
import { atom$, WritableAtom$ } from '@ctx-core/nanostores'
const key = 'sticky_scroll_active$'
export const sticky_scroll_active$_:B<sticky_scroll_active$_T> = b_(key, ()=>{
	const sticky_scroll_active$ = atom$<sticky_scroll_active_T>({})
	return assign(sticky_scroll_active$, {
		add_sticky_scroll_active,
		remove_sticky_scroll_active,
		sticky_scroll_active_key_active_,
		sticky_scroll_active_key_match_,
	}) as sticky_scroll_active$_T
	function add_sticky_scroll_active(key:string) {
		const sticky_scroll_active = sticky_scroll_active$.$
		sticky_scroll_active[key] = true
		sticky_scroll_active$.$ = sticky_scroll_active
	}
	function remove_sticky_scroll_active(key:string) {
		const sticky_scroll_active = sticky_scroll_active$.$
		sticky_scroll_active[key] = false
		sticky_scroll_active$.$ = sticky_scroll_active
	}
	function sticky_scroll_active_key_active_(key:string) {
		const sticky_scroll_active = sticky_scroll_active$.$
		const active =
			sticky_scroll_active
			? sticky_scroll_active[key]
			: false
		return active
	}
	function sticky_scroll_active_key_match_(key:string, active:boolean) {
		return !!(active) == !!(sticky_scroll_active_key_active_(key))
	}
})
export interface sticky_scroll_active_T extends Record<string, boolean> {}
export interface sticky_scroll_active$_T extends WritableAtom$<sticky_scroll_active_T> {
	add_sticky_scroll_active:(key:string)=>void
	remove_sticky_scroll_active:(key:string)=>void
	sticky_scroll_active_key_active_:(key:string)=>void
	sticky_scroll_active_key_match_:(key:string, active:any)=>void
}
