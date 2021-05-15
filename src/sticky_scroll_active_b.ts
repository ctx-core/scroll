import { assign, clone, _b } from '@ctx-core/object'
import { writable, get, Writable } from '@ctx-core/store'
export const sticky_scroll_active_b = _b('sticky_scroll_active', ()=>{
	const sticky_scroll_active = writable<$sticky_scroll_active_type>({})
	return assign(sticky_scroll_active, {
		add_sticky_scroll_active,
		remove_sticky_scroll_active,
		_sticky_scroll_active_key_active,
		_sticky_scroll_active_key_match,
	}) as sticky_scroll_active_type
	function add_sticky_scroll_active(key:string) {
		sticky_scroll_active.update(
			__=>{
				const active__Sticky__Scroll = clone(__)
				active__Sticky__Scroll[key] = true
				return active__Sticky__Scroll
			})
	}
	function remove_sticky_scroll_active(key:string) {
		sticky_scroll_active.update(
			__=>{
				const active__Sticky__Scroll = clone(__)
				active__Sticky__Scroll[key] = false
				return active__Sticky__Scroll
			})
	}
	function _sticky_scroll_active_key_active(key:string) {
		const $sticky_scroll_active = get(sticky_scroll_active)
		const active =
			$sticky_scroll_active
			? $sticky_scroll_active[key]
			: false
		return active
	}
	function _sticky_scroll_active_key_match(key:string, active:boolean) {
		return !!(active) == !!(_sticky_scroll_active_key_active(key))
	}
})
export interface $sticky_scroll_active_type extends Record<string, boolean> {}
export interface sticky_scroll_active_type extends Writable<$sticky_scroll_active_type> {
	add_sticky_scroll_active:(key:string)=>void
	remove_sticky_scroll_active:(key:string)=>void
	_sticky_scroll_active_key_active:(key:string)=>void
	_sticky_scroll_active_key_match:(key:string, active:any)=>void
}
export {
	sticky_scroll_active_b as b__active__Sticky__Scroll,
}
