import { assign, clone, _b } from '@ctx-core/object'
import { writable$, Writable$ } from '@ctx-core/store'
import type { scroll_Ctx } from './scroll_Ctx'
const key = 'sticky_scroll_active'
export const sticky_scroll_active_b = _b<scroll_Ctx, typeof key>(key, ()=>{
	const sticky_scroll_active = writable$<$sticky_scroll_active_T>({})
	return assign(sticky_scroll_active, {
		add_sticky_scroll_active,
		remove_sticky_scroll_active,
		_sticky_scroll_active_key_active,
		_sticky_scroll_active_key_match,
	}) as sticky_scroll_active_T
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
				const Scroll_Sticky_active = clone(__)
				Scroll_Sticky_active[key] = false
				return Scroll_Sticky_active
			})
	}
	function _sticky_scroll_active_key_active(key:string) {
		const $sticky_scroll_active = sticky_scroll_active.$
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
export interface $sticky_scroll_active_T extends Record<string, boolean> {}
export interface sticky_scroll_active_T extends Writable$<$sticky_scroll_active_T> {
	add_sticky_scroll_active:(key:string)=>void
	remove_sticky_scroll_active:(key:string)=>void
	_sticky_scroll_active_key_active:(key:string)=>void
	_sticky_scroll_active_key_match:(key:string, active:any)=>void
}
export {
	sticky_scroll_active_b as b__active__Sticky__Scroll,
}
