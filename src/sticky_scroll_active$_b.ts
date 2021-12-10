import { assign, b_, B } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
const key = 'sticky_scroll_active$'
export const sticky_scroll_active$_b:B<sticky_scroll_active$_T> = b_(key, ()=>{
	const sticky_scroll_active$ = writable$<sticky_scroll_active_T>({})
	return assign(sticky_scroll_active$, {
		add_sticky_scroll_active,
		remove_sticky_scroll_active,
		sticky_scroll_active_key_active_,
		sticky_scroll_active_key_match_,
	}) as sticky_scroll_active$_T
	function add_sticky_scroll_active(key:string) {
		sticky_scroll_active$.update(
			scroll_sticky_active=>{
				scroll_sticky_active[key] = true
				return scroll_sticky_active
			})
	}
	function remove_sticky_scroll_active(key:string) {
		sticky_scroll_active$.update(
			scroll_sticky_active=>{
				scroll_sticky_active[key] = false
				return scroll_sticky_active
			})
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
export interface sticky_scroll_active$_T extends Writable$<sticky_scroll_active_T> {
	add_sticky_scroll_active:(key:string)=>void
	remove_sticky_scroll_active:(key:string)=>void
	sticky_scroll_active_key_active_:(key:string)=>void
	sticky_scroll_active_key_match_:(key:string, active:any)=>void
}
export {
	sticky_scroll_active$_b as b__active__Sticky__Scroll,
}
