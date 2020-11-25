import { assign, clone, _b } from '@ctx-core/object'
import { writable, get, Writable } from '@ctx-core/store'
export const sticky_scroll_active_b = _b<sticky_scroll_active_type>('sticky_scroll_active', ()=>{
	const sticky_scroll_active = writable<$sticky_scroll_active_type>({})
	return assign(sticky_scroll_active, {
		add_sticky_scroll_active,
		remove_sticky_scroll_active,
		_sticky_scroll_active_key_active,
		_sticky_scroll_active_key_match,
	})
	function add_sticky_scroll_active(key) {
		sticky_scroll_active.update(
			__=>{
				const active__Sticky__Scroll = clone(__)
				active__Sticky__Scroll[key] = true
				return active__Sticky__Scroll
			})
	}
	function remove_sticky_scroll_active(key) {
		sticky_scroll_active.update(
			__=>{
				const active__Sticky__Scroll = clone(__)
				active__Sticky__Scroll[key] = false
				return active__Sticky__Scroll
			})
	}
	function _sticky_scroll_active_key_active(key) {
		const $sticky_scroll_active = get(sticky_scroll_active)
		const active =
			$sticky_scroll_active
			? $sticky_scroll_active[key]
			: false
		return active
	}
	function _sticky_scroll_active_key_match(key, active) {
		return !!(active) == !!(_sticky_scroll_active_key_active(key))
	}
})
export type $sticky_scroll_active_type = Record<string, boolean>
export interface active_Sticky_Scroll_interface {
	add_sticky_scroll_active:(key:string)=>void
	remove_sticky_scroll_active:(key:string)=>void
	_sticky_scroll_active_key_active:(key:string)=>void
	_sticky_scroll_active_key_match:(key:string, active:any)=>void
}
export type sticky_scroll_active_type =
	Writable<$sticky_scroll_active_type>
	&active_Sticky_Scroll_interface
export {
	sticky_scroll_active_b as b__active__Sticky__Scroll,
}
