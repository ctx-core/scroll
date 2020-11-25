import { writable, get, Writable } from '@ctx-core/store'
import { assign, clone, _b } from '@ctx-core/object'
export const b__active__Sticky__Scroll = _b<type__active__Sticky__Scroll>('__active__Sticky__Scroll', ()=>{
	const __active__Sticky__Scroll = writable({}) as type__active__Sticky__Scroll
	return assign(__active__Sticky__Scroll, {
		add__active__Sticky__Scroll,
		remove__active__Sticky__Scroll,
		_active__active__Sticky__Scroll,
		_match__active__Sticky__Scroll,
	})
	function add__active__Sticky__Scroll(key) {
		__active__Sticky__Scroll.update(
			__=>{
				const active__Sticky__Scroll = clone(__)
				active__Sticky__Scroll[key] = true
				return active__Sticky__Scroll
			})
	}
	function remove__active__Sticky__Scroll(key) {
		__active__Sticky__Scroll.update(
			__=>{
				const active__Sticky__Scroll = clone(__)
				active__Sticky__Scroll[key] = false
				return active__Sticky__Scroll
			})
	}
	function _active__active__Sticky__Scroll(key) {
		const active__Sticky__Scroll = get(__active__Sticky__Scroll) as $type__active__Sticky__Scroll
		const active =
			active__Sticky__Scroll
			? active__Sticky__Scroll[key]
			: false
		return active
	}
	function _match__active__Sticky__Scroll(key, active) {
		return !!(active) == !!(_active__active__Sticky__Scroll(key))
	}
})
export const __active__Sticky__Scroll = b__active__Sticky__Scroll()
export const {
	add__active__Sticky__Scroll,
	remove__active__Sticky__Scroll,
	_active__active__Sticky__Scroll,
	_match__active__Sticky__Scroll,
} = __active__Sticky__Scroll
export type $type__active__Sticky__Scroll = Record<string, boolean>
export interface active_Sticky_Scroll_interface {
	add__active__Sticky__Scroll:(key:string)=>void
	remove__active__Sticky__Scroll:(key:string)=>void
	_active__active__Sticky__Scroll:(key:string)=>void
	_match__active__Sticky__Scroll:(key:string, active:any)=>void
}
export type type__active__Sticky__Scroll =
	Writable<$type__active__Sticky__Scroll>
	&active_Sticky_Scroll_interface
